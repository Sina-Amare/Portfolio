"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const methodologySteps = [
  {
    id: 1,
    name: "Planning",
    progress: 100,
    details: ["Design systems before code", "SOLID principles", "Clear interfaces"],
  },
  {
    id: 2,
    name: "Development",
    progress: 85,
    details: ["TDD with 80%+ coverage", "Type-safe code", "Documentation"],
  },
  {
    id: 3,
    name: "Review",
    progress: 70,
    details: ["Code review culture", "Performance profiling", "Security audit"],
  },
  {
    id: 4,
    name: "Deploy",
    progress: 100,
    details: ["CI/CD with GitHub Actions", "Monitoring & alerts", "Zero-downtime"],
  },
];

function ProgressBar({ progress, delay }: { progress: number; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(progress);
    }, delay);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  const filledBlocks = Math.floor(width / 10);
  const blocks = Array.from({ length: 10 }, (_, i) => i < filledBlocks);

  return (
    <span className="font-mono text-sm">
      {blocks.map((filled, i) => (
        <span key={i} className={filled ? "text-cyan-400" : "text-gray-700"}>
          {filled ? "▓" : "░"}
        </span>
      ))}
      <span className="text-gray-500 ml-2">{progress}%</span>
    </span>
  );
}

export default function HowIWork() {
  return (
    <section className="w-full py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">
            {"// Methodology"}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Work
            </span>
          </h3>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Terminal container */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-gray-500 font-mono">
                sina@portfolio ~ methodology
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              {/* Command */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">sina --methodology</span>
                <span className="animate-cursor text-cyan-400 ml-1">_</span>
              </motion.div>

              {/* Output */}
              <div className="space-y-6">
                {methodologySteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="group"
                  >
                    {/* Step header */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-purple-400">[{step.id}/4]</span>
                      <span className="text-white font-semibold">{step.name}</span>
                      <ProgressBar progress={step.progress} delay={600 + index * 200} />
                    </div>

                    {/* Step details */}
                    <div className="pl-8 space-y-1">
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.15 + i * 0.1 }}
                          className="text-gray-500"
                        >
                          <span className="text-cyan-400/60">→</span>
                          <span className="ml-2">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Success message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="pt-4 border-t border-gray-800"
                >
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-400 ml-2">
                    Process validated. Ready for production.
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Ambient glow */}
          <div
            className="absolute -inset-4 -z-10 opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(147,51,234,0.2) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
