"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorEffect = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smoother spring config to prevent jumping
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    // Check for mobile after mounting
    setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.interactive === "true" ||
        target.closest("[data-interactive='true']");
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mounted, isMobile, cursorX, cursorY, isVisible]);

  // Don't render anything on mobile or before mounting
  if (!mounted || isMobile) return null;

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 24 : isClicking ? 8 : 12,
            height: isHovering ? 24 : isClicking ? 8 : 12,
            backgroundColor: isHovering ? "rgba(147, 51, 234, 0.2)" : "rgba(147, 51, 234, 1)",
            borderWidth: isHovering ? 1.5 : 0,
            borderColor: isHovering ? "rgba(147, 51, 234, 0.5)" : "transparent",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{
            borderStyle: "solid",
            boxShadow: isHovering
              ? "0 0 15px rgba(147, 51, 234, 0.3)"
              : "0 0 10px rgba(147, 51, 234, 0.5)",
          }}
        />
      </motion.div>
    </>
  );
};
