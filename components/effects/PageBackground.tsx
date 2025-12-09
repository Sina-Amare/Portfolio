"use client";
import { memo } from "react";

// Extended git commits - 55 nodes for full journey
const commits = [
  { msg: "init: hello world", milestone: true },
  { msg: "feat: print statements", milestone: false },
  { msg: "feat: python basics", milestone: false },
  { msg: "learn: variables & types", milestone: false },
  { msg: "feat: first script", milestone: false },
  { msg: "learn: algorithms", milestone: true },
  { msg: "feat: sorting algos", milestone: false },
  { msg: "feat: data structures", milestone: false },
  { msg: "learn: web basics", milestone: false },
  { msg: "feat: html/css", milestone: false },
  { msg: "setup: django init", milestone: true },
  { msg: "feat: first model", milestone: false },
  { msg: "feat: admin panel", milestone: false },
  { msg: "feat: templates", milestone: false },
  { msg: "feat: REST endpoints", milestone: false },
  { msg: "fix: serializers", milestone: false },
  { msg: "feat: auth system", milestone: true },
  { msg: "learn: databases", milestone: false },
  { msg: "feat: postgresql", milestone: false },
  { msg: "perf: query optimize", milestone: false },
  { msg: "feat: migrations", milestone: false },
  { msg: "feat: redis cache", milestone: true },
  { msg: "feat: celery tasks", milestone: false },
  { msg: "feat: background jobs", milestone: false },
  { msg: "setup: docker", milestone: false },
  { msg: "feat: compose stack", milestone: false },
  { msg: "learn: async python", milestone: true },
  { msg: "feat: asyncio", milestone: false },
  { msg: "feat: fastapi", milestone: false },
  { msg: "feat: websockets", milestone: false },
  { msg: "fix: race condition", milestone: false },
  { msg: "feat: jwt tokens", milestone: true },
  { msg: "test: pytest suite", milestone: false },
  { msg: "perf: n+1 queries", milestone: false },
  { msg: "feat: graphql api", milestone: false },
  { msg: "learn: kubernetes", milestone: false },
  { msg: "setup: ci/cd", milestone: true },
  { msg: "feat: github actions", milestone: false },
  { msg: "deploy: staging", milestone: false },
  { msg: "fix: memory leak", milestone: false },
  { msg: "feat: monitoring", milestone: false },
  { msg: "learn: system design", milestone: true },
  { msg: "arch: microservices", milestone: false },
  { msg: "review: code quality", milestone: false },
  { msg: "docs: api specs", milestone: false },
  { msg: "feat: rate limiting", milestone: false },
  { msg: "security: audit", milestone: true },
  { msg: "perf: load testing", milestone: false },
  { msg: "feat: oauth2", milestone: false },
  { msg: "deploy: production", milestone: false },
  { msg: "monitor: dashboards", milestone: false },
  { msg: "scale: horizontal", milestone: true },
  { msg: "feat: caching layer", milestone: false },
  { msg: "refactor: clean arch", milestone: false },
  { msg: "next: let's connect", milestone: true },
];

// Git Graph Component - CSS only, properly aligned
const GitGraph = memo(function GitGraph() {
  const nodeSpacing = 80; // pixels between nodes
  const totalHeight = commits.length * nodeSpacing + 200;

  return (
    <div
      className="hidden lg:block absolute left-6 top-0 pointer-events-none z-[1]"
      style={{ height: `${totalHeight}px` }}
    >
      {/* Main branch line - centered at x=8px */}
      <div
        className="absolute top-20 w-[1.5px]"
        style={{
          left: "8px",
          height: `${totalHeight - 120}px`,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.35) 3%, rgba(6,182,212,0.35) 97%, transparent 100%)",
          boxShadow: "0 0 8px rgba(6,182,212,0.2)",
          transform: "translateZ(0)",
        }}
      />

      {/* Commit nodes - CENTERED on the line */}
      {commits.map((commit, i) => {
        const isLast = i === commits.length - 1;
        const isMilestone = commit.milestone;
        const nodeSize = isMilestone ? 6 : 3;

        return (
          <div
            key={i}
            className="absolute flex items-center"
            style={{
              top: 80 + i * nodeSpacing,
              left: 0,
              transform: "translateZ(0)",
            }}
          >
            {/* Node - centered on line (line is at 8px, so node center = 8px) */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: `${8 - nodeSize / 2}px`,
                width: `${nodeSize}px`,
                height: `${nodeSize}px`,
              }}
            >
              <div
                className={`rounded-full ${
                  isMilestone || isLast
                    ? "bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                    : "bg-cyan-500/50"
                }`}
                style={{
                  width: `${nodeSize}px`,
                  height: `${nodeSize}px`,
                }}
              />
              {/* Pulse for last node */}
              {isLast && (
                <div
                  className="absolute rounded-full bg-cyan-400/40 animate-ping"
                  style={{ width: "8px", height: "8px" }}
                />
              )}
            </div>

            {/* Commit message */}
            <span
              className="absolute text-[9px] font-mono whitespace-nowrap"
              style={{
                left: "20px",
                color: isMilestone ? "rgba(6,182,212,0.7)" : "rgba(156,163,175,0.4)",
              }}
            >
              {commit.msg}
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
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
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
              "radial-gradient(circle, rgba(147,51,234,0.10) 0%, rgba(147,51,234,0.03) 40%, transparent 70%)",
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
              "radial-gradient(circle, rgba(236,72,153,0.06) 0%, rgba(236,72,153,0.02) 40%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "translateZ(0)",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-cyan-400/20 ${
                i % 3 === 0
                  ? "animate-float-slow"
                  : i % 3 === 1
                    ? "animate-float-medium"
                    : "animate-float-fast"
              }`}
              style={{
                width: `${3 + (i % 2)}px`,
                height: `${3 + (i % 2)}px`,
                top: `${15 + ((i * 14) % 70)}%`,
                left: `${10 + ((i * 17) % 80)}%`,
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
