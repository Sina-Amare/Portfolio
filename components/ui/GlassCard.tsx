import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "terminal" | "subtle";
  glow?: boolean;
}

export const GlassCard = ({ 
  children, 
  className = "", 
  variant = "default",
  glow = false,
  ...motionProps 
}: GlassCardProps) => {
  const variantStyles = {
    default: "bg-white/5 border-white/10",
    terminal: "bg-[#282a36]/80 border-cyan-500/20",
    subtle: "bg-white/[0.02] border-white/5"
  };

  const glowClass = glow 
    ? "shadow-[0_0_30px_rgba(147,51,234,0.15),0_0_60px_rgba(6,182,212,0.1)]" 
    : "";

  return (
    <motion.div
      className={`
        backdrop-blur-xl rounded-xl border
        ${variantStyles[variant]}
        ${glowClass}
        ${className}
      `}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

