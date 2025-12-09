"use client";

import "../../styles/globals.css";
import { Montserrat } from "next/font/google";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ToastProvider } from "@/components/ui/Toast";

// Lazy load non-critical components for performance
const PageBackground = lazy(() =>
  import("@/components/effects/PageBackground").then((mod) => ({ default: mod.PageBackground }))
);
const CursorEffect = lazy(() =>
  import("@/components/ui/CursorEffect").then((mod) => ({ default: mod.CursorEffect }))
);
const ScrollProgress = lazy(() => import("@/components/ui/ScrollProgress"));
const ScrollToTop = lazy(() =>
  import("@/components/ui/ScrollToTop").then((mod) => ({ default: mod.ScrollToTop }))
);
const FloatingActionButton = lazy(() => import("@/components/ui/FloatingActionButton"));
const EasterEgg = lazy(() => import("@/components/effects/EasterEgg"));

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <title>Sina Amareh — Backend Architect & System Designer</title>
        <meta
          name="description"
          content="Professional Backend Architect specializing in Python, Django, FastAPI. Building scalable systems with modern technologies."
        />
        <meta
          name="keywords"
          content="Backend Developer, Python, Django, FastAPI, System Design, API Development"
        />
        <meta name="author" content="Sina Amareh" />
        <meta property="og:title" content="Sina Amareh — Backend Architect" />
        <meta
          property="og:description"
          content="Building scalable backend systems with Python, Django, and FastAPI"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sina Amareh — Backend Architect" />
        <meta
          name="twitter:description"
          content="Building scalable backend systems with Python, Django, and FastAPI"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-primary-background text-text-secondary antialiased min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-md focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>

        <LoadingScreen />

        <ToastProvider>
          <SmoothScrollProvider>
            {/* Non-critical components with Suspense */}
            <Suspense fallback={null}>
              <PageBackground />
            </Suspense>
            <Suspense fallback={null}>
              <ScrollProgress />
            </Suspense>
            <Suspense fallback={null}>
              <CursorEffect />
            </Suspense>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>

            <header>
              <Navigation />
            </header>

            <main id="main-content" className="flex-1 relative z-10 pt-16 md:pt-20">
              {children}
            </main>

            <Suspense fallback={null}>
              <FloatingActionButton />
            </Suspense>

            <Suspense fallback={null}>
              <EasterEgg />
            </Suspense>

            <Footer />
          </SmoothScrollProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
