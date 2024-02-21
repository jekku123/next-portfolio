import ProjectTeaser from "@/components/project-teaser";
import { TypographyH2 } from "@/components/typography";

import { getProjectTeasers } from "@/sanity/lib/client";

export const revalidate = 60;

export default async function Projects() {
  const projects = await getProjectTeasers();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-5xl flex-col justify-center px-12 py-12 md:mt-0 md:px-6">
      <TypographyH2 className="text-center md:text-start">
        Projects
      </TypographyH2>
      <ul className="mx-auto mt-9 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project._id}>
            <ProjectTeaser project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
