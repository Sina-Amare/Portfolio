"use client";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

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
    <Section background="gradient" padding="lg" className="relative min-h-screen overflow-hidden">
      <div ref={heroRef}>
        {/* Cinematic gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cream via-amber-50 to-cream z-0"
          style={{ y, scale }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, rgba(214, 185, 140, 0.15), transparent 70%),
                        linear-gradient(to bottom right, #f8f6f1, #e8e3d7)`,
            y,
          }}
        />

        {/* Floating light particles */}
        <motion.div className="absolute inset-0 z-10" style={{ y }}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>

        <Container className="items-center min-h-[92vh] z-20 relative pt-18">
          {/* Left column - Text content - spans 6 columns */}
          <motion.div
            className="col-span-12 md:col-span-6 space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              Blending Logic, Design, and
              <span className="block bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
                {" "}
                Imagination
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-brand-textSecondary max-w-lg leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="/projects"
                className="px-8 py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-gold to-teal text-white transform transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 hover:scale-105 rounded-lg md:rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/about"
                className="px-8 py-4 text-base md:text-lg font-semibold text-ink border-2 border-gold hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300 rounded-lg md:rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Portrait - spans 6 columns */}
          <motion.div
            className="col-span-12 md:col-span-6 flex items-center justify-center"
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Portrait container with cinematic styling */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Soft glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-teal/20 rounded-full blur-3xl transform scale-110" />

              {/* Portrait image with circular mask */}
              <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-gold/30 shadow-gold/20 z-10 aspect-square">
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
                <div className="absolute inset-0 rounded-full border-transparent shadow-[inset_0_0_30px_#d6b98c40] pointer-events-none" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-pulse"
                style={{ x: springX, y: springY }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal/20 rounded-full blur-xl animate-pulse delay-500"
                style={{ x: springX, y: springY }}
              />
            </div>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
}
