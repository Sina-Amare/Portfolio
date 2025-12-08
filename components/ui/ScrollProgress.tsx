"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

export default function ScrollProgress({
  color = "linear-gradient(90deg, #9333EA, #06B6D4)",
  height = 3,
  showPercentage = false,
}: ScrollProgressProps) {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Progress Bar - positioned BELOW navbar */}
      <motion.div
        className="fixed top-16 md:top-20 left-0 right-0 z-50 origin-left"
        style={{
          scaleX,
          height,
          background: color,
        }}
      />

      {/* Percentage Indicator (optional) */}
      {showPercentage && (
        <motion.div
          className="fixed top-4 right-4 z-50 px-3 py-1 rounded-full bg-[#0D1117]/80 backdrop-blur-sm border border-gray-800/50 font-mono text-xs text-cyan-400"
          style={{ opacity: scrollYProgress }}
        >
          <motion.span>{Math.round(scrollYProgress.get() * 100)}%</motion.span>
        </motion.div>
      )}
    </>
  );
}
