"use client";

interface PageBackgroundProps {
  theme?: "home" | "about" | "skills" | "projects" | "contact";
}

/**
 * Lightweight CSS-only background gradient animation
 * Replaces Vanta.js 3D background to reduce bundle size from 932KB to ~636KB
 * Uses pure CSS animations - zero dependencies, zero JS overhead
 */
export default function PageBackground({ theme = "home" }: PageBackgroundProps) {
  // Theme-specific gradient colors
  const themeGradients = {
    home: "from-purple-900/20 via-blue-900/10 to-cyan-900/20",
    about: "from-cyan-900/20 via-purple-900/10 to-pink-900/20",
    skills: "from-blue-900/20 via-cyan-900/10 to-purple-900/20",
    projects: "from-pink-900/20 via-purple-900/10 to-blue-900/20",
    contact: "from-cyan-900/20 via-blue-900/10 to-purple-900/20",
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${themeGradients[theme]} animate-gradient-shift`}
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial glow effect */}
      <div
        className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent animate-pulse-subtle"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
