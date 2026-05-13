import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SkillsBentoSection } from "@/components/skills-bento-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]"
        aria-hidden
      />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SkillsBentoSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
