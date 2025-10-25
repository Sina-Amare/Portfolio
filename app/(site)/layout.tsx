import "../../styles/globals.css";
import { Metadata } from "next";
import Navigation from "./components/Navigation";

import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Sina Amareh — Portfolio",
  description: "Professional AI Engineering Portfolio by Sina Amareh",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-secondary text-brand-primary antialiased min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        <header className="border-b bg-transparent backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 border-transparent">
          <Navigation />
        </header>

        <main className="flex-1 relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
