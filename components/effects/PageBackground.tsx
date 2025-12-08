"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const PageBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D1117 0%, #090c10 50%, #0D1117 100%)",
        }}
      />

      {/* Floating code particles - subtle */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-[10px] text-cyan-500/8"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.03, 0.1, 0.03],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          >
            {["</>", "{}", "=>", "[]", "//", "fn", "()"][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      {/* Subtle cyan glow - top left corner */}
      <motion.div
        className="absolute -left-[15%] -top-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple glow - bottom right */}
      <motion.div
        className="absolute right-[-10%] bottom-[20%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Cyan glow - middle */}
      <motion.div
        className="absolute left-[30%] top-[50%] w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Horizontal accent lines - very subtle */}
      {[25, 50, 75].map((top, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] left-0 right-0"
          style={{
            top: `${top}%`,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.05) 30%, rgba(6, 182, 212, 0.05) 70%, transparent 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 + i * 0.3 }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(9, 12, 16, 0.2) 60%, rgba(9, 12, 16, 0.5) 100%)",
        }}
      />
    </div>
  );
};
