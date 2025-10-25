"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaCopy } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [copied, setCopied] = useState("Copy");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Calculate parallax effect based on mouse position
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) / 50; // Max ±20px
      const moveY = (e.clientY - centerY) / 50; // Max ±20px

      setParallax({ x: Math.max(-20, Math.min(20, moveX)), y: Math.max(-20, Math.min(20, moveY)) });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleCopy = () => {
    const codeString = `const coder = {\n  name: 'Sina Amareh',\n  skills: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Docker'],\n  focus: 'Backend Architecture & System Design',\n  hireable: true\n};`;
    navigator.clipboard.writeText(codeString);
    setCopied("Copied!");
    setTimeout(() => setCopied("Copy"), 2000);
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#070810]/0 via-[#0c0d14] to-[#121522]/0"
        style={{ x: parallax.x, y: parallax.y }}
      ></motion.div>
      {/* Grid Overlay */}
      <motion.div
        className="absolute inset-0 bg-repeat opacity-[0.04]"
        style={{
          backgroundImage: "url(/assets/grid.svg)",
          x: parallax.x * 0.5,
          y: parallax.y * 0.5,
        }}
      ></motion.div>
      {/* Animated gradient streaks */}
      <motion.div
        className="absolute inset-0 bg-gradient-animated bg-[length:400%_400%] opacity-30"
        style={{ x: parallax.x * 0.3, y: parallax.y * 0.3 }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 mix-blend-lighten"
        style={{
          background: `radial-gradient(circle, rgba(0,255,255,0.12) 0%, transparent 70%)`,
          filter: "blur(50px)",
          transform: `translate(${cursorPos.x - 150}px, ${cursorPos.y - 150}px)`,
        }}
      />

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 px-6 md:px-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-7xl font-extrabold leading-[1.1] tracking-tight text-white z-10 light-sweep-text"
          >
            Hello <span className="inline-block animate-wave">👋</span>
            <br />
            I'm{" "}
            <span className="bg-gradient-to-r from-[#ff3ea5] via-[#b040ff] to-[#00ffe0] bg-clip-text text-transparent">
              Sina Amareh
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-[#e6e6e6] text-xl max-w-[48ch] z-10"
          >
            Engineering intelligent systems where <span className="text-[#00ffe0]">clarity</span>{" "}
            meets <span className="text-[#ff3ea5]">imagination</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 z-10"
          >
            <Link href="/resume.pdf" passHref legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ffe0aa" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#ff3ea5] to-[#00ffe0] transition-all duration-300"
                aria-label="Get my resume"
              >
                Get Resume ⬇️
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-md mx-auto z-10"
        >
          <div className="glassmorphic-code-block p-6 text-gray-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
              <button
                onClick={handleCopy}
                className="ml-auto px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center gap-1.5 border border-white/10"
                aria-label="Copy code to clipboard"
              >
                {copied === "Copy" && (
                  <>
                    <FaCopy className="w-3 h-3" /> Copy
                  </>
                )}
                {copied === "Copied!" && "Copied!"}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="font-mono text-sm text-slate-200 whitespace-pre-wrap">
                <code className="code-highlight">
                  <span className="text-[#c792ea]">const</span>{" "}
                  <span className="text-[#82aaff]">coder</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#f07178]">name</span>:{" "}
                  <span className="text-[#c3e88d]">'Sina Amareh'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#f07178]">skills</span>: [
                  <span className="text-[#c3e88d]">'React'</span>,{" "}
                  <span className="text-[#c3e88d]">'Next.js'</span>,{" "}
                  <span className="text-[#c3e88d]">'NestJS'</span>,{" "}
                  <span className="text-[#c3e88d]">'PostgreSQL'</span>,{" "}
                  <span className="text-[#c3e88d]">'Docker'</span>
                  ],
                  <br />
                  &nbsp;&nbsp;<span className="text-[#f07178]">focus</span>:{" "}
                  <span className="text-[#c3e88d]">'Backend Architecture & System Design'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#f07178]">hireable</span>:{" "}
                  <span className="text-[#89ddff]">true</span>,
                  <br />
                  {"};"}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
