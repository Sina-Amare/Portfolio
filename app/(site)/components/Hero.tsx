"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaCopy } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [copied, setCopied] = useState(false);
  const codeString = `const coder = {\n  name: 'Sina Amareh',\n  skills: ['React', 'NextJS', 'TypeScript', 'Node.js', 'AWS'],\n  hireable: true\n};`;
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Calculate parallax effect based on mouse position
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) / 50; // Max ±20px
      const moveY = (e.clientY - centerY) / 50; // Max ±20px

      setParallax({
        x: Math.max(-20, Math.min(20, moveX)),
        y: Math.max(-20, Math.min(20, moveY)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-screen min-h-screen flex items-center justify-between bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,rgba(0,0,0,1)_100%)] relative overflow-hidden scroll-snap-align-start">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#070810] via-[#0c0d14] to-[#121522]"
        style={{ x: parallax.x, y: parallax.y }}
      ></motion.div>
      {/* Grid Overlay */}
      <motion.div
        className="absolute inset-0 bg-repeat opacity-[0.06]"
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
      ></motion.div>
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 mix-blend-lighten"
        style={{
          background: `radial-gradient(300px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 255, 224, 0.12), transparent 70%)`,
          filter: "blur(50px)",
        }}
      />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,#ff3ea533_0%,transparent_50%)]"></div>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 px-0 sm:px-0 lg:px-0">
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
            className="text-7xl font-extrabold leading-[1.1] tracking-tight text-white z-10"
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
            className="mt-6 text-gray-300 text-xl max-w-[48ch] z-10"
          >
            Building intelligent, scalable systems where{" "}
            <span className="text-[#00ffe0]">clarity</span> meets{" "}
            <span className="text-[#ff3ea5]">imagination</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mt-8 text-3xl text-gray-400 z-10"
          >
            <Link href="#" aria-label="Github">
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <FaGithub className="hover:text-white transition-colors" />
              </motion.div>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <FaLinkedin className="hover:text-white transition-colors" />
              </motion.div>
            </Link>
            <Link href="#" aria-label="Facebook">
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <FaFacebook className="hover:text-white transition-colors" />
              </motion.div>
            </Link>
            <Link href="#" aria-label="Twitter">
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <FaTwitter className="hover:text-white transition-colors" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto z-10"
          >
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 rounded-xl font-semibold text-white border border-[#ff3ea5]/50 bg-gradient-to-r from-[#ff3ea5]/20 to-[#00ffe0]/20 backdrop-blur-md hover:from-[#ff3ea5]/40 hover:to-[#00ffe0]/40 transition-all duration-300 hover:shadow-[0_0_30px_#00ffe0aa]"
                aria-label="Contact Me"
              >
                Contact Me ✉️
              </motion.button>
            </Link>
            <Link href="/resume.pdf" passHref>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00ffe0aa" }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#ff3ea5] to-[#00ffe0] hover:scale-105 hover:shadow-[0_0_25px_#00ffe0aa] transition-all duration-300 active:scale-95"
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
          className="w-full max-w-lg mx-auto z-10"
        >
          <div className="glassmorphic-code-block relative">
            <div className="flex items-center gap-2 p-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <button
                onClick={handleCopy}
                className="ml-auto px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center gap-1.5 border border-white/10"
                aria-label="Copy code to clipboard"
              >
                {copied ? (
                  "Copied!"
                ) : (
                  <>
                    <FaCopy className="w-3 h-3" /> Copy
                  </>
                )}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="font-mono text-sm text-slate-200 whitespace-pre-wrap">
                <code className="code-highlight">
                  <span className="text-[#c792ea]">const</span>{" "}
                  <span className="text-[#82aaff]">coder</span> = {"{"}
                  <br />
                  {"  "}
                  <span className="text-[#f07178]">name</span>:{" "}
                  <span className="text-[#c3e88d]">'Sina Amareh'</span>,
                  <br />
                  {"  "}
                  <span className="text-[#f07178]">skills</span>: [{" "}
                  <span className="text-[#c3e88d]">
                    'React', 'NextJS', 'TypeScript', 'Node.js', 'AWS'
                  </span>{" "}
                  ],
                  <br />
                  {"  "}
                  <span className="text-[#f07178]">hireable</span>:{" "}
                  <span className="text-[#89ddff]">true</span>,
                  <br />
                  {"};"}
                </code>
              </pre>
            </div>
          </div>
          {/* Reflection */}
          <div className="absolute -bottom-1/3 left-0 right-0 h-1/3 w-full bg-gradient-to-b from-[#ff3ea5]/20 to-[#00ffe0]/20 [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-20 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
