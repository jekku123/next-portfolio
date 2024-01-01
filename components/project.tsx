import { urlForImage } from '@/sanity/lib/image';

import { Project as ProjectType } from '@/lib/zod/project';
import Image from 'next/image';
import FormattedText from './formatted-text';
import { LinkButton } from './ui/link-button';

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <h1 className="text-6xl mb-12 mt-9">{project.title}</h1>

      <div className="flex gap-12 mx-auto max-w-2xl">
        <div className="aspect-auto">
          <Image
            src={urlForImage(project.image)}
            alt=""
            width="300"
            height="200"
            className="object-cover rounded-md"
            priority
          />
        </div>
        {project.body && (
          <FormattedText text={project.body} className="flex flex-col justify-center" />
        )}
      </div>
      <div className="flex gap-4 justify-center mt-10">
        {project.github && (
          <LinkButton variant="outline" href={project.github} newTab>
            See in Github
          </LinkButton>
        )}
        {project.liveSite && (
          <LinkButton variant="outline" href={project.liveSite} newTab>
            Check out the live site
          </LinkButton>
        )}
      </div>
      <div className="flex gap-4 justify-center mt-10">
        {project.technologies.map((technology) => (
          <span key={technology.title}>#{technology.title}</span>
        ))}
      </div>
    </>
  );
}
