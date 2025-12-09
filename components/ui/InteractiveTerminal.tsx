"use client";
import { useState, useRef, useEffect } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  // Show hint after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userInput.trim()) {
      const cmd = userInput.toLowerCase().trim();
      if (secretCommands[cmd]) {
        setEasterEggOutput(secretCommands[cmd]);
        setShowHint(false);
      } else {
        setEasterEggOutput(
          <div className="text-red-400 font-mono text-sm">bash: {userInput}: command not found</div>
        );
      }
      setUserInput("");
      // Clear output after 5 seconds
      setTimeout(() => setEasterEggOutput(null), 5000);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-cyan-500/20 cursor-text"
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
              className="text-[10px] font-mono text-gray-600 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setUserInput(hintCommand);
                focusInput();
              }}
            >
              try: {hintCommand}
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

        {/* Easter egg output */}
        <AnimatePresence>
          {easterEggOutput && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20"
            >
              {easterEggOutput}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive input line */}
        <div className="mt-4 text-gray-400 flex items-center">
          <span className="text-cyan-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 ml-2 bg-transparent outline-none text-cyan-300 font-mono placeholder:text-gray-600 caret-cyan-400"
            placeholder={showHint ? `Try: ${hintCommand || "help"}` : ""}
            spellCheck={false}
            autoComplete="off"
          />
          {!userInput && <span className="animate-cursor text-cyan-400">▌</span>}
        </div>
      </div>
    </div>
  );
}
