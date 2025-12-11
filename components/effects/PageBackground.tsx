"use client";
import React, { memo } from "react";

// Generate a pseudo-random commit hash
const generateHash = (seed: number) => {
  const chars = "0123456789abcdef";
  let hash = "";
  for (let i = 0; i < 7; i++) {
    hash += chars[(seed * (i + 1) * 7) % 16];
  }
  return hash;
};

// Git commits - Sina's actual journey from 2020 to 2025
const commits = [
  // 2020 - Started coding
  { msg: "init: hello.cpp", ms: true },
  { msg: "feat: first loop", ms: false },
  { msg: "learn: pointers", ms: false },
  { msg: "switch: python", ms: true },
  { msg: "feat: functions", ms: false },
  { msg: "feat: classes", ms: false },
  { msg: "learn: OOP", ms: false },
  { msg: "feat: pyqt5 app", ms: true },
  { msg: "feat: sqlite db", ms: false },
  { msg: "build: desktop", ms: false },
  // 2021-2022 - Learning web
  { msg: "learn: HTML/CSS", ms: false },
  { msg: "feat: first site", ms: true },
  { msg: "learn: REST APIs", ms: false },
  { msg: "setup: django", ms: true },
  { msg: "feat: DRF", ms: false },
  { msg: "learn: postgres", ms: false },
  { msg: "learn: docker", ms: true },
  // 2023 - Bachelor's thesis
  { msg: "edu: CS degree", ms: true },
  { msg: "research: PSO", ms: false },
  { msg: "docs: thesis", ms: true },
  // 2024 - Arnikup
  { msg: "job: arnikup", ms: true },
  { msg: "feat: food API", ms: false },
  { msg: "feat: orders", ms: false },
  { msg: "setup: compose", ms: false },
  { msg: "feat: redis", ms: false },
  { msg: "ship: delivery", ms: true },
  // 2025 - Dekamond & AI
  { msg: "job: dekamond", ms: true },
  { msg: "learn: LLMs", ms: false },
  { msg: "feat: langgraph", ms: true },
  { msg: "feat: RAG pipe", ms: false },
  { msg: "int: openrouter", ms: false },
  { msg: "int: google AI", ms: false },
  { msg: "int: cloudflare", ms: false },
  { msg: "perf: -70% cost", ms: true },
  { msg: "feat: AI agents", ms: false },
  { msg: "ship: kaleri.ai", ms: true },
  // Present - Portfolio & Future
  { msg: "edu: M.Sc start", ms: true },
  { msg: "build: portfolio", ms: false },
  { msg: "feat: git graph", ms: false },
  { msg: "style: terminal", ms: false },
  // Call to action
  { msg: "next: hire.me", ms: true },
].map((c, i) => ({ ...c, hash: generateHash(i + 1) }));

// Git Graph Component - Enhanced with bolder styling and glowing milestones
const GitGraph = memo(function GitGraph() {
  const nodeSpacing = 55; // Slightly tighter for more vertical coverage
  const topOffset = 120;
  // Extended height to cover through contact section (~6000px typical page)
  const totalHeight = Math.max(commits.length * nodeSpacing + topOffset + 500, 5500);

  return (
    <div
      className="hidden lg:block absolute left-0 top-0 pointer-events-none z-[1]"
      style={{ height: `${totalHeight}px`, width: "80px" }}
    >
      {/* Main branch line - thicker with glow */}
      <div
        className="absolute"
        style={{
          left: "24px",
          top: `${topOffset}px`,
          width: "2px",
          height: `${totalHeight - topOffset - 100}px`,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.4) 2%, rgba(6,182,212,0.35) 90%, rgba(6,182,212,0.2) 98%, transparent 100%)",
          boxShadow: "0 0 10px rgba(6,182,212,0.25), 0 0 20px rgba(6,182,212,0.1)",
          transform: "translateZ(0)",
        }}
      />

      {/* Commit nodes */}
      {commits.map((commit, i) => {
        const isLast = i === commits.length - 1;
        const isMilestone = commit.ms;
        const nodeSize = isMilestone ? 12 : 6;

        return (
          <div
            key={i}
            className="absolute flex items-center"
            style={{
              top: topOffset + i * nodeSpacing,
              left: 0,
              transform: "translateZ(0)",
            }}
          >
            {/* Node centered on line */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: `${24 - nodeSize / 2}px`,
                width: `${nodeSize}px`,
                height: `${nodeSize}px`,
              }}
            >
              {/* Milestone glow ring */}
              {isMilestone && (
                <div
                  className="absolute rounded-full animate-pulse"
                  style={{
                    width: `${nodeSize + 8}px`,
                    height: `${nodeSize + 8}px`,
                    background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
                  }}
                />
              )}
              <div
                className={`rounded-full ${
                  isMilestone || isLast
                    ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8),0_0_16px_rgba(6,182,212,0.4)]"
                    : "bg-cyan-500/60"
                }`}
                style={{
                  width: `${nodeSize}px`,
                  height: `${nodeSize}px`,
                }}
              />
              {isLast && (
                <div
                  className="absolute rounded-full bg-cyan-400/40 animate-ping"
                  style={{ width: "14px", height: "14px" }}
                />
              )}
            </div>

            {/* Commit hash + message - truncated to prevent overlap */}
            <span
              className={`absolute font-mono overflow-hidden text-ellipsis ${
                isMilestone ? "font-semibold" : "font-normal"
              }`}
              style={{
                left: "40px",
                maxWidth: "120px",
                fontSize: "9px",
                color: isMilestone ? "rgba(6,182,212,0.7)" : "rgba(156,163,175,0.45)",
                letterSpacing: "-0.01em",
                textShadow: isMilestone ? "0 0 10px rgba(6,182,212,0.3)" : "none",
              }}
            >
              <span
                style={{ color: isMilestone ? "rgba(147,51,234,0.7)" : "rgba(147,51,234,0.4)" }}
              >
                {commit.hash}
              </span>{" "}
              {commit.msg}
            </span>
          </div>
        );
      })}
    </div>
  );
});

// Aurora Background with visible motion - optimized for performance
export const PageBackground = memo(function PageBackground() {
  // Detect if we should reduce effects for performance
  const [isLowPower, setIsLowPower] = React.useState(true); // Default to low power until hydrated
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    // Check device capabilities
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const deviceMemory = (navigator as { deviceMemory?: number }).deviceMemory;
    const hasLowMemory = deviceMemory !== undefined && deviceMemory < 4;
    setIsLowPower(isMobile || hasLowMemory);

    // Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // If user prefers reduced motion, render minimal background
  if (prefersReducedMotion) {
    return (
      <>
        <div className="fixed inset-0 pointer-events-none z-0 bg-[#0d1117]" />
        <GitGraph />
      </>
    );
  }

  // Reduced effects for mobile/low-power devices
  const particleCount = isLowPower ? 6 : 12;
  const blobOpacity = isLowPower ? 0.5 : 1;

  return (
    <>
      {/* Fixed background container for aurora */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Aurora Blob 1 - Always show */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full animate-aurora-1"
          style={{
            top: "-25%",
            left: "-15%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.06) 40%, transparent 65%)",
            filter: "blur(60px)",
            transform: "translateZ(0)",
            willChange: "transform",
            opacity: blobOpacity,
          }}
        />

        {/* Aurora Blob 2 - Always show */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full animate-aurora-2"
          style={{
            top: "15%",
            right: "-20%",
            background:
              "radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(147,51,234,0.05) 40%, transparent 65%)",
            filter: "blur(60px)",
            transform: "translateZ(0)",
            willChange: "transform",
            opacity: blobOpacity,
          }}
        />

        {/* Aurora Blob 3 - Desktop only */}
        {!isLowPower && (
          <div
            className="absolute w-[700px] h-[700px] rounded-full animate-aurora-3"
            style={{
              bottom: "5%",
              left: "15%",
              background:
                "radial-gradient(circle, rgba(236,72,153,0.10) 0%, rgba(236,72,153,0.03) 40%, transparent 65%)",
              filter: "blur(80px)",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          />
        )}

        {/* Aurora Blob 4 - Desktop only */}
        {!isLowPower && (
          <div
            className="absolute w-[600px] h-[600px] rounded-full animate-aurora-4"
            style={{
              top: "40%",
              left: "35%",
              background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 50%)",
              filter: "blur(50px)",
              transform: "translate(-50%, -50%) translateZ(0)",
              willChange: "transform",
            }}
          />
        )}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "translateZ(0)",
          }}
        />

        {/* Floating particles - reduced count on mobile */}
        <div className="absolute inset-0">
          {Array.from({ length: particleCount }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 2 === 0 ? "bg-cyan-400/30" : "bg-purple-400/25"
              } ${
                i % 3 === 0
                  ? "animate-float-slow"
                  : i % 3 === 1
                    ? "animate-float-medium"
                    : "animate-float-fast"
              }`}
              style={{
                width: `${3 + (i % 3)}px`,
                height: `${3 + (i % 3)}px`,
                top: `${8 + ((i * 8) % 85)}%`,
                left: `${5 + ((i * 9) % 90)}%`,
                transform: "translateZ(0)",
              }}
            />
          ))}
        </div>

        {/* Scan line effect - desktop only */}
        {!isLowPower && (
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(6,182,212,0.1) 2px, rgba(6,182,212,0.1) 4px)",
              animation: "scanlines 8s linear infinite",
              transform: "translateZ(0)",
            }}
          />
        )}
      </div>

      {/* Git Graph - scrolls with page content */}
      <GitGraph />
    </>
  );
});

export default PageBackground;
