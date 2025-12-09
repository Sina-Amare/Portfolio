"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function EasterEgg() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const checkKonamiCode = useCallback((sequence: string[]) => {
    if (sequence.length < KONAMI_CODE.length) return false;
    const lastN = sequence.slice(-KONAMI_CODE.length);
    return lastN.every((key, i) => key === KONAMI_CODE[i]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const newSequence = [...inputSequence, e.code].slice(-15);
      setInputSequence(newSequence);

      if (checkKonamiCode(newSequence)) {
        setActivated(true);
        setInputSequence([]);
        // Auto-hide after 8 seconds
        setTimeout(() => setActivated(false), 8000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence, checkKonamiCode]);

  // Show hint after 30 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Subtle hint that appears after 30s */}
      <AnimatePresence>
        {showHint && !activated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 left-4 z-40 text-[10px] font-mono text-gray-600 cursor-pointer"
            onClick={() => setShowHint(false)}
          >
            ↑↑↓↓←→←→BA
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter egg activation */}
      <AnimatePresence>
        {activated && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setActivated(false)}
          >
            <motion.div
              initial={{ y: 50, rotateX: -20 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="text-center"
            >
              {/* Retro game style achievement */}
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 10px #ff79c6, 0 0 20px #ff79c6",
                    "0 0 20px #8be9fd, 0 0 40px #8be9fd",
                    "0 0 10px #50fa7b, 0 0 20px #50fa7b",
                    "0 0 10px #ff79c6, 0 0 20px #ff79c6",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-8xl font-bold mb-4"
              >
                🎮
              </motion.div>

              <motion.h2
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mb-4"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                style={{ backgroundSize: "200% 100%" }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ACHIEVEMENT UNLOCKED
              </motion.h2>

              <p className="text-xl text-cyan-400 font-mono mb-2">{">>> Secret Developer Mode"}</p>

              <p className="text-gray-400 text-sm">
                You found the Konami code! You're clearly a fellow developer.
              </p>

              <motion.div
                className="mt-6 flex justify-center gap-4 text-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span>⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️</span>
              </motion.div>

              <p className="text-gray-600 text-xs mt-6">Click anywhere to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
