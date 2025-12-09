"use client";

interface SectionDividerProps {
  variant?: "gradient" | "dots" | "wave";
  className?: string;
}

/**
 * SectionDivider - Clean, minimal visual separators
 * GPU-accelerated CSS animations
 */
export function SectionDivider({ variant = "gradient", className = "" }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={`relative h-20 w-full overflow-hidden ${className}`}>
        {/* Main gradient line */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Subtle center glow - animated */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full animate-pulse-slower"
          style={{
            background: "radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)",
            filter: "blur(20px)",
            transform: "translate(-50%, -50%) translateZ(0)",
          }}
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`relative h-12 w-full flex items-center justify-center ${className}`}>
        {/* Simple gradient line with glow */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative h-16 w-full overflow-hidden ${className}`}>
        {/* Elegant wave SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          style={{ transform: "translateZ(0)" }}
        >
          <path
            d="M0,50 Q300,30 600,50 T1200,50"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(147, 51, 234, 0.5)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="70%" stopColor="rgba(147, 51, 234, 0.5)" />
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
 * GlowingBorder - Gradient border effect
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
        className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-lg opacity-40 blur-sm"
        style={{ transform: "translateZ(0)" }}
      />
      <div className="relative bg-[#0D1117] rounded-lg">{children}</div>
    </div>
  );
}
