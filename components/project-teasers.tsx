import { ProjectTeaser as ProjectTeaserType } from "@/lib/zod/project-teaser";
import ProjectTeaser from "./project-teaser";
import { TypographyH2 } from "./typography";
import { LinkButton } from "./ui/link-button";
import SectionContainer from "./ui/section-container";

interface ProjectTeaserProps {
  projects?: ProjectTeaserType[];
  heading?: string;
}

export function ProjectTeasers({ projects, heading }: ProjectTeaserProps) {
  return (
    <SectionContainer>
      <TypographyH2>{heading}</TypographyH2>
      <ul className="mx-auto mt-9 grid max-w-5xl grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3">
        {projects?.map((project) => (
          <li key={project._id}>
            <ProjectTeaser project={project} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        {!projects?.length && <p className="py-4">No projects found</p>}
        {projects?.length && (
          <LinkButton
            href="/projects"
            className="mr-4 mt-9 inline-flex px-5 py-3 text-base"
            variant="secondary"
          >
            All projects
          </LinkButton>
        )}
      </div>
    </SectionContainer>
  );
}
