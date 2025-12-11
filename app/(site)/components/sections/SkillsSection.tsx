"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GlassCard } from "@/components/ui/GlassCard";
import Card3D from "@/components/3d/Card3D";
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";
import {
  LoadingBar,
  ParticleExplosion,
  BootSequence,
} from "@/components/effects/EasterEggAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("backend");

  // GSAP Scroll Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tabs animation
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = {
    backend: {
      title: "Backend Core",
      icon: "⚙️",
      color: "#9333EA",
      skills: ["Python", "Django / DRF", "FastAPI", "Celery", "RESTful APIs", "Async Programming"],
    },
    ai: {
      title: "AI & LLM Engineering",
      icon: "🤖",
      color: "#10B981",
      skills: [
        "LangGraph / LangChain",
        "RAG Systems",
        "Prompt Engineering",
        "AI Agents (MCP)",
        "Vector Databases",
      ],
    },
    apis: {
      title: "APIs & Integrations",
      icon: "🔗",
      color: "#F59E0B",
      skills: [
        "OpenRouter",
        "Google AI Studio",
        "Cloudflare Workers",
        "Telegram Bot API",
        "OpenAI API",
        "Anthropic API",
      ],
    },
    databases: {
      title: "Databases & Caching",
      icon: "🗄️",
      color: "#06B6D4",
      skills: ["PostgreSQL", "SQLite", "Redis", "Database Design", "Query Optimization"],
    },
    devops: {
      title: "DevOps & Tools",
      icon: "🚀",
      color: "#EC4899",
      skills: ["Docker / Compose", "Git & GitHub Actions", "Linux / CLI", "API Docs (Swagger)"],
    },
  };

  const tabs = Object.keys(skillCategories);
  const currentCategory = skillCategories[activeTab as keyof typeof skillCategories];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >
      {/* Animated decorative glows - CSS @keyframes, GPU accelerated */}
      <div
        className="hidden sm:block absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse-slow"
        style={{ background: currentCategory.color, transform: "translateZ(0)" }}
      />
      <div
        className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse-slow-reverse"
        style={{ background: "#06B6D4", transform: "translateZ(0)" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Section Header - RENAMED from Tech Stack to Expertise */}
        <div ref={headerRef} className="mb-12">
          <span className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            // 03. Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Technical
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Proficiency
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Core technologies I work with and continue to master
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div ref={tabsRef} className="mb-10">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const category = skillCategories[tab as keyof typeof skillCategories];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 sm:px-5 sm:py-3 rounded-xl font-mono text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab
                      ? "text-white border-2"
                      : "text-gray-500 hover:text-gray-300 bg-white/5 border-2 border-transparent hover:border-white/10"
                  }`}
                  style={{
                    borderColor: activeTab === tab ? category.color : undefined,
                    background: activeTab === tab ? `${category.color}20` : undefined,
                    boxShadow: activeTab === tab ? `0 0 20px ${category.color}30` : undefined,
                  }}
                >
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center lg:justify-items-stretch"
        >
          {/* Skill Bars Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bars-${activeTab}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="skill-card w-full max-w-md lg:max-w-none"
            >
              <Card3D intensity={6}>
                <GlassCard variant="terminal" className="p-6 h-full" glow interactive>
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: `${currentCategory.color}20` }}
                    >
                      {currentCategory.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{currentCategory.title}</h3>
                      <p className="text-gray-500 text-xs font-mono">Skill Levels</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Skills list - vertical layout */}
                  <div className="space-y-2">
                    {currentCategory.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default"
                        style={{
                          borderColor: `${currentCategory.color}15`,
                        }}
                        whileHover={{
                          borderColor: currentCategory.color,
                          x: 5,
                        }}
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full transition-all group-hover:scale-125 group-hover:shadow-lg"
                          style={{
                            backgroundColor: currentCategory.color,
                            boxShadow: `0 0 0 0 ${currentCategory.color}`,
                          }}
                        />
                        <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors flex-1">
                          {skill}
                        </span>
                        <span
                          className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: currentCategory.color }}
                        >
                          ✓
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: currentCategory.color }}
                      />
                      <span className="text-gray-500 text-xs font-mono">Active toolkit</span>
                    </div>
                    <div
                      className="text-lg font-bold font-mono"
                      style={{ color: currentCategory.color }}
                    >
                      {currentCategory.skills.length} items
                    </div>
                  </div>
                </GlassCard>
              </Card3D>
            </motion.div>
          </AnimatePresence>

          {/* Experience Summary Card - Interactive Terminal Style */}
          <motion.div className="skill-card w-full max-w-md lg:max-w-none">
            <InteractiveTerminal
              title="terminal — experience"
              command="summary --experience"
              hintCommand="neofetch"
              secretCommands={{
                neofetch: <BootSequence />,
                "npm run hire": (
                  <div className="space-y-4">
                    <LoadingBar label="Installing developer: sina-amareh@latest..." />
                    <div className="text-[#50fa7b] font-mono text-sm mt-4">
                      ✓ Installation complete! Developer ready for deployment.
                    </div>
                  </div>
                ),
                "git status": (
                  <div className="space-y-3">
                    <ParticleExplosion emoji="🚀" count={15} />
                    <div className="font-mono text-sm space-y-1">
                      <div className="text-[#50fa7b]">On branch: available-for-hire</div>
                      <div className="text-gray-400">
                        Your branch is up to date with &apos;origin/main&apos;
                      </div>
                      <div className="text-cyan-400">
                        nothing to commit, ready to push (to production)
                      </div>
                    </div>
                  </div>
                ),
                ls: (
                  <div className="font-mono text-sm grid grid-cols-3 gap-2">
                    <span className="text-[#8be9fd]">python/</span>
                    <span className="text-[#8be9fd]">django/</span>
                    <span className="text-[#8be9fd]">fastapi/</span>
                    <span className="text-[#50fa7b]">projects.json</span>
                    <span className="text-[#50fa7b]">skills.md</span>
                    <span className="text-[#ff79c6]">hire-me.sh</span>
                  </div>
                ),
                help: (
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-400 mb-2">⚡ Available commands:</div>
                    <div className="text-cyan-400">
                      {" "}
                      neofetch <span className="text-gray-500">- 🖥️ System info</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      npm run hire <span className="text-gray-500">- 📦 Install developer</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      git status <span className="text-gray-500">- 🚀 Check availability</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      ls <span className="text-gray-500">- 📂 List skills</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-3 border-t border-gray-700 pt-2">
                      💡 More secrets await in About and Contact terminals!
                    </div>
                  </div>
                ),
              }}
            >
              {/* Professional summary header */}
              <div className="mb-4">
                <span className="text-purple-400 text-xs font-mono uppercase tracking-wider">
                  What I Bring
                </span>
              </div>

              {/* Value propositions */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <span className="text-[#50fa7b] text-lg">⚡</span>
                  <div>
                    <span className="text-white text-sm font-semibold">
                      AI Integration Expertise
                    </span>
                    <p className="text-gray-500 text-xs">
                      LangGraph, RAG, OpenRouter, multi-model orchestration
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <span className="text-[#8be9fd] text-lg">🚀</span>
                  <div>
                    <span className="text-white text-sm font-semibold">Fast Turnaround</span>
                    <p className="text-gray-500 text-xs">
                      Prototype to production in days, not weeks
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <span className="text-[#ff79c6] text-lg">🔗</span>
                  <div>
                    <span className="text-white text-sm font-semibold">
                      API & Service Integration
                    </span>
                    <p className="text-gray-500 text-xs">
                      Connect any API, build robust backend systems
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <span className="text-[#bd93f9] text-lg">🏗️</span>
                  <div>
                    <span className="text-white text-sm font-semibold">Clean Architecture</span>
                    <p className="text-gray-500 text-xs">
                      Maintainable, documented, production-ready code
                    </p>
                  </div>
                </div>
              </div>

              {/* Core stack */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-gray-500 text-xs font-mono mb-2">Core Stack:</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "FastAPI", "Django", "LangGraph", "PostgreSQL", "Docker"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-cyan-500/10 text-cyan-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-3 flex items-center gap-2 text-xs font-mono">
                <span className="text-green-400 animate-pulse">●</span>
                <span className="text-gray-400">Available for:</span>
                <span className="text-white">Remote • Hybrid • Contract • Full-time</span>
              </div>
            </InteractiveTerminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
