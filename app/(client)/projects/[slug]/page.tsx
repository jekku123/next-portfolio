import FormattedText from '@/components/formatted-text';
import { TypographyH1 } from '@/components/typography';

import { LinkButton } from '@/components/ui/link-button';

import { getProjectBySlug } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

import Image from 'next/image';

export default async function Project({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 w-full">
      <TypographyH1>{project.title}</TypographyH1>
      <div className="flex gap-12 mx-auto max-w-2xl mt-6">
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
    </div>
  );
}
