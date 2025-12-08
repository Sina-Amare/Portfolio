"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Git commit data for the subtle left-side timeline
const commits = [
  { hash: "a7f3b2e", msg: "init: hello world" },
  { hash: "c4d8e1a", msg: "feat: python" },
  { hash: "b2e9f4c", msg: "feat: CLI tools" },
  { hash: "e8a2c7d", msg: "refactor: django" },
  { hash: "f1b5d3e", msg: "feat: REST APIs" },
  { hash: "d9c4a8f", msg: "perf: database" },
  { hash: "a3e7b9c", msg: "feat: docker" },
  { hash: "c7f2e4a", msg: "feat: fastapi" },
  { hash: "b8d1c5e", msg: "arch: design" },
  { hash: "e4a9f2b", msg: "role: architect" },
  { hash: "f3c8a1d", msg: "feat: portfolio" },
  { hash: "HEAD", msg: "wip: future..." },
];

export const PageBackground = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Creative flowing wave animation on canvas
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw multiple flowing wave layers
      const waves = [
        { amplitude: 40, frequency: 0.008, speed: 1, opacity: 0.04, color: "6, 182, 212" },
        { amplitude: 30, frequency: 0.012, speed: 0.8, opacity: 0.03, color: "147, 51, 234" },
        { amplitude: 50, frequency: 0.006, speed: 1.2, opacity: 0.025, color: "236, 72, 153" },
      ];

      waves.forEach((wave, waveIndex) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            canvas.height * 0.5 +
            Math.sin(x * wave.frequency + time * wave.speed + waveIndex) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.5);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(${wave.color}, 0)`);
        gradient.addColorStop(0.3, `rgba(${wave.color}, ${wave.opacity})`);
        gradient.addColorStop(0.7, `rgba(${wave.color}, ${wave.opacity})`);
        gradient.addColorStop(1, `rgba(${wave.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Add floating orbs
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.5 + i * 2) * 0.3 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i * 1.5) * 0.2 + 0.4) * canvas.height;
        const radius = 80 + Math.sin(time + i) * 20;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(6, 182, 212, 0.06)`);
        gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
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

        {/* Flowing waves canvas - VISIBLE creative effect */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Light vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(9, 12, 16, 0.15) 60%, rgba(9, 12, 16, 0.35) 100%)",
          }}
        />
      </div>

      {/* GIT GRAPH - SUBTLE - extends to footer (800vh height) */}
      <div
        className="absolute left-2 md:left-4 top-0 w-[160px] pointer-events-none z-[1]"
        style={{ height: "800vh" }}
      >
        {/* Main branch line - very subtle */}
        <motion.div
          className="absolute left-[5px] top-24 w-[1.5px] rounded-full"
          style={{
            height: "calc(100% - 100px)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.25) 2%, rgba(6, 182, 212, 0.25) 98%, transparent 100%)",
          }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        {/* Commit nodes - SUBTLE, low opacity */}
        {commits.map((commit, index) => {
          const nodeY = 150 + index * 300; // More spread out

          return (
            <motion.div
              key={index}
              className="absolute flex items-center gap-2"
              style={{ top: nodeY, left: 0 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              {/* Small subtle node */}
              <motion.div
                className="relative flex-shrink-0"
                whileInView={{ scale: [1, 1.1, 1] }}
                viewport={{ once: false }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-2.5 h-2.5 rounded-full border border-cyan-500/60 bg-[#0a0e14]">
                  <div className="absolute inset-[3px] rounded-full bg-cyan-500/70" />
                </div>
              </motion.div>

              {/* Commit info - very subtle */}
              <div className="font-mono text-[9px] leading-tight whitespace-nowrap">
                <span className="text-cyan-500">{commit.hash}</span>
                <div className="text-gray-500 text-[8px]">{commit.msg}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating subtle symbols - right side */}
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
