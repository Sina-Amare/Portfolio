import "../../styles/globals.css";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navigation from "./components/Navigation";
import AmbientBackground from "./components/AmbientBackground";

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
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-brand-secondary text-brand-textPrimary antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <AmbientBackground />
        <header className="border-b bg-transparent backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 border-transparent">
          <Navigation />
        </header>

        <main className="flex-1 max-w-5xl mx-auto p-6 relative z-10">{children}</main>

        <footer className="relative z-10 mt-20 border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 font-sans text-sm">
              © {new Date().getFullYear()} Sina Amareh — Engineering Clarity Between Intelligence and Design
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
