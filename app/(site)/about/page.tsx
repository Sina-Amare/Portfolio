"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  FaServer,
  FaReact,
  FaDocker,
} from "react-icons/fa";

export default function AboutPage() {
  // --- STATE & HOOKS ---
  const [titleTyped, setTitleTyped] = useState(false);
  const [codeTyped, setCodeTyped] = useState(false);
  const [photoRevealed, setPhotoRevealed] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");

  // --- CONSTANTS ---
  const titleString = "// 01. About Me";
  const codeString = `<span class="token tag">&lt;Developer</span>
  <span class="token attr-name">name</span><span class="token operator">=</span><span class="token string">"Sina Amareh"</span>
  <span class="token attr-name">role</span><span class="token operator">=</span><span class="token string">"Backend Architect"</span>
  <span class="token attr-name">status</span><span class="token operator">=</span><span class="token string">"available"</span>
<span class="token tag">/&gt;</span>`;

  // --- INTERSECTION OBSERVERS ---
  const [expertiseRef, expertiseInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // --- TYPEWRITER EFFECTS (MUCH FASTER) ---
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
    }, 15); // Faster: 30ms → 15ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (titleTyped) {
      let i = 0;
      const interval = setInterval(() => {
        if (codeString[i] === "<") {
          const closingTagIndex = codeString.indexOf(">", i);
          i = closingTagIndex + 1;
        } else {
          i++;
        }

        if (i >= codeString.length) {
          setDisplayedCode(codeString);
          clearInterval(interval);
          setTimeout(() => {
            setCodeTyped(true);
            setTimeout(() => setPhotoRevealed(true), 100); // Faster: 150ms → 100ms
          }, 100); // Faster: 200ms → 100ms
        } else {
          setDisplayedCode(codeString.substring(0, i));
        }
      }, 8); // Faster: 15ms → 8ms
      return () => clearInterval(interval);
    }
  }, [titleTyped, codeString]);

  // --- EXPERTISE DATA (3 CARDS) ---
  const expertiseCards = [
    {
      icon: <FaServer className="text-5xl text-purple-400" />,
      title: "Backend Architecture",
      description: "NestJS, PostgreSQL, Microservices & API design",
    },
    {
      icon: <FaReact className="text-5xl text-cyan-400" />,
      title: "Modern Frontend",
      description: "React, Next.js, TypeScript & responsive interfaces",
    },
    {
      icon: <FaDocker className="text-5xl text-blue-400" />,
      title: "DevOps & Infrastructure",
      description: "Docker, CI/CD & cloud deployment automation",
    },
  ];

  return (
    <div className="w-full bg-primary-background">
      {/* SECTION 1: HERO INTRODUCTION WITH CODE-TO-PHOTO REVEAL */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
        {/* Background Glows */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[20%] right-[15%] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/30 blur-[120px] animate-pulse-slow" />
        </div>

        {/* Section Title */}
        <motion.h2
          className="font-mono text-2xl md:text-3xl text-gray-400 mb-12 self-start max-w-[1200px] w-full mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {displayedTitle}
          {!titleTyped && <span className="typing-cursor"></span>}
        </motion.h2>

        {/* Code Block and Photo Container */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="code-block-glow-wrapper p-[1.5px] rounded-lg">
              <div className="bg-[#282a36]/80 rounded-[14px] p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                  <span className="ml-2 text-xs text-gray-400 font-mono">Component.jsx</span>
                </div>
                <pre className="!bg-transparent !border-none !overflow-visible !p-0 whitespace-pre pb-2">
                  <code
                    className="language-jsx !bg-transparent !pb-0.5 !border-none !overflow-visible !block text-sm"
                    style={{
                      overflow: "visible",
                      width: "100%",
                      maxWidth: "100%",
                      whiteSpace: "pre",
                      lineHeight: "1.6",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        displayedCode + (!codeTyped ? '<span class="typing-cursor"></span>' : ""),
                    }}
                  ></code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Photo Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: photoRevealed ? 1 : 0,
              scale: photoRevealed ? 1 : 0.95,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center float-slow"
          >
            <div
              className="relative"
              style={{
                padding: "4px",
                background: "linear-gradient(135deg, #9333EA 0%, #06B6D4 100%)",
                borderRadius: "16px",
                boxShadow: "0 0 40px rgba(147, 51, 234, 0.5), 0 0 80px rgba(6, 182, 212, 0.3)",
              }}
            >
              <img
                src="/me.jpg"
                alt="Sina Amareh"
                className="rounded-[14px] w-full max-w-[450px] h-auto object-cover"
                style={{
                  backgroundColor: "#0d1117",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONDENSED INTRO + EXPERTISE */}
      <section
        ref={expertiseRef}
        className="w-full flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Background Glow */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[150px]" />
        </div>

        <div className="w-full max-w-[1200px] mx-auto">
          {/* Condensed Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-[800px] mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Crafting Digital Excellence
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in <span className="text-purple-400 font-semibold">backend architecture</span> and{" "}
              <span className="text-cyan-400 font-semibold">system design</span>, building software that's both 
              elegant and robust. My approach combines technical expertise with user-centric thinking.
            </p>
          </motion.div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)",
                }}
                className="relative overflow-hidden rounded-xl p-8 group cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex flex-col gap-4 items-center text-center">
                  <div className="transition-transform group-hover:scale-110 duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-display font-semibold text-white">{card.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{card.description}</p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="py-4 px-8 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-[#9333EA] to-[#06B6D4] transition-all duration-300"
                style={{
                  boxShadow: "0 0 15px rgba(147, 51, 234, 0.4), 0 0 30px rgba(6, 182, 212, 0.2)",
                }}
              >
                Let's Build Something Together →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}