"use client";

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
      <div className={`relative h-16 w-full flex items-center justify-center ${className}`}>
        {/* Left line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-gray-700/50" />

        {/* Terminal comment */}
        <span className="px-4 text-xs font-mono text-gray-600 whitespace-nowrap">
          {label ? `// ${label}` : "// ─────"}
        </span>

        {/* Right line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gray-700/50 to-gray-700/50" />
      </div>
    );
  }

  if (variant === "code") {
    return (
      <div className={`relative h-16 w-full flex items-center justify-center ${className}`}>
        <span className="text-xs font-mono text-gray-700">
          {"/* "}
          <span className="text-gray-600">{"─".repeat(30)}</span>
          {" */"}
        </span>
      </div>
    );
  }

  if (variant === "merge") {
    return (
      <div className={`relative h-16 w-full flex items-center justify-center ${className}`}>
        {/* Left line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/30" />

        {/* Diamond node */}
        <div className="relative w-3 h-3 mx-4">
          <div
            className="absolute inset-0 bg-cyan-500/20 rotate-45 border border-cyan-500/40"
            style={{ transform: "rotate(45deg)" }}
          />
          <div
            className="absolute inset-[3px] bg-cyan-400/60 rotate-45"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        {/* Right line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/30" />
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`relative h-12 w-full flex items-center justify-center ${className}`}>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-700/60 to-transparent" />
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
