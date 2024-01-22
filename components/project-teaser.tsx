import { ProjectTeaser as ProjectTeaserType } from '@/lib/zod/project-teaser';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectTeaserProps {
  project: ProjectTeaserType;
}

export default function ProjectTeaser({ project }: ProjectTeaserProps) {
  return (
    <Link
      href={'projects/' + project.slug.current}
      className="grid h-full transition-all rounded-3xl group"
    >
      {project.image && (
        <div className="mb-2 overflow-hidden rounded-xl">
          <div className="transition-transform duration-700 transform group-hover:scale-110">
            <Image
              src={urlForImage(project.image)}
              width={384}
              height={240}
              alt={project.image.alt}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>
      )}
      <div className="flex flex-col h-full p-3">
        <div className="mb-1 text-xs">
          <span className="uppercase">{project.tags.map((tag) => tag).join(', ')}</span>
        </div>
        <h3 className="mt-1 font-bold underline-offset-2 line-clamp-2 text-heading-xs text-secondary-foreground group-hover:underline">
          {project.title}
        </h3>
        <p className="mt-2 leading-5">{project.excerpt}</p>
      </div>
    </Link>
  );
}
