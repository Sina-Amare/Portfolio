"use client";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      description:
        "A sophisticated analytics platform that leverages machine learning to provide actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "TensorFlow", "Node.js"],
    },
    {
      id: 2,
      title: "Creative Design System",
      description:
        "A comprehensive design system that bridges the gap between design and development teams.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["Design Systems", "Figma", "Storybook"],
    },
    {
      id: 3,
      title: "Eco-Friendly E-commerce",
      description:
        "An e-commerce platform focused on sustainable products with carbon footprint tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Next.js", "TypeScript", "GraphQL"],
    },
    {
      id: 4,
      title: "Health & Wellness App",
      description:
        "A mobile application that combines AI-driven health recommendations with community features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "HealthKit"],
    },
    {
      id: 5,
      title: "Smart Home Dashboard",
      description:
        "An intuitive dashboard for managing IoT devices with real-time monitoring and analytics.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tags: ["Vue.js", "WebSockets", "IoT"],
    },
    {
      id: 6,
      title: "Educational Platform",
      description:
        "An interactive learning platform that personalizes content based on student performance.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      tags: ["Angular", "Machine Learning", "D3.js"],
    },
  ];

  return (
    <Section background="neutral" padding="lg">
      <Container>
        <motion.div
          className="col-span-12 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-textSecondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A collection of my most impactful work, showcasing the intersection of technology,
            design, and innovation.
          </motion.p>
        </motion.div>

        {/* Cinematic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-multiply brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold font-display">{project.title}</h3>
                  <p className="text-cream mt-2 text-sm md:text-base">{project.description}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gold/80 text-white text-xs md:text-sm rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <p className="text-brand-textSecondary">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-gold font-medium hover:text-teal transition-colors">
                    View Details →
                  </button>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gold"></div>
                    <div className="w-3 h-3 rounded-full bg-teal"></div>
                    <div className="w-3 h-3 rounded-full bg-coral"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
