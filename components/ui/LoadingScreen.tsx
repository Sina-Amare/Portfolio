"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";

// Boot sequence messages
const bootSequence = [
  { text: "Initializing developer profile", delay: 0 },
  { text: "Loading backend systems", delay: 400 },
  { text: "Connecting APIs", delay: 800 },
  { text: "Mounting components", delay: 1200 },
  { text: "Starting portfolio", delay: 1600 },
];

export const LoadingScreen = memo(function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Boot sequence animation
    bootSequence.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        // Mark as complete after a short delay
        setTimeout(() => {
          setCompletedSteps((prev) => [...prev, index]);
        }, 300);
      }, step.delay);
    });

    // Hide loader after 2.2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
        >
          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/20" />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-[90%] max-w-md"
          >
            {/* Window Chrome */}
            <div className="bg-[#161b22] rounded-t-lg border border-gray-800 border-b-0">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-[#ff605c]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd44]" />
                <div className="w-3 h-3 rounded-full bg-[#00ca4e]" />
                <span className="ml-3 text-xs text-gray-500 font-mono">portfolio.exe</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-[#0d1117] rounded-b-lg border border-gray-800 border-t-0 p-6 font-mono text-sm">
              {/* Boot Sequence */}
              <div className="space-y-2 mb-6">
                {bootSequence.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: currentStep >= index ? 1 : 0.3,
                      x: currentStep >= index ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-purple-400">{">"}</span>
                    <span className="text-gray-400">{step.text}</span>
                    <span className="text-gray-600">{".".repeat(20 - step.text.length / 2)}</span>
                    {completedSteps.includes(index) && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-400 text-xs"
                      >
                        OK
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #a855f7, #06b6d4)",
                      boxShadow: "0 0 10px rgba(168,85,247,0.4)",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>Loading...</span>
                  <span>{Math.min(progress, 100)}%</span>
                </div>
              </div>

              {/* Identity */}
              <div className="border-t border-gray-800 pt-4">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                >
                  SINA AMAREH
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-500 text-xs mt-1"
                >
                  Backend Architect
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default LoadingScreen;
