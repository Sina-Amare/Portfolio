"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 py-32 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-brand-blue/20">
          <img
            src="/assets/images/profile.jpg"
            alt="Sina Amareh portrait"
            className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500 ease-smooth"
          />
        </div>
      </motion.div>

      {/* Right Column - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-gray-700 space-y-6"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          A Mind That Builds Systems
        </h2>

        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold text-brand-blue">Sina Amareh</span>, a systems-minded
          engineer passionate about creating technology that is intelligent, ethical, and timeless.
          My approach combines design sensitivity with structured engineering — where simplicity and
          precision coexist.
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
    </section>
  );
}
