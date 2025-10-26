"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "SKILLS", path: "/skills" },
    { name: "EDUCATION", path: "/education" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 left-0 right-0 flex justify-center z-50 h-16 md:h-20 transition-all duration-300 ${
        scrolled ? "bg-[#0D1117]/70 backdrop-blur-[10px]" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl w-full mx-auto px-6 md:px-8 flex justify-between items-center h-full">
        <Link href="/">
          <motion.h1
            className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-[#ff3ea5] via-[#b040ff] to-[#00ffe0] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(63, 181, 163, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            SINA AMAREH
          </motion.h1>
        </Link>

        <ul className="hidden md:flex space-x-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-link relative">
              <Link href={link.path}>
                <motion.span
                  className={`font-semibold tracking-wider transition-all duration-300 relative ${
                    pathname === link.path ? "text-brand-primary" : "text-brand-textSecondary hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff3ea5] to-[#00ffe0] rounded-full"
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
      </div>
    </motion.nav>
  );
}
