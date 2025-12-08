"use client";
import { useEffect, useRef } from "react";

type Theme = "dark" | "light";

interface PageBackgroundProps {
  theme?: Theme;
}

export const PageBackground = ({ theme = "dark" }: PageBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Aurora configuration
    const colors = [
      { r: 147, g: 51, b: 234 }, // Purple
      { r: 6, g: 182, b: 212 }, // Cyan
      { r: 236, g: 72, b: 153 }, // Pink
      { r: 59, g: 130, b: 246 }, // Blue
    ];

    // Aurora waves
    interface Wave {
      y: number;
      amplitude: number;
      frequency: number;
      speed: number;
      phase: number;
      colorIndex: number;
      opacity: number;
    }

    const waves: Wave[] = [];
    const waveCount = 5;

    for (let i = 0; i < waveCount; i++) {
      waves.push({
        y: canvas.height * (0.3 + Math.random() * 0.4),
        amplitude: 80 + Math.random() * 120,
        frequency: 0.001 + Math.random() * 0.002,
        speed: 0.0003 + Math.random() * 0.0005,
        phase: Math.random() * Math.PI * 2,
        colorIndex: i % colors.length,
        opacity: 0.15 + Math.random() * 0.1,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each aurora wave
      for (const wave of waves) {
        const color = colors[wave.colorIndex];

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        // Create wave path
        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Complete the path to fill
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();

        // Create gradient fill
        const gradient = ctx.createLinearGradient(
          0,
          wave.y - wave.amplitude,
          0,
          wave.y + wave.amplitude * 2
        );
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${wave.opacity})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Slowly shift wave positions for organic movement
      time += 16;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Aurora canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ filter: "blur(40px)" }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 0%, rgba(10, 10, 15, 0.5) 70%, rgba(10, 10, 15, 0.9) 100%)",
        }}
      />
    </div>
  );
};
