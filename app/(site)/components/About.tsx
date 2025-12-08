"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal from left
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text reveal from right
      gsap.fromTo(
        textRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats staggered reveal
      gsap.fromTo(
        ".stat-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "∞", label: "Lines of Code" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >
      {/* Section header */}
      <motion.div
        className="max-w-6xl mx-auto w-full mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-4 block">
          // 01. About Me
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Building Digital
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {" "}
            Experiences
          </span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Creative Image Container */}
        <div ref={imageRef} className="relative">
          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-24 h-24 border border-purple-500/30 rounded-2xl"
            animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 border border-cyan-500/30 rounded-full"
            animate={{ rotate: [0, -5, 0], y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main image container */}
          <div className="relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500" />

            {/* Image wrapper */}
            <div className="relative bg-[#0d1117] rounded-2xl p-2 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/assets/images/me.jpg"
                  alt="Sina Amareh"
                  className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60" />

                {/* Scan line effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                  }}
                />
              </div>

              {/* Code snippet overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800/50">
                <code className="text-xs text-gray-400 font-mono">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span> = {"{"}
                  <br />
                  {"  "}name: <span className="text-green-400">"Sina Amareh"</span>,
                  <br />
                  {"  "}passion: <span className="text-green-400">"Building things"</span>
                  <br />
                  {"}"};
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div ref={textRef} className="space-y-8">
          {/* Main description */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p className="text-xl text-white/90 font-light">
              I'm a <span className="text-purple-400 font-semibold">software engineer</span>{" "}
              passionate about crafting elegant solutions to complex problems.
            </p>
            <p>
              My work focuses on{" "}
              <span className="text-cyan-400 font-medium">backend architecture</span> and{" "}
              <span className="text-purple-400 font-medium">system design</span>, building robust,
              scalable solutions that stand the test of time.
            </p>
            <p>
              From high-performance APIs to distributed systems, I create{" "}
              <span className="text-cyan-400 font-medium">elegant user experiences</span> powered by
              efficient, thoughtful code.
            </p>
          </div>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-3">
            {["Python", "TypeScript", "React", "Node.js", "PostgreSQL", "AWS"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="max-w-6xl mx-auto w-full mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
