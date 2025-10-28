"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaServer, FaReact, FaDocker, FaCopy, FaCheck } from "react-icons/fa";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

export default function AboutPage() {
  // --- STATE & HOOKS ---
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeTyped, setCodeTyped] = useState(false);
  const [copied, setCopied] = useState(false);

  const magneticRef = useMagneticEffect(0.2);
  const { ref: expertiseRef, controls: expertiseControls } = useScrollAnimation(0.2);

  // --- CODE CONTENT - Matching Hero Style ---
  const plainCodeString = `const developer = {
  name: 'Sina Amareh',
  role: 'Backend Architect',
  yearsOfExperience: 5,
  expertise: [
    'System Design',
    'API Development',
    'Microservices',
    'Database Architecture'
  ],
  techStack: {
    backend: ['NestJS', 'PostgreSQL'],
    frontend: ['React', 'Next.js'],
    tools: ['Docker', 'CI/CD']
  },
  availability: 'Open to opportunities'
};`;

  const highlightedCodeString = `<span class="token keyword">const</span> <span class="token function-variable function">developer</span> <span class="token operator">=</span> <span class="token punctuation">{</span><br/>  <span class="token property">name</span><span class="token operator">:</span> <span class="token string">'Sina Amareh'</span><span class="token punctuation">,</span><br/>  <span class="token property">role</span><span class="token operator">:</span> <span class="token string">'Backend Architect'</span><span class="token punctuation">,</span><br/>  <span class="token property">yearsOfExperience</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span><br/>  <span class="token property">expertise</span><span class="token operator">:</span> <span class="token punctuation">[</span><br/>    <span class="token string">'System Design'</span><span class="token punctuation">,</span><br/>    <span class="token string">'API Development'</span><span class="token punctuation">,</span><br/>    <span class="token string">'Microservices'</span><span class="token punctuation">,</span><br/>    <span class="token string">'Database Architecture'</span><br/>  <span class="token punctuation">]</span><span class="token punctuation">,</span><br/>  <span class="token property">techStack</span><span class="token operator">:</span> <span class="token punctuation">{</span><br/>    <span class="token property">backend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'NestJS'</span><span class="token punctuation">,</span> <span class="token string">'PostgreSQL'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>    <span class="token property">frontend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'Next.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><br/>    <span class="token property">tools</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Docker'</span><span class="token punctuation">,</span> <span class="token string">'CI/CD'</span><span class="token punctuation">]</span><br/>  <span class="token punctuation">}</span><span class="token punctuation">,</span><br/>  <span class="token property">availability</span><span class="token operator">:</span> <span class="token string">'Open to opportunities'</span><br/><span class="token punctuation">};</span>`;

  // --- TYPEWRITER EFFECT - Matching Hero Speed ---
  useEffect(() => {
    let i = 0;
    const codeString = highlightedCodeString;
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
    }, 25); // Same speed as hero

    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(plainCodeString);
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
      {/* MAIN SECTION */}
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Subtle Background Glows */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-[20%] right-[15%] h-[350px] w-[350px] rounded-full bg-purple-600/[0.06] blur-[80px] animate-pulse-subtle" />
          <div className="absolute bottom-[20%] left-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[80px] animate-pulse-subtle" />
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          {/* Professional Section Number */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-number mb-8"
          >
            // 01. About
          </motion.div>

          {/* Image + Code Grid - 50/50 Balance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Profile Image - Preserving Built-in Glow Ring */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* Image with Subtle Breathe Animation */}
                <Image
                  src="/me.jpg"
                  alt="Sina Amareh"
                  width={400}
                  height={400}
                  priority
                  quality={95}
                  className="w-full h-full object-cover rounded-full breathe-animation"
                  style={{
                    // Inline critical styles to prevent flash
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                />
              </div>
            </motion.div>

            {/* Code Block - Matching Hero Style Exactly */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-full">
                <div
                  className="rounded-[14px] p-[1.5px]"
                  style={{
                    background: "linear-gradient(110deg, transparent 20%, theme('colors.cyan.400' / 0.4), transparent 80%)",
                    boxShadow: "0 0 40px theme('colors.cyan.400' / 0.15)",
                  }}
                >
                  <div className="bg-[#282a36]/80 rounded-[14px] p-5 backdrop-blur-sm">
                    {/* Window Controls - Matching Hero */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                        <span className="ml-2 text-xs text-gray-400 font-mono">developer.js</span>
                      </div>
                      <button
                        onClick={handleCopy}
                        className="text-gray-400 hover:text-cyan-300 transition-colors text-sm font-mono flex items-center gap-1.5"
                        aria-label={copied ? "Copied!" : "Copy"}
                      >
                        {copied ? <FaCheck className="text-xs" /> : <FaCopy className="text-xs" />}
                        <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>

                    {/* Code Content - NO SCROLLBAR */}
                    <pre className="!bg-transparent !border-none !overflow-visible !p-0 whitespace-pre pb-2">
                      <code
                        className="language-js !bg-transparent !pb-0.5 !border-none !overflow-visible !block"
                        style={{
                          overflow: "visible",
                          width: "100%",
                          maxWidth: "100%",
                          whiteSpace: "pre",
                          lineHeight: "1.5",
                          fontSize: "0.875rem",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: displayedCode + (!codeTyped ? '<span class="typing-cursor"></span>' : ""),
                        }}
                      ></code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Centered Impactful Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-20 max-w-[700px] mx-auto"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Transforming complex backend challenges into{" "}
              <span className="gradient-text font-semibold">elegant, scalable solutions</span> that power modern applications.
              Specialized in system architecture and API design with a focus on performance and reliability.
            </p>
          </motion.div>

          {/* Expertise Section */}
          <div ref={expertiseRef}>
            {/* Section Header */}
            <motion.div
              initial="hidden"
              animate={expertiseControls}
              variants={fadeInUp}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                Technical Expertise
              </h2>
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
        </div>
      </section>
    </div>
  );
}
