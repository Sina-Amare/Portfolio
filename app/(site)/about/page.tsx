"use client";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <Section background="light" padding="lg">
      <Container>
        {/* Left column - Timeline - spans 4 columns */}
        <div className="col-span-12 md:col-span-4 space-y-12 relative">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink leading-tight mb-12 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              Journey
            </span>{" "}
            Unfolds
          </motion.h2>

          {/* Timeline */}
          <div className="relative space-y-12 pl-8 border-l-2 border-gold/30 ml-4">
            {/* Timeline separator with curve */}
            <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-white shadow-lg"></div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl md:rounded-2xl border-gold/20 shadow-lg"
            >
              <div className="absolute -left-1 top-0 w-5 h-5 rounded-full bg-teal border-4 border-white shadow-md"></div>
              <h3 className="text-xl font-bold text-ink mb-2">Early Foundations</h3>
              <p className="text-brand-textSecondary">
                Started my journey in computer science with a passion for creating elegant solutions
                to complex problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl md:rounded-2xl border border-gold/20 shadow-lg"
            >
              <div className="absolute -left-11 top-0 w-5 h-5 rounded-full bg-teal border-4 border-white shadow-md"></div>
              <h3 className="text-xl font-bold text-ink mb-2">Professional Growth</h3>
              <p className="text-brand-textSecondary">
                Developed expertise in full-stack development, AI integration, and user-centered
                design principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl md:rounded-2xl border border-gold/20 shadow-lg"
            >
              <div className="absolute -left-11 top-0 w-5 h-5 rounded-full bg-teal border-4 border-white shadow-md"></div>
              <h3 className="text-xl font-bold text-ink mb-2">Current Focus</h3>
              <p className="text-brand-textSecondary">
                Specializing in AI engineering, creating systems that blend technical precision with
                creative vision.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right column - Content - spans 8 columns */}
        <div className="col-span-12 md:col-span-8 mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Creative portrait placement */}
            <div className="relative overflow-hidden rounded-full shadow-2xl border-4 border-gold/30 shadow-gold/20 z-10 w-4/5 mx-auto aspect-square max-w-md">
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&h=800&fit=crop&crop=faces"
                alt="Sina Amareh - Workspace"
                className="w-full h-full object-cover mix-blend-multiply brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-teal/10" />
              <div className="absolute inset-0 rounded-full border-transparent shadow-[inset_0_0_30px_#d6b98c40] pointer-events-none" />
            </div>
          </motion.div>

          <div className="space-y-6 text-brand-textSecondary text-lg leading-relaxed bg-white/30 backdrop-blur-sm p-8 rounded-xl md:rounded-2xl border border-gold/20 shadow-lg max-w-[65ch] mx-auto md:mx-0">
            <p>
              I'm <span className="font-semibold text-ink">Sina Amareh</span>, a systems-minded
              engineer passionate about creating technology that is intelligent, ethical, and
              timeless. My approach combines design sensitivity with structured engineering—where
              simplicity and precision coexist.
            </p>

            <p>
              With a foundation in{" "}
              <span className="font-medium text-ink">
                Python, TypeScript, and modern web architecture
              </span>
              , I craft digital products that merge clarity with performance. I believe great
              engineering is not about complexity, but the art of creating balance.
            </p>
          </div>

          <motion.div
            className="pt-8 border-t border-gold/30 bg-white/30 backdrop-blur-sm p-8 rounded-xl md:rounded-2xl border border-gold/20 shadow-lg max-w-[65ch] mx-auto md:mx-0 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="font-display text-xl text-ink font-semibold mb-4 text-center md:text-left">
              Core Principles
            </h3>
            <ul className="space-y-3 text-brand-textSecondary grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span> Design-driven Engineering
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span> Ethical & Human-Centered AI
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span> Scalable & Maintainable Systems
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span> Creative Minimalism
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
