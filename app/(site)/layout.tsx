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
        <header className="border-b bg-white/60 backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 border-transparent">
          <Navigation />
        </header>

        <main className="flex-1 max-w-5xl mx-auto p-6 relative z-10">{children}</main>

        <footer className="border-t py-4 text-center text-sm text-gray-500 font-sans relative z-10">
          © {new Date().getFullYear()} Sina Amareh — Built with Next.js & TailwindCSS
        </footer>
      </body>
    </html>
  );
}
