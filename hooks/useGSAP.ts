"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook to create GSAP scroll-triggered animations
 * @param trigger - CSS selector or element for scroll trigger
 * @param animation - GSAP animation function
 * @param options - ScrollTrigger options
 */
export function useScrollTrigger(
  trigger: string | HTMLElement,
  animation: (element: HTMLElement) => gsap.core.Animation,
  options?: ScrollTrigger.Vars
) {
  const animationRef = useRef<gsap.core.Animation | null>(null);

  useEffect(() => {
    const element = typeof trigger === "string" ? document.querySelector(trigger) : trigger;

    if (!element) {
      console.warn(`Element not found for trigger: ${trigger}`);
      return;
    }

    // Create animation with ScrollTrigger
    animationRef.current = animation(element as HTMLElement);

    // Apply ScrollTrigger config
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      ...options,
    });

    // Cleanup
    return () => {
      animationRef.current?.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [trigger, animation, options]);

  return animationRef;
}

/**
 * Hook to sync Lenis with GSAP ScrollTrigger
 * Call this in the root layout after Lenis is initialized
 */
export function useLenisGSAP(lenisInstance: any) {
  useEffect(() => {
    if (!lenisInstance) return;

    // Sync Lenis scroll with ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update);

    // Update ScrollTrigger on window resize
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    // Use lagSmoothing for better performance
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenisInstance.raf(time * 1000);
      });
    };
  }, [lenisInstance]);
}
