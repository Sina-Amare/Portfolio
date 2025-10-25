"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

// Motion variants for staggered animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
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
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_70%_50%,#f8f6f1_0%,#101820_100%)]"
    >
      {/* Cinematic gradient background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#f8f6f1_0%,#101820_100%)] z-0"
        style={{ y, scale }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff6f613,#10182000)] z-0"
        style={{ y }}
      />

      {/* Diagonal overlay for motion depth */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(125deg, transparent 60%, rgba(16, 24, 32, 0.2) 100%)`,
        }}
      ></div>

      {/* Floating light particles */}
      <motion.div className="absolute inset-0 z-10" style={{ y }}>
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-coral/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Grid layout container */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto grid grid-cols-12 gap-12 px-8 min-h-screen items-center">
        {/* Left column - Text content - spans 6 columns */}
        <motion.div
          className="col-span-6 space-y-8 flex flex-col justify-center"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold tracking-tight leading-tight max-w-[14ch]"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Blending Logic,
            <br /> Design, and <span className="text-gold">Imagination</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-ink/80 mt-6 max-w-[45ch] leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            I craft digital experiences that balance technical precision with creative vision,
            building systems that are both intelligent and beautifully designed.
          </motion.p>

          <motion.div
            className="flex gap-6 mt-8"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.a
              href="/projects"
              className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold to-teal text-white transform transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/about"
              className="px-8 py-4 text-base font-semibold text-ink border-2 border-gold hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column - Portrait - spans 6 columns */}
        <motion.div
          className="col-span-6 flex items-center justify-center"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.03, rotate: 1 }}
        >
          {/* Portrait container with cinematic styling */}
          <div className="relative w-full max-w-[520px] mx-auto">
            {/* Light halo behind portrait */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff6f6133,#10182000)] transform scale-150 -z-10" />

            {/* Portrait image with organic mask shape */}
            <div
              className="relative overflow-hidden rounded-full shadow-2xl border-4 border-gold/30 shadow-gold/20 z-10 aspect-square max-w-[520px]"
              style={{ clipPath: "circle(45% at 50% 50%)" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-15070032169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=center"
                alt="Sina Amareh"
                className="w-full h-full object-cover"
                style={{ x: springX, y: springY }}
                transition={{ stiffness: 50, damping: 20 }}
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />

              {/* Enhanced cinematic border glow */}
              <div className="absolute inset-0 rounded-full border-transparent shadow-[inset_0_0_40px_#d6b98c60] pointer-events-none" />
            </div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"
              style={{ x: springX, y: springY }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-teal/20 rounded-full blur-xl animate-pulse delay-500"
              style={{ x: springX, y: springY }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
