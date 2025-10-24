"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#1E293B] to-[#0D1117] z-0" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(0,198,255,0.1), transparent 60%),
                      linear-gradient(to bottom right, #0D1117, #1E293B)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 to-brand-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 shadow-brand-accent/10">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&h=1000&fit=crop&crop=faces"
                  alt="Sina Amareh - Workspace"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Enhanced cinematic border glow */}
                <div className="absolute inset-0 rounded-3xl border-transparent shadow-[inset_0_0_20px_#2563eb30] pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A Mind That Builds
              <span className="block bg-gradient-to-r from-brand-accent to-cyan-400 bg-clip-text text-transparent">
                Systems of Clarity
              </span>
            </motion.h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <span className="font-semibold text-white">Sina Amareh</span>, a systems-minded
                engineer passionate about creating technology that is intelligent, ethical, and
                timeless. My approach combines design sensitivity with structured engineering—where
                simplicity and precision coexist.
              </p>

              <p>
                With a foundation in{" "}
                <span className="font-medium text-white">
                  Python, TypeScript, and modern web architecture
                </span>
                , I craft digital products that merge clarity with performance. I believe great
                engineering is not about complexity, but the art of creating balance.
              </p>
            </div>

            <motion.div
              className="pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="font-display text-xl text-white font-semibold mb-4">
                Core Principles
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-brand-accent mr-3">→</span> Design-driven Engineering
                </li>
                <li className="flex items-center">
                  <span className="text-brand-accent mr-3">→</span> Ethical & Human-Centered AI
                </li>
                <li className="flex items-center">
                  <span className="text-brand-accent mr-3">→</span> Scalable & Maintainable Systems
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
