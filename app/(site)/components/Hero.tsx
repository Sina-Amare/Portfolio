"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaPlay, FaTerminal } from "react-icons/fa";
import { useState, useEffect } from "react";
import { StatusBadge } from "./StatusBadge";
import MagneticEffect from "@/components/effects/MagneticEffect";
import { PageBackground } from "@/components/effects/PageBackground";
import { CopyButton } from "@/components/ui/CopyButton";

// Build the full terminal output as a string for typewriter effect
const buildTerminalOutput = () => {
  const lines = [
    "",
    "HTTP/1.1 200 OK",
    "Content-Type: application/json; charset=utf-8",
    "X-Response-Time: 42ms",
    "",
    "{",
    '  "name": "Sina Amareh",',
    '  "role": "Backend Architect",',
    '  "focus": "Building scalable systems",',
    '  "experience": "2+ years",',
    '  "stack": ["Python", "Django", "FastAPI", "PostgreSQL"],',
    '  "status": "available_for_hire",',
    '  "contact": "#contact"',
    "}",
    "",
    "✓ Request completed successfully",
  ];
  return lines.join("\n");
};

const fullOutput = buildTerminalOutput();

const Hero = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [outputTyped, setOutputTyped] = useState("");
  const [commandTyped, setCommandTyped] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const command = "$ curl -s https://api.sina.dev/profile -H 'Accept: application/json'";

  // Typewriter effect for command
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= command.length) {
        setCommandTyped(command);
        clearInterval(interval);
      } else {
        setCommandTyped(command.substring(0, i + 1));
        i++;
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Auto-trigger after 3 seconds if user doesn't click
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showOutput) handleRun();
    }, 3000);
    return () => clearTimeout(timer);
  }, [showOutput]);

  // Keyboard listener for Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !showOutput) handleRun();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showOutput]);

  const handleRun = () => {
    if (showOutput) return;
    setShowOutput(true);

    // Character-by-character typewriter for output
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex >= fullOutput.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      } else {
        setOutputTyped(fullOutput.substring(0, charIndex + 1));
        charIndex++;
      }
    }, 12); // Fast but smooth typing
  };

  // Syntax highlight the typed output
  const renderOutput = () => {
    if (!outputTyped) return null;

    return outputTyped.split("\n").map((line, i) => {
      // HTTP status
      if (line.startsWith("HTTP/")) {
        return (
          <div key={i} className="text-[#50fa7b]">
            {line}
          </div>
        );
      }
      // Headers
      if (line.startsWith("Content-Type") || line.startsWith("X-Response")) {
        return (
          <div key={i} className="text-[#6272a4]">
            {line}
          </div>
        );
      }
      // Success message
      if (line.startsWith("✓")) {
        return (
          <div key={i} className="text-[#50fa7b]">
            {line}
          </div>
        );
      }
      // JSON brackets
      if (line === "{" || line === "}") {
        return (
          <div key={i} className="text-[#f8f8f2]">
            {line}
          </div>
        );
      }
      // JSON key-value lines
      if (line.includes('":')) {
        const parts = line.match(/^(\s*)"([^"]+)":\s*(.+)$/);
        if (parts) {
          const [, indent, key, value] = parts;
          return (
            <div key={i} className="text-[#f8f8f2]">
              {indent}
              <span className="text-[#ff79c6]">"{key}"</span>:{" "}
              {value.startsWith("[") ? (
                <span className="text-[#8be9fd]">{value}</span>
              ) : (
                <span className="text-[#50fa7b]">{value}</span>
              )}
            </div>
          );
        }
      }
      // Empty or other lines
      return <div key={i}>{line || "\u00A0"}</div>;
    });
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Status Badge */}
      <StatusBadge />
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-number mb-4"
          >
            // 00. Home
          </motion.div>

          {/* Hero Heading with Staggered Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[3.5rem] md:text-[4rem] font-bold leading-[1.1] tracking-tight text-gray-50 z-10 font-montserrat"
          >
            Hello <span className="inline-block animate-wave">👋</span> <br />
            <span className="text-gray-100">I'm </span>
            {/* Staggered letter animation for name */}
            <span className="inline-flex overflow-hidden">
              {"Sina Amareh".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-text ${
                    char === " " ? "w-4" : ""
                  }`}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-gray-300 text-[1rem] max-w-[48ch] z-10"
          >
            Engineering intelligent systems where{" "}
            <span className="text-cyan-400 font-medium">clarity</span> meets{" "}
            <span className="text-pink-400 font-medium">imagination</span>.
          </motion.p>

          {/* Consolidated Credentials - Staggered Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="text-sm font-mono text-gray-500 px-2 py-1 rounded bg-white/5"
            >
              2+ Years
            </motion.span>
            <span className="text-gray-600">·</span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="text-sm font-mono text-gray-500 px-2 py-1 rounded bg-white/5"
            >
              Backend Specialist
            </motion.span>
            <span className="text-gray-600">·</span>
            <motion.span
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-sm font-mono text-green-400 flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Available
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mt-8 text-3xl text-gray-400 z-10"
          >
            <MagneticEffect strength={0.15}>
              <Link
                href="https://github.com/sina-amareh"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    color: "#00e0d3",
                    textShadow: "0 0 10px #00e0d3",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="hover:text-accent-cyan transition-colors" />
                </motion.div>
              </Link>
            </MagneticEffect>
            <MagneticEffect strength={0.15}>
              <Link
                href="https://linkedin.com/in/sina-amareh"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    color: "#00e0d3",
                    textShadow: "0 0 10px #00e0d3",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="hover:text-accent-cyan transition-colors" />
                </motion.div>
              </Link>
            </MagneticEffect>
            <MagneticEffect strength={0.15}>
              <Link
                href="https://facebook.com/sina.amareh"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    color: "#00e0d3",
                    textShadow: "0 0 10px #00e0d3",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="hover:text-accent-cyan transition-colors" />
                </motion.div>
              </Link>
            </MagneticEffect>
            <MagneticEffect strength={0.15}>
              <Link
                href="https://twitter.com/sina_amareh"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    color: "#00e0d3",
                    textShadow: "0 0 10px #00e0d3",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="hover:text-accent-cyan transition-colors" />
                </motion.div>
              </Link>
            </MagneticEffect>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 z-10"
          >
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(147, 51, 234, 0.1)",
                  boxShadow: "0 0 10px rgba(147, 51, 234, 0.5), 0 0 20px rgba(6, 182, 212, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center py-[14px] px-[28px] rounded-[8px] text-[1.1rem] font-semibold text-white bg-transparent transition-all duration-300 ease-in-out"
                style={{
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(rgba(13, 17, 23, 1), rgba(13, 17, 23, 1)), linear-gradient(to right, #9333EA, #06B6D4)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  boxShadow: "0 0 5px rgba(147, 51, 234, 0.3)",
                }}
                aria-label="Contact Me"
              >
                Contact Me ✉️
              </motion.button>
            </Link>
            <Link href="/resume.pdf" passHref legacyBehavior>
              <motion.button
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 15px rgba(147, 51, 234, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="get-resume-button py-[14px] px-[28px] rounded-[8px] text-[1.1rem] font-semibold text-white bg-gradient-to-r from-[#9333EA] to-[#06B6D4] border-none transition-all duration-300 ease-in-out"
                style={{
                  boxShadow: "0 0 10px rgba(147, 51, 234, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)",
                }}
                aria-label="Get my resume"
              >
                Get Resume ⬇️
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Terminal Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto z-10 float-slow px-2 sm:px-0"
        >
          {/* Terminal Window */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">
                  sina@portfolio ~ profile
                </span>
              </div>

              {/* Animated Run Button - Pulsing to attract attention */}
              {!showOutput && (
                <div className="flex flex-col items-end gap-1">
                  <motion.button
                    onClick={handleRun}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 8px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-mono hover:bg-green-500/30 transition-colors"
                  >
                    <FaPlay className="w-2.5 h-2.5" />
                    <span>Run</span>
                  </motion.button>
                  <span className="text-[10px] text-gray-500 font-mono">Press Enter ↵</span>
                </div>
              )}
              {showOutput && <span className="text-xs font-mono text-green-400">✓ executed</span>}
            </div>

            {/* Terminal content */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm">
              {/* Command line with typewriter effect */}
              <div className="text-green-400 break-all">
                {commandTyped}
                {commandTyped.length < command.length && (
                  <span className="animate-cursor text-cyan-400">_</span>
                )}
              </div>

              {/* HTTP Response Output - Character-by-character typewriter */}
              {showOutput && (
                <div className="mt-3 space-y-0.5">
                  {renderOutput()}
                  {!isTypingComplete && <span className="animate-cursor text-cyan-400">▌</span>}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
