"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
import { FiDownload, FiMail } from "react-icons/fi";

const codeString = `const coder = {
  name: 'Sina Amareh',
  skills: ['React', 'NextJS', 'Redux', 'Express', 
           'NestJS', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Hello,
            <br />
            This is <span className="text-[#ff4fa3]">SINA AMAREH</span>, I'm a
            <br />
            Professional Software
            <br />
            <span className="text-[#3fb5a3]">Developer.</span>
          </h1>

          <div className="flex gap-4 mt-8 text-3xl text-[#ff4fa3]">
            <Link href="#" aria-label="Github">
              <FaGithub className="hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="CodingNinjas">
              <SiCodingninjas className="hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-white transition-colors" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold border-2 border-[#ff4fa3] hover:bg-[#ff4fa3]/10 transition-all duration-300"
            >
              CONTACT ME <FiMail />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#ff4fa3] to-[#3fb5a3] transition-all duration-300"
            >
              GET RESUME <FiDownload />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto"
        >
          <div className="bg-[#1e293b]/30 backdrop-blur-sm rounded-lg border border-slate-700 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 p-3 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4">
              <pre className="font-mono text-sm text-slate-200 whitespace-pre-wrap">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-teal-300">coder</span> = {"{"}
                  <br />
                  {"  "}
                  <span className="text-red-400">name</span>:{" "}
                  <span className="text-green-300">'Sina Amareh'</span>,
                  <br />
                  {"  "}
                  <span className="text-red-400">skills</span>: [
                  <span className="text-green-300">
                    'React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySQL', 'MongoDB', 'Docker',
                    'AWS'
                  </span>
                  ],
                  <br />
                  {"  "}
                  <span className="text-red-400">hardWorker</span>:{" "}
                  <span className="text-blue-400">true</span>,
                  <br />
                  {"  "}
                  <span className="text-red-400">quickLearner</span>:{" "}
                  <span className="text-blue-400">true</span>,
                  <br />
                  {"  "}
                  <span className="text-red-400">problemSolver</span>:{" "}
                  <span className="text-blue-400">true</span>,
                  <br />
                  {"  "}
                  <span className="text-yellow-300">hireable</span>:{" "}
                  <span className="text-purple-400">function</span>() {"{"}
                  <br />
                  {"    "}
                  <span className="text-purple-400">return</span> (
                  <br />
                  {"      "}this.<span className="text-red-400">hardWorker</span> &amp;&amp;
                  <br />
                  {"      "}this.<span className="text-red-400">problemSolver</span> &amp;&amp;
                  <br />
                  {"      "}this.<span className="text-red-400">skills</span>.
                  <span className="text-yellow-300">length</span> &gt;= 5
                  <br />
                  {"    "});
                  <br />
                  {"  }"}
                  <br />
                  {"};"}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
