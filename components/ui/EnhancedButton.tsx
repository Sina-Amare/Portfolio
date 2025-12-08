"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
  [key: string]: any;
}

export default function EnhancedButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  ...props
}: EnhancedButtonProps) {
  // Refined, modern gradients - more subtle and sophisticated
  const variants = {
    primary: {
      // Sleek blue→teal gradient with soft glow
      base: "bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#06B6D4] text-white",
      shadow: "shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40",
    },
    secondary: {
      // Subtle glass effect with cyan accent
      base: "bg-white/5 backdrop-blur-sm text-white border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-white/10",
      shadow: "shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
    },
    outline: {
      // Clean outline with glow on hover
      base: "bg-transparent text-cyan-400 border-2 border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-400/5",
      shadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    },
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        px-8 py-4 rounded-xl text-base font-semibold
        transition-all duration-300 overflow-hidden group
        ${variants[variant].base}
        ${variants[variant].shadow}
        ${className}
      `}
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shimmer effect - more subtle */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
