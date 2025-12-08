"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider - Initializes Lenis smooth scroll and syncs with GSAP ScrollTrigger
 * Wrap this around your app content in the root layout
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with enhanced smooth scroll config
    lenisRef.current = new Lenis({
      duration: 1.5, // Slower, more noticeable smooth scroll
      easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart - more pronounced
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly slower wheel to emphasize smoothness
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisRef.current.on("scroll", ScrollTrigger.update);

    // RAF loop
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
  }, []);

  return <>{children}</>;
}
