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
  const variants = {
    primary: {
      base: "bg-gradient-to-r from-[#9333EA] to-[#06B6D4] text-white",
      shadow: "shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40",
    },
    secondary: {
      base: "bg-transparent text-white",
      shadow: "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
      border:
        "border-2 border-transparent bg-gradient-to-r from-[#9333EA] to-[#06B6D4] bg-clip-padding",
    },
    outline: {
      base: "bg-transparent text-white border-2 border-cyan-400/50",
      shadow: "",
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
        y: -3,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {/* Ripple effect container */}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
