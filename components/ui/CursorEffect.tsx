"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
      {/* Spotlight gradient that follows cursor */}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(147,51,234,0.08) 0%, rgba(6,182,212,0.05) 30%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </>
  );
};

