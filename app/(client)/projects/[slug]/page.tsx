import FormattedText from "@/components/formatted-text";
import { TypographyH2 } from "@/components/typography";

import { LinkButton } from "@/components/ui/link-button";

import { getProjectBySlug } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

import Image from "next/image";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  const imageArray = [project.image];

  return (
    <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-5xl flex-col justify-center px-12 py-6 md:px-6">
      <TypographyH2 className="text-center md:text-start">
        {project.title}
      </TypographyH2>
      <div className="mt-9 flex flex-col gap-10 md:flex-row">
        {project.body && (
          <FormattedText
            content={project.body}
            className="mt-6 w-full text-muted-foreground md:mt-0 md:w-2/3"
          />
        )}
        <div className="relative w-full md:w-1/3">
          <Image
            src={urlForImage(project.image)}
            alt={project.image.alt}
            width="300"
            height="200"
            className="h-auto w-full rounded-md object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-4">
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
      <div className="mt-10 flex justify-center gap-4">
        {project.technologies.map((technology) => (
          <span key={technology.title}>#{technology.title}</span>
        ))}
      </div>
    </div>
  );
}
