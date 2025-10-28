"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  SiNginx
} from "react-icons/si";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { GlassCard } from "@/components/ui/GlassCard";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";

export default function AboutPage() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeTyped, setCodeTyped] = useState(false);
  const [importingTech, setImportingTech] = useState<number>(-1);

  const { ref: techStackRef, controls: techStackControls } = useScrollAnimation(0.2);

  const journeyCode = `# journey.py

class BackendDeveloper:
    def __init__(self):
        self.name = "Sina Amareh"
        self.role = "Backend Architect & System Designer"
        self.experience_years = 2
        self.employed_duration = "1 year"
        self.location = "Remote (UTC+3:30)"
        
    def expertise(self):
        return {
            "languages": ["Python"],
            "frameworks": ["Django", "FastAPI", "DRF"],
            "databases": ["PostgreSQL", "Redis", "MongoDB"],
            "devops": ["Docker", "CI/CD", "Git", "Nginx"],
            "focus": [
                "API Design & Development",
                "System Architecture",
                "Database Optimization",
                "Microservices"
            ]
        }
    
    def philosophy(self):
        return "Building systems where clarity meets creativity"
        
    @property
    def status(self):
        return "Available for interesting projects"

# Initialize
developer = BackendDeveloper()
print(developer.philosophy())`;

  const highlightedCode = `<span class="token comment"># journey.py</span><br/><br/><span class="token keyword">class</span> <span class="token class-name">BackendDeveloper</span><span class="token punctuation">:</span><br/>    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><br/>        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Sina Amareh"</span><br/>        self<span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token string">"Backend Architect & System Designer"</span><br/>        self<span class="token punctuation">.</span>experience_years <span class="token operator">=</span> <span class="token number">2</span><br/>        self<span class="token punctuation">.</span>employed_duration <span class="token operator">=</span> <span class="token string">"1 year"</span><br/>        self<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">"Remote (UTC+3:30)"</span><br/>        <br/>    <span class="token keyword">def</span> <span class="token function">expertise</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><br/>        <span class="token keyword">return</span> <span class="token punctuation">{</span><br/>            <span class="token string">"languages"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Python"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"frameworks"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Django"</span><span class="token punctuation">,</span> <span class="token string">"FastAPI"</span><span class="token punctuation">,</span> <span class="token string">"DRF"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"databases"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PostgreSQL"</span><span class="token punctuation">,</span> <span class="token string">"Redis"</span><span class="token punctuation">,</span> <span class="token string">"MongoDB"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"devops"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Docker"</span><span class="token punctuation">,</span> <span class="token string">"CI/CD"</span><span class="token punctuation">,</span> <span class="token string">"Git"</span><span class="token punctuation">,</span> <span class="token string">"Nginx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>            <span class="token string">"focus"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><br/>                <span class="token string">"API Design & Development"</span><span class="token punctuation">,</span><br/>                <span class="token string">"System Architecture"</span><span class="token punctuation">,</span><br/>                <span class="token string">"Database Optimization"</span><span class="token punctuation">,</span><br/>                <span class="token string">"Microservices"</span><br/>            <span class="token punctuation">]</span><br/>        <span class="token punctuation">}</span><br/>    <br/>    <span class="token keyword">def</span> <span class="token function">philosophy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><br/>        <span class="token keyword">return</span> <span class="token string">"Building systems where clarity meets creativity"</span><br/>        <br/>    <span class="token decorator">@property</span><br/>    <span class="token keyword">def</span> <span class="token function">status</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><br/>        <span class="token keyword">return</span> <span class="token string">"Available for interesting projects"</span><br/><br/><span class="token comment"># Initialize</span><br/>developer <span class="token operator">=</span> BackendDeveloper<span class="token punctuation">(</span><span class="token punctuation">)</span><br/><span class="token keyword">print</span><span class="token punctuation">(</span>developer<span class="token punctuation">.</span>philosophy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>`;

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
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, import: "import psycopg2" },
    { name: "Redis", icon: <SiRedis className="text-[#DC382D]" />, import: "import redis" },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, import: "import docker" },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" />, import: "import python" },
    { name: "Git", icon: <SiGit className="text-[#F05032]" />, import: "import git" },
    { name: "Nginx", icon: <SiNginx className="text-[#009639]" />, import: "import nginx" },
  ];

  // Animate tech stack imports
  useEffect(() => {
    if (codeTyped) {
      let currentIndex = 0;
      const importInterval = setInterval(() => {
        if (currentIndex < techStack.length) {
          setImportingTech(currentIndex);
          currentIndex++;
        } else {
          clearInterval(importInterval);
          setImportingTech(-1);
        }
      }, 400);

      return () => clearInterval(importInterval);
    }
  }, [codeTyped]);

  return (
    <div className="w-full bg-primary-background min-h-screen">
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Subtle Background Glows */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.05] blur-[100px] animate-pulse-subtle" />
          <div className="absolute bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[100px] animate-pulse-subtle" />
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

          {/* Developer Profile Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Profile Image with Terminal Aesthetic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard variant="terminal" className="p-6 h-full" glow>
                <div className="flex items-start gap-2 mb-4 pb-3 border-b border-cyan-500/20">
                  <span className="text-[#50fa7b] font-mono text-sm">$</span>
                  <span className="text-gray-400 font-mono text-sm">whoami</span>
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Profile Image with Scan Lines Effect */}
                  <div className="relative w-48 h-48 mb-6">
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <Image
                        src="/me.jpg"
                        alt="Sina Amareh"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        priority
                      />
                      {/* Scan Lines Overlay */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className="w-full h-full"
                          style={{
                            background: `repeating-linear-gradient(
                              0deg,
                              rgba(0, 0, 0, 0.15) 0px,
                              transparent 1px,
                              transparent 2px,
                              rgba(0, 0, 0, 0.15) 3px
                            )`,
                            animation: "scan 8s linear infinite",
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-lg blur-md -z-10" />
                  </div>

                  {/* Terminal Info */}
                  <div className="w-full space-y-2 font-mono text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span className="text-gray-300">Sina Amareh</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span className="text-gray-300">Backend Architect</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span className="text-gray-300">Experience: <span className="text-[#50fa7b]">2 years</span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span className="text-gray-300">Employment: <span className="text-[#50fa7b]">1 year</span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span className="text-gray-300">Status: <span className="text-[#50fa7b]">Available</span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span className="text-gray-300">Location: Remote (UTC+3:30)</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Journey Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-stretch"
            >
              <TerminalWindow title="journey.py" className="w-full">
                <pre className="!bg-transparent !border-none !overflow-visible !p-0 whitespace-pre text-xs md:text-sm max-h-[500px] overflow-y-auto custom-scrollbar">
                  <code
                    className="language-python !bg-transparent !border-none !overflow-visible !block"
                    style={{
                      lineHeight: "1.6",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: displayedCode + (!codeTyped ? '<span class="typing-cursor"></span>' : ""),
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
              Specialized in designing and implementing scalable backend architectures.
              Passionate about clean code, system optimization, and creating robust APIs
              that power modern applications.
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

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    codeTyped
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                >
                  <GlassCard
                    variant="subtle"
                    className={`p-6 text-center transition-all duration-300 ${
                      importingTech === index
                        ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        : "hover:border-cyan-500/30"
                    }`}
                  >
                    <div className="text-5xl mb-3 flex justify-center">
                      {tech.icon}
                    </div>
                    <div className="font-mono text-sm text-gray-300 mb-2">
                      {tech.name}
                    </div>
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
          background: linear-gradient(to bottom, #9333EA, #06B6D4);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
