'use client';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="relative z-10 mt-20 py-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="border-t border-brand-accent/30 w-full max-w-xs mx-auto pt-6">
            <p className="text-brand-textSecondary font-sans text-sm text-center">
              © {new Date().getFullYear()} Sina Amareh — Engineering Clarity Between Intelligence and Design
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
