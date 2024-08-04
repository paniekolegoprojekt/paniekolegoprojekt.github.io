import Hero from "@/ui/organisms/Hero/Hero";
import { AboutMeSection, ContactSection, ProjectSection } from "@/ui/organisms";

export const HomePage = () => {
  return (
    <main className="bg-ui-polar lg:gap-4 gap-0 overflow-auto">
      <Hero />
      <ProjectSection />
      <AboutMeSection />
      <ContactSection />
    </main>
  );
};
