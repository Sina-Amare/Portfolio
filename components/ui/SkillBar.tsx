"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  skill: string;
  percentage: number;
  experience?: string;
  delay?: number;
}

export const SkillBar = ({ skill, percentage, experience, delay = 0 }: SkillBarProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filledBlocks = Math.floor(percentage / 10);

  return (
    <motion.div
      ref={ref}
      className="w-full group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-mono text-gray-200 tracking-wide">{skill}</span>
        <div className="flex items-center gap-3">
          {experience && <span className="text-xs text-gray-500 font-mono">({experience})</span>}
          <span className="text-xs font-mono font-semibold text-teal-400">{percentage}%</span>
        </div>
      </div>

      {/* Unified Progress Bar with ASCII blocks INSIDE */}
      <div className="relative w-full h-6 bg-gray-900/60 rounded-lg overflow-hidden border border-white/10">
        {/* Gradient fill background */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,184,166,0.15) 0%, rgba(6,182,212,0.2) 100%)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.1, ease: "easeOut" }}
        />

        {/* ASCII blocks - unified inside the bar */}
        <div className="absolute inset-0 flex items-center px-2 gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 h-3 rounded-sm transition-all duration-300"
              style={{
                background:
                  i < filledBlocks
                    ? `linear-gradient(90deg, #14B8A6 ${i * 10}%, #06B6D4 ${(i + 1) * 10}%)`
                    : "rgba(255,255,255,0.03)",
                boxShadow: i < filledBlocks ? "0 0 8px rgba(6,182,212,0.3)" : "none",
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                inView
                  ? {
                      opacity: i < filledBlocks ? 1 : 0.3,
                      scaleX: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.3,
                delay: delay + 0.2 + i * 0.05,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Subtle edge glow on filled portion */}
        <motion.div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 90%, rgba(6,182,212,0.4) 100%)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};
