"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // --- STATE & HOOKS ---
  const [titleTyped, setTitleTyped] = useState(false);
  const [codeTyped, setCodeTyped] = useState(false);
  const [photoRendered, setPhotoRendered] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // --- CONSTANTS ---
  const titleString = "// 01. About Me";
  const codeString = `<span class="token tag"><img</span> 
  <span class="token attr-name">src</span><span class="token attr-value">="/assets/images/me.jpg"</span>
  <span class="token attr-name">alt</span><span class="token attr-value">="Sina Amareh"</span>
<span class="token tag">></span>`;

  // --- TYPEWRITER EFFECTS ---

  // Effect for the main section title
  useEffect(() => {
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < titleString.length) {
          setDisplayedTitle((prev) => prev + titleString.charAt(i));
          i++;
        } else {
          clearInterval(interval);
          setTitleTyped(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView]);

  // Effect for the code block, triggers after title is typed
  useEffect(() => {
    if (titleTyped) {
      controls.start("visible"); // Start fade-in for the left column text

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
            // Start photo animation after code finishes
            setTimeout(() => setPhotoRendered(true), 300);
          }, 300); // Delay before fading in photo
        } else {
          setDisplayedCode(codeString.substring(0, i));
        }
      }, 25);
      return () => clearInterval(interval);
    }
  }, [titleTyped, controls, codeString]);

  // --- RENDER ---
  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24"
    >
      {/* Background Glows - Fixed Position */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
        {/* Purple Glow (Behind right column glassmorphic card) */}
        <div className="absolute top-[15%] right-[10%] h-[600px] w-[600px] rounded-full bg-[#9333ea]/[0.15] blur-[120px] animate-pulse-slow" />
        {/* Cyan Glow (Behind left column text) */}
        <div className="absolute top-[20%] left-[5%] h-[500px] w-[500px] rounded-full bg-[#06b6d4]/[0.15] blur-[100px] animate-pulse-slow" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="font-mono text-2xl md:text-3xl text-gray-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {displayedTitle}
        <span className="typing-cursor"></span>
      </motion.h2>

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] items-start gap-12 lg:gap-16">
        {/* Left Column (Text Content) */}
        <motion.div
          className="text-gray-300 text-lg leading-relaxed space-y-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
          }}
        >
          <p>
            I'm a software engineer with a passion for building elegant solutions to complex
            problems. My work is deeply rooted in{" "}
            <span style={{ color: "#9333ea", fontWeight: 600 }}>backend architecture</span> and{" "}
            <span style={{ color: "#06b6d4", fontWeight: 600 }}>system design</span>, where I strive
            to build robust and scalable solutions that stand the test of time.
          </p>
          <p>
            With expertise spanning from crafting high-performance APIs to designing distributed
            systems, I am passionate about creating{" "}
            <span style={{ color: "#06b6d4", fontWeight: 600 }}>elegant user experiences</span>{" "}
            backed by powerful, efficient code. Every line I write is an opportunity to solve
            real-world challenges with creativity and precision.
          </p>
          <p>
            My journey in software development involves a continuous cycle of learning and adapting,
            always seeking to integrate the best{" "}
            <span style={{ color: "#9333ea", fontWeight: 600 }}>modern development practices</span>.
            I believe in writing code that not only works but tells a story of thoughtful
            engineering and user-centric design.
          </p>
        </motion.div>

        {/* Right Column (Glassmorphic Photo Card) */}
        <div className="relative">
          {/* Glassmorphic Card Container - Fixed Height */}
          <motion.div
            className="relative overflow-hidden flex flex-col h-fit"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Profile Photo Container with Immediate Masking */}
            <div className="relative p-6 pb-4">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: photoRendered ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Holographic Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg opacity-60"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-purple-500 rounded-tr-lg opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-500 rounded-bl-lg opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg opacity-60"></div>

                {/* Photo with gradient border and immediate fade effect */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/images/me.jpg"
                    alt="Sina Amareh"
                    className="w-full h-auto object-cover object-center"
                    style={{
                      maxHeight: "420px",
                      display: "block",
                      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    }}
                  />
                  {/* Scan Line Effect */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, transparent 1px, transparent 2px, rgba(0, 0, 0, 0.1) 3px)",
                      animation: "scan 8s linear infinite",
                    }}
                  />
                  {/* Gradient Glow Behind */}
                  <div
                    className="absolute inset-0 -z-10 blur-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)",
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Code Box - Fixed Height Container */}
            <div className="px-6 pb-6 pt-2" style={{ minHeight: "60px" }}>
              <pre
                className="w-full text-left"
                style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <code
                  className="language-html !bg-transparent !text-sm"
                  dangerouslySetInnerHTML={{
                    __html:
                      displayedCode +
                      (displayedCode && !codeTyped ? '<span class="typing-cursor"></span>' : ""),
                  }}
                ></code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
