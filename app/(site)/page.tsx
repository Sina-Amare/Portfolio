import Hero from "./components/Hero";
import {
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "./components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
