import Hero from "./components/Hero";
import {
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "./components/sections";
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

      {/* Divider */}
      <SectionDivider variant="gradient" />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
