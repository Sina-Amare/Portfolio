"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaServer, FaReact, FaDocker, FaCopy, FaCheck } from "react-icons/fa";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import { useScrollAnimation, fadeInUp, fadeIn } from "@/hooks/useScrollAnimation";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

export default function AboutPage() {
  // --- STATE & HOOKS ---
  const [titleTyped, setTitleTyped] = useState(false);
  const [codeTyped, setCodeTyped] = useState(false);
  const [photoRevealed, setPhotoRevealed] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");
  const [copied, setCopied] = useState(false);

  const magneticRef = useMagneticEffect(0.2);
  const { ref: expertiseRef, controls: expertiseControls } = useScrollAnimation(0.2);

  // --- CONSTANTS ---
  const titleString = "// 01. About Me";
  const codeLines = [
    '<Developer',
    '  name="Sina Amareh"',
    '  role="Backend Architect"',
    '  status="available"',
    '/>'
  ];

  const highlightCode = (line: string) => {
    return line
      .replace(/&lt;/g, '<span class="token tag">&lt;</span>')
      .replace(/&gt;/g, '<span class="token tag">&gt;</span>')
      .replace(/\/&gt;/g, '<span class="token tag">/&gt;</span>')
      .replace(/="([^"]*)"/g, '<span class="token operator">=</span><span class="token string">"$1"</span>')
      .replace(/(\w+)=/g, '<span class="token attr-name">$1</span>=');
  };

  // --- TYPEWRITER EFFECTS ---
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < titleString.length) {
        setDisplayedTitle((prev) => prev + titleString.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setTitleTyped(true);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (titleTyped) {
      let lineIndex = 0;
      let charIndex = 0;
      let currentCode = "";

      const interval = setInterval(() => {
        if (lineIndex < codeLines.length) {
          const currentLine = codeLines[lineIndex];
          if (charIndex < currentLine.length) {
            currentCode += currentLine[charIndex];
            setDisplayedCode(highlightCode(currentCode));
            charIndex++;
          } else {
            if (lineIndex < codeLines.length - 1) {
              currentCode += '\n';
              setDisplayedCode(highlightCode(currentCode));
            }
            lineIndex++;
            charIndex = 0;
          }
        } else {
          clearInterval(interval);
          setCodeTyped(true);
          setTimeout(() => setPhotoRevealed(true), 100);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [titleTyped]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeLines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- EXPERTISE DATA ---
  const expertiseItems = [
    {
      icon: <FaServer className="text-4xl text-purple-400" />,
      title: "Backend Architecture",
      description: "NestJS, PostgreSQL, Microservices & scalable API design",
    },
    {
      icon: <FaReact className="text-4xl text-cyan-400" />,
      title: "Modern Frontend",
      description: "React, Next.js, TypeScript & responsive interfaces",
    },
    {
      icon: <FaDocker className="text-4xl text-blue-400" />,
      title: "DevOps & Cloud",
      description: "Docker, CI/CD pipelines & cloud deployment automation",
    },
  ];

  return (
    <div className="w-full bg-primary-background">
      {/* HERO SECTION - COMPACT */}
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Subtle Background Glows */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[20%] right-[15%] h-[350px] w-[350px] rounded-full bg-purple-600/[0.06] blur-[80px] animate-pulse-subtle" />
          <div className="absolute bottom-[20%] left-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[80px] animate-pulse-subtle" />
        </div>

        {/* Centered Title & Intro */}
        <div className="w-full max-w-[1000px] mx-auto mb-10 text-center">
          <motion.h2
            className="font-mono text-xl md:text-2xl text-gray-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {displayedTitle}
            {!titleTyped && <span className="typing-cursor"></span>}
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: titleTyped ? 1 : 0, y: titleTyped ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building{" "}
            <span className="gradient-text font-semibold">scalable systems</span> and{" "}
            <span className="gradient-text font-semibold">elegant solutions</span> that transform
            complexity into clarity.
          </motion.p>
        </div>

        {/* Code Block + Image Grid - Asymmetric */}
        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-center">
          {/* Code Block - Enhanced with Line Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="code-block-refined p-[1px] rounded-xl">
              <div className="bg-[#282a36]/95 rounded-xl p-4 backdrop-blur-md">
                {/* Window Controls */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff605c]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd44]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00ca4e]"></div>
                    <span className="ml-2 text-[11px] text-gray-400 font-mono">Developer.jsx</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1.5"
                    aria-label="Copy code"
                  >
                    {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    <span className="text-[11px]">{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* Code Content with Line Numbers */}
                <pre className="!bg-transparent !border-none !p-0 overflow-x-auto">
                  <code
                    className="language-jsx !bg-transparent !block text-[13px] leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: displayedCode + (!codeTyped ? '<span class="typing-cursor"></span>' : ""),
                    }}
                  />
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Image - Liquid Morph Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: photoRevealed ? 1 : 0,
              scale: photoRevealed ? 1 : 0.95,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square">
              {/* Subtle Glow Behind */}
              <div className="absolute -inset-8 -z-10 blur-[70px] opacity-40 bg-gradient-to-br from-purple-600/20 to-cyan-500/20" />

              {/* Image Container with Inline Critical Styles */}
              <div className="relative w-full h-full overflow-hidden float-animation">
                <Image
                  src="/me.jpg"
                  alt="Sina Amareh"
                  width={380}
                  height={380}
                  priority
                  quality={95}
                  className="w-full h-full object-cover liquid-morph"
                  style={{
                    // Inline critical styles to prevent flash
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                />
                
                {/* Vignette Overlay - Inline for Instant Application */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(13, 17, 23, 0.4) 60%, rgba(13, 17, 23, 0.9) 90%)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE SECTION - BENTO GRID */}
      <section
        ref={expertiseRef}
        className="w-full flex flex-col items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      >
        {/* Subtle Center Glow */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[90px]" />
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={expertiseControls}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Technical Expertise
            </h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-[550px] mx-auto">
              Specializing in{" "}
              <span className="text-purple-400 font-semibold">backend architecture</span> and{" "}
              <span className="text-cyan-400 font-semibold">system design</span> with a focus on
              performance and scalability.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <BentoGrid>
            {expertiseItems.map((item, index) => (
              <BentoItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </BentoGrid>

          {/* CTA with Magnetic Effect */}
          <motion.div
            initial="hidden"
            animate={expertiseControls}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <button
                ref={magneticRef as any}
                className="magnetic py-3.5 px-8 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#9333EA] to-[#06B6D4] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Let's Build Something Amazing →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] to-[#9333EA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
