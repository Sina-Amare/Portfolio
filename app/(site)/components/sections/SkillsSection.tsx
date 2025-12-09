"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkillBar } from "@/components/ui/SkillBar";
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
      skills: [
        { name: "Django", percentage: 85, experience: "2 years" },
        { name: "FastAPI", percentage: 80, experience: "1.5 years" },
        { name: "Django REST Framework", percentage: 90, experience: "2 years" },
        { name: "Python", percentage: 85, experience: "2 years" },
        { name: "RESTful API Design", percentage: 90, experience: "2 years" },
      ],
    },
    databases: {
      title: "Databases & Caching",
      icon: "🗄️",
      color: "#06B6D4",
      skills: [
        { name: "PostgreSQL", percentage: 80, experience: "2 years" },
        { name: "Redis", percentage: 70, experience: "1 year" },
        { name: "MongoDB", percentage: 60, experience: "1 year" },
        { name: "Database Design", percentage: 85, experience: "2 years" },
        { name: "Query Optimization", percentage: 75, experience: "1.5 years" },
      ],
    },
    devops: {
      title: "DevOps & Infrastructure",
      icon: "🚀",
      color: "#EC4899",
      skills: [
        { name: "Docker", percentage: 80, experience: "1.5 years" },
        { name: "CI/CD Pipelines", percentage: 75, experience: "1 year" },
        { name: "Git & Version Control", percentage: 90, experience: "2 years" },
        { name: "Nginx", percentage: 70, experience: "1 year" },
        { name: "Linux Administration", percentage: 75, experience: "2 years" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: "🔧",
      color: "#F59E0B",
      skills: [
        { name: "Celery (Task Queues)", percentage: 75, experience: "1 year" },
        { name: "RabbitMQ / Message Brokers", percentage: 65, experience: "8 months" },
        { name: "GraphQL", percentage: 60, experience: "6 months" },
        { name: "JWT Authentication", percentage: 85, experience: "1.5 years" },
        { name: "API Documentation (Swagger)", percentage: 80, experience: "2 years" },
      ],
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
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse-slow"
        style={{ background: currentCategory.color, transform: "translateZ(0)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse-slow-reverse"
        style={{ background: "#06B6D4", transform: "translateZ(0)" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Section Header - RENAMED from Tech Stack to Expertise */}
        <div ref={headerRef} className="mb-12">
          <span className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            // 03. Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
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
                  className={`px-5 py-3 rounded-xl font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
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
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Bars Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bars-${activeTab}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="skill-card"
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
                      <p className="text-gray-500 text-xs font-mono">Proficiency Metrics</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-5">
                    {currentCategory.skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill.name}
                        percentage={skill.percentage}
                        experience={skill.experience}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>

                  {/* Summary Stats */}
                  <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div className="group">
                      <div
                        className="text-2xl font-bold font-mono transition-transform group-hover:scale-110"
                        style={{ color: currentCategory.color }}
                      >
                        {currentCategory.skills.length}
                      </div>
                      <div className="text-xs font-mono text-gray-500 mt-1">Skills</div>
                    </div>
                    <div className="group">
                      <div className="text-2xl font-bold font-mono text-purple-400 transition-transform group-hover:scale-110">
                        {Math.round(
                          currentCategory.skills.reduce((acc, s) => acc + s.percentage, 0) /
                            currentCategory.skills.length
                        )}
                        %
                      </div>
                      <div className="text-xs font-mono text-gray-500 mt-1">Avg Level</div>
                    </div>
                    <div className="group">
                      <div className="text-2xl font-bold font-mono text-green-400 transition-transform group-hover:scale-110">
                        2y
                      </div>
                      <div className="text-xs font-mono text-gray-500 mt-1">Experience</div>
                    </div>
                  </div>
                </GlassCard>
              </Card3D>
            </motion.div>
          </AnimatePresence>

          {/* Experience Summary Card - Interactive Terminal Style */}
          <motion.div className="skill-card">
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
              {/* Output content */}
              <p className="text-gray-300 leading-relaxed text-base">
                2 years of hands-on backend development experience with{" "}
                <span className="text-[#ff79c6] font-semibold">Python</span>,{" "}
                <span className="text-[#8be9fd] font-semibold">Django</span>, and{" "}
                <span className="text-[#50fa7b] font-semibold">FastAPI</span>. Specialized in
                building scalable APIs, optimizing database performance, and implementing robust
                system architectures.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "Django",
                  "FastAPI",
                  "PostgreSQL",
                  "Docker",
                  "REST APIs",
                  "Redis",
                  "CI/CD",
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Status indicator */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-[#50fa7b]">●</span>
                  <span className="text-gray-500">Currently learning:</span>
                  <span className="text-[#8be9fd]">Kubernetes, AWS, System Design</span>
                </div>
              </div>
            </InteractiveTerminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
