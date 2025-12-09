import Hero from "./components/Hero";
import {
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "./components/sections";
import HowIWork from "./components/sections/HowIWork";
import Timeline from "./components/sections/Timeline";
import { SectionDivider } from "@/components/ui/SectionDivider";

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

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline - Experience Journey */}
      <SectionDivider variant="terminal" label="journey" />
      <Timeline />

      {/* How I Work - Methodology */}
      <HowIWork />

      {/* Divider */}
      <SectionDivider variant="terminal" label="connect" />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
