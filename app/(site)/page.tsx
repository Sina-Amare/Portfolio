import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import { AboutSection, ProjectsSection } from "./components/sections";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Lazy load below-fold sections for faster initial page load
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const Timeline = lazy(() => import("./components/sections/Timeline"));
const HowIWork = lazy(() => import("./components/sections/HowIWork"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

// Minimal loading placeholder for sections
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <Hero />

      {/* Divider */}
      <SectionDivider variant="terminal" label="about" />

      {/* About Section */}
      <AboutSection />

      {/* Divider */}
      <SectionDivider variant="merge" />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Divider */}
      <SectionDivider variant="terminal" label="expertise" />

      {/* Skills Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>

      {/* Timeline - Experience Journey - Lazy loaded */}
      <SectionDivider variant="terminal" label="journey" />
      <Suspense fallback={<SectionLoader />}>
        <Timeline />
      </Suspense>

      {/* How I Work - Methodology - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <HowIWork />
      </Suspense>

      {/* Divider */}
      <SectionDivider variant="terminal" label="connect" />

      {/* Contact Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
