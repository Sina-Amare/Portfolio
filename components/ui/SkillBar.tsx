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
      className="w-full"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-mono text-gray-300">{skill}</span>
        <div className="flex items-center gap-3">
          {experience && (
            <span className="text-xs text-gray-500 font-mono">({experience})</span>
          )}
          <span className="text-xs font-mono text-cyan-400">{percentage}%</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
      
      {/* ASCII-style progress indicator */}
      <div className="mt-1 font-mono text-xs text-gray-600 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.3 }}
            animate={inView && i < Math.floor(percentage / 10) ? { opacity: 1 } : {}}
            transition={{ duration: 0.1, delay: delay + 0.2 + (i * 0.1) }}
          >
            {i < Math.floor(percentage / 10) ? "█" : "░"}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

