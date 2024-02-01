import Achievements from "@/components/achievements";
import Educations from "@/components/educations";
import HeroCard from "@/components/hero-card";
import NavBar from "@/components/nav/nav-bar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="mt-20 bg-background">
      <div className="p-4 flex flex-col lg:flex-row gap-4">
        <HeroCard />
        <Skills />
      </div>
      <div className="p-4">
        <Projects />
      </div>
      <div className="p-4 flex flex-col lg:flex-row gap-4">
        <Educations />
        {/* <Achievements /> */}
      </div>
    </div>
  );
}
