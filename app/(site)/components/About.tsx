"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 py-32 relative">
      {/* Thin color accent bar on the left edge */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-accent to-brand-accentSecondary rounded-full"></div>

      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl/5 border border-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-brand-accent/30 bg-gray-200 flex items-center justify-center">
              <span className="text-xs text-gray-500">Profile Image</span>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-800 space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              A Mind That Builds Systems
            </h2>

            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-brand-accent">Sina Amareh</span>, a
              systems-minded engineer passionate about creating technology that is intelligent,
              ethical, and timeless. My approach combines design sensitivity with structured
              engineering — where simplicity and precision coexist.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              With a foundation in{" "}
              <span className="font-medium text-gray-900">
                Python, Django, and modern web architecture
              </span>
              , I craft digital products that merge clarity with performance. I believe great
              engineering is not about complexity, but the art of creating balance.
            </p>

            <p className="italic text-gray-500">"Code is a medium — clarity is its art form."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
