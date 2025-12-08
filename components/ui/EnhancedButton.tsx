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
  // Creative aurora gradient - harmonious blend of purple/cyan/teal
  const variants = {
    primary: {
      // Aurora gradient - purple to teal blend that looks premium
      gradient: "bg-[linear-gradient(135deg,#8B5CF6_0%,#06B6D4_50%,#14B8A6_100%)]",
      shadow: "shadow-[0_0_30px_rgba(139,92,246,0.3),0_0_60px_rgba(6,182,212,0.15)]",
      hover: "hover:shadow-[0_0_40px_rgba(139,92,246,0.4),0_0_80px_rgba(6,182,212,0.25)]",
    },
    secondary: {
      gradient:
        "bg-white/5 backdrop-blur-md border border-white/15 hover:border-purple-500/50 hover:bg-white/10",
      shadow: "",
      hover: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    },
    outline: {
      gradient:
        "bg-transparent border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/5",
      shadow: "",
      hover: "hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]",
    },
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center
        px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white
        transition-all duration-500 overflow-hidden
        ${variants[variant].gradient}
        ${variants[variant].shadow}
        ${variants[variant].hover}
        ${className}
      `}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Animated gradient overlay on hover */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, transparent 50%, rgba(6,182,212,0.2) 100%)",
        }}
      />

      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
