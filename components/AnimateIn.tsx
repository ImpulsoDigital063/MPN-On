"use client";
import { useRef, useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  from?: "bottom" | "left" | "right" | "top";
  delay?: number;
  className?: string;
  distance?: number;
  duration?: number;
}

export default function AnimateIn({
  children,
  from = "bottom",
  delay = 0,
  className = "",
  distance = 36,
  duration = 650,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delay);
          obs.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const initial: Record<string, string> = {
    bottom: `translateY(${distance}px)`,
    top: `translateY(-${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : initial[from],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1), transform ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
