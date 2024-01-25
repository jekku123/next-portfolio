import FormattedText from '@/components/formatted-text';
import { TypographyH1 } from '@/components/typography';

import { LinkButton } from '@/components/ui/link-button';

import { getProjectBySlug } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

export default async function Project({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  const imageArray = [project.image];

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-6 pt-12 w-full">
      <TypographyH1>{project.title}</TypographyH1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-9">
        <Image
          src={urlForImage(project.image)}
          alt={project.image.alt}
          width="300"
          height="200"
          className="object-cover rounded-md w-full h-auto"
          priority
        />

        {project.body && (
          <FormattedText content={project.body} className="col-span-2 pl-5 mt-6 md:mt-0" />
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
    </div>
  );
}
