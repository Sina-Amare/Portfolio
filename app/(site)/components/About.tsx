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
  <span class="token attr-name">src</span><span class="token attr-value">="/me.jpg"</span>
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
      {/* Background Glows */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Purple Glow (Behind right column glassmorphic card) */}
        <div className="absolute top-[15%] right-[10%] h-[600px] w-[600px] rounded-full bg-[#9333ea]/[0.15] blur-[120px]" />
        {/* Cyan Glow (Behind left column text) */}
        <div className="absolute top-[20%] left-[5%] h-[500px] w-[500px] rounded-full bg-[#06b6d4]/[0.15] blur-[100px]" />
      </div>

      <h2 className="font-mono text-2xl md:text-3xl text-gray-400 mb-12">
        {displayedTitle}
        <span className="typing-cursor"></span>
      </h2>

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] items-start gap-12 lg:gap-16">
        {/* Left Column (Text) */}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. My work is deeply rooted in{" "}
            <span style={{ color: "#9333ea", fontWeight: 600 }}>backend architecture</span> and{" "}
            <span style={{ color: "#06b6d4", fontWeight: 600 }}>system design</span>, where I strive
            to build robust and scalable solutions.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. I am passionate about creating{" "}
            <span style={{ color: "#06b6d4", fontWeight: 600 }}>elegant user experiences</span>{" "}
            backed by powerful, efficient code. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. This involves a continuous journey of learning and adapting,
            always seeking to integrate the best{" "}
            <span style={{ color: "#9333ea", fontWeight: 600 }}>modern development practices</span>.
          </p>
        </motion.div>

        {/* Right Column (Glassmorphic Avatar Card) */}
        <div className="relative">
          {/* Glassmorphic Card Container */}
          <div className="bg-white/8 backdrop-blur-[15px] border border-white/10 rounded-[16px] p-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col items-center relative overflow-hidden">
            {/* Profile Photo */}
            <img
              src="/me.jpg"
              alt="Sina Amareh"
              className="w-[200px] h-[200px] rounded-full object-cover object-center mb-[2rem] border-[3px] border-[#9333EA] shadow-[0_0_15px_rgba(147,51,234,0.6)] opacity-0 transition-opacity duration-500"
              style={{ opacity: photoRendered ? 1 : 0 }}
            />

            {/* Code Box */}
            <pre className="w-full text-left p-0">
              <code
                className="language-html !bg-transparent"
                dangerouslySetInnerHTML={{
                  __html: displayedCode + '<span class="typing-cursor"></span>',
                }}
              ></code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
