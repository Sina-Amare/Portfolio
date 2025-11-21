"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiPython,
  SiGit,
  SiNginx,
} from "react-icons/si";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { GlassCard } from "@/components/ui/GlassCard";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";
import Card3D from "@/components/3d/Card3D";
import ParallaxLayer from "@/components/effects/ParallaxLayer";
import PageBackground from "@/components/effects/PageBackground";

export default function AboutPage() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeTyped, setCodeTyped] = useState(false);
  const [importingTech, setImportingTech] = useState<number>(-1);

  const { ref: techStackRef, controls: techStackControls } = useScrollAnimation(0.2);
  const techGridRef = useRef(null);
  const isTechGridInView = useInView(techGridRef, { once: true, amount: 0.2 });

  const journeyCode = `# journey.py

class BackendDeveloper:
    def __init__(self):
        self.name = "Sina Amareh"
        self.role = "Backend Architect & System Designer"
        self.experience_years = 2
        self.employed_duration = "1 year"
        self.location = "Remote (UTC+3:30)"
        
        self.stack = {
            "languages": ["Python"],
            "frameworks": ["Django", "FastAPI", "DRF"],
            "databases": ["PostgreSQL", "Redis"],
            "devops": ["Docker", "Git", "Nginx"]
        }
    
    def philosophy(self):
        return "Building systems where clarity meets creativity"

# Initialize
developer = BackendDeveloper()
print(developer.philosophy())`;

  const highlightedCode = `<span class="token comment"># journey.py</span><br/><br/><span class="token keyword">class</span> <span class="token class-name">BackendDeveloper</span><span class="token punctuation">:</span><br/>    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><br/>        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Sina Amareh"</span><br/>        self<span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token string">"Backend Architect & System Designer"</span><br/>        self<span class="token punctuation">.</span>experience_years <span class="token operator">=</span> <span class="token number">2</span><br/>        self<span class="token punctuation">.</span>employed_duration <span class="token operator">=</span> <span class="token string">"1 year"</span><br/>        self<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">"Remote (UTC+3:30)"</span><br/>        <br/>        self<span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">{</span><br/>            <span class="token string">"languages"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Python"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"frameworks"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Django"</span><span class="token punctuation">,</span> <span class="token string">"FastAPI"</span><span class="token punctuation">,</span> <span class="token string">"DRF"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"databases"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PostgreSQL"</span><span class="token punctuation">,</span> <span class="token string">"Redis"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"devops"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Docker"</span><span class="token punctuation">,</span> <span class="token string">"Git"</span><span class="token punctuation">,</span> <span class="token string">"Nginx"</span><span class="token punctuation">]</span><br/>        <span class="token punctuation">}</span><br/>    <br/>    <span class="token keyword">def</span> <span class="token function">philosophy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><br/>        <span class="token keyword">return</span> <span class="token string">"Building systems where clarity meets creativity"</span><br/><br/><span class="token comment"># Initialize</span><br/>developer <span class="token operator">=</span> BackendDeveloper<span class="token punctuation">(</span><span class="token punctuation">)</span><br/><span class="token keyword">print</span><span class="token punctuation">(</span>developer<span class="token punctuation">.</span>philosophy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>`;

  // Typewriter effect for code
  useEffect(() => {
    let i = 0;
    const codeString = highlightedCode;
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
        setCodeTyped(true);
      } else {
        setDisplayedCode(codeString.substring(0, i));
      }
    }, 8); // Faster for longer code

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { name: "Django", icon: <SiDjango className="text-[#092e20]" />, import: "import django" },
    { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" />, import: "import fastapi" },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#336791]" />,
      import: "import psycopg2",
    },
    { name: "Redis", icon: <SiRedis className="text-[#DC382D]" />, import: "import redis" },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, import: "import docker" },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" />, import: "import python" },
    { name: "Git", icon: <SiGit className="text-[#F05032]" />, import: "import git" },
    { name: "Nginx", icon: <SiNginx className="text-[#009639]" />, import: "import nginx" },
  ];

  // Animate tech stack imports - start earlier, run faster
  useEffect(() => {
    // Start as soon as code starts typing, not when it finishes
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const importInterval = setInterval(() => {
        if (currentIndex < techStack.length) {
          setImportingTech(currentIndex);
          currentIndex++;
        } else {
          clearInterval(importInterval);
          setImportingTech(-1);
        }
      }, 250); // Faster animation (was 400ms)

      return () => clearInterval(importInterval);
    }, 800); // Start shortly after component mounts

    return () => clearTimeout(startDelay);
  }, []); // Run once on mount

  return (
    <div className="w-full bg-primary-background min-h-screen">
      <PageBackground theme="about" />
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Subtle Background Glows - Fixed Position */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[100px] animate-pulse-subtle" />
          <div className="absolute bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[100px] animate-pulse-subtle" />
        </div>

        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-number mb-12"
          >
            // 01. About
          </motion.div>

          {/* Developer Profile - Redesigned without container box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Profile Image directly on page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center space-y-6 h-full"
            >
              {/* Profile Image - Larger and more prominent */}
              <div className="relative w-[320px] h-[320px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/me.jpg"
                    alt="Sina Amareh"
                    width={350}
                    height={350}
                    className="w-full h-full"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      WebkitMaskImage: "radial-gradient(circle, black 85%, transparent 100%)",
                      maskImage: "radial-gradient(circle, black 85%, transparent 100%)",
                    }}
                    priority
                  />
                  {/* Subtle Scan Lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div
                      className="w-full h-full"
                      style={{
                        background: `repeating-linear-gradient(
                          0deg,
                          rgba(0, 0, 0, 0.1) 0px,
                          transparent 1px,
                          transparent 2px,
                          rgba(0, 0, 0, 0.1) 3px
                        )`,
                        animation: "scan 8s linear infinite",
                      }}
                    />
                  </div>
                </div>
                {/* Glowing gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl -z-10 animate-pulse-subtle" />
              </div>

              {/* Info directly below - no container */}
              <div className="w-full max-w-[320px] space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-lg">›</span>
                  <span className="text-lg font-semibold">Sina Amareh</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-purple-500">›</span>
                  <span>Backend Architect & System Designer</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-cyan-400">›</span>
                  <span>
                    Experience: <span className="text-[#50fa7b]">2 years</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-cyan-400">›</span>
                  <span>
                    Employment: <span className="text-[#50fa7b]">1 year</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-green-500">›</span>
                  <span>
                    Status: <span className="text-[#50fa7b] font-semibold">Available for Work</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-purple-500">›</span>
                  <span>Location: Remote (UTC+3:30)</span>
                </div>
              </div>
            </motion.div>

            {/* Journey Code Block - Fixed height without scrollbar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-stretch"
            >
              <TerminalWindow
                title="journey.py"
                className="w-full"
                showCopy={true}
                codeContent={journeyCode}
              >
                <pre
                  className="!bg-transparent !border-none !p-0 whitespace-pre text-xs md:text-sm overflow-hidden"
                  style={{ height: "380px", minHeight: "380px", maxHeight: "380px" }}
                >
                  <code
                    className="language-python !bg-transparent !border-none !block"
                    style={{
                      lineHeight: "1.6",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        displayedCode + (!codeTyped ? '<span class="typing-cursor"></span>' : ""),
                    }}
                  ></code>
                </pre>
              </TerminalWindow>
            </motion.div>
          </div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-20 max-w-[800px] mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-mono">
              <span className="text-[#50fa7b]">"</span>
              <span className="gradient-text font-semibold">
                Building systems where clarity meets creativity
              </span>
              <span className="text-[#50fa7b]">"</span>
            </p>
            <p className="mt-6 text-gray-400 text-base leading-relaxed">
              Specialized in designing and implementing scalable backend architectures. Passionate
              about clean code, system optimization, and creating robust APIs that power modern
              applications.
            </p>
          </motion.div>

          {/* Tech Stack with Animated Imports */}
          <div ref={techStackRef}>
            <motion.div
              initial="hidden"
              animate={techStackControls}
              variants={fadeInUp}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">
                Tech Stack
              </h2>
              <p className="text-gray-400 text-center font-mono text-sm">
                <span className="text-cyan-400">›</span> Loading modules...
              </p>
            </motion.div>

            {/* Tech Grid with WOW scroll animation */}
            <div ref={techGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={
                    isTechGridInView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.7, y: 30 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <Card3D intensity={8}>
                    <GlassCard
                      variant="subtle"
                      interactive
                      className={`p-6 text-center transition-all duration-300 ${
                        importingTech === index
                          ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                          : "hover:border-cyan-500/30"
                      }`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isTechGridInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: index * 0.1 + 0.2,
                        }}
                        className="text-5xl mb-3 flex justify-center"
                      >
                        {tech.icon}
                      </motion.div>
                      <div className="font-mono text-sm text-gray-300 mb-2">{tech.name}</div>
                      <div className="font-mono text-xs text-gray-600">
                        {importingTech === index && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[#50fa7b]"
                          >
                            {tech.import} ✓
                          </motion.span>
                        )}
                      </div>
                    </GlassCard>
                  </Card3D>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate={techStackControls}
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#9333EA] to-[#06B6D4] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow duration-300 relative overflow-hidden group font-mono"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">$ connect --mode=collaborate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] to-[#9333EA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #9333ea, #06b6d4);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
