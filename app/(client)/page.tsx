import About from "@/components/about";
import ContactSection from "@/components/contact-section";
import Hero from "@/components/hero";
import { ProjectTeasers } from "@/components/project-teasers";
import Skills from "@/components/skills";
import { TracingBeam } from "@/components/tracing-beam";
import {
  getAboutPage,
  getMenu,
  getProfile,
  getProjectTeasers,
  getSkills,
} from "@/sanity/lib/client";

export default async function Home() {
  const skills = await getSkills();
  const about = await getAboutPage();
  const projects = await getProjectTeasers({ limit: 3 });
  const { items } = await getMenu("social-menu");
  const profile = await getProfile();

  const { fullName, headline, fullBio } = profile;

  return (
    <TracingBeam>
      <div className="grid gap-12 pb-12 md:gap-24 md:pb-24">
        <Hero content={{ fullName, headline }} />
        <About content={fullBio} />
        <Skills skills={skills} />
        <ProjectTeasers projects={projects} heading="Featured Projects" />
        <ContactSection items={items} />
      </div>
    </TracingBeam>
  );
}
