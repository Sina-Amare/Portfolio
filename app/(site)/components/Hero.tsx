"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 space-y-8 min-h-screen overflow-hidden bg-gradient-ambient">
      <div
        className="absolute inset-0"
        style={{ animation: "gradientMove 10s ease-in-out infinite alternate" }}
      />
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 50% 20%;
          }
          100% {
            background-position: 70% 80%;
          }
        }
      `}</style>
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 py-32 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-40 h-40 rounded-full border-2 border-brand-accent shadow-xl backdrop-blur-lg overflow-hidden flex items-center justify-center bg-white/20 hover:bg-white/30 transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs text-gray-500">Avatar</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-display font-bold text-slate-900 tracking-tight">
            Sina Amareh
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="text-lg text-slate-600 mt-3 max-w-2xl"
        >
          Engineering clarity between intelligence and design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="flex space-x-4 mt-8"
        >
          <Link href="/projects">
            <Button className="px-6 py-3 text-base font-semibold bg-brand-accent hover:bg-brand-accentSecondary text-white">
              View Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="px-6 py-3 text-base font-semibold text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
            >
              About Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
