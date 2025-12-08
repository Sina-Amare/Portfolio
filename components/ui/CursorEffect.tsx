"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Smooth cursor position with springs
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring config for smooth following
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.interactive === "true"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
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

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Outer ring - larger, follows with slight delay */}
      {isVisible && (
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
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
              width: isHovering ? 60 : isClicking ? 30 : 44,
              height: isHovering ? 60 : isClicking ? 30 : 44,
              opacity: isClicking ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              border: "2px solid",
              borderColor: "rgba(147, 51, 234, 0.6)",
              background: isHovering
                ? "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)"
                : "transparent",
              boxShadow: isHovering
                ? "0 0 30px rgba(147, 51, 234, 0.4), 0 0 60px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(147, 51, 234, 0.1)"
                : "0 0 15px rgba(147, 51, 234, 0.3)",
            }}
          />
        </motion.div>
      )}

      {/* Inner dot - solid, distinct, immediate follow */}
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="rounded-full"
            animate={{
              width: isHovering ? 8 : isClicking ? 16 : 12,
              height: isHovering ? 8 : isClicking ? 16 : 12,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            style={{
              background: "linear-gradient(135deg, #9333EA 0%, #06B6D4 100%)",
              boxShadow: `
                0 0 10px rgba(147, 51, 234, 0.8),
                0 0 20px rgba(6, 182, 212, 0.6),
                0 0 40px rgba(147, 51, 234, 0.4)
              `,
            }}
          />
        </motion.div>
      )}

      {/* Subtle ambient glow - much larger, very subtle */}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-30"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(147,51,234,0.03) 0%, rgba(6,182,212,0.02) 30%, transparent 60%)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </>
  );
};
