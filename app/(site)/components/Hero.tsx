"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Mouse parallax effect for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / (width / 2);
        const y = (clientY - (top + height / 2)) / (height / 2);
        mouseX.set(x * 20); // Adjust multiplier for parallax intensity
        mouseY.set(y * 20);
      }
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const heroElement = heroRef.current;
    heroElement?.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Cinematic gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#1E293B] to-[#0D1117] z-0"
        style={{ y }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 50%, rgba(37,99,235,0.15), transparent 70%),
                      linear-gradient(to bottom right, #0D1117, #1E293B)`,
          y,
        }}
      />

      {/* Floating light particles */}
      <motion.div className="absolute inset-0 z-10" style={{ y }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Split layout container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              Engineering Clarity Between
              <span className="block bg-gradient-to-r from-brand-accent to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Intelligence and Design
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              I craft digital experiences that balance technical precision with creative vision,
              building systems that are both intelligent and beautifully designed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <Button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-brand-accent to-cyan-400 text-white transform transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/30 hover:-translate-y-1 hover:scale-105">
                  View Projects
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold text-white border-2 border-brand-accent hover:bg-brand-accent hover:text-white hover:shadow-lg hover:shadow-brand-accent/30 hover:-translate-y-1 transition-all duration-300"
                >
                  About Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Portrait image */}
          <motion.div
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            {/* Portrait container with cinematic styling */}
            <div className="relative">
              {/* Soft glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-cyan-400/20 rounded-3xl blur-3xl transform scale-110" />

              {/* Portrait image */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 shadow-brand-accent/10">
                <motion.img
                  src="https://images.unsplash.com/photo-150700321169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=center"
                  alt="Sina Amareh"
                  className="w-full h-auto object-cover"
                  style={{ x: springX, y: springY }}
                  transition={{ stiffness: 50, damping: 20 }}
                />

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Enhanced cinematic border glow */}
                <div className="absolute inset-0 rounded-3xl border border-transparent shadow-[inset_0_0_20px_#2563eb30] pointer-events-none" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl animate-pulse"
                style={{ x: springX, y: springY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"
                style={{ x: springX, y: springY }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Parallax cursor effect is now handled by the main mousemove handler */}
    </motion.section>
  );
}
