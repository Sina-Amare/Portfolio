"use client";
import { motion } from "framer-motion";

export const StatusBadge = () => {
  return (
    <motion.div
      className="absolute top-6 right-6 z-20 hidden lg:block"
      initial={{ opacity: 0, x: 20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div
        className="px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2.5 border shadow-lg"
        style={{
          background: "rgba(13, 17, 23, 0.6)",
          borderColor: "rgba(80, 250, 123, 0.3)",
          boxShadow: "0 0 20px rgba(80, 250, 123, 0.15)",
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
          <div className="absolute w-2 h-2 rounded-full bg-[#50fa7b] animate-ping"></div>
        </div>
        <span className="text-xs font-mono text-gray-300 font-medium tracking-wide">
          Available for Work
        </span>
      </div>
    </motion.div>
  );
};
