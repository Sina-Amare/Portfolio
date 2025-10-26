"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-background text-text-secondary py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sina Amareh. All rights reserved.
        </p>
        <div className="flex gap-6 text-2xl">
          <Link href="https://github.com/sina-amareh" aria-label="Github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-accent-cyan transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/sina-amareh" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-accent-cyan transition-colors" />
          </Link>
          <Link href="https://facebook.com/sina.amareh" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-accent-cyan transition-colors" />
          </Link>
          <Link href="https://twitter.com/sina_amareh" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-accent-cyan transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;