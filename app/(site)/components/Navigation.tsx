"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/ui/CommandPalette";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <CommandPalette />
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 flex justify-center z-40 h-16 md:h-20 transition-all duration-300 ${
          scrolled ? "bg-[#0D1117]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl w-full mx-auto px-6 md:px-8 flex justify-between items-center h-full">
          <Link href="/">
            <motion.h1
              className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-[#ff3ea5] via-[#b040ff] to-[#00ffe0] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SINA AMAREH
            </motion.h1>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-sm">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-link relative">
                  <Link href={link.path}>
                    <motion.span
                      className={`font-semibold tracking-wider transition-all duration-300 relative ${
                        pathname === link.path 
                          ? "text-cyan-400" 
                          : "text-gray-400 hover:text-cyan-400"
                      }`}
                    >
                      {link.name}
                      {pathname === link.path && (
                        <motion.div
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                          layoutId="navUnderline"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.span>
                  </Link>
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
          <button className="lg:hidden text-cyan-400" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </motion.nav>
    </>
  );
}
