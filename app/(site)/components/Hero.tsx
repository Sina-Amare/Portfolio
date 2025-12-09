"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaPlay, FaTerminal } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { StatusBadge } from "./StatusBadge";
import MagneticEffect from "@/components/effects/MagneticEffect";
import { PageBackground } from "@/components/effects/PageBackground";
import { CopyButton } from "@/components/ui/CopyButton";

const Hero = () => {
  const [copied, setCopied] = useState("Copy");
  const [displayedCode, setDisplayedCode] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const outputEndRef = useRef<HTMLDivElement>(null);

  // Terminal command - simple and understandable
  const commandString = `$ curl -X GET https://api.sina.dev/profile`;

  // Output lines for terminal effect - structured like a real API response
  const outputData = [
    { text: "→ Connecting to sina.dev...", delay: 0, type: "info" },
    { text: "→ Fetching profile data...", delay: 400, type: "info" },
    { text: "", delay: 600, type: "blank" },
    { text: "{", delay: 700, type: "json" },
    { text: '  "name": "Sina Amareh",', delay: 800, type: "json" },
    { text: '  "title": "Backend Architect",', delay: 900, type: "json" },
    { text: '  "focus": "Building scalable systems",', delay: 1000, type: "json" },
    { text: '  "experience": "2+ years",', delay: 1100, type: "json" },
    {
      text: '  "stack": ["Python", "Django", "FastAPI", "PostgreSQL"],',
      delay: 1200,
      type: "json",
    },
    { text: '  "status": "Available for hire ✓",', delay: 1300, type: "json" },
    { text: '  "contact": "Scroll down to connect"', delay: 1400, type: "json" },
    { text: "}", delay: 1500, type: "json" },
    { text: "", delay: 1600, type: "blank" },
    { text: "✓ 200 OK — Response received in 42ms", delay: 1700, type: "success" },
  ];

  // Typewriter effect for command
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= commandString.length) {
        setDisplayedCode(commandString);
        clearInterval(interval);
      } else {
        setDisplayedCode(commandString.substring(0, i + 1));
        i++;
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleRun = () => {
    if (showOutput) return; // Prevent multiple runs
    setShowOutput(true);
    setOutputLines([]);

    // Animate output lines one by one
    outputData.forEach((line, index) => {
      setTimeout(() => {
        setOutputLines((prev) => [...prev, line.text]);
        outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, line.delay);
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commandString);
    setCopied("Copied!");
    setTimeout(() => setCopied("Copy"), 2000);
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

          {/* Tagline with animated emphasis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-gray-300 text-[1rem] max-w-[48ch] z-10"
          >
            Engineering intelligent systems where{" "}
            <span className="text-cyan-400 animate-underline">clarity</span> meets{" "}
            <span className="text-pink-400 animate-underline">imagination</span>.
          </motion.p>

          {/* Consolidated Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            <span className="text-sm font-mono text-gray-500">2+ Years</span>
            <span className="text-gray-600">·</span>
            <span className="text-sm font-mono text-gray-500">Backend Specialist</span>
            <span className="text-gray-600">·</span>
            <span className="text-sm font-mono text-green-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Available
            </span>
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

        {/* Right Column - Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto z-10 float-slow px-2 sm:px-0"
        >
          {/* Glowing Border Wrapper - Modern gradient */}
          <div
            className="p-[1px] rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(147,51,234,0.5) 0%, rgba(6,182,212,0.5) 50%, rgba(20,184,166,0.5) 100%)",
            }}
          >
            <div
              className="rounded-xl p-4 sm:p-5 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(10,14,20,0.98) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 40px rgba(6,182,212,0.1)",
              }}
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff605c]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd44]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00ca4e]"></div>
                  <span className="ml-2 text-[10px] sm:text-xs text-gray-500 font-mono flex items-center gap-1">
                    <FaTerminal className="w-2.5 h-2.5" />
                    terminal
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Run Button */}
                  <motion.button
                    onClick={handleRun}
                    disabled={showOutput}
                    whileHover={!showOutput ? { scale: 1.05 } : {}}
                    whileTap={!showOutput ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] sm:text-xs font-mono transition-colors ${
                      showOutput
                        ? "bg-gray-700/30 border-gray-600/30 text-gray-500 cursor-not-allowed"
                        : "bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30"
                    }`}
                    aria-label="Run command"
                  >
                    <FaPlay className="w-2 h-2" />
                    <span>{showOutput ? "Running..." : "Run"}</span>
                  </motion.button>
                  <CopyButton textToCopy={commandString} />
                </div>
              </div>

              {/* Command Display */}
              <div className="font-mono text-[11px] sm:text-xs md:text-sm text-cyan-400 mb-2">
                {displayedCode}
                {displayedCode.length < commandString.length && (
                  <span className="animate-cursor text-cyan-400">▌</span>
                )}
              </div>

              {/* Terminal Output */}
              <AnimatePresence>
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 pt-3 border-t border-gray-700/40"
                  >
                    <div className="font-mono text-[10px] sm:text-xs leading-relaxed space-y-0.5 max-h-[200px] overflow-y-auto custom-scrollbar">
                      {outputLines.map((line, i) => (
                        <div
                          key={i}
                          className={
                            line.startsWith("→")
                              ? "text-gray-500"
                              : line.startsWith("✓")
                                ? "text-green-400"
                                : line.startsWith("{") ||
                                    line.startsWith("}") ||
                                    line.startsWith(" ")
                                  ? "text-purple-400"
                                  : "text-gray-400"
                          }
                        >
                          {line || "\u00A0"}
                        </div>
                      ))}
                      {outputLines.length > 0 && outputLines.length < outputData.length && (
                        <span className="animate-cursor text-green-400">▌</span>
                      )}
                      <div ref={outputEndRef} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
