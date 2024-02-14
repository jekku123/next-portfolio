import About from "@/components/about-section";
import Hero from "@/components/hero";
import { ProjectTeasers } from "@/components/project-teasers";
import { TracingBeam } from "@/components/tracing-beam";
import { getProfile, getProjectTeasers, getSkills } from "@/sanity/lib/client";

export default async function Home() {
  const projects = await getProjectTeasers({ limit: 3 });
  const profile = await getProfile();
  const skills = await getSkills({ limit: 5, order: "progress desc" });

  const { fullName, headline, shortBio } = profile;

  return (
    <TracingBeam>
      <div className="grid gap-12 pb-12 md:gap-24">
        <Hero fullName={fullName} headline={headline} />
        <About shortBio={shortBio} skills={skills} />
        <ProjectTeasers projects={projects} heading="Featured Projects" />
      </div>
    </TracingBeam>
  );
}
