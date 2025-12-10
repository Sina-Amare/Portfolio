"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Career Track Data
const careerData = [
  {
    year: "2025",
    duration: "6 months",
    title: "Python Developer",
    company: "Dekamond",
    logo: "/assets/images/dekamond-logo.png",
    location: "Hybrid",
    link: "https://kaleri.ai",
    linkLabel: "Kaleri.ai",
    summary:
      "Full-stack AI/automation engineering across business intelligence, RAG systems, and developer tooling for Kaleri.ai.",
    highlights: [
      "Architected AI-powered business intelligence system using LangGraph for automated financial analysis",
      "Built MCP server enabling AI agents to query Notion databases for real-time insights",
      "Designed RAG pipelines for Kaleri.ai, improving nutrition calculation accuracy",
      "Reduced API costs by 70% through model optimization and provider evaluation",
      "Created automated HR analytics integrating ClickUp with KPI tracking",
      "Developed Telegram bot for automated code review of job applicants",
      "Built customer support chatbot with RAG over 1000+ historical Q&As",
      "Scraped and cleaned datasets from Persian/Russian food websites",
      "Performed cross-platform QA testing (Android, iOS, Desktop) to identify bugs and UX issues",
    ],
    tech: ["Python", "LangGraph", "RAG", "FastAPI", "PostgreSQL", "Telegram API"],
  },
  {
    year: "2024",
    duration: "2mo intern + 4mo dev",
    title: "Django Developer",
    company: "Arnikup",
    logo: "/assets/images/arnikup-logo.png",
    location: "Remote",
    summary: "Backend development for food delivery platform. Team of 5 (2 backend, 3 frontend).",
    highlights: [
      "Developed RESTful APIs for real-time order management and tracking",
      "Optimized PostgreSQL queries, fixing N+1 problems with proper indexing",
      "Built comprehensive Swagger/OpenAPI documentation for frontend team",
      "Containerized environment with Docker Compose for consistent workflows",
      "Implemented Redis caching for frequently accessed data",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "Docker", "Swagger", "Redis"],
  },
  {
    year: "2020",
    duration: "Self-taught",
    title: "Started Coding",
    company: "Learning Journey",
    logo: null,
    location: null,
    summary: "From C++ basics to full-stack Python development through personal projects.",
    highlights: [
      "Built desktop applications with PyQt5 and SQLite",
      "Created automation scripts and web scrapers",
      "Learned database design and SQL fundamentals",
    ],
    tech: ["C++", "Python", "PyQt5", "SQLite"],
  },
];

// Education Track Data
const educationData = [
  {
    year: "2025 →",
    title: "M.Sc. Software Engineering",
    institution: "Islamic Azad University",
    branch: "Science and Research Branch",
    status: "In Progress",
    focus: "Advanced software architecture and AI systems",
  },
  {
    year: "2020 - 2024",
    title: "B.Sc. Computer Science",
    institution: "University of Guilan",
    branch: "Iran",
    status: "Graduated",
    focus: "Algorithms, Data Structures, Software Engineering",
    thesis: "Particle Swarm Optimization algorithms research",
  },
];

// Expandable Card Component with improved UX
function CareerCard({ item, index }: { item: (typeof careerData)[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      {/* Timeline Node */}
      <div className="absolute -left-12 top-0">
        <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
      </div>

      {/* Card */}
      <motion.div
        className={`p-5 rounded-xl bg-[#0d1117]/80 border transition-all duration-300 cursor-pointer group ${
          isExpanded
            ? "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            : "border-gray-800 hover:border-cyan-500/30"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Header with Logo */}
        <div className="flex items-start gap-3 mb-3">
          {item.logo && (
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
              <Image
                src={item.logo}
                alt={item.company}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h4>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                {item.year}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm text-gray-400">{item.company}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <span>🔗</span>
                  <span>{item.linkLabel || item.link}</span>
                </a>
              )}
            </div>
            <p className="text-xs text-gray-600 font-mono">
              {item.duration} {item.location && `• ${item.location}`}
            </p>
          </div>
        </div>

        {/* Summary - Always Visible */}
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{item.summary}</p>

        {/* CTA Button - Prominent and attention-grabbing */}
        {!isExpanded && (
          <motion.div
            className="mb-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono transition-all hover:bg-cyan-500/20 hover:border-cyan-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(6,182,212,0)",
                  "0 0 15px rgba(6,182,212,0.3)",
                  "0 0 0 rgba(6,182,212,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <span>📋</span>
              <span>View {item.highlights.length} achievements</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        )}

        {/* Expandable Highlights */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-cyan-500/20 pt-4 mb-4">
                <p className="text-xs text-cyan-400 font-mono mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Key Achievements
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-sm text-gray-400 leading-relaxed flex gap-2"
                    >
                      <span className="text-cyan-500 flex-shrink-0">→</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Collapse button */}
              <motion.button
                className="w-full py-2 text-xs text-gray-500 hover:text-cyan-400 font-mono transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01 }}
              >
                <span>Collapse</span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ▲
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tech.slice(0, isExpanded ? item.tech.length : 4).map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-800 text-gray-400"
            >
              {t}
            </span>
          ))}
          {!isExpanded && item.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-800 text-gray-500">
              +{item.tech.length - 4}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="w-full py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">
            {"// Journey"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              &
            </span>{" "}
            Education
          </h2>
          <p className="text-gray-500 mt-3 font-mono text-sm">
            5 years coding • 1 year professional • Click cards to expand
          </p>
        </motion.div>

        {/* Dual Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Career */}
          <div className="relative">
            {/* Column Header */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <span className="text-cyan-400 text-lg">💼</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Career</h3>
                <p className="text-gray-500 text-xs font-mono">1 year experience</p>
              </div>
            </motion.div>

            {/* Career Timeline Line */}
            <div className="absolute left-5 top-20 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent" />

            {/* Career Items */}
            <div className="space-y-6 pl-12">
              {careerData.map((item, index) => (
                <CareerCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="relative">
            {/* Column Header */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 text-lg">🎓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Education</h3>
                <p className="text-gray-500 text-xs font-mono">Academic Background</p>
              </div>
            </motion.div>

            {/* Education Timeline Line */}
            <div className="absolute left-5 top-20 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />

            {/* Education Items */}
            <div className="space-y-6 pl-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-12 top-0">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        item.status === "In Progress"
                          ? "bg-purple-400 border-purple-400 shadow-[0_0_12px_rgba(147,51,234,0.6)] animate-pulse"
                          : "bg-purple-400 border-purple-400 shadow-[0_0_12px_rgba(147,51,234,0.6)]"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="p-5 rounded-xl bg-[#0d1117]/80 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          item.status === "In Progress"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-green-500/10 text-green-400"
                        }`}
                      >
                        {item.status}
                      </span>
                      <span className="text-xs font-mono text-purple-400">{item.year}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.institution}</p>
                    <p className="text-xs text-gray-600 font-mono mb-3">{item.branch}</p>

                    {/* Focus Area */}
                    <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                      <div className="flex gap-2">
                        <span className="text-purple-500/60">›</span>
                        <span>{item.focus}</span>
                      </div>
                      {item.thesis && (
                        <div className="flex gap-2">
                          <span className="text-purple-500/60">›</span>
                          <span>{item.thesis}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Teaching Note */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute -left-12 top-0">
                  <div className="w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-600" />
                </div>
                <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-800/50">
                  <p className="text-xs text-gray-500">
                    <span className="text-gray-400 font-mono">// Also:</span> English & Konkur
                    teaching — developed communication and mentoring skills
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
