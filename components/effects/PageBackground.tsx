"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const PageBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight * 3, document.body.scrollHeight);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Git graph configuration
    const branchColors = [
      "#9333EA", // Purple (main)
      "#06B6D4", // Cyan (feature)
      "#EC4899", // Pink (hotfix)
      "#10B981", // Green (release)
      "#F59E0B", // Yellow (experimental)
    ];

    // Create nodes for git graph
    interface GitNode {
      x: number;
      y: number;
      branch: number;
      connections: number[];
      pulsePhase: number;
    }

    const nodes: GitNode[] = [];
    const nodeSpacing = 150;
    const branchSpacing = 80;
    const startX = 100;
    let currentY = 100;

    // Generate git-like path
    let currentBranch = 0;
    for (let i = 0; i < 50; i++) {
      const node: GitNode = {
        x: startX + currentBranch * branchSpacing,
        y: currentY,
        branch: currentBranch,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
      };

      // Connect to previous node on same branch
      if (i > 0) {
        const prevNodeIndex = nodes.findIndex((n, idx) => n.branch === currentBranch && idx < i);
        if (prevNodeIndex >= 0) {
          node.connections.push(prevNodeIndex);
        }
      }

      nodes.push(node);
      currentY += nodeSpacing + Math.random() * 50;

      // Randomly branch or merge
      if (Math.random() > 0.7 && i > 2) {
        const oldBranch = currentBranch;
        if (Math.random() > 0.5 && currentBranch < 4) {
          currentBranch++; // Branch out
          // Add connection from parent branch
          if (nodes.length > 1) {
            nodes[nodes.length - 1].connections.push(nodes.length - 2);
          }
        } else if (currentBranch > 0) {
          currentBranch--; // Merge back
          // Find last node on target branch to merge into
          for (let j = nodes.length - 2; j >= 0; j--) {
            if (nodes[j].branch === currentBranch) {
              nodes[nodes.length - 1].connections.push(j);
              break;
            }
          }
        }
      }
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections (branches)
      ctx.lineWidth = 2;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (const connIdx of node.connections) {
          const connNode = nodes[connIdx];
          const color = branchColors[node.branch];

          ctx.beginPath();
          ctx.strokeStyle = color + "40"; // Semi-transparent

          // Draw curved path for branch/merge
          if (node.branch !== connNode.branch) {
            // Curved connection for branch/merge
            const midY = (node.y + connNode.y) / 2;
            ctx.moveTo(connNode.x, connNode.y);
            ctx.bezierCurveTo(connNode.x, midY, node.x, midY, node.x, node.y);
          } else {
            // Straight line for same branch
            ctx.moveTo(connNode.x, connNode.y);
            ctx.lineTo(node.x, node.y);
          }
          ctx.stroke();
        }
      }

      // Draw nodes (commits)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const color = branchColors[node.branch];
        const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.3 + 0.7;

        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
        gradient.addColorStop(
          0,
          color +
            Math.round(pulse * 80)
              .toString(16)
              .padStart(2, "0")
        );
        gradient.addColorStop(1, color + "00");

        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark base with subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D1117 0%, #0a0a0f 50%, #0D1117 100%)",
        }}
      />

      {/* Git graph canvas - positioned on right side */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 right-0 opacity-30"
        style={{
          transform: "translateX(30%)",
        }}
      />

      {/* Left side aurora glow */}
      <motion.div
        className="absolute -left-[20%] top-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom right aurora glow */}
      <motion.div
        className="absolute -right-[10%] bottom-[20%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(10, 10, 15, 0.4) 80%, rgba(10, 10, 15, 0.8) 100%)",
        }}
      />
    </div>
  );
};
