"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 flex justify-center z-50 bg-brand-primary/30 backdrop-blur-xl border-b border-brand-accent/30 shadow-sm h-16 md:h-18"
    >
      <div className="max-w-screen-xl w-full mx-auto px-6 md:px-8 flex justify-between items-center h-full">
        <Link href="/">
          <motion.h1
            className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sina Amareh
          </motion.h1>
        </Link>

        <ul className="flex space-x-8 text-sm font-sans">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-link relative">
              <Link href={link.path}>
                <motion.span
                  className={`font-medium transition-all duration-300 relative ${
                    pathname === link.path
                      ? "text-brand-secondary"
                      : "text-brand-textSecondary hover:text-brand-accent"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-highlight rounded-full"
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
