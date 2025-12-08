"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Extended commit data - more nodes to reach Contact section
const commits = [
  { hash: "a7f3b2e", msg: "init: hello world" },
  { hash: "c4d8e1a", msg: "feat: python" },
  { hash: "b2e9f4c", msg: "feat: CLI tools" },
  { hash: "e8a2c7d", msg: "setup: django" },
  { hash: "f1b5d3e", msg: "feat: REST APIs" },
  { hash: "d9c4a8f", msg: "perf: database" },
  { hash: "a3e7b9c", msg: "feat: docker" },
  { hash: "c7f2e4a", msg: "feat: fastapi" },
  { hash: "b8d1c5e", msg: "arch: design" },
  { hash: "e4a9f2b", msg: "role: architect" },
  { hash: "f3c8a1d", msg: "feat: portfolio" },
  { hash: "a1b2c3d", msg: "style: polish" },
  { hash: "d4e5f6a", msg: "test: coverage" },
  { hash: "b7c8d9e", msg: "docs: readme" },
  { hash: "HEAD", msg: "wip: connecting..." },
];

export const PageBackground = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Creative network/constellation animation
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
    }

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));

      for (let i = 0; i < count; i++) {
        const colors = [
          "rgba(6, 182, 212, 0.6)", // cyan
          "rgba(147, 51, 234, 0.5)", // purple
          "rgba(59, 130, 246, 0.5)", // blue
          "rgba(236, 72, 153, 0.4)", // pink
        ];

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing radius
        const pulseRadius = p.radius * (1 + Math.sin(p.pulse) * 0.3);

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseRadius * 3);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw flowing energy lines
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yOffset = canvas.height * (0.3 + i * 0.2);
        ctx.moveTo(0, yOffset);

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            yOffset + Math.sin(x * 0.005 + time + i) * 30 + Math.sin(x * 0.01 + time * 1.5) * 15;
          ctx.lineTo(x, y);
        }

        const colors = [
          "rgba(6, 182, 212, 0.03)",
          "rgba(147, 51, 234, 0.025)",
          "rgba(236, 72, 153, 0.02)",
        ];
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* FIXED background effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0D1117 0%, #080b0f 50%, #0D1117 100%)",
          }}
        />

        {/* Network/constellation canvas */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Ambient glows */}
        <motion.div
          className="absolute -left-[20%] top-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 50%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-15%] bottom-[20%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 50%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(9, 12, 16, 0.2) 60%, rgba(9, 12, 16, 0.4) 100%)",
          }}
        />
      </div>

      {/* GIT GRAPH - extends fully to footer */}
      <div
        className="absolute left-2 md:left-4 top-0 w-[140px] pointer-events-none z-[1]"
        style={{ height: "520vh" }}
      >
        {/* Main branch line */}
        <motion.div
          className="absolute left-[5px] top-24 w-[1.5px] rounded-full"
          style={{
            height: "calc(100% - 100px)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.35) 2%, rgba(6, 182, 212, 0.35) 98%, transparent 100%)",
          }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        {/* Commit nodes */}
        {commits.map((commit, index) => {
          const nodeY = 120 + index * 240; // Tighter spacing for more nodes

          return (
            <motion.div
              key={index}
              className="absolute flex items-center gap-2"
              style={{ top: nodeY, left: 0 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.75, x: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.4 }}
            >
              {/* Node */}
              <motion.div
                className="relative flex-shrink-0"
                whileInView={{ scale: [1, 1.15, 1] }}
                viewport={{ once: false }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="w-2.5 h-2.5 rounded-full border border-cyan-500/60 bg-[#0a0e14]">
                  <div className="absolute inset-[3px] rounded-full bg-cyan-500/70" />
                </div>
              </motion.div>

              {/* Commit info */}
              <div className="font-mono text-[9px] leading-tight whitespace-nowrap">
                <span className="text-cyan-500">{commit.hash}</span>
                <div className="text-gray-500 text-[8px]">{commit.msg}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating symbols - right side */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[
          { symbol: "</>", x: 88, y: 15 },
          { symbol: "{}", x: 92, y: 40 },
          { symbol: "=>", x: 85, y: 65 },
          { symbol: "//", x: 90, y: 85 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-cyan-500/10"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>
    </>
  );
};
