"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/ui/CommandPalette";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "ABOUT", path: "#about" },
    { name: "PROJECTS", path: "#projects" },
    { name: "SKILLS", path: "#skills" },
    { name: "CONTACT", path: "#contact" },
  ];

  // Track active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }
      // If at top of page, no section is active
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <CommandPalette />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 flex justify-center z-40 h-16 md:h-20 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D1117]/90 backdrop-blur-xl shadow-lg shadow-purple-900/10"
            : "bg-[#0D1117]/60 backdrop-blur-md"
        }`}
      >
        {/* Animated gradient bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
          style={{
            backgroundSize: "200% 100%",
            animation: scrolled ? "gradient-shift 3s ease infinite" : "none",
            opacity: scrolled ? 1 : 0.3,
          }}
        />
        <div className="max-w-screen-xl w-full mx-auto px-6 md:px-8 flex justify-between items-center h-full">
          <Link href="/">
            <motion.h1
              className="text-xl font-bold font-display tracking-tight bg-clip-text text-transparent relative"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ff3ea5, #b040ff, #00ffe0, #b040ff, #ff3ea5)",
                backgroundSize: "200% 100%",
                animation: "gradient-shift 4s ease infinite",
              }}
              whileHover={{
                scale: 1.08,
                textShadow: "0 0 30px rgba(176, 64, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -2, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              SINA AMAREH
            </motion.h1>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-sm">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-link relative">
                  <a href={link.path} onClick={(e) => scrollToSection(e, link.path)}>
                    <motion.span
                      className={`font-semibold tracking-wider transition-all duration-300 relative ${
                        activeSection === link.path
                          ? "text-cyan-400"
                          : "text-gray-400 hover:text-cyan-400"
                      }`}
                    >
                      {link.name}
                    </motion.span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Command Palette Hint */}
            <motion.kbd
              className="hidden lg:flex items-center gap-1 px-2 py-1 text-xs font-mono bg-white/5 text-gray-500 rounded border border-white/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.3)" }}
            >
              <span>⌘</span>
              <span>K</span>
            </motion.kbd>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-[#0D1117]/95 backdrop-blur-xl border-l border-gray-800/50 z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                <h2 className="text-lg font-bold bg-gradient-to-r from-[#ff3ea5] via-[#b040ff] to-[#00ffe0] bg-clip-text text-transparent">
                  MENU
                </h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <a
                        href={link.path}
                        className={`block text-lg font-semibold tracking-wider transition-all duration-300 ${
                          activeSection === link.path
                            ? "text-cyan-400"
                            : "text-gray-400 hover:text-cyan-400 hover:translate-x-2"
                        }`}
                        onClick={(e) => scrollToSection(e, link.path)}
                      >
                        {link.name}
                        {activeSection === link.path && (
                          <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-2" />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer with command palette hint */}
              <div className="p-6 border-t border-gray-800/50">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10 font-mono">
                    ⌘K
                  </kbd>
                  <span>Quick navigation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
