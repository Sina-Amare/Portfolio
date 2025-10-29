"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { CopyButton } from "./CopyButton";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  showCopy?: boolean;
  codeContent?: string;
}

export const TerminalWindow = ({
  title = "terminal",
  children,
  className = "",
  showCopy = false,
  codeContent = "",
}: TerminalWindowProps) => {
  return (
    <motion.div
      className={`code-block-glow-wrapper ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#282a36]/80 rounded-xl backdrop-blur-xl overflow-hidden h-full">
        {/* Window Chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
            <span className="ml-2 text-xs text-gray-400 font-mono">{title}</span>
          </div>
          {showCopy && codeContent && <CopyButton textToCopy={codeContent} />}
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </motion.div>
  );
};
