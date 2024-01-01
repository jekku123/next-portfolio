import FormattedText from '@/components/formatted-text';
import { LinkButton } from '@/components/ui/link-button';
import { ProjectType } from '@/lib/interface';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const project: ProjectType = await client.fetch(`*[_id == "${params.slug}"][0]`);

  return (
    <>
      <h1 className="text-6xl mb-16 mt-9">{project.title}</h1>
      {/* {project.description && <p>{project.description}</p>} */}
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
      <div className="flex gap-4 justify-center mt-6">
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
    </>
  );
}
