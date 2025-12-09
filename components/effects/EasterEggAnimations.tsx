"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Matrix Rain Effect Component
export function MatrixRain({ message, onComplete }: { message: string; onComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let frameCount = 0;
    const animate = () => {
      ctx.fillStyle = "rgba(10, 14, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#50fa7b";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frameCount++;
      if (frameCount < 100) {
        requestAnimationFrame(animate);
      } else {
        setShowMessage(true);
        setTimeout(() => onComplete?.(), 3000);
      }
    };

    animate();
  }, [onComplete]);

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#0a0e14]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center p-6 bg-black/80 rounded-xl border border-[#50fa7b]/50">
              <div className="text-[#50fa7b] font-mono text-lg font-bold">{message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Typing Animation Effect
export function TypingEffect({ lines, speed = 50 }: { lines: string[]; speed?: number }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const timer = setTimeout(() => {
      if (currentChar < lines[currentLine].length) {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = (newLines[currentLine] || "") + lines[currentLine][currentChar];
          return newLines;
        });
        setCurrentChar((c) => c + 1);
      } else {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines, speed]);

  return (
    <div className="font-mono text-sm space-y-1">
      {displayedLines.map((line, i) => (
        <div key={i} className="text-[#8be9fd]">
          {line}
          {i === currentLine && <span className="animate-pulse">▌</span>}
        </div>
      ))}
    </div>
  );
}

// Glitch Text Effect
export function GlitchText({ text }: { text: string }) {
  return (
    <div className="relative">
      <motion.span
        className="text-[#ff79c6] font-bold text-xl relative"
        animate={{
          textShadow: [
            "2px 0 #8be9fd, -2px 0 #50fa7b",
            "-2px 0 #8be9fd, 2px 0 #50fa7b",
            "2px 0 #8be9fd, -2px 0 #50fa7b",
          ],
        }}
        transition={{ duration: 0.1, repeat: 5 }}
      >
        {text}
      </motion.span>
    </div>
  );
}

// Loading Bar Animation
export function LoadingBar({ label, onComplete }: { label: string; onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="space-y-2">
      <div className="text-gray-400 text-sm font-mono">{label}</div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
          animate={{ backgroundPosition: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      <div className="text-[#50fa7b] text-xs font-mono">
        {Math.min(Math.floor(progress), 100)}% complete
      </div>
    </div>
  );
}

// Particle Explosion Effect
export function ParticleExplosion({ emoji, count = 20 }: { emoji: string; count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 1.5,
  }));

  return (
    <div className="relative h-32 flex items-center justify-center overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-2xl"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: p.scale,
            rotate: p.rotation,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {emoji}
        </motion.span>
      ))}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5 }}
        className="text-4xl"
      >
        {emoji}
      </motion.div>
    </div>
  );
}

// System Boot Sequence
export function BootSequence({ onComplete }: { onComplete?: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const bootMessages = [
    "[OK] Loading kernel modules...",
    "[OK] Mounting file systems...",
    "[OK] Starting network services...",
    "[OK] Initializing creativity engine...",
    "[OK] Loading developer profile: Sina Amareh",
    "[OK] Status: READY FOR HIRE",
    "",
    ">>> System ready. Welcome! <<<",
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < bootMessages.length) {
        setLines((prev) => [...prev, bootMessages[i]]);
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => onComplete?.(), 1000);
      }
    }, 300);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="font-mono text-sm space-y-1 bg-black/50 p-4 rounded-lg">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={
            line && line.startsWith("[OK]")
              ? "text-[#50fa7b]"
              : line && line.startsWith(">>>")
                ? "text-[#ff79c6] font-bold"
                : "text-gray-500"
          }
        >
          {line || "\u00A0"}
        </motion.div>
      ))}
    </div>
  );
}

// Hack Animation
export function HackAnimation({ target }: { target: string }) {
  const [stage, setStage] = useState(0);
  const stages = [
    "Establishing connection...",
    `Scanning ${target}...`,
    "Bypassing firewall...",
    "Access granted! 🔓",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((s) => (s < stages.length - 1 ? s + 1 : s));
    }, 800);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <div className="space-y-3">
      {stages.slice(0, stage + 1).map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`font-mono text-sm ${i === stages.length - 1 ? "text-[#50fa7b] font-bold" : "text-cyan-400"}`}
        >
          <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {s}
        </motion.div>
      ))}
    </div>
  );
}
