"use client";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "milestone";
  tech?: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Backend Architect",
    organization: "Freelance",
    description:
      "Designing and implementing scalable backend systems for clients. Focus on API development, database optimization, and system architecture.",
    type: "work",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    year: "2023",
    title: "Backend Developer",
    organization: "Professional Employment",
    description:
      "Built production-grade APIs and microservices. Implemented CI/CD pipelines and containerized deployments.",
    type: "work",
    tech: ["Django", "Docker", "Kubernetes", "AWS"],
  },
  {
    year: "2022",
    title: "Started Professional Journey",
    organization: "Self-taught Developer",
    description:
      "Intensive self-study in Python, web frameworks, databases, and system design principles.",
    type: "milestone",
    tech: ["Python", "Django", "SQL", "REST APIs"],
  },
  {
    year: "2021",
    title: "First Lines of Code",
    organization: "Learning Journey Begins",
    description:
      "Discovered programming and fell in love with building things. Started with Python basics and web fundamentals.",
    type: "education",
    tech: ["Python", "HTML/CSS", "JavaScript"],
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
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
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              &
            </span>{" "}
            Growth
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Year badge */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    item.type === "work"
                      ? "bg-cyan-400 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                      : item.type === "milestone"
                        ? "bg-purple-400 border-purple-400 shadow-[0_0_12px_rgba(147,51,234,0.6)]"
                        : "bg-green-400 border-green-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]"
                  }`}
                />
              </div>

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="p-5 rounded-xl bg-[#0d1117]/80 border border-gray-800 hover:border-cyan-500/30 transition-colors">
                  {/* Year */}
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 mb-3">
                    {item.year}
                  </span>

                  {/* Title & Org */}
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{item.organization}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>

                  {/* Tech tags */}
                  {item.tech && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-800 text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
