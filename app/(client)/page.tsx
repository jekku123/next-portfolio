import About from '@/components/about';
import Hero from '@/components/hero';
import { ProjectTeasers } from '@/components/project-teasers';
import Skills from '@/components/skills';
import { getAboutPage, getProjectTeasers, getSkills } from '@/sanity/lib/client';

export default async function Home() {
  const skills = await getSkills();
  const about = await getAboutPage();
  const projects = await getProjectTeasers({ limit: 3 });

  return (
    <>
      <Hero />
      <About content={about} />
      <Skills skills={skills} />
      <ProjectTeasers projects={projects} heading="Projects" />
    </>
  );
}
