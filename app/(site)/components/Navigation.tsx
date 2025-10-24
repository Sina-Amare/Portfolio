"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`max-w-5xl mx-auto flex justify-between items-center py-4 px-6 transition-all duration-500 ${scrolled ? "bg-brand-dark/80 backdrop-blur-md text-white" : ""}`}
    >
      <h1 className="text-xl font-bold font-display">Sina Amareh</h1>
      <ul className="flex space-x-6 text-sm font-sans">
        <li className="nav-link relative">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-link relative">
          <Link href="/about">About</Link>
        </li>
        <li className="nav-link relative">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="nav-link relative">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
