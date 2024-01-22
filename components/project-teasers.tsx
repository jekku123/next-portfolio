import { ProjectTeaser as ProjectTeaserType } from '@/lib/zod/project-teaser';
import ProjectTeaser from './project-teaser';
import { TypographyH2 } from './typography';
import { LinkButton } from './ui/link-button';

interface ProjectTeaserProps {
  projects?: ProjectTeaserType[];
  heading?: string;
}

export function ProjectTeasers({ projects, heading }: ProjectTeaserProps) {
  return (
    <section className="max-w-5xl mx-auto w-full min-h-screen px-12 md:px-6 py-4 flex flex-col justify-center">
      <TypographyH2>{heading}</TypographyH2>
      <ul className="grid max-w-5xl grid-cols-1 mx-auto mt-9 gap-9 sm:grid-cols-2 md:grid-cols-3">
        {projects?.map((project) => (
          <li key={project._id}>
            <ProjectTeaser project={project} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        {!projects?.length && <p className="py-4">No projects found</p>}
        {projects?.length && (
          <LinkButton href="/blog" className="inline-flex px-5 py-3 mt-9 mr-4 text-base">
            All projects
          </LinkButton>
        )}
      </div>
    </section>
  );
}
