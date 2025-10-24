"use client";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <>
      {/* Background gradient blob */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed top-2/3 right-1/4 w-80 h-80 rounded-full bg-brand-accentSecondary/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </>
  );
}
