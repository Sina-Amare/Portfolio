"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 space-y-8 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-40 h-40 rounded-full border-4 border-brand-accent shadow-xl backdrop-blur-md overflow-hidden float-slow flex items-center justify-center bg-gray-200"
        >
          <span className="text-xs text-gray-50">Avatar</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-display text-white tracking-tight"
        >
          Sina Amareh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-lg text-gray-300 max-w-xl"
        >
          Engineering the bridge between intelligence and design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="flex space-x-4 mt-8"
        >
          <Link href="/projects">
            <Button className="px-6 py-3 text-base font-semibold">View Projects</Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="px-6 py-3 text-base font-semibold text-white border-white/30 hover:bg-white/10"
            >
              About Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
