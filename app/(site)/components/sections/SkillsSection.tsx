"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SkillBar } from "@/components/ui/SkillBar";
import { GlassCard } from "@/components/ui/GlassCard";
import Card3D from "@/components/3d/Card3D";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("backend");

  const skillCategories = {
    backend: {
      title: "Backend Core",
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

  return (
    <section
      id="skills"
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
          // 03. Skills
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            System <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-cyan-400">$</span> monitoring --skills --verbose
          </p>
        </motion.div>

        {/* Terminal-Style Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard variant="terminal" className="p-2">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <span className={activeTab === tab ? "text-[#50fa7b]" : "text-gray-600"}>
                    {activeTab === tab ? "▸" : "▹"}
                  </span>{" "}
                  {skillCategories[tab as keyof typeof skillCategories].title}
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Bars */}
          <motion.div
            key={`bars-${activeTab}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card3D intensity={6}>
              <GlassCard variant="terminal" className="p-6 h-full" glow interactive>
                <div className="flex items-center gap-2 mb-6 pb-3 border-b border-cyan-500/20">
                  <div className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
                  <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                    Proficiency Metrics
                  </span>
                </div>

                <div className="space-y-6">
                  {skillCategories[activeTab as keyof typeof skillCategories].skills.map(
                    (skill, index) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill.name}
                        percentage={skill.percentage}
                        experience={skill.experience}
                        delay={index * 0.1}
                      />
                    )
                  )}
                </div>

                {/* Summary Stats */}
                <div className="mt-6 pt-4 border-t border-cyan-500/20 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold font-mono text-cyan-400">
                      {skillCategories[activeTab as keyof typeof skillCategories].skills.length}
                    </div>
                    <div className="text-xs font-mono text-gray-500 mt-1">Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-purple-400">
                      {Math.round(
                        skillCategories[activeTab as keyof typeof skillCategories].skills.reduce(
                          (acc, s) => acc + s.percentage,
                          0
                        ) / skillCategories[activeTab as keyof typeof skillCategories].skills.length
                      )}
                      %
                    </div>
                    <div className="text-xs font-mono text-gray-500 mt-1">Avg Level</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-[#50fa7b]">2y</div>
                    <div className="text-xs font-mono text-gray-500 mt-1">Experience</div>
                  </div>
                </div>
              </GlassCard>
            </Card3D>
          </motion.div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard variant="subtle" className="p-8 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">$</span> summary --experience
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                2 years of hands-on backend development experience with{" "}
                <span className="text-purple-400 font-semibold">Python</span>,{" "}
                <span className="text-cyan-400 font-semibold">Django</span>, and{" "}
                <span className="text-[#50fa7b] font-semibold">FastAPI</span>. Specialized in
                building scalable APIs, optimizing database performance, and implementing robust
                system architectures.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "REST APIs"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
