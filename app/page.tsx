import Navbar from '@/components/Navbar';
import ContactSidebar from '@/components/ContactSidebar';
import GlowGrid from '@/components/GlowGrid';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ScrollReveal from '@/components/ScrollReveal';
import Timeline from '@/components/Timeline';
import SkillsSection from '@/components/SkillsSection';
import Contact from '@/components/Contact';
import { projects } from '@/data/content';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000008] text-white overflow-hidden">
      {/* Grid + glowing pulses (both drawn on same canvas for alignment) */}
      <GlowGrid />

      {/* Navigation */}
      <Navbar />

      {/* Contact Sidebar */}
      <ContactSidebar />

      <div className="relative z-10">
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {projects.sectionTitle}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                {projects.sectionDescription}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.items.map((project, idx) => (
              <ScrollReveal key={idx}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  metrics={project.metrics}
                  tags={project.tags}
                  accentColor={project.accentColor}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>

        {/* Timeline Section */}
        <ScrollReveal>
          <Timeline />
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </main>
  );
}
