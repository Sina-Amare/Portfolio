"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaSearch, FaHome, FaUser, FaCode, FaBrain, FaEnvelope } from "react-icons/fa";

interface Command {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  keywords: string[];
}

const commands: Command[] = [
  { id: "home", label: "Home", path: "/", icon: <FaHome />, keywords: ["home", "index", "hero"] },
  { id: "about", label: "About", path: "/about", icon: <FaUser />, keywords: ["about", "bio", "profile", "whoami"] },
  { id: "projects", label: "Projects", path: "/projects", icon: <FaCode />, keywords: ["projects", "work", "portfolio"] },
  { id: "skills", label: "Skills", path: "/skills", icon: <FaBrain />, keywords: ["skills", "tech", "stack", "abilities"] },
  { id: "contact", label: "Contact", path: "/contact", icon: <FaEnvelope />, keywords: ["contact", "email", "message"] },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const filteredCommands = commands.filter((cmd) =>
    cmd.keywords.some((keyword) => keyword.toLowerCase().includes(query.toLowerCase())) ||
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Open with Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
      setQuery("");
      setSelectedIndex(0);
    }

    // Close with Escape
    if (e.key === "Escape") {
      setIsOpen(false);
      setQuery("");
    }

    // Navigate with arrow keys
    if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
      if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        router.push(filteredCommands[selectedIndex].path);
        setIsOpen(false);
        setQuery("");
      }
    }
  }, [isOpen, selectedIndex, filteredCommands, router]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleSelect = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Command Palette */}
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#1a1f2e]/95 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-700/50">
                <FaSearch className="text-gray-500 text-sm" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 outline-none font-mono text-sm"
                  autoFocus
                />
                <kbd className="px-2 py-1 text-xs font-mono bg-gray-800/50 text-gray-400 rounded border border-gray-700">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, index) => (
                    <motion.button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd.path)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 text-left
                        transition-colors duration-150
                        ${
                          index === selectedIndex
                            ? "bg-cyan-500/10 border-l-2 border-cyan-500"
                            : "border-l-2 border-transparent hover:bg-white/5"
                        }
                      `}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className={`text-lg ${index === selectedIndex ? "text-cyan-400" : "text-gray-500"}`}>
                        {cmd.icon}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-mono text-gray-200">{cmd.label}</div>
                        <div className="text-xs font-mono text-gray-500">{cmd.path}</div>
                      </div>
                      <kbd className="px-2 py-1 text-xs font-mono bg-gray-800/50 text-gray-500 rounded border border-gray-700">
                        ⏎
                      </kbd>
                    </motion.button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500 font-mono text-sm">
                    No results found for "{query}"
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              <div className="px-4 py-2 border-t border-gray-700/50 bg-gray-900/30">
                <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>Navigate with ↑↓ • Select with ⏎</span>
                  <span className="text-cyan-500/70">Cmd+K to toggle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

