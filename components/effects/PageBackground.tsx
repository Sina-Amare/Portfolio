"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageBackgroundProps {
  theme: "home" | "about" | "skills" | "projects" | "contact";
  data?: any;
}

// Extended terminal commands for home page
const terminalCommands = [
  "$ init --project sina-portfolio",
  "$ git clone https://github.com/sina-amareh.git",
  "$ npm install && npm run build",
  "$ python manage.py runserver",
  "$ docker-compose up -d",
  "[OK] Services initialized successfully",
  "[READY] System online",
  "[LOADING...] Compiling modules...",
  "$ systemctl start backend-services",
  "$ tail -f /var/log/app.log",
  "$ echo 'Hello, World! 👋'",
  "[OK] All tests passed ✓",
];

// Git timeline data for about page
const gitTimeline = [
  {
    year: "2023",
    month: "Jan",
    message: "feat: started Python journey",
    color: "cyan",
    hash: "a3f4c21",
  },
  {
    year: "2023",
    month: "Apr",
    message: "feat: learned Django framework",
    color: "purple",
    hash: "b7e9d14",
  },
  {
    year: "2023",
    month: "Aug",
    message: "refactor: mastered async programming",
    color: "cyan",
    hash: "c1a5f89",
  },
  {
    year: "2024",
    month: "Feb",
    message: "feat: FastAPI expertise achieved",
    color: "purple",
    hash: "d8c2b44",
  },
  {
    year: "2024",
    month: "Jun",
    message: "merge: system architecture skills",
    color: "green",
    hash: "e9f3a72",
  },
  {
    year: "2024",
    month: "Oct",
    message: "feat: production-ready systems",
    color: "cyan",
    hash: "f4b8c33",
  },
];

// Tech relationships for skills page
const techNodes = [
  { name: "Python", x: 15, y: 20, connections: [1, 2] },
  { name: "Django", x: 30, y: 15, connections: [3] },
  { name: "FastAPI", x: 30, y: 35, connections: [3] },
  { name: "PostgreSQL", x: 50, y: 25, connections: [4] },
  { name: "Redis", x: 65, y: 20, connections: [5] },
  { name: "Docker", x: 80, y: 25, connections: [] },
];

export default function PageBackground({ theme }: PageBackgroundProps) {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    // More frequent updates for more visible animation
    const interval = setInterval(() => {
      const count = theme === "home" ? 6 : theme === "about" ? 5 : 7;
      const newVisible = Array.from({ length: Math.floor(Math.random() * count) + 3 }, () =>
        Math.floor(Math.random() * 12)
      );
      setVisibleElements(newVisible);
    }, 2000); // Faster refresh

    return () => clearInterval(interval);
  }, [theme]);

  if (theme === "home") {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating terminal commands - Enhanced visibility */}
        {terminalCommands.map((cmd, i) => (
          <AnimatePresence key={i} mode="wait">
            {visibleElements.includes(i) && (
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 0.14, y: -100, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute font-mono text-sm text-gray-400 whitespace-nowrap"
                style={{
                  left: `${10 + ((i * 7) % 80)}%`,
                  top: `${100}%`,
                  transform: `rotate(${Math.sin(i) * 3}deg)`,
                }}
              >
                {cmd}
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* Multiple blinking cursors - Enhanced visibility */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`cursor-${i}`}
            className="absolute font-mono text-lg text-cyan-400"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 25}%`,
            }}
            animate={{
              opacity: [0.14, 0.2, 0.14],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            █
          </motion.div>
        ))}

        {/* Status indicators */}
        {["[OK]", "[READY]", "[LOADING...]"].map((status, i) => (
          <motion.div
            key={status}
            className="absolute font-mono text-xs"
            style={{
              right: `${15 + i * 15}%`,
              top: `${30 + i * 20}%`,
              color: status === "[OK]" ? "#50fa7b" : status === "[READY]" ? "#06B6D4" : "#9333EA",
            }}
            animate={{
              opacity: [0.12, 0.17, 0.12],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          >
            {status}
          </motion.div>
        ))}
      </div>
    );
  }

  if (theme === "about") {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Git commit graph - HIGHLY VISIBLE */}
        <div className="absolute left-10 top-20 bottom-20 w-[600px] hidden lg:block">
          {gitTimeline.map((commit, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 mb-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.17, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {/* Branch visualization */}
              <div className="flex flex-col items-center relative">
                {/* Commit dot */}
                <motion.div
                  className={`w-3 h-3 rounded-full relative z-10 ${
                    commit.color === "cyan"
                      ? "bg-cyan-400"
                      : commit.color === "purple"
                        ? "bg-purple-500"
                        : "bg-green-500"
                  }`}
                  animate={{
                    scale: visibleElements.includes(i) ? [1, 1.3, 1] : 1,
                    boxShadow: visibleElements.includes(i)
                      ? [
                          "0 0 0px rgba(6, 182, 212, 0.3)",
                          "0 0 15px rgba(6, 182, 212, 0.5)",
                          "0 0 0px rgba(6, 182, 212, 0.3)",
                        ]
                      : "0 0 0px rgba(6, 182, 212, 0.3)",
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Connecting line to next commit */}
                {i < gitTimeline.length - 1 && (
                  <motion.div
                    className="w-0.5 h-20 bg-gray-500"
                    style={{ opacity: 0.2 }}
                    animate={{
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                )}

                {/* Branch lines for merge commits */}
                {commit.color === "green" && (
                  <svg
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "-20px",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <path
                      d="M 6 0 Q 6 20, 26 20"
                      stroke="#50fa7b"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.2"
                    />
                  </svg>
                )}
              </div>

              {/* Commit info */}
              <div className="font-mono text-xs flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-cyan-400 font-semibold">{commit.hash}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">
                    {commit.month} {commit.year}
                  </span>
                </div>
                <div className="text-gray-500">{commit.message}</div>
              </div>
            </motion.div>
          ))}

          {/* Branch label */}
          <motion.div
            className="absolute -top-10 left-0 font-mono text-xs text-purple-500"
            animate={{ opacity: [0.12, 0.17, 0.12] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ● main
          </motion.div>
        </div>
      </div>
    );
  }

  if (theme === "skills") {
    return (
      <div className="page-background-fixed">
        {/* Tech relationship network - VISIBLE GRAPH */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: 0.14,
            transform: "translate3d(0,0,0)",
            willChange: "transform, opacity",
          }}
        >
          {techNodes.map((node, i) =>
            node.connections.map((targetIdx) => {
              const target = techNodes[targetIdx];
              return (
                <motion.line
                  key={`${i}-${targetIdx}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={i % 2 === 0 ? "#9333EA" : "#06B6D4"}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  animate={{
                    strokeDashoffset: [0, 10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })
          )}
        </svg>

        {/* Tech nodes */}
        {techNodes.map((node, i) => (
          <motion.div
            key={node.name}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%) translate3d(0,0,0)",
              willChange: "transform",
            }}
            animate={{
              scale: visibleElements.includes(i) ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: i % 2 === 0 ? "#9333EA" : "#06B6D4",
                opacity: 0.17,
                boxShadow:
                  i % 2 === 0
                    ? "0 0 20px rgba(147, 51, 234, 0.3)"
                    : "0 0 20px rgba(6, 182, 212, 0.3)",
              }}
            />
            <span className="font-mono text-xs text-gray-600" style={{ opacity: 0.5 }}>
              {node.name}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (theme === "projects") {
    return (
      <div className="page-background-fixed">
        {/* CI/CD Pipeline - ANIMATED FLOW */}
        <div
          className="fixed top-[33vh] left-10 right-10 hidden lg:block"
          style={{
            transform: "translate3d(0,0,0)",
            willChange: "transform, opacity",
          }}
        >
          <div className="flex justify-between items-center relative">
            {["Code", "Test", "Build", "Deploy"].map((stage, i) => (
              <div key={stage} className="relative">
                {/* Stage box */}
                <motion.div
                  className="px-6 py-3 rounded-lg border font-mono text-sm"
                  style={{
                    borderColor: "rgba(6, 182, 212, 0.2)",
                    background: "rgba(6, 182, 212, 0.05)",
                    color: "#06B6D4",
                    opacity: 0.17,
                  }}
                  animate={{
                    opacity: [0.14, 0.2, 0.14],
                    borderColor: [
                      "rgba(6, 182, 212, 0.2)",
                      "rgba(6, 182, 212, 0.4)",
                      "rgba(6, 182, 212, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {stage}
                </motion.div>

                {/* Checkmark */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs"
                  style={{ opacity: 0.17 }}
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.14, 0.2, 0.14],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5 + 0.3,
                  }}
                >
                  ✓
                </motion.div>

                {/* Connecting arrow */}
                {i < 3 && (
                  <motion.div
                    className="absolute left-full top-1/2 w-12 flex items-center"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <motion.div
                      className="h-0.5 w-full bg-cyan-500"
                      style={{ opacity: 0.17 }}
                      animate={{
                        opacity: [0.14, 0.22, 0.14],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                    <motion.div
                      className="w-0 h-0 border-l-4 border-y-4 border-y-transparent border-l-cyan-500"
                      style={{ opacity: 0.17 }}
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute -bottom-10 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 rounded-full"
            style={{ opacity: 0.14 }}
            animate={{
              opacity: [0.12, 0.17, 0.12],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    );
  }

  if (theme === "contact") {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating HTTP methods and responses */}
        {[
          "POST",
          "GET",
          "PATCH",
          "HTTP/1.1 200 OK",
          '{ "status": "success" }',
          "→ Response: 201 Created",
          '{ "available": true }',
          "Content-Type: application/json",
        ].map((text, i) => (
          <AnimatePresence key={i} mode="wait">
            {visibleElements.includes(i) && (
              <motion.div
                initial={{ opacity: 0, y: 100, x: 0 }}
                animate={{
                  opacity: [0, 0.14, 0.14, 0],
                  y: [100, -150],
                  x: [0, Math.random() * 30 - 15],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 12, ease: "linear" }}
                className="absolute font-mono text-xs text-cyan-400 whitespace-nowrap"
                style={{
                  left: `${10 + ((i * 11) % 80)}%`,
                  top: "100%",
                }}
              >
                {text}
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* API status codes */}
        {["200", "201", "204"].map((code, i) => (
          <motion.div
            key={code}
            className="absolute font-mono font-bold text-2xl text-green-500"
            style={{
              right: `${20 + i * 25}%`,
              top: `${20 + i * 30}%`,
            }}
            animate={{
              opacity: [0.1, 0.14, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}
