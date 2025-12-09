"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiPython,
  SiGit,
  SiNginx,
} from "react-icons/si";
import { GlassCard } from "@/components/ui/GlassCard";
import Card3D from "@/components/3d/Card3D";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const techGridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isTechGridInView = useInView(techGridRef, { once: true, amount: 0.2 });

  const techStack = [
    { name: "Django", icon: <SiDjango className="text-[#44B78B]" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-number mb-12"
        >
          // 01. About
        </motion.div>

        {/* Developer Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-6 h-full"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/me.jpg"
                  alt="Sina Amareh"
                  width={350}
                  height={350}
                  className="w-full h-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    WebkitMaskImage: "radial-gradient(circle, black 85%, transparent 100%)",
                    maskImage: "radial-gradient(circle, black 85%, transparent 100%)",
                  }}
                  priority
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl -z-10 animate-pulse-subtle" />
            </div>

            {/* Terminal-style Summary Command */}
            <motion.div
              className="w-full max-w-[360px] bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-3 py-2 bg-[#161b22] border-b border-gray-800">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] text-gray-500 font-mono">summary</span>
              </div>

              {/* Command output */}
              <div className="p-4 font-mono text-xs space-y-1.5">
                <div className="text-gray-500 mb-3">
                  <span className="text-green-400">$</span> summary --experience
                </div>

                <motion.div
                  className="text-gray-300 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <span className="text-cyan-400">›</span>
                  <span className="font-semibold">Sina Amareh</span>
                </motion.div>

                <motion.div
                  className="text-gray-400 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <span className="text-purple-400">›</span>
                  <span>Backend Architect & System Designer</span>
                </motion.div>

                <motion.div
                  className="text-gray-400 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <span className="text-cyan-400">›</span>
                  <span>
                    Experience: <span className="text-[#50fa7b]">2 years</span>
                  </span>
                </motion.div>

                <motion.div
                  className="text-gray-400 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <span className="text-green-400">›</span>
                  <span>
                    Status: <span className="text-[#50fa7b] font-semibold">Available for Work</span>
                  </span>
                </motion.div>

                <motion.div
                  className="text-gray-400 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <span className="text-purple-400">›</span>
                  <span>Location: Remote (UTC+3:30)</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Philosophy & Bio - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Terminal Window */}
            <div
              className="rounded-xl overflow-hidden border border-cyan-500/20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(10,14,20,0.98) 100%)",
                boxShadow: "0 0 40px rgba(6,182,212,0.08)",
              }}
            >
              {/* Terminal Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-500/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff605c]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd44]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ca4e]" />
                <span className="ml-2 text-xs text-gray-500 font-mono">terminal — about.md</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                {/* Command */}
                <div className="text-gray-400 mb-4">
                  <span className="text-cyan-400">$</span> cat about.md
                </div>

                {/* Output */}
                <div className="space-y-4 text-gray-300">
                  <div className="border-l-2 border-purple-500/50 pl-4">
                    <p className="text-lg">
                      <span className="text-[#50fa7b]">"</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                        Building systems where clarity meets creativity
                      </span>
                      <span className="text-[#50fa7b]">"</span>
                    </p>
                  </div>

                  <div className="text-gray-400 leading-relaxed">
                    Specialized in designing and implementing scalable backend architectures.
                    Passionate about clean code, system optimization, and creating robust APIs that
                    power modern applications.
                  </div>

                  <div className="text-gray-500 text-xs pt-2 border-t border-gray-700/30">
                    <span className="text-green-400">→</span> 2 years hands-on experience • 1 year
                    professional employment • Production-grade solutions
                  </div>
                </div>

                {/* Blinking cursor */}
                <div className="mt-4 text-gray-400">
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="animate-cursor text-cyan-400">▌</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Core Tools
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-cyan-400">›</span> Technologies I use daily
          </p>
        </motion.div>

        <div ref={techGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={
                isTechGridInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.7, y: 30 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <Card3D intensity={8}>
                <GlassCard variant="subtle" interactive className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isTechGridInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1 + 0.2,
                    }}
                    className="text-5xl mb-3 flex justify-center"
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="font-mono text-sm text-gray-300">{tech.name}</div>
                </GlassCard>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
