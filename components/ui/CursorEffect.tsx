"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring for cursor following
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.interactive === "true";
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Single cursor dot - clean and minimal */}
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="rounded-full"
            animate={{
              width: isHovering ? 40 : isClicking ? 8 : 14,
              height: isHovering ? 40 : isClicking ? 8 : 14,
              backgroundColor: isHovering ? "rgba(147, 51, 234, 0.2)" : "rgba(147, 51, 234, 1)",
              border: isHovering ? "2px solid rgba(147, 51, 234, 0.8)" : "none",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            style={{
              boxShadow: isHovering
                ? "0 0 20px rgba(147, 51, 234, 0.4)"
                : "0 0 15px rgba(147, 51, 234, 0.6), 0 0 30px rgba(6, 182, 212, 0.3)",
            }}
          />
        </motion.div>
      )}

      {/* Subtle ambient glow that follows cursor */}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-30"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(147,51,234,0.04) 0%, transparent 50%)",
          }}
        />
      )}
    </>
  );
};
