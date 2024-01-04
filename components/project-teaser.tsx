import { ProjectTeaser as ProjectTeaserType } from '@/lib/zod/project-teaser';
import { LinkButton } from './ui/link-button';

interface ProjectTeaserProps {
  project: ProjectTeaserType;
}

export default function ProjectTeaser({ project }: ProjectTeaserProps) {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.excerpt}</p>
      <LinkButton variant="outline" href={`/projects/${project.slug.current}`}>
        Click
      </LinkButton>
    </>
  );
}
