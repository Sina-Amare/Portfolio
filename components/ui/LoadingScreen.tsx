"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";

// Name split into characters for staggered animation
const nameChars = "SINA AMAREH".split("");

export const LoadingScreen = memo(function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2 second loading with smooth progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Eased progress for natural feel
        const increment = prev < 80 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 40); // ~50 updates over 2 seconds

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
        >
          {/* Ambient background glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(147,51,234,0.15) 0%, transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Staggered name reveal */}
            <div className="flex overflow-hidden">
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`text-3xl md:text-4xl font-bold tracking-wider ${
                    char === " " ? "w-3" : ""
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #a855f7, #06b6d4)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #a855f7, #06b6d4)",
                  boxShadow: "0 0 20px rgba(168,85,247,0.5)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-xs text-gray-500 font-mono tracking-widest"
            >
              BACKEND ARCHITECT
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default LoadingScreen;
