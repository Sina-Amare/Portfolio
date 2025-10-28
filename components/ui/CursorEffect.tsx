"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Subtle spotlight gradient that follows cursor */}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(147,51,234,0.04) 0%, rgba(6,182,212,0.03) 30%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Enhanced cursor dot - bigger, faster, more visible */}
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          animate={{
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            scale: isHovering ? 2 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
            mass: 0.3,
          }}
          style={{
            mixBlendMode: "screen",
          }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #9333EA 0%, #06B6D4 100%)",
              opacity: isHovering ? 1 : 0.8,
              boxShadow: isHovering
                ? "0 0 20px rgba(147, 51, 234, 0.7), 0 0 30px rgba(6, 182, 212, 0.5)"
                : "0 0 15px rgba(147, 51, 234, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)",
              transition: "all 0.2s ease",
            }}
          />
        </motion.div>
      )}
    </>
  );
};
