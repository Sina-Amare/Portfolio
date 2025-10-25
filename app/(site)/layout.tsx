import "../../styles/globals.css";
import { Metadata } from "next";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Sina Amareh — Portfolio",
  description: "Professional AI Engineering Portfolio by Sina Amareh",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-secondary text-brand-textPrimary antialiased min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        <header className="border-b bg-transparent backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 border-transparent">
          <Navigation />
        </header>

        <main className="flex-1 max-w-screen-xl mx-auto px-6 md:px-8 pt-18 relative z-10">
          {children}
        </main>

        <footer className="relative z-10 mt-20 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="border-t border-brand-accent/30 pt-8">
              <p className="text-brand-textSecondary font-sans text-sm">
                © {new Date().getFullYear()} Sina Amareh — Engineering Clarity Between Intelligence
                and Design
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
