"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastDeploy = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/sina-amareh", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/sina-amareh", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/sina_amareh", label: "Twitter" },
    { icon: <FaEnvelope />, href: "mailto:hello@sina-amareh.dev", label: "Email" },
  ];

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-[#0D1117]/50 backdrop-blur-sm">
      {/* Gradient Top Border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-display bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SINA AMAREH
            </h3>
            <p className="text-sm text-gray-500 font-mono max-w-[30ch]">
              Backend Architect & System Designer
            </p>
            <p className="text-xs text-gray-600 font-mono">
              > Building systems where clarity meets creativity
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <motion.span
                      className="text-sm text-gray-500 hover:text-cyan-400 transition-colors font-mono flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-cyan-500/50">›</span>
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors text-xl"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span>© {currentYear} Sina Amareh</span>
              <span className="hidden md:inline text-gray-700">•</span>
              <span className="text-gray-700">Version 1.0.0</span>
              <span className="hidden md:inline text-gray-700">•</span>
              <span className="text-gray-700">Last Deploy: {lastDeploy}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-700">Built with:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-500">Next.js</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-500">TypeScript</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-500">Tailwind</span>
              </div>
            </div>
          </div>

          {/* System Status */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-xs font-mono text-gray-700">
              <span className="text-[#50fa7b]">›</span> System Status: All services operational{" "}
              <span className="text-[#50fa7b]">✓</span>
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
