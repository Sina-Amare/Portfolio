"use client";
import { memo } from "react";

// Extended git commits - 75 nodes for full journey (short labels to fit)
const commits = [
  { msg: "init: hello world", ms: true },
  { msg: "feat: print()", ms: false },
  { msg: "learn: variables", ms: false },
  { msg: "feat: functions", ms: false },
  { msg: "learn: loops", ms: false },
  { msg: "feat: classes", ms: true },
  { msg: "learn: OOP", ms: false },
  { msg: "feat: modules", ms: false },
  { msg: "learn: algorithms", ms: false },
  { msg: "feat: sorting", ms: false },
  { msg: "feat: recursion", ms: true },
  { msg: "learn: data structs", ms: false },
  { msg: "feat: linked list", ms: false },
  { msg: "feat: trees", ms: false },
  { msg: "learn: HTTP", ms: false },
  { msg: "feat: html/css", ms: true },
  { msg: "feat: javascript", ms: false },
  { msg: "learn: REST", ms: false },
  { msg: "setup: django", ms: false },
  { msg: "feat: models", ms: false },
  { msg: "feat: views", ms: true },
  { msg: "feat: templates", ms: false },
  { msg: "feat: forms", ms: false },
  { msg: "feat: admin", ms: false },
  { msg: "learn: ORM", ms: false },
  { msg: "feat: migrations", ms: true },
  { msg: "feat: auth", ms: false },
  { msg: "feat: sessions", ms: false },
  { msg: "learn: SQL", ms: false },
  { msg: "feat: postgres", ms: false },
  { msg: "perf: indexes", ms: true },
  { msg: "feat: redis", ms: false },
  { msg: "feat: caching", ms: false },
  { msg: "feat: celery", ms: false },
  { msg: "feat: workers", ms: false },
  { msg: "setup: docker", ms: true },
  { msg: "feat: compose", ms: false },
  { msg: "learn: async", ms: false },
  { msg: "feat: asyncio", ms: false },
  { msg: "feat: fastapi", ms: false },
  { msg: "feat: pydantic", ms: true },
  { msg: "feat: websocket", ms: false },
  { msg: "fix: race cond", ms: false },
  { msg: "feat: JWT", ms: false },
  { msg: "test: pytest", ms: false },
  { msg: "perf: n+1 fix", ms: true },
  { msg: "feat: graphql", ms: false },
  { msg: "learn: k8s", ms: false },
  { msg: "setup: helm", ms: false },
  { msg: "feat: ci/cd", ms: false },
  { msg: "feat: actions", ms: true },
  { msg: "deploy: stage", ms: false },
  { msg: "fix: mem leak", ms: false },
  { msg: "feat: logging", ms: false },
  { msg: "feat: metrics", ms: false },
  { msg: "learn: design", ms: true },
  { msg: "arch: services", ms: false },
  { msg: "review: code", ms: false },
  { msg: "docs: openapi", ms: false },
  { msg: "feat: rate limit", ms: false },
  { msg: "security: audit", ms: true },
  { msg: "perf: profiling", ms: false },
  { msg: "feat: oauth2", ms: false },
  { msg: "deploy: prod", ms: false },
  { msg: "monitor: alerts", ms: false },
  { msg: "scale: replicas", ms: true },
  { msg: "feat: caching", ms: false },
  { msg: "refactor: clean", ms: false },
  { msg: "test: e2e", ms: false },
  { msg: "docs: readme", ms: false },
  { msg: "feat: webhooks", ms: true },
  { msg: "perf: cdn", ms: false },
  { msg: "feat: search", ms: false },
  { msg: "deploy: v2.0", ms: false },
  { msg: "next: connect →", ms: true },
];

// Git Graph Component - CSS only, properly aligned
const GitGraph = memo(function GitGraph() {
  const nodeSpacing = 65; // pixels between nodes
  const topOffset = 140; // Start below navbar
  const totalHeight = commits.length * nodeSpacing + topOffset + 200;

  return (
    <div
      className="hidden lg:block fixed left-6 top-0 pointer-events-none z-[1]"
      style={{ height: "100vh" }}
    >
      <div
        className="absolute"
        style={{ top: 0, left: 0, height: `${totalHeight}px`, width: "200px" }}
      >
        {/* Main branch line - centered at x=6px */}
        <div
          className="absolute w-[1px]"
          style={{
            left: "6px",
            top: `${topOffset}px`,
            height: `${totalHeight - topOffset - 100}px`,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.3) 2%, rgba(6,182,212,0.25) 98%, transparent 100%)",
            boxShadow: "0 0 6px rgba(6,182,212,0.15)",
            transform: "translateZ(0)",
          }}
        />

        {/* Commit nodes - CENTERED on the line */}
        {commits.map((commit, i) => {
          const isLast = i === commits.length - 1;
          const isMilestone = commit.ms;
          const nodeSize = isMilestone ? 5 : 2;

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
              {/* Node - centered on line (line is at 6px) */}
              <div
                className="absolute flex items-center justify-center"
                style={{
                  left: `${6 - nodeSize / 2}px`,
                  width: `${nodeSize}px`,
                  height: `${nodeSize}px`,
                }}
              >
                <div
                  className={`rounded-full ${
                    isMilestone || isLast
                      ? "bg-cyan-400/80 shadow-[0_0_4px_rgba(6,182,212,0.5)]"
                      : "bg-cyan-500/40"
                  }`}
                  style={{
                    width: `${nodeSize}px`,
                    height: `${nodeSize}px`,
                  }}
                />
                {/* Pulse for last node */}
                {isLast && (
                  <div
                    className="absolute rounded-full bg-cyan-400/30 animate-ping"
                    style={{ width: "6px", height: "6px" }}
                  />
                )}
              </div>

              {/* Commit message - short labels */}
              <span
                className="absolute text-[8px] font-mono whitespace-nowrap"
                style={{
                  left: "16px",
                  color: isMilestone ? "rgba(6,182,212,0.5)" : "rgba(156,163,175,0.3)",
                  letterSpacing: "-0.02em",
                }}
              >
                {commit.msg}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// Aurora Background with visible motion
export const PageBackground = memo(function PageBackground() {
  return (
    <>
      {/* Fixed background container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Aurora Blob 1 - Large cyan, top-left - MORE VISIBLE */}
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
          }}
        />

        {/* Aurora Blob 2 - Large purple, center-right - MORE VISIBLE */}
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
          }}
        />

        {/* Aurora Blob 3 - Medium pink, bottom-left */}
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

        {/* Aurora Blob 4 - Center accent */}
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

        {/* Subtle grid overlay */}
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

        {/* Floating particles - MORE VISIBLE */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
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

        {/* Subtle scan line effect */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(6,182,212,0.1) 2px, rgba(6,182,212,0.1) 4px)",
            animation: "scanlines 8s linear infinite",
            transform: "translateZ(0)",
          }}
        />
      </div>

      {/* Git Graph */}
      <GitGraph />
    </>
  );
});

export default PageBackground;
