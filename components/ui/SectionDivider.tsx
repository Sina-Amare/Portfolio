"use client";
import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "terminal" | "code" | "merge" | "minimal";
  label?: string;
  className?: string;
}

/**
 * SectionDivider - Creative visual separators with terminal aesthetic
 * GPU-accelerated CSS animations
 */
export function SectionDivider({
  variant = "terminal",
  label,
  className = "",
}: SectionDividerProps) {
  if (variant === "terminal") {
    return (
      <div
        className={`relative h-20 w-full flex items-center justify-center overflow-hidden ${className}`}
      >
        {/* Animated line left */}
        <motion.div
          className="flex-1 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.3) 30%, rgba(6,182,212,0.4) 100%)",
          }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Terminal comment with glow */}
        <motion.span
          className="px-6 text-xs font-mono text-cyan-400/60 whitespace-nowrap flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-gray-600">{"//"}</span>
          <span>{label || "─────"}</span>
        </motion.span>

        {/* Animated line right */}
        <motion.div
          className="flex-1 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,182,212,0.4) 0%, rgba(6,182,212,0.3) 70%, transparent 100%)",
          }}
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    );
  }

  if (variant === "merge") {
    return (
      <div
        className={`relative h-20 w-full flex items-center justify-center overflow-hidden ${className}`}
      >
        {/* Left line */}
        <motion.div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.3) 100%)",
          }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Diamond node */}
        <motion.div
          className="relative w-4 h-4 mx-6"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-purple-500/20 border border-purple-500/40" />
          <div className="absolute inset-[4px] bg-purple-400/60" />
          {/* Glow */}
          <div
            className="absolute inset-0 scale-150"
            style={{
              background: "radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>

        {/* Right line */}
        <motion.div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, rgba(147,51,234,0.3) 0%, transparent 100%)",
          }}
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    );
  }

  if (variant === "code") {
    return (
      <motion.div
        className={`relative h-16 w-full flex items-center justify-center ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono text-gray-600">
          {"/* "}
          <span className="text-gray-500">{"─".repeat(20)}</span>
          {" */"}
        </span>
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.div
        className={`relative h-12 w-full flex items-center justify-center ${className}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-gray-700/60 to-transparent" />
      </motion.div>
    );
  }

  return null;
}

/**
 * GlowingBorder - Gradient border effect wrapper
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
        className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-lg opacity-30 blur-sm"
        style={{ transform: "translateZ(0)" }}
      />
      <div className="relative bg-[#0D1117] rounded-lg">{children}</div>
    </div>
  );
}
