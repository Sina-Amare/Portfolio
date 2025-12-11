"use client";
import { motion } from "framer-motion";

const methodologySteps = [
  {
    id: 1,
    name: "Problem Analysis",
    status: "core",
    icon: "🎯",
    details: [
      "Define the problem clearly with AI collaboration",
      "Discuss all engineering aspects & edge cases",
      "Research modern solutions & best practices",
    ],
  },
  {
    id: 2,
    name: "PRD & Architecture",
    status: "core",
    icon: "📐",
    details: [
      "Create detailed Product Requirements Document",
      "Define tech stack based on project needs",
      "Design system architecture & data flow",
    ],
  },
  {
    id: 3,
    name: "AI Agent Guidelines",
    status: "active",
    icon: "🤖",
    details: [
      "Ultra-thinking mode for complex decisions",
      "Simplicity over complexity — always",
      "Root cause analysis, not just bug fixing",
      "Stay updated with latest patterns",
    ],
  },
  {
    id: 4,
    name: "MVP & Iteration",
    status: "active",
    icon: "🚀",
    details: [
      "Build incrementally with clear milestones",
      "Version control with meaningful commits",
      "Test continuously, refactor wisely",
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    core: { bg: "bg-green-500/20", text: "text-green-400", label: "Core Practice" },
    active: { bg: "bg-cyan-500/20", text: "text-cyan-400", label: "Active Focus" },
    learning: { bg: "bg-yellow-500/20", text: "text-yellow-400", label: "Expanding" },
  };
  const style = styles[status as keyof typeof styles] || styles.active;

  return (
    <span className={`px-2 py-1 text-xs font-mono rounded ${style.bg} ${style.text}`}>
      {style.label}
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
            {"// AI-Augmented Development"}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Work
            </span>
          </h3>
          <p className="text-gray-500 text-sm mt-2 font-mono max-w-lg mx-auto">
            Leveraging AI as a reasoning companion — not a replacement for engineering discipline
          </p>
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
          <div
            className="rounded-xl overflow-hidden border border-cyan-500/20"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(10,14,20,0.98) 100%)",
              boxShadow: "0 0 40px rgba(6,182,212,0.08)",
            }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff605c]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd44]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ca4e]" />
              <span className="ml-2 text-xs text-gray-500 font-mono">
                terminal — methodology.md
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
                <span className="text-[#50fa7b]">$</span>
                <span className="text-white ml-2">sina --methodology --ai-augmented</span>
                <span className="animate-cursor text-cyan-400 ml-1">_</span>
              </motion.div>

              {/* AI Tools Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-6 flex flex-wrap gap-2"
              >
                <span className="text-gray-500">AI Companions:</span>
                {["Claude Code", "Cursor", "Codex", "Antigravity"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded"
                  >
                    {tool}
                  </span>
                ))}
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
                      <span className="text-xl">{step.icon}</span>
                      <span className="text-white font-semibold">{step.name}</span>
                      <StatusBadge status={step.status} />
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

                {/* Philosophy note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  className="pt-4 border-t border-gray-800"
                >
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-gray-400 ml-2">
                    Philosophy: AI is my reasoning partner — I stay in control, follow engineering
                    principles, and never blindly accept suggestions.
                  </span>
                </motion.div>

                {/* Success message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="pt-2"
                >
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-400 ml-2">
                    Result: Production-ready code with clear architecture.
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
