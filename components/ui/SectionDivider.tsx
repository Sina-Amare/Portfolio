"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gradient" | "dots" | "wave";
  className?: string;
}

/**
 * SectionDivider - Beautiful visual separators between sections
 */
export function SectionDivider({ variant = "gradient", className = "" }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={`relative h-24 w-full overflow-hidden ${className}`}>
        {/* Gradient line */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Animated dots */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`relative h-16 w-full flex items-center justify-center gap-4 ${className}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative h-24 w-full overflow-hidden ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q300,0 600,50 T1200,50"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            animate={{ d: ["M0,50 Q300,0 600,50 T1200,50", "M0,50 Q300,100 600,50 T1200,50"] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return null;
}

/**
 * GlowingBorder - Animated gradient border effect
 */
export function GlowingBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-lg opacity-50 blur-sm animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="relative bg-[#0D1117] rounded-lg">{children}</div>
    </div>
  );
}
