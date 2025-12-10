"use client";
import { useEffect, useState } from "react";

/**
 * Hook to detect user's reduced motion preference
 * Returns true if user prefers reduced motion (accessibility setting)
 * Use this to conditionally disable or simplify animations
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook to detect if device is low-powered (mobile, low RAM, slow CPU)
 * Uses various heuristics to determine if we should reduce effects
 */
export function useLowPowerMode(): boolean {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const checkLowPower = () => {
      // Check for mobile device
      const isMobile = window.innerWidth < 768 || "ontouchstart" in window;

      // Check for low device memory (if available)
      const deviceMemory = (navigator as { deviceMemory?: number }).deviceMemory;
      const hasLowMemory = deviceMemory !== undefined && deviceMemory < 4;

      // Check for slow connection (if available)
      const connection = (navigator as { connection?: { effectiveType?: string } }).connection;
      const hasSlowConnection =
        connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";

      // Check for hardware concurrency (CPU cores)
      const hasFewCores =
        navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;

      setIsLowPower(isMobile || hasLowMemory || hasSlowConnection || hasFewCores);
    };

    checkLowPower();
    window.addEventListener("resize", checkLowPower);
    return () => window.removeEventListener("resize", checkLowPower);
  }, []);

  return isLowPower;
}

/**
 * Simplified animation variants for reduced motion users
 */
export const reducedMotionVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } },
  },
  fadeInUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0 } },
  },
};
