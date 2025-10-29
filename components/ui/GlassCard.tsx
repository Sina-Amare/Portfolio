import { ReactNode, useRef } from "react";
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "terminal" | "subtle";
  glow?: boolean;
  interactive?: boolean;
}

export const GlassCard = ({
  children,
  className = "",
  variant = "default",
  glow = false,
  interactive = false,
  ...motionProps
}: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [2, -2]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-2, 2]);

  const gradientX = useTransform(mouseXSpring, [0, 1], [0, 100]);
  const gradientY = useTransform(mouseYSpring, [0, 1], [0, 100]);

  const variantStyles = {
    default: "bg-white/5 border-white/10",
    terminal: "bg-[#282a36]/80 border-cyan-500/20 backdrop-blur-xl",
    subtle: "bg-white/[0.02] border-white/5",
  };

  const glowClass = glow
    ? "shadow-[0_0_30px_rgba(147,51,234,0.15),0_0_60px_rgba(6,182,212,0.1)]"
    : "";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        interactive
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
          : {}
      }
      className={`
        backdrop-blur-xl rounded-xl border relative overflow-hidden
        ${variantStyles[variant]}
        ${glowClass}
        ${className}
      `}
      {...motionProps}
    >
      {/* Dynamic reflection overlay */}
      {interactive && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: useTransform(
              [gradientX, gradientY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)`
            ),
          }}
        />
      )}
      <div style={interactive ? { transform: "translateZ(20px)" } : {}}>{children}</div>
    </motion.div>
  );
};
