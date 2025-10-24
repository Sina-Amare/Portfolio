"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
      >
        Hi, I'm <span className="text-blue-600">Sina Amareh</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl text-gray-600 text-lg sm:text-xl"
      >
        Building intelligent, modern, and scalable systems — with clarity, ethics, and precision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex space-x-4 mt-8"
      >
        <Link href="/projects">
          <Button className="px-6 py-3 text-base font-semibold">View Projects</Button>
        </Link>
        <Link href="/about">
          <Button variant="outline" className="px-6 py-3 text-base font-semibold">
            About Me
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
