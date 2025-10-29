"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiDjango, SiFastapi, SiPostgresql, SiRedis, SiDocker, SiGraphql } from "react-icons/si";
import PageBackground from "@/components/effects/PageBackground";

interface Project {
  id: string;
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  status: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  architecture?: string;
  github?: string;
  demo?: string;
  icon: React.ReactNode;
}

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      endpoint: "/api/v1/projects/ecommerce-backend",
      method: "GET",
      status: 200,
      title: "E-commerce Backend API",
      description:
        "Scalable microservices architecture for e-commerce platform with Django & PostgreSQL",
      longDescription:
        "Comprehensive backend system handling authentication, product catalog, orders, and payments with Redis caching layer.",
      tech: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker"],
      features: [
        "JWT Authentication & Authorization",
        "Product & Inventory Management",
        "Order Processing Pipeline",
        "Payment Gateway Integration",
        "Real-time Notifications (Celery)",
        "Redis Caching Layer",
      ],
      architecture: "Microservices with API Gateway pattern",
      icon: <SiDjango className="text-4xl text-[#092e20]" />,
    },
    {
      id: "2",
      endpoint: "/api/v1/projects/analytics-dashboard",
      method: "GET",
      status: 200,
      title: "Real-time Analytics API",
      description:
        "FastAPI-based analytics platform with WebSocket support for live data streaming",
      longDescription:
        "High-performance analytics system processing time-series data with WebSocket connections for real-time updates.",
      tech: ["FastAPI", "WebSocket", "InfluxDB", "Redis", "Docker"],
      features: [
        "WebSocket Live Data Streaming",
        "Time-series Data Processing",
        "Custom Metrics & Dashboards",
        "Data Aggregation Pipeline",
        "Real-time Alerting System",
        "Historical Data Analysis",
      ],
      architecture: "Event-driven architecture with message queues",
      icon: <SiFastapi className="text-4xl text-[#009688]" />,
    },
    {
      id: "3",
      endpoint: "/api/v1/projects/saas-platform",
      method: "GET",
      status: 200,
      title: "Multi-tenant SaaS Backend",
      description: "Django-powered SaaS platform with PostgreSQL schema isolation and JWT auth",
      longDescription:
        "Enterprise-grade multi-tenant system with isolated databases, role-based access control, and subscription management.",
      tech: ["Django", "PostgreSQL", "JWT", "Stripe", "Docker", "Nginx"],
      features: [
        "Schema-based Tenant Isolation",
        "Role-based Access Control (RBAC)",
        "Subscription Management",
        "Usage Tracking & Billing",
        "Multi-region Deployment",
        "API Rate Limiting",
      ],
      architecture: "Multi-tenant with shared database, separate schemas",
      icon: <SiPostgresql className="text-4xl text-[#336791]" />,
    },
    {
      id: "4",
      endpoint: "/api/v1/projects/graphql-gateway",
      method: "POST",
      status: 200,
      title: "GraphQL API Gateway",
      description: "Unified GraphQL gateway aggregating multiple microservices with FastAPI",
      longDescription:
        "API gateway layer providing a single GraphQL interface to multiple backend services with intelligent caching.",
      tech: ["FastAPI", "GraphQL", "Strawberry", "Redis", "Docker"],
      features: [
        "Unified GraphQL Schema",
        "Service Aggregation Layer",
        "Intelligent Query Caching",
        "Real-time Subscriptions",
        "Authentication Middleware",
        "Performance Monitoring",
      ],
      architecture: "API Gateway pattern with service mesh",
      icon: <SiGraphql className="text-4xl text-[#E10098]" />,
    },
    {
      id: "5",
      endpoint: "/api/v1/projects/ci-cd-automation",
      method: "GET",
      status: 200,
      title: "CI/CD Pipeline Automation",
      description:
        "Automated deployment pipeline with Docker, GitHub Actions, and comprehensive testing",
      longDescription:
        "Complete DevOps solution automating build, test, and deployment processes with zero-downtime deployments.",
      tech: ["Docker", "GitHub Actions", "Nginx", "PostgreSQL", "Redis"],
      features: [
        "Automated Testing Pipeline",
        "Docker Multi-stage Builds",
        "Blue-green Deployments",
        "Automated Rollback System",
        "Infrastructure as Code",
        "Monitoring & Alerting",
      ],
      architecture: "CI/CD with containerized deployments",
      icon: <SiDocker className="text-4xl text-[#2496ED]" />,
    },
    {
      id: "6",
      endpoint: "/api/v1/projects/database-optimization",
      method: "GET",
      status: 200,
      title: "Database Performance Optimization",
      description: "Query optimization project improving PostgreSQL performance by 400%",
      longDescription:
        "Comprehensive database optimization including indexing strategies, query rewriting, and connection pooling.",
      tech: ["PostgreSQL", "Django ORM", "Redis", "pgAdmin", "Monitoring"],
      features: [
        "Query Performance Analysis",
        "Strategic Index Implementation",
        "Connection Pooling (PgBouncer)",
        "N+1 Query Elimination",
        "Materialized Views",
        "Performance Monitoring Dashboard",
      ],
      architecture: "Optimized relational database with caching layer",
      icon: <SiRedis className="text-4xl text-[#DC382D]" />,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "django", label: "Django" },
    { id: "fastapi", label: "FastAPI" },
    { id: "postgresql", label: "PostgreSQL" },
    { id: "docker", label: "Docker" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.tech.some((t) => t.toLowerCase().includes(selectedFilter)));

  const getMethodColor = (method: string) => {
    const colors = {
      GET: "text-[#50fa7b] border-[#50fa7b]",
      POST: "text-cyan-400 border-cyan-400",
      PUT: "text-[#ffb86c] border-[#ffb86c]",
      DELETE: "text-[#ff5555] border-[#ff5555]",
    };
    return colors[method as keyof typeof colors] || colors.GET;
  };

  return (
    <>
      <PageBackground theme="projects" />
      <div className="w-full bg-primary-background min-h-screen">
        <section className="w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* Background Effects - Fixed Position */}
          <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
            <div className="absolute top-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[100px] animate-pulse-subtle" />
            <div className="absolute bottom-[20%] left-[15%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[100px] animate-pulse-subtle" />
          </div>

          <div className="w-full max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-number mb-12"
            >
              // 02. Projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                API <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-gray-400 font-mono text-sm">
                <span className="text-cyan-400">$</span> curl -X GET /api/v1/projects
              </p>
            </motion.div>

            {/* Terminal-style Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <GlassCard variant="terminal" className="p-4">
                <div className="flex items-center gap-2 mb-3 text-sm font-mono text-gray-400">
                  <span className="text-[#50fa7b]">$</span>
                  <span>filter --tech=</span>
                  <span className="text-cyan-400">{selectedFilter}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-300 ${
                        selectedFilter === filter.id
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                          : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-[520px]"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    className="relative w-full h-full transition-transform duration-500 cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCard === project.id ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                    onClick={() => setFlippedCard(flippedCard === project.id ? null : project.id)}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute w-full h-full"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <GlassCard variant="terminal" className="p-6 h-full flex flex-col" glow>
                        {/* HTTP Method & Status */}
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded border font-mono text-xs font-bold ${getMethodColor(project.method)}`}
                            >
                              {project.method}
                            </span>
                            <span className="px-2 py-1 rounded border border-[#50fa7b] text-[#50fa7b] font-mono text-xs font-bold">
                              {project.status}
                            </span>
                          </div>
                          <div className="text-2xl">{project.icon}</div>
                        </div>

                        {/* Endpoint */}
                        <div className="mb-4">
                          <code className="text-xs font-mono text-gray-500 break-all">
                            {project.endpoint}
                          </code>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg font-bold text-white mb-2 font-mono">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 flex-grow">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
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

                        {/* Click to flip hint */}
                        <div className="text-xs font-mono text-gray-600 text-center pt-3 border-t border-cyan-500/20">
                          <span className="text-cyan-400">›</span> Click to view details
                        </div>
                      </GlassCard>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute w-full h-full"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <GlassCard
                        variant="terminal"
                        className="p-6 h-full flex flex-col overflow-y-auto custom-scrollbar"
                      >
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
                          <h4 className="text-sm font-mono text-cyan-400 uppercase">Details</h4>
                          <div className="text-2xl">{project.icon}</div>
                        </div>

                        <h3 className="text-base font-bold text-white mb-3 font-mono">
                          {project.title}
                        </h3>

                        <p className="text-xs text-gray-400 mb-4">{project.longDescription}</p>

                        {/* Architecture */}
                        {project.architecture && (
                          <div className="mb-4">
                            <div className="text-xs font-mono text-gray-500 mb-1">
                              Architecture:
                            </div>
                            <div className="text-xs text-cyan-400 font-mono">
                              {project.architecture}
                            </div>
                          </div>
                        )}

                        {/* Features */}
                        <div className="mb-4 flex-grow">
                          <div className="text-xs font-mono text-gray-500 mb-2">Key Features:</div>
                          <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="text-xs text-gray-400 font-mono flex items-start gap-2"
                              >
                                <span className="text-[#50fa7b]">›</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Curl Example */}
                        <div className="mt-auto pt-3 border-t border-cyan-500/20">
                          <code className="text-xs font-mono text-gray-600 block mb-3">
                            $ curl -X {project.method} {project.endpoint}
                          </code>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded text-xs font-mono text-gray-400 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaGithub /> Code
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded text-xs font-mono text-gray-400 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaExternalLinkAlt /> Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <GlassCard variant="subtle" className="p-6 text-center">
                <p className="text-gray-400 font-mono text-sm">
                  <span className="text-[#50fa7b]">✓</span> Fetched {filteredProjects.length}{" "}
                  project
                  {filteredProjects.length !== 1 ? "s" : ""} •{" "}
                  <span className="text-cyan-400">Status: 200 OK</span> • Response time: ~
                  {Math.floor(Math.random() * 50 + 30)}ms
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #9333ea, #06b6d4);
            border-radius: 2px;
          }
        `}</style>
      </div>
    </>
  );
}
