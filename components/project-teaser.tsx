import { ProjectTeaser as ProjectTeaserType } from '@/lib/zod/project-teaser';

interface ProjectTeaserProps {
  project: ProjectTeaserType;
}

export default function ProjectTeaser({ project }: ProjectTeaserProps) {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.excerpt}</p>
    </>
  );
}
