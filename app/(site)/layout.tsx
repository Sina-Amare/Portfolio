import "../../styles/globals.css";
import Link from "next/link";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sina Amareh — Portfolio",
  description: "Professional AI Engineering Portfolio by Sina Amareh",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-brand-light text-gray-800 antialiased min-h-screen flex flex-col">
        <header className="border-b bg-white shadow-sm sticky top-0 z-50 transition-all duration-500">
          <nav
            className={`max-w-5xl mx-auto flex justify-between items-center py-4 px-6 ${scrolled ? "bg-brand-dark/80 backdrop-blur-md text-white" : ""}`}
          >
            <h1 className="text-xl font-bold font-display">Sina Amareh</h1>
            <ul className="flex space-x-6 text-sm font-sans">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 max-w-5xl mx-auto p-6">{children}</main>

        <footer className="border-t py-4 text-center text-sm text-gray-500 font-sans">
          © {new Date().getFullYear()} Sina Amareh — Built with Next.js & TailwindCSS
        </footer>
      </body>
    </html>
  );
}
