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

      {/* Progress Bar - Modern with glow */}
      <div className="relative w-full h-2.5 bg-gray-800/80 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: "linear-gradient(90deg, #14B8A6 0%, #06B6D4 50%, #22D3EE 100%)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        >
          {/* Shine effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ transform: "skewX(-20deg)" }}
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute top-0 h-full rounded-full blur-sm opacity-50"
          style={{
            background: "linear-gradient(90deg, #14B8A6, #06B6D4)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>

      {/* ASCII-style blocks - modern teal color */}
      <div className="mt-2 font-mono text-[10px] text-gray-600 flex gap-[2px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className={`transition-colors duration-200 ${
              inView && i < Math.floor(percentage / 10) ? "text-teal-500/60" : "text-gray-700"
            }`}
            initial={{ opacity: 0.3 }}
            animate={inView && i < Math.floor(percentage / 10) ? { opacity: 1 } : {}}
            transition={{ duration: 0.15, delay: delay + 0.3 + i * 0.08 }}
          >
            ▓
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
