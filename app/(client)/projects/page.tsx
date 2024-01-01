import ProjectTeaser from '@/components/project-teaser';
import { getProjectTeasers } from '@/sanity/lib/client';

export const revalidate = 60;

export default async function Projects() {
  const projects = await getProjectTeasers();

  return (
    <main className="max-w-4xl mx-auto mt-9">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <ProjectTeaser project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}
