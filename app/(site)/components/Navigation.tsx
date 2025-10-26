"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "SKILLS", path: "/skills" },
    { name: "EDUCATION", path: "/education" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PROJECTS", path: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 h-20 backdrop-blur-[var(--blur-glass)]">
      <div className="max-w-screen-xl w-full mx-auto px-6 md:px-8 flex justify-between items-center h-full">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight text-accent-cyan">
            SINA AMAREH
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wider uppercase">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>
                <span
                  className={`font-sans transition-colors duration-300 ${
                    pathname === link.path ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}>
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
