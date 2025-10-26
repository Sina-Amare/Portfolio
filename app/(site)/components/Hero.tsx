"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaCopy } from "react-icons/fa";
import { useState, useEffect } from "react";

const Hero = () => {
  const [copied, setCopied] = useState("Copy");
  const [displayedCode, setDisplayedCode] = useState("");

  const plainCodeString = `const coder = {
  name: 'Sina Amareh',
  skills: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
  focus: 'Backend Architecture & System Design',
  hireable: true
};`;

  const highlightedCodeString = `<span class="token keyword">const</span> <span class="token function-variable function">coder</span> <span class="token operator">=</span> <span class="token punctuation">{</span><br/>  <span class="token property">name</span><span class="token operator">:</span> <span class="token string">'Sina Amareh'</span><span class="token punctuation">,</span><br/>  <span class="token property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'Next.js'</span><span class="token punctuation">,</span> <span class="token string">'NestJS'</span><span class="token punctuation">,</span> <span class="token string">'PostgreSQL'</span><span class="token punctuation">,</span> <span class="token string">'Docker'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>  <span class="token property">focus</span><span class="token operator">:</span> <span class="token string">'Backend Architecture & System Design'</span><span class="token punctuation">,</span><br/>  <span class="token property">hireable</span><span class="token operator">:</span> <span class="token boolean">true</span><br/><span class="token punctuation">};</span>`;

  useEffect(() => {
    let i = 0;
    // Use the highlighted version for the typewriter effect
    const codeString = highlightedCodeString;
    const interval = setInterval(() => {
      // If the current character is the start of an HTML tag, jump to the end of it
      if (codeString[i] === "<") {
        const closingTagIndex = codeString.indexOf(">", i);
        i = closingTagIndex + 1;
      } else {
        i++;
      }

      if (i >= codeString.length) {
        setDisplayedCode(codeString); // Ensure the full string is displayed at the end
        clearInterval(interval);
      } else {
        setDisplayedCode(codeString.substring(0, i));
      }
    }, 25); // Faster typing speed

    return () => clearInterval(interval);
  }, [highlightedCodeString]);

  const handleCopy = () => {
    navigator.clipboard.writeText(plainCodeString);
    setCopied("Copied!");
    setTimeout(() => setCopied("Copy"), 2000);
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glows (Aurora) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Purple/Magenta Blob */}
        <div className="absolute left-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/40 opacity-50 blur-[120px]" />
        {/* Cyan/Teal Blob */}
        <div className="absolute right-[-20%] top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/40 opacity-50 blur-[120px]" />
      </div>
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[4rem] font-bold font-display leading-[1.1] tracking-tight text-gray-50 z-10"
          >
            Hello <span className="inline-block animate-wave">👋</span>, <br /> I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Sina Amareh
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-gray-300 text-[1rem] max-w-[48ch] z-10"
          >
            Engineering intelligent systems where <span className="text-link-blue">clarity</span>{" "}
            meets <span className="text-link-pink">imagination</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mt-8 text-3xl text-gray-400 z-10"
          >
            <Link
              href="https://github.com/sina-amareh"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5, color: "#00e0d3", textShadow: "0 0 10px #00e0d3" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="hover:text-accent-cyan transition-colors" />
              </motion.div>
            </Link>
            <Link
              href="https://linkedin.com/in/sina-amareh"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5, color: "#00e0d3", textShadow: "0 0 10px #00e0d3" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="hover:text-accent-cyan transition-colors" />
              </motion.div>
            </Link>
            <Link
              href="https://facebook.com/sina.amareh"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5, color: "#00e0d3", textShadow: "0 0 10px #00e0d3" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook className="hover:text-accent-cyan transition-colors" />
              </motion.div>
            </Link>
            <Link
              href="https://twitter.com/sina_amareh"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5, color: "#00e0d3", textShadow: "0 0 10px #00e0d3" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className="hover:text-accent-cyan transition-colors" />
              </motion.div>
            </Link>
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

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto z-10 float-slow"
        >
          {/* Glowing Border Wrapper */}
          <div className="code-block-glow-wrapper p-[1.5px] rounded-lg">
            <div className="bg-[#282a36]/80 rounded-[14px] p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                  <span className="ml-2 text-xs text-gray-400 font-mono">zsh</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 rounded-[8px] bg-gray-700/50 hover:bg-gray-600/50 transition-colors text-xs flex items-center gap-1.5 border border-gray-600/50"
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
              <pre className="!bg-transparent !border-none whitespace-pre-wrap break-words pb-6">
                <code
                  className="language-js !bg-transparent !p-0 !border-none"
                  dangerouslySetInnerHTML={{
                    __html: displayedCode + '<span class="typing-cursor"></span>',
                  }}
                ></code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
