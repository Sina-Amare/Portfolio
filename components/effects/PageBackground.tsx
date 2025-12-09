"use client";
import { memo } from "react";

// Extended git commits - 75 nodes for full journey (short labels)
const commits = [
  { msg: "init: hello world", ms: true },
  { msg: "feat: print()", ms: false },
  { msg: "learn: variables", ms: false },
  { msg: "feat: functions", ms: false },
  { msg: "learn: loops", ms: false },
  { msg: "feat: classes", ms: true },
  { msg: "learn: OOP", ms: false },
  { msg: "feat: modules", ms: false },
  { msg: "learn: algos", ms: false },
  { msg: "feat: sorting", ms: false },
  { msg: "feat: recursion", ms: true },
  { msg: "learn: structs", ms: false },
  { msg: "feat: lists", ms: false },
  { msg: "feat: trees", ms: false },
  { msg: "learn: HTTP", ms: false },
  { msg: "feat: html/css", ms: true },
  { msg: "feat: js basics", ms: false },
  { msg: "learn: REST", ms: false },
  { msg: "setup: django", ms: false },
  { msg: "feat: models", ms: false },
  { msg: "feat: views", ms: true },
  { msg: "feat: templates", ms: false },
  { msg: "feat: forms", ms: false },
  { msg: "feat: admin", ms: false },
  { msg: "learn: ORM", ms: false },
  { msg: "feat: migrate", ms: true },
  { msg: "feat: auth", ms: false },
  { msg: "feat: sessions", ms: false },
  { msg: "learn: SQL", ms: false },
  { msg: "feat: postgres", ms: false },
  { msg: "perf: indexes", ms: true },
  { msg: "feat: redis", ms: false },
  { msg: "feat: cache", ms: false },
  { msg: "feat: celery", ms: false },
  { msg: "feat: workers", ms: false },
  { msg: "setup: docker", ms: true },
  { msg: "feat: compose", ms: false },
  { msg: "learn: async", ms: false },
  { msg: "feat: asyncio", ms: false },
  { msg: "feat: fastapi", ms: false },
  { msg: "feat: pydantic", ms: true },
  { msg: "feat: ws", ms: false },
  { msg: "fix: race", ms: false },
  { msg: "feat: JWT", ms: false },
  { msg: "test: pytest", ms: false },
  { msg: "perf: n+1", ms: true },
  { msg: "feat: graphql", ms: false },
  { msg: "learn: k8s", ms: false },
  { msg: "setup: helm", ms: false },
  { msg: "feat: ci/cd", ms: false },
  { msg: "feat: actions", ms: true },
  { msg: "deploy: stage", ms: false },
  { msg: "fix: memory", ms: false },
  { msg: "feat: logs", ms: false },
  { msg: "feat: metrics", ms: false },
  { msg: "learn: design", ms: true },
  { msg: "arch: micro", ms: false },
  { msg: "review: pr", ms: false },
  { msg: "docs: openapi", ms: false },
  { msg: "feat: limits", ms: false },
  { msg: "security: scan", ms: true },
  { msg: "perf: profile", ms: false },
  { msg: "feat: oauth2", ms: false },
  { msg: "deploy: prod", ms: false },
  { msg: "monitor: alerts", ms: false },
  { msg: "scale: pods", ms: true },
  { msg: "feat: cache", ms: false },
  { msg: "refactor: arch", ms: false },
  { msg: "test: e2e", ms: false },
  { msg: "docs: readme", ms: false },
  { msg: "feat: hooks", ms: true },
  { msg: "perf: cdn", ms: false },
  { msg: "feat: search", ms: false },
  { msg: "deploy: v2", ms: false },
  { msg: "next: connect", ms: true },
];

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

            {/* Commit message - bolder and more readable */}
            <span
              className={`absolute font-mono whitespace-nowrap ${
                isMilestone ? "font-semibold" : "font-normal"
              }`}
              style={{
                left: "40px",
                fontSize: "11px",
                color: isMilestone ? "rgba(6,182,212,0.7)" : "rgba(156,163,175,0.45)",
                letterSpacing: "-0.01em",
                textShadow: isMilestone ? "0 0 10px rgba(6,182,212,0.3)" : "none",
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

// Aurora Background with visible motion
export const PageBackground = memo(function PageBackground() {
  return (
    <>
      {/* Fixed background container for aurora */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Aurora Blob 1 */}
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

        {/* Aurora Blob 2 */}
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

        {/* Aurora Blob 3 */}
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

        {/* Aurora Blob 4 */}
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

        {/* Floating particles */}
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

        {/* Scan line effect */}
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

      {/* Git Graph - scrolls with page content */}
      <GitGraph />
    </>
  );
});

export default PageBackground;
