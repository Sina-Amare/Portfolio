"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiDjango, SiFastapi, SiPostgresql, SiRedis, SiDocker, SiGraphql } from "react-icons/si";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  features: string[];
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Backend API",
      description:
        "Scalable microservices architecture for e-commerce platform with Django & PostgreSQL",
      tech: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker"],
      features: ["JWT Auth", "Product Catalog", "Order Processing", "Redis Caching"],
      icon: <SiDjango className="text-3xl text-[#092e20]" />,
    },
    {
      id: "2",
      title: "Real-time Analytics API",
      description:
        "FastAPI-based analytics platform with WebSocket support for live data streaming",
      tech: ["FastAPI", "WebSocket", "InfluxDB", "Redis", "Docker"],
      features: ["Live Streaming", "Time-series Data", "Custom Dashboards", "Alerting"],
      icon: <SiFastapi className="text-3xl text-[#009688]" />,
    },
    {
      id: "3",
      title: "Multi-tenant SaaS Backend",
      description: "Django-powered SaaS platform with PostgreSQL schema isolation and JWT auth",
      tech: ["Django", "PostgreSQL", "JWT", "Stripe", "Docker"],
      features: ["Multi-tenancy", "RBAC", "Subscription Billing", "API Rate Limiting"],
      icon: <SiPostgresql className="text-3xl text-[#336791]" />,
    },
    {
      id: "4",
      title: "GraphQL API Gateway",
      description: "Unified GraphQL gateway aggregating multiple microservices with FastAPI",
      tech: ["FastAPI", "GraphQL", "Strawberry", "Redis", "Docker"],
      features: ["Schema Federation", "Query Caching", "Real-time Subscriptions"],
      icon: <SiGraphql className="text-3xl text-[#E10098]" />,
    },
    {
      id: "5",
      title: "CI/CD Pipeline Automation",
      description:
        "Automated deployment pipeline with Docker, GitHub Actions, and zero-downtime deploys",
      tech: ["Docker", "GitHub Actions", "Nginx", "PostgreSQL"],
      features: ["Blue-green Deploy", "Automated Testing", "Rollback System"],
      icon: <SiDocker className="text-3xl text-[#2496ED]" />,
    },
    {
      id: "6",
      title: "Database Performance Optimization",
      description: "Query optimization project improving PostgreSQL performance by 400%",
      tech: ["PostgreSQL", "Django ORM", "Redis", "Monitoring"],
      features: ["Query Analysis", "Indexing Strategy", "Connection Pooling"],
      icon: <SiRedis className="text-3xl text-[#DC382D]" />,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-number mb-12"
        >
          // 02. Projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-cyan-400">$</span> curl -X GET /api/v1/projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setExpandedProject(project.id)}
              onMouseLeave={() => setExpandedProject(null)}
            >
              <GlassCard
                variant="terminal"
                className="p-6 h-full flex flex-col transition-all duration-300 hover:border-cyan-500/50"
                glow={expandedProject === project.id}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <span className="px-2 py-1 rounded border border-[#50fa7b] text-[#50fa7b] font-mono text-xs font-bold">
                      200
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2 font-mono">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{project.description}</p>

                {/* Features (show on hover) */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    expandedProject === project.id
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="py-2 border-t border-cyan-500/20 mb-3">
                    <div className="text-xs font-mono text-gray-500 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs text-cyan-400 font-mono">
                          › {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-cyan-500/20">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <GlassCard variant="subtle" className="p-6 text-center">
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-[#50fa7b]">✓</span> {projects.length} projects loaded •{" "}
              <span className="text-cyan-400">Status: 200 OK</span>
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
