"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Career Track Data
const careerData = [
  {
    year: "2024",
    title: "Python Developer",
    company: "Dekamond",
    logo: "/assets/images/dekamond-logo.png",
    location: "On-site",
    highlights: [
      "Architected AI-powered business intelligence system using LangGraph for automated financial analysis across departments",
      "Built MCP server integration enabling AI agents to query internal Notion databases for real-time business insights",
      "Designed RAG pipelines for Kaleri.ai nutrition platform, improving calculation accuracy and reducing latency",
      "Reduced API costs by 70% through R&D on model optimization and provider evaluation",
      "Created automated HR analytics system integrating ClickUp data with KPI tracking and recommendation generation",
      "Developed Telegram bot for automated code review of job applicants, analyzing GitHub submissions against standards",
    ],
    tech: ["Python", "LangGraph", "RAG", "Notion API", "FastAPI", "PostgreSQL"],
  },
  {
    year: "2023",
    title: "Django Developer",
    company: "Arnikup",
    logo: "/assets/images/arnikup-logo.png",
    location: "Remote",
    highlights: [
      "Developed RESTful APIs for food delivery platform serving real-time order management and tracking",
      "Implemented efficient database queries with PostgreSQL, optimizing N+1 problems and implementing proper indexing",
      "Built comprehensive API documentation with Swagger/OpenAPI for frontend integration",
      "Containerized development environment with Docker Compose for consistent team workflows",
      "Collaborated in 5-person team (2 backend, 3 frontend) using agile methodology",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "Docker", "Swagger", "Redis"],
  },
  {
    year: "2020",
    title: "Started Coding",
    company: "Self-taught Journey",
    logo: null,
    location: null,
    highlights: [
      "Built desktop applications with PyQt5 and SQLite",
      "Mastered Python fundamentals through projects",
      "Progressed from C++ basics to full-stack development",
    ],
    tech: ["C++", "Python", "PyQt5", "SQLite"],
  },
];

// Education Track Data
const educationData = [
  {
    year: "2024 →",
    title: "M.Sc. Software Engineering",
    institution: "Islamic Azad University",
    branch: "Science and Research Branch",
    status: "In Progress",
    focus: "Advanced software architecture and AI systems",
  },
  {
    year: "2023",
    title: "B.Sc. Computer Science",
    institution: "University of Guilan",
    branch: "Iran",
    status: "Graduated",
    focus: "Particle Swarm Optimization algorithms",
    thesis: "Research on PSO variants for optimization problems",
  },
];

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
            4+ years of coding • 1+ year professional experience
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
                <p className="text-gray-500 text-xs font-mono">Professional Experience</p>
              </div>
            </motion.div>

            {/* Career Timeline Line */}
            <div className="absolute left-5 top-20 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent" />

            {/* Career Items */}
            <div className="space-y-8 pl-12">
              {careerData.map((item, index) => (
                <motion.div
                  key={index}
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
                  <div className="p-5 rounded-xl bg-[#0d1117]/80 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
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
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{item.company}</p>
                        {item.location && (
                          <p className="text-xs text-gray-600 font-mono">{item.location}</p>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {item.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-xs text-gray-500 leading-relaxed flex gap-2">
                          <span className="text-cyan-500/60 flex-shrink-0">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                      {item.highlights.length > 3 && (
                        <li className="text-xs text-gray-600 italic">
                          +{item.highlights.length - 3} more achievements...
                        </li>
                      )}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-800 text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
            <div className="space-y-8 pl-12">
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
                  <div className="p-5 rounded-xl bg-[#0d1117]/80 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group">
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
                    <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.institution}</p>
                    <p className="text-xs text-gray-600 font-mono mb-3">{item.branch}</p>

                    {/* Focus Area */}
                    <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                      <div className="flex gap-2">
                        <span className="text-purple-500/60">›</span>
                        <span>Focus: {item.focus}</span>
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
                  <p className="text-xs text-gray-500 font-mono">
                    <span className="text-gray-400">// Also:</span> English & Konkur teaching
                    experience, developing communication and mentoring skills.
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
