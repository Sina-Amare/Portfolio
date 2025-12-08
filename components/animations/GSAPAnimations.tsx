"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleUp" | "stagger";
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * ScrollReveal - GSAP-powered scroll-triggered animations
 * Wraps children and animates them when they enter the viewport
 */
export function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial states based on animation type
    const animations: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      fadeUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
      },
      fadeLeft: {
        from: { opacity: 0, x: -80 },
        to: { opacity: 1, x: 0 },
      },
      fadeRight: {
        from: { opacity: 0, x: 80 },
        to: { opacity: 1, x: 0 },
      },
      scaleUp: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      stagger: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
      },
    };

    const anim = animations[animation];

    // Set initial state
    gsap.set(element, anim.from);

    // Create scroll trigger animation
    const tween = gsap.to(element, {
      ...anim.to,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax - GSAP-powered parallax scrolling effect
 */
export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.to(element, {
      y: () => -100 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

/**
 * TextReveal - Character-by-character text reveal animation
 */
export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll(".char");

    gsap.set(chars, { opacity: 0, y: 20 });

    const tween = gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out",
      delay,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.kill();
    };
  }, [delay]);

  return (
    <span ref={containerRef} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
