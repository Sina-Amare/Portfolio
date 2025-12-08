"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Custom hook to initialize and manage Lenis smooth scroll
 * @param options - Lenis configuration options
 * @returns Lenis instance ref
 */
export function useLenis(options?: ConstructorParameters<typeof Lenis>[0]) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with default smooth scroll config
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      ...options,
    });

    // RAF loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}
