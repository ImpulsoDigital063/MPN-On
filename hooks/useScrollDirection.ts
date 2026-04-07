"use client";
import { useEffect, useState } from "react";

interface ScrollState {
  direction: "up" | "down";
  pastHero: boolean;
}

const HERO_THRESHOLD = 500;

export function useScrollDirection(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: "down",
    pastHero: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY ? "down" : "up";
      const pastHero = currentY > HERO_THRESHOLD;
      setState({ direction, pastHero });
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
