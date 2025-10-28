"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation, fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

interface BentoItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export const BentoItem = ({ icon, title, description, className = "", delay = 0 }: BentoItemProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer border border-white/5 hover:border-white/10 transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="transition-transform group-hover:scale-105 duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
  const { ref, controls } = useScrollAnimation(0.2);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};

