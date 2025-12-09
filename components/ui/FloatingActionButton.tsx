"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FaEnvelope, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Show FAB after scrolling past hero section
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.15); // Show after 15% scroll
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  const actions = [
    { icon: FaEnvelope, label: "Contact", href: "#contact", color: "bg-cyan-500" },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sina-amareh",
      external: true,
      color: "bg-blue-600",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Sina-Amare",
      external: true,
      color: "bg-gray-700",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, i) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  onClick={() => !action.external && setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${action.color} text-white text-sm font-mono shadow-lg hover:scale-105 transition-transform`}
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </Link>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          isOpen
            ? "bg-gray-700 text-white"
            : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
        }`}
        style={{
          boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(6,182,212,0.4)",
        }}
        aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaEnvelope className="w-5 h-5" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
