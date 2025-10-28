"use client";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  children: ReactNode;
  content: string;
  delay?: number;
}

export const Tooltip = ({ children, content, delay = 0 }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, delay: delay }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#282a36]/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg whitespace-nowrap pointer-events-none z-50"
          >
            <span className="text-xs font-mono text-cyan-300">{content}</span>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
              <div className="border-4 border-transparent border-t-[#282a36]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

