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
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";
import { MatrixRain, TypingEffect, GlitchText } from "@/components/effects/EasterEggAnimations";

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

            {/* Info Section - Simple bullets with creative reveal */}
            <div className="w-full max-w-[320px] space-y-3 font-mono text-sm">
              <motion.div
                className="flex items-center gap-3 text-gray-300"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                <span className="text-cyan-400 text-lg">›</span>
                <span className="text-lg font-semibold">Sina Amareh</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <span className="text-purple-500">›</span>
                <span>Backend Architect & System Designer</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                <span className="text-cyan-400">›</span>
                <span>
                  Experience: <span className="text-[#50fa7b]">2 years</span>
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                <span className="text-green-500">›</span>
                <span>
                  Status: <span className="text-[#50fa7b] font-semibold">Available for Work</span>
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              >
                <span className="text-purple-500">›</span>
                <span>Location: Remote (UTC+3:30)</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Philosophy & Bio - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Terminal Window - Interactive */}
            <InteractiveTerminal
              title="terminal — about.md"
              command="cat about.md"
              hintCommand="cat secrets.txt"
              secretCommands={{
                "cat secrets.txt": (
                  <MatrixRain message="You found the hidden truth: I love building things that matter." />
                ),
                "echo $USER": (
                  <TypingEffect
                    lines={[
                      "sina@developer:~$",
                      "Name: Sina Amareh",
                      "Role: Backend Engineer",
                      "Status: Available for hire",
                      "Fun fact: Bugs fear me 🐛",
                    ]}
                    speed={40}
                  />
                ),
                fortune: (
                  <div className="space-y-3 text-center py-4">
                    <GlitchText text="CODE IS POETRY" />
                    <div className="text-gray-400 text-sm italic">
                      &quot;Clean code always looks like it was written by someone who cares.&quot;
                    </div>
                    <div className="text-gray-500 text-xs">— Robert C. Martin</div>
                  </div>
                ),
                pwd: (
                  <div className="font-mono text-cyan-400 text-sm">/home/sina/portfolio/about</div>
                ),
                help: (
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-400 mb-2">🖥️ Available commands:</div>
                    <div className="text-cyan-400">
                      {" "}
                      cat secrets.txt <span className="text-gray-500">- 🔮 Matrix reveal</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      echo $USER <span className="text-gray-500">- 👤 Who am I?</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      fortune <span className="text-gray-500">- 🎲 Developer wisdom</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      pwd <span className="text-gray-500">- 📍 Current location</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-3 border-t border-gray-700 pt-2">
                      💡 More secrets await in Skills and Contact terminals!
                    </div>
                  </div>
                ),
              }}
            >
              <div className="border-l-2 border-purple-500/50 pl-4">
                <p className="text-lg">
                  <span className="text-[#50fa7b]">&quot;</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                    Building systems where clarity meets creativity
                  </span>
                  <span className="text-[#50fa7b]">&quot;</span>
                </p>
              </div>

              <div className="text-gray-400 leading-relaxed mt-4">
                Specialized in designing and implementing scalable backend architectures. Passionate
                about clean code, system optimization, and creating robust APIs that power modern
                applications.
              </div>

              <div className="text-gray-500 text-xs pt-2 mt-4 border-t border-gray-700/30">
                <span className="text-green-400">→</span> 2 years hands-on experience • 1 year
                professional employment • Production-grade solutions
              </div>
            </InteractiveTerminal>
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
