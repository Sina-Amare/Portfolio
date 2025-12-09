"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveTerminalProps {
  title: string;
  command: string;
  children: React.ReactNode;
  secretCommands?: Record<string, React.ReactNode>;
  hintCommand?: string;
}

export default function InteractiveTerminal({
  title,
  command,
  children,
  secretCommands = {},
  hintCommand,
}: InteractiveTerminalProps) {
  const [userInput, setUserInput] = useState("");
  const [easterEggOutput, setEasterEggOutput] = useState<React.ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show hint after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && userInput.trim()) {
        const cmd = userInput.trim();
        // Case-insensitive command matching
        const matchingKey = Object.keys(secretCommands).find(
          (key) => key.toLowerCase() === cmd.toLowerCase()
        );
        if (matchingKey) {
          setEasterEggOutput(secretCommands[matchingKey]);
          setShowHint(false);
        } else {
          setEasterEggOutput(
            <motion.div
              className="text-red-400 font-mono text-sm"
              initial={{ x: -10 }}
              animate={{ x: [0, -5, 5, -3, 3, 0] }}
              transition={{ duration: 0.4 }}
            >
              bash: {userInput}: command not found
            </motion.div>
          );
        }
        setUserInput("");
        // Clear output after 8 seconds
        setTimeout(() => setEasterEggOutput(null), 8000);
      }
    },
    [userInput, secretCommands]
  );

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-cyan-500/20"
      style={{
        background: "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(10,14,20,0.98) 100%)",
        boxShadow: "0 0 40px rgba(6,182,212,0.08)",
      }}
      onClick={focusInput}
    >
      {/* Terminal Chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff605c]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd44]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ca4e]" />
          <span className="ml-2 text-xs text-gray-500 font-mono">{title}</span>
        </div>
        {/* Easter egg hint */}
        <AnimatePresence>
          {showHint && hintCommand && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-[10px] font-mono text-cyan-500/50 cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setUserInput(hintCommand);
                focusInput();
              }}
            >
              💡 try: {hintCommand}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        {/* Command */}
        <div className="text-gray-400 mb-4">
          <span className="text-cyan-400">$</span> {command}
        </div>

        {/* Output */}
        <div className="space-y-4 text-gray-300">{children}</div>

        {/* Easter egg output with WOW animation */}
        <AnimatePresence>
          {easterEggOutput && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              className="mt-6 p-5 rounded-xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(147,51,234,0.1) 100%)",
                border: "1px solid rgba(6,182,212,0.3)",
                boxShadow: "0 0 30px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">{easterEggOutput}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive input line - cursor RIGHT AFTER $ */}
        <div className="mt-4 text-gray-400 flex items-center">
          <span className="text-cyan-400">$</span>
          <span className="ml-1">
            {!userInput && !isTyping && <span className="animate-cursor text-cyan-400">▌</span>}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            className="flex-1 bg-transparent outline-none text-cyan-300 font-mono placeholder:text-gray-600 caret-cyan-400"
            placeholder={showHint && !userInput ? `type "${hintCommand}" and press Enter` : ""}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
