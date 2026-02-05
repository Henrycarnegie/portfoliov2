import AboutSection from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/Hero";
import ProjectSection from "@/components/sections/Project";

export default function Home() {
   return (
      <main className="min-h-screen flex flex-col bg-gray-950 text-gray-300 py-4">
         <Header />
         <HeroSection />
         <AboutSection />
         <ExperienceSection />
         <ProjectSection />
      </main>
   );
}
