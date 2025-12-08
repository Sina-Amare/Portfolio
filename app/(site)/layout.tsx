import "../../styles/globals.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { CursorEffect } from "@/components/ui/CursorEffect";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PageBackground } from "@/components/effects/PageBackground";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Sina Amareh — Portfolio",
  description: "Professional AI Engineering Portfolio by Sina Amareh",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Preload critical images to prevent flash */}
        <link rel="preload" href="/assets/images/me.jpg" as="image" type="image/jpeg" />
      </head>
      <body className="bg-primary-background text-text-secondary antialiased min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        {/* Loading Screen - shows on initial page load */}
        <LoadingScreen />

        <SmoothScrollProvider>
          {/* Global Git Graph Background */}
          <PageBackground />

          <ScrollProgress />
          <CursorEffect />
          <ScrollToTop />

          <header>
            <Navigation />
          </header>

          <main className="flex-1 relative z-10 pt-16 md:pt-20">{children}</main>

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
