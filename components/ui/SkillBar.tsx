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

  const filledBlocks = Math.ceil(percentage / 10);

  return (
    <motion.div
      ref={ref}
      className="w-full group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-sm font-mono text-gray-200 tracking-wide">{skill}</span>
        <div className="flex items-center gap-3">
          {experience && <span className="text-xs text-gray-500 font-mono">({experience})</span>}
          <span className="text-xs font-mono font-semibold text-teal-400">{percentage}%</span>
        </div>
      </div>

      {/* Unified Progress Bar - connected segments */}
      <div className="relative w-full h-5 bg-gray-900/50 rounded-lg overflow-hidden border border-white/5">
        {/* Animated fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, #0D9488 0%, #14B8A6 30%, #06B6D4 70%, #22D3EE 100%)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.1, ease: "easeOut" }}
        >
          {/* Shine overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
            style={{ height: "50%" }}
          />
        </motion.div>

        {/* Segment lines overlay - visual only */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-gray-900/40 last:border-r-0" />
          ))}
        </div>

        {/* End glow */}
        <motion.div
          className="absolute inset-y-0 w-2 rounded-full blur-sm"
          style={{
            background: "rgba(34, 211, 238, 0.8)",
            right: `${100 - percentage}%`,
            marginRight: "-4px",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.8 }}
        />
      </div>
    </motion.div>
  );
};
