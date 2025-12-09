"use client";
import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "terminal" | "code" | "merge" | "minimal";
  label?: string;
  className?: string;
}

/**
 * SectionDivider - Terminal-style visual separators
 */
export function SectionDivider({
  variant = "terminal",
  label,
  className = "",
}: SectionDividerProps) {
  if (variant === "terminal") {
    return (
      <div
        className={`relative h-16 w-full flex items-center justify-center px-4 sm:px-8 ${className}`}
      >
        {/* Left line - full width gradient */}
        <div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.4) 100%)",
          }}
        />

        {/* Terminal comment */}
        <span className="px-4 text-xs font-mono text-cyan-500/50 whitespace-nowrap flex items-center gap-2">
          <span className="text-gray-600">{"//"}</span>
          <span>{label || "─────"}</span>
        </span>

        {/* Right line - full width gradient */}
        <div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, rgba(6,182,212,0.4) 0%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  if (variant === "merge") {
    return (
      <div
        className={`relative h-16 w-full flex items-center justify-center px-4 sm:px-8 ${className}`}
      >
        {/* Left line */}
        <div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.4) 100%)",
          }}
        />

        {/* Diamond node */}
        <div className="relative w-3 h-3 mx-4">
          <div
            className="absolute inset-0 bg-purple-500/20 border border-purple-500/40"
            style={{ transform: "rotate(45deg)" }}
          />
          <div
            className="absolute inset-[3px] bg-purple-400/60"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        {/* Right line */}
        <div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, rgba(147,51,234,0.4) 0%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  if (variant === "code") {
    return (
      <div className={`relative h-16 w-full flex items-center justify-center ${className}`}>
        <span className="text-xs font-mono text-gray-600">
          {"/* "}
          <span className="text-gray-500">{"─".repeat(20)}</span>
          {" */"}
        </span>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`relative h-12 w-full flex items-center justify-center ${className}`}>
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-gray-700/60 to-transparent" />
      </div>
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
