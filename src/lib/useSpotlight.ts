"use client";
import { useRef, useState, useCallback } from "react";

export interface SpotlightState {
  x: number;   // percentage 0–100 relative to container
  y: number;
  active: boolean;
}

export function useSpotlight() {
  const ref = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState<SpotlightState>({ x: 50, y: 50, active: false });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
      active: true,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setSpot(s => ({ ...s, active: false }));
  }, []);

  return { ref, spot, onMouseMove, onMouseLeave };
}
