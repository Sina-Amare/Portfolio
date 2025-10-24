import "../../styles/globals.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sina Amareh | Portfolio",
  description: "Portfolio and Blog — Sina Amareh",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
        <header className="border-b bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-xl font-bold">Sina Amareh</h1>
            <ul className="flex space-x-6 text-sm">
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

        <footer className="border-t py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sina Amareh — Built with Next.js & TailwindCSS
        </footer>
      </body>
    </html>
  );
}
