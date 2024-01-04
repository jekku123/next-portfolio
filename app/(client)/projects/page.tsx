import ProjectTeaser from '@/components/project-teaser';
import { TypographyH1 } from '@/components/typography';

import { getProjectTeasers } from '@/sanity/lib/client';

export const revalidate = 60;

export default async function Projects() {
  const projects = await getProjectTeasers();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 w-full">
      <TypographyH1>Projects</TypographyH1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <ProjectTeaser project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
