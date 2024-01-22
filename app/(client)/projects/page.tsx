import ProjectTeaser from '@/components/project-teaser';
import { TypographyH1 } from '@/components/typography';

import { getProjectTeasers } from '@/sanity/lib/client';

export const revalidate = 60;

export default async function Projects() {
  const projects = await getProjectTeasers();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 w-full">
      <TypographyH1>Projects</TypographyH1>
      <ul className="grid grid-cols-1 mx-auto mt-6 gap-9 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <li key={project._id}>
            <ProjectTeaser project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
