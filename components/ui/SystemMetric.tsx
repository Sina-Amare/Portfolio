"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SystemMetricProps {
  label: string;
  value: string | number;
  unit?: string;
  animated?: boolean;
  color?: "cyan" | "purple" | "green" | "orange";
}

export const SystemMetric = ({ 
  label, 
  value, 
  unit = "", 
  animated = true,
  color = "cyan" 
}: SystemMetricProps) => {
  const [displayValue, setDisplayValue] = useState(animated ? "..." : value);

  const colorClasses = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    green: "text-[#50fa7b]",
    orange: "text-[#ffb86c]"
  };

  useEffect(() => {
    if (animated) {
      const timeout = setTimeout(() => {
        setDisplayValue(value);
      }, Math.random() * 500 + 200);
      return () => clearTimeout(timeout);
    }
  }, [value, animated]);

  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
        {label}
      </span>
      <div className="flex items-baseline gap-1">
        <motion.span 
          className={`text-lg font-mono font-bold ${colorClasses[color]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {displayValue}
        </motion.span>
        {unit && (
          <span className="text-xs text-gray-500 font-mono">{unit}</span>
        )}
      </div>
    </motion.div>
  );
};

