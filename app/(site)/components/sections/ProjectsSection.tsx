"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface ProjectMedia {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  media: ProjectMedia[];
  features: string[];
  links: {
    github?: string;
    live?: string;
  };
  color: string;
}

// Mock projects with demo video/slideshow data
const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Solution",
    description:
      "A scalable microservices architecture for e-commerce with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Django", "PostgreSQL", "Redis", "Docker", "React"],
    media: [
      { type: "image", src: "/assets/projects/ecommerce-1.jpg" },
      { type: "image", src: "/assets/projects/ecommerce-2.jpg" },
      { type: "image", src: "/assets/projects/ecommerce-3.jpg" },
    ],
    features: ["Real-time Inventory", "Payment Gateway", "Admin Dashboard", "Analytics"],
    links: { github: "#", live: "#" },
    color: "#9333EA",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    subtitle: "Real-time Data Visualization",
    description:
      "FastAPI-based analytics platform with WebSocket support for live data streaming and interactive dashboards.",
    tech: ["FastAPI", "WebSocket", "InfluxDB", "React", "D3.js"],
    media: [
      {
        type: "video",
        src: "/assets/projects/analytics-demo.mp4",
        thumbnail: "/assets/projects/analytics-thumb.jpg",
      },
      { type: "image", src: "/assets/projects/analytics-1.jpg" },
    ],
    features: ["Live Streaming", "Custom Charts", "Alerting System", "Export Reports"],
    links: { github: "#", live: "#" },
    color: "#06B6D4",
  },
  {
    id: "3",
    title: "SaaS Platform",
    subtitle: "Multi-tenant Architecture",
    description:
      "Enterprise-grade SaaS platform with multi-tenancy, role-based access control, and subscription billing.",
    tech: ["Django", "PostgreSQL", "Stripe", "Next.js", "Tailwind"],
    media: [
      { type: "image", src: "/assets/projects/saas-1.jpg" },
      { type: "image", src: "/assets/projects/saas-2.jpg" },
    ],
    features: ["Multi-tenancy", "RBAC", "Stripe Billing", "API Rate Limiting"],
    links: { github: "#" },
    color: "#EC4899",
  },
];

// Clean placeholder for demo - just gradient background with subtle indicator
const PlaceholderMedia = ({ color }: { color: string; index: number }) => (
  <div
    className="w-full h-full flex items-center justify-center relative"
    style={{
      background: `linear-gradient(135deg, ${color}15 0%, ${color}30 50%, ${color}15 100%)`,
    }}
  >
    {/* Subtle project preview indicator */}
    <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-40">
      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
      <span className="text-xs font-mono text-white/60">Media Preview</span>
    </div>
  </div>
);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProject, setActiveProject] = useState(0);
  const [activeSlide, setActiveSlide] = useState<{ [key: string]: number }>({});

  // GSAP scroll animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each project card
      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 100,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = (projectId: string, mediaLength: number) => {
    setActiveSlide((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % mediaLength,
    }));
  };

  const prevSlide = (projectId: string, mediaLength: number) => {
    setActiveSlide((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + mediaLength) % mediaLength,
    }));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center relative overflow-hidden px-6 sm:px-8 lg:px-12 py-24"
    >
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto w-full mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block">
          // 02. Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Projects That
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Showcase
          </span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl">
          Interactive demos and real-world solutions I've built
        </p>
      </motion.div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto w-full space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Media Showcase */}
            <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              {/* Glow effect */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: project.color }}
              />

              {/* Media container */}
              <div className="relative bg-[#0d1117] rounded-2xl overflow-hidden border border-white/10 aspect-video group">
                {/* Slideshow */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide[project.id] || 0}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <PlaceholderMedia color={project.color} index={activeSlide[project.id] || 0} />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {project.media.length > 1 && (
                  <>
                    <button
                      onClick={() => prevSlide(project.id, project.media.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={() => nextSlide(project.id, project.media.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}

                {/* Slide indicators */}
                {project.media.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.media.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide((prev) => ({ ...prev, [project.id]: i }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          (activeSlide[project.id] || 0) === i
                            ? "bg-white w-6"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              {/* Subtitle */}
              <span
                className="text-sm font-mono tracking-wider uppercase"
                style={{ color: project.color }}
              >
                {project.subtitle}
              </span>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-sm font-medium border"
                    style={{
                      borderColor: `${project.color}40`,
                      color: project.color,
                      background: `${project.color}10`,
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                    style={{ color: project.color }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More projects hint */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-500 font-mono text-sm">
          <span className="text-cyan-400">$</span> git log --oneline | wc -l
          <br />
          <span className="text-purple-400">→</span> 50+ projects in the archive
        </p>
      </motion.div>
    </section>
  );
}
