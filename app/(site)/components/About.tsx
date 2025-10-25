"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background layers with new palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-amber-50 to-brand-primary z-0" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(214, 185, 140, 0.1), transparent 60%),
                      linear-gradient(to bottom right, #f8f6f1, #e8e3d7)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Left Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-display font-bold text-brand-secondary leading-tight mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My{" "}
              <span className="bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent">
                Journey
              </span>{" "}
              Unfolds
            </motion.h2>

            {/* Timeline items */}
            <div className="relative space-y-12 pl-8 border-l-2 border-brand-accent/30">
              {/* Timeline separator with curve */}
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-brand-accent border-4 border-white shadow-lg"></div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-accent/20 shadow-lg"
              >
                <div className="absolute -left-11 top-0 w-5 h-5 rounded-full bg-brand-highlight border-4 border-white shadow-md"></div>
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Early Foundations</h3>
                <p className="text-brand-textSecondary">
                  Started my journey in computer science with a passion for creating elegant
                  solutions to complex problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-accent/20 shadow-lg"
              >
                <div className="absolute -left-11 top-0 w-5 h-5 rounded-full bg-brand-highlight border-4 border-white shadow-md"></div>
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Professional Growth</h3>
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
                className="relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-accent/20 shadow-lg"
              >
                <div className="absolute -left-11 top-0 w-5 h-5 rounded-full bg-brand-highlight border-4 border-white shadow-md"></div>
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Current Focus</h3>
                <p className="text-brand-textSecondary">
                  Specializing in AI engineering, creating systems that blend technical precision
                  with creative vision.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10 w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Creative portrait placement */}
              <div className="relative overflow-hidden rounded-[40px] shadow-2xl border-4 border-brand-accent/30 shadow-brand-accent/20 z-10 mx-auto w-4/5 lg:w-full">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&h=1000&fit=crop&crop=faces"
                  alt="Sina Amareh - Workspace"
                  className="w-full h-auto object-cover mix-blend-multiply brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-brand-highlight/10" />
                <div className="absolute inset-0 rounded-[40px] border-transparent shadow-[inset_0_0_30px_#d6b98c40] pointer-events-none" />
              </div>
            </motion.div>

            <div className="space-y-6 text-brand-textSecondary text-lg leading-relaxed bg-white/30 backdrop-blur-sm p-8 rounded-2xl border border-brand-accent/20 shadow-lg">
              <p>
                I'm <span className="font-semibold text-brand-secondary">Sina Amareh</span>, a
                systems-minded engineer passionate about creating technology that is intelligent,
                ethical, and timeless. My approach combines design sensitivity with structured
                engineering—where simplicity and precision coexist.
              </p>

              <p>
                With a foundation in{" "}
                <span className="font-medium text-brand-secondary">
                  Python, TypeScript, and modern web architecture
                </span>
                , I craft digital products that merge clarity with performance. I believe great
                engineering is not about complexity, but the art of creating balance.
              </p>
            </div>

            <motion.div
              className="pt-8 border-t border-brand-accent/30 bg-white/30 backdrop-blur-sm p-8 rounded-2xl border border-brand-accent/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="font-display text-xl text-brand-secondary font-semibold mb-4 text-center">
                Core Principles
              </h3>
              <ul className="space-y-3 text-brand-textSecondary grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">✦</span> Design-driven Engineering
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">✦</span> Ethical & Human-Centered AI
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">✦</span> Scalable & Maintainable
                  Systems
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">✦</span> Creative Minimalism
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
