"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

export default function ScrollProgress({
  color = "linear-gradient(90deg, #9333EA, #06B6D4)",
  height = 3,
  showPercentage = true, // Default to true for better UX
}: ScrollProgressProps) {
  const [mounted, setMounted] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update percentage on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercentage(Math.round(latest * 100));
  });

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

      {/* Percentage Indicator - shows when scrolled */}
      {showPercentage && percentage > 5 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-[72px] md:top-[88px] right-4 z-50 px-2 py-0.5 rounded-md bg-[#0D1117]/90 backdrop-blur-sm border border-gray-800/50 font-mono text-[10px] text-cyan-400"
        >
          {percentage}%
        </motion.div>
      )}
    </>
  );
}
