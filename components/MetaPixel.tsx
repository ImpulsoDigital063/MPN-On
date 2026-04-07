'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const PIXEL_ID = '1457330212732267'

// ─── Types ────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: (...args: any[]) => void
  }
}

export type VideoThreshold = 25 | 50 | 75 | 100

// ─── Deduplicação: sessionStorage + fallback em memória ──────────────────────
//
// O Set em memória (firedInMemory) previne double-fire do React Strict Mode
// (que monta/desmonta effects duas vezes em dev).
// O sessionStorage garante dedup mesmo que o componente remonte em produção.

const firedInMemory = new Set<string>()
const SESSION_KEY = 'mpn_pixel_fired'

function fireOnce(event: string): void {
  if (firedInMemory.has(event)) return

  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    const persisted: string[] = raw ? JSON.parse(raw) : []
    if (persisted.includes(event)) {
      firedInMemory.add(event)
      return
    }
    persisted.push(event)
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(persisted))
  } catch {
    // sessionStorage indisponível (modo privado restrito) — continua sem dedup persistente
  }

  firedInMemory.add(event)
  window.fbq?.('trackCustom', event)
}

// ─── Hook: tempo na página com Page Visibility API ───────────────────────────
//
// Conta apenas o tempo com a aba visível.
// Milestones: 30s, 60s, 120s — uma vez por sessão via fireOnce.

function usePageTimeTracking(): void {
  useEffect(() => {
    let accumulated = 0
    let visibleSince: number | null =
      document.visibilityState === 'visible' ? Date.now() : null

    const MILESTONES = [
      { ms: 30_000, event: 'Tempo_30s' },
      { ms: 60_000, event: 'Tempo_60s' },
      { ms: 120_000, event: 'Tempo_120s' },
    ]

    function getElapsed(): number {
      return visibleSince !== null
        ? accumulated + (Date.now() - visibleSince)
        : accumulated
    }

    function checkMilestones(): void {
      const elapsed = getElapsed()
      for (const { ms, event } of MILESTONES) {
        if (elapsed >= ms) fireOnce(event)
      }
    }

    function onVisibilityChange(): void {
      if (document.visibilityState === 'hidden') {
        if (visibleSince !== null) {
          accumulated += Date.now() - visibleSince
          visibleSince = null
        }
      } else {
        visibleSince = Date.now()
      }
    }

    const interval = setInterval(checkMilestones, 1_000)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])
}

// ─── Hook: rastreamento de vídeo HTML5 nativo ────────────────────────────────
//
// Detecta <video> já presentes e futuros (MutationObserver).
// Milestones por elemento: 25%, 50%, 75%, 100% — uma vez por elemento via WeakMap.
// Nota: o VSL atual usa YouTube iframe e não é afetado por este hook.
// Para rastreamento do YouTube, use a função exportada `trackVideo`.

const VIDEO_THRESHOLDS: VideoThreshold[] = [25, 50, 75, 100]

function useVideoTracking(): void {
  useEffect(() => {
    const attached = new WeakSet<HTMLVideoElement>()
    const milestones = new WeakMap<HTMLVideoElement, Set<VideoThreshold>>()

    function attachVideo(video: HTMLVideoElement): void {
      if (attached.has(video)) return
      attached.add(video)
      milestones.set(video, new Set())

      video.addEventListener('timeupdate', () => {
        if (video.paused || !video.duration || isNaN(video.duration)) return
        const pct = (video.currentTime / video.duration) * 100
        const fired = milestones.get(video)!

        for (const threshold of VIDEO_THRESHOLDS) {
          if (pct >= threshold && !fired.has(threshold)) {
            fired.add(threshold)
            window.fbq?.('trackCustom', `Video_${threshold}`)
          }
        }
      })
    }

    // Vídeos já no DOM
    document.querySelectorAll<HTMLVideoElement>('video').forEach(attachVideo)

    // Vídeos adicionados dinamicamente (navegação SPA, lazy render)
    const observer = new MutationObserver((mutations) => {
      for (const { addedNodes } of mutations) {
        for (const node of addedNodes) {
          if (node instanceof HTMLVideoElement) {
            attachVideo(node)
          } else if (node instanceof Element) {
            node.querySelectorAll<HTMLVideoElement>('video').forEach(attachVideo)
          }
        }
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])
}

// ─── Hook: rastreamento de cliques em CTAs ───────────────────────────────────
//
// Event delegation: escuta click e touchstart no document.
// Alvos: elementos com [data-track="cta"] ou [data-track="scroll"].
//   data-track="cta"    → fbq('trackCustom', 'Click_CTA')   — botões de checkout
//   data-track="scroll" → fbq('trackCustom', 'Scroll_CTA')  — botões de âncora
//
// Debounce de 500ms por elemento para evitar duplo disparo touch → click no mobile.

function useCTATracking(): void {
  useEffect(() => {
    const lastFired = new WeakMap<Element, number>()

    function onInteraction(e: Event): void {
      const target = (e.target as Element).closest('[data-track="cta"], [data-track="scroll"]')
      if (!target) return

      const now = Date.now()
      if (now - (lastFired.get(target) ?? 0) < 500) return
      lastFired.set(target, now)

      const trackType = (target as HTMLElement).dataset.track
      if (trackType === 'cta') window.fbq?.('trackCustom', 'Click_CTA')
      else if (trackType === 'scroll') window.fbq?.('trackCustom', 'Scroll_CTA')
    }

    document.addEventListener('click', onInteraction)
    document.addEventListener('touchstart', onInteraction, { passive: true })

    return () => {
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
  }, [])
}

// ─── Utilitário público: rastreamento manual de vídeo ────────────────────────
//
// Use para players que não são <video> nativo (ex: YouTube via YT.Player API).
// O chamador é responsável por garantir que cada milestone seja disparado uma vez.
//
// Exemplo de integração com YouTube API:
//   onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) trackVideo(100) }

export function trackVideo(percent: VideoThreshold): void {
  if (typeof window !== 'undefined') {
    window.fbq?.('trackCustom', `Video_${percent}`)
  }
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function MetaPixel() {
  usePageTimeTracking()
  useVideoTracking()
  useCTATracking()

  return (
    <>
      {/* Pixel base: configura fbq como fila e carrega fbevents.js de forma assíncrona */}
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){
          if(f.fbq)return;
          n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
        }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init','${PIXEL_ID}');
        fbq('track','PageView');
      `}</Script>

      {/* Fallback para ambientes sem JavaScript */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
