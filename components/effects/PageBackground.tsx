"use client";
import { memo } from "react";

// Extended git commits - 40 nodes to reach Contact section
const commits = [
  "init: hello world",
  "feat: python basics",
  "feat: first script",
  "learn: algorithms",
  "feat: web basics",
  "setup: django init",
  "feat: first model",
  "feat: REST endpoints",
  "fix: serializers",
  "feat: auth system",
  "learn: databases",
  "feat: postgresql",
  "perf: query optimize",
  "feat: redis cache",
  "feat: celery tasks",
  "setup: docker",
  "feat: compose stack",
  "learn: async python",
  "feat: fastapi",
  "feat: websockets",
  "fix: race condition",
  "feat: jwt tokens",
  "test: pytest suite",
  "perf: n+1 queries",
  "feat: graphql api",
  "learn: kubernetes",
  "setup: ci/cd",
  "feat: github actions",
  "deploy: staging",
  "fix: memory leak",
  "feat: monitoring",
  "learn: system design",
  "arch: microservices",
  "review: code quality",
  "docs: api specs",
  "feat: rate limiting",
  "security: audit",
  "perf: load testing",
  "deploy: production",
  "next: let's connect →",
];

// Git Graph Component - CSS only
const GitGraph = memo(function GitGraph() {
  return (
    <div
      className="hidden lg:block absolute left-4 top-0 w-[160px] pointer-events-none z-[1]"
      style={{ height: "700vh" }}
    >
      {/* Main branch line */}
      <div
        className="absolute left-[6px] top-20 w-[2px] rounded-full"
        style={{
          height: "calc(100% - 80px)",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.5) 2%, rgba(147,51,234,0.3) 50%, rgba(6,182,212,0.5) 98%, transparent 100%)",
          boxShadow: "0 0 20px rgba(6,182,212,0.3)",
          transform: "translateZ(0)",
        }}
      />

      {/* Commit nodes */}
      {commits.map((msg, i) => {
        const isLast = i === commits.length - 1;
        const isMilestone = i % 10 === 0 || isLast;

        return (
          <div
            key={i}
            className="absolute flex items-center gap-3 group"
            style={{
              top: 80 + i * 120,
              left: 0,
              opacity: isMilestone ? 0.9 : 0.6,
              transform: "translateZ(0)",
            }}
          >
            {/* Node */}
            <div className="relative">
              <div
                className={`rounded-full border ${
                  isMilestone
                    ? "w-4 h-4 bg-cyan-500/90 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                    : "w-2.5 h-2.5 bg-purple-500/70 border-purple-400/50"
                }`}
              />
              {/* Pulse effect for last node */}
              {isLast && (
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-cyan-400/50 animate-ping" />
              )}
            </div>

            {/* Commit message */}
            <span
              className={`text-[10px] font-mono whitespace-nowrap transition-opacity ${
                isMilestone ? "text-cyan-400/80" : "text-gray-500/70"
              }`}
            >
              {msg}
            </span>
          </div>
        );
      })}
    </div>
  );
});

// Aurora Background - CSS only, GPU accelerated
export const PageBackground = memo(function PageBackground() {
  return (
    <>
      {/* Fixed background container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Aurora Blob 1 - Large cyan, top-left */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full animate-aurora-1"
          style={{
            top: "-20%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        {/* Aurora Blob 2 - Large purple, center-right */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full animate-aurora-2"
          style={{
            top: "20%",
            right: "-15%",
            background:
              "radial-gradient(circle, rgba(147,51,234,0.12) 0%, rgba(147,51,234,0.04) 40%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        {/* Aurora Blob 3 - Medium pink, bottom-left */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-aurora-3"
          style={{
            bottom: "10%",
            left: "20%",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.08) 0%, rgba(236,72,153,0.03) 40%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        {/* Aurora Blob 4 - Small cyan accent, center */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-aurora-4"
          style={{
            top: "50%",
            left: "40%",
            transform: "translate(-50%, -50%) translateZ(0)",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 60%)",
            filter: "blur(60px)",
            willChange: "transform",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            transform: "translateZ(0)",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${i % 2 === 0 ? "bg-cyan-400/30" : "bg-purple-400/25"} ${
                i % 3 === 0
                  ? "animate-float-slow"
                  : i % 3 === 1
                    ? "animate-float-medium"
                    : "animate-float-fast"
              }`}
              style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                top: `${10 + ((i * 11) % 80)}%`,
                left: `${5 + ((i * 13) % 90)}%`,
                transform: "translateZ(0)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Git Graph */}
      <GitGraph />
    </>
  );
});

export default PageBackground;
