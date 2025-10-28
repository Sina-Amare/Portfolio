"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { FaServer, FaReact, FaDocker } from "react-icons/fa";

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
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
        {/* Refined Background Glows - More Subtle */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[25%] right-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[90px] animate-pulse-subtle" />
          <div className="absolute bottom-[25%] left-[15%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse-subtle" />
        </div>

        {/* Section Title */}
        <div className="w-full max-w-[1100px] mx-auto mb-8">
          <motion.h2
            className="font-mono text-xl md:text-2xl text-gray-400 mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {displayedTitle}
            {!titleTyped && <span className="typing-cursor"></span>}
          </motion.h2>

          {/* Introduction Text - More Concise */}
          <motion.p
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[650px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: titleTyped ? 1 : 0, y: titleTyped ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting{" "}
            <span className="text-purple-400 font-semibold">scalable systems</span> and{" "}
            <span className="text-cyan-400 font-semibold">elegant solutions</span> that transform
            complex challenges into maintainable, production-ready code.
          </motion.p>
        </div>

        {/* Code Block and Photo Container - Tighter Grid */}
        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Code Block - Refined */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="code-block-refined p-[1px] rounded-lg">
              <div className="bg-[#282a36]/90 rounded-[7px] p-3.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff605c]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd44]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ca4e]"></div>
                  <span className="ml-2 text-[11px] text-gray-400 font-mono">Component.jsx</span>
                </div>
                <pre className="!bg-transparent !border-none !overflow-visible !p-0 whitespace-pre pb-1.5">
                  <code
                    className="language-jsx !bg-transparent !pb-0.5 !border-none !overflow-visible !block text-[13px]"
                    style={{
                      overflow: "visible",
                      width: "100%",
                      maxWidth: "100%",
                      whiteSpace: "pre",
                      lineHeight: "1.65",
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

          {/* Photo Reveal - Seamlessly Integrated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: photoRevealed ? 1 : 0,
              scale: photoRevealed ? 1 : 0.95,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Vignette overlay - CSS class applied immediately */}
              <div className="absolute inset-0 pointer-events-none z-10 about-image-vignette" />

              {/* Subtle background glow - CSS class */}
              <div className="absolute -inset-12 -z-10 blur-[80px] about-image-glow" />

              {/* Image with Next.js optimization and CSS-based effects */}
              <Image
                src="/me.jpg"
                alt="Sina Amareh"
                width={420}
                height={420}
                priority
                quality={95}
                className="w-full h-auto object-cover about-profile-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: EXPERTISE - PROFESSIONAL & COMPACT */}
      <section
        ref={expertiseRef}
        className="w-full flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Subtle Background Glow */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-purple-600/8 blur-[100px]" />
        </div>

        <div className="w-full max-w-[1100px] mx-auto">
          {/* Refined Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 max-w-[700px] mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Technical Expertise
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Specializing in{" "}
              <span className="text-purple-400 font-semibold">backend architecture</span> and{" "}
              <span className="text-cyan-400 font-semibold">system design</span>, with a focus on
              scalability and performance.
            </p>
          </motion.div>

          {/* Expertise Cards - More Professional Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className="relative overflow-hidden rounded-xl p-6 group cursor-pointer bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                style={{
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex flex-col gap-3.5 items-center text-center relative z-10">
                  <div className="transition-transform group-hover:scale-105 duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-display font-semibold text-white">{card.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </div>

                {/* Subtle gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA - More Refined */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="py-3.5 px-7 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-[#9333EA] to-[#06B6D4] transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
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
