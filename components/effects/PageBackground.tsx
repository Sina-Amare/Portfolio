"use client";

import { useEffect, useRef } from "react";

interface PageBackgroundProps {
  theme?: "home" | "about" | "skills" | "projects" | "contact";
}

/**
 * Enhanced background with floating nodes, connections, and subtle grid
 * Replaces old Vanta.js with lightweight CSS + Canvas animations
 */
export default function PageBackground({ theme = "home" }: PageBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Theme-specific gradient colors
  const themeGradients = {
    home: "from-purple-900/20 via-blue-900/10 to-cyan-900/20",
    about: "from-cyan-900/20 via-purple-900/10 to-pink-900/20",
    skills: "from-blue-900/20 via-cyan-900/10 to-purple-900/20",
    projects: "from-pink-900/20 via-purple-900/10 to-blue-900/20",
    contact: "from-cyan-900/20 via-blue-900/10 to-purple-900/20",
  };

  // Floating nodes animation
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

    // Node particles
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const nodes: Node[] = [];
    const nodeCount = 40; // Moderate count

    // Create nodes - SUBTLE so cursor stands out
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1, // Smaller nodes (1-3px)
        opacity: Math.random() * 0.2 + 0.1, // Subtle opacity (0.1-0.3)
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections - subtle
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.12; // More subtle connections
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (const node of nodes) {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node with glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${node.opacity})`; // Cyan nodes
        ctx.fill();

        // Add subtle glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${node.opacity * 0.2})`;
        ctx.fill();
      }

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
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${themeGradients[theme]} animate-gradient-shift`}
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      {/* Floating nodes canvas - subtle */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow effect */}
      <div
        className="absolute inset-0 animate-pulse-subtle"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%)",
        }}
      />
    </div>
  );
}
