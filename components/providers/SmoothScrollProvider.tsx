"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider - Optimized for performance
 * - Disabled on mobile/tablet for native smooth scroll (better performance)
 * - Only loads Lenis on desktop
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<any>(null);
  const rafRef = useRef<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop (1024px+) and not touch device
    const checkDesktop = () => {
      return window.innerWidth >= 1024 && !("ontouchstart" in window);
    };

    setIsDesktop(checkDesktop());

    // Only init Lenis on desktop
    if (!checkDesktop()) {
      // Enable native smooth scroll on mobile
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    // Dynamically import Lenis only when needed (code splitting)
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      lenisRef.current = new Lenis({
        duration: 0.8,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current.on("scroll", ScrollTrigger.update);

      // Optimized RAF loop
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };

      rafRef.current = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
