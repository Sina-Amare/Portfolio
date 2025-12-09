import Hero from "./components/Hero";
import {
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "./components/sections";
import HowIWork from "./components/sections/HowIWork";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <Hero />

      {/* Divider */}
      <SectionDivider variant="gradient" />

      {/* About Section */}
      <AboutSection />

      {/* Divider */}
      <SectionDivider variant="dots" />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Divider */}
      <SectionDivider variant="wave" />

      {/* Skills Section */}
      <SkillsSection />

      {/* How I Work - Methodology */}
      <HowIWork />

      {/* Divider */}
      <SectionDivider variant="gradient" />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
