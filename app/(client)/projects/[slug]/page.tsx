import FormattedText from "@/components/formatted-text";
import { ProjectCarousel } from "@/components/projects-carousel";
import { TypographyH2, TypographyH4 } from "@/components/typography";
import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-6xl flex-col justify-center px-12 py-6 md:px-6">
      <TypographyH2>{project.title}</TypographyH2>
      <div className="mt-9 flex flex-col gap-16 md:flex-row">
        {project.body && (
          <FormattedText
            content={project.body}
            className="mt-6 w-full text-muted-foreground md:mt-0 md:w-2/3"
          />
        )}
        <div className="hidden px-6 md:block md:w-1/3">
          <ProjectCarousel items={project.carouselImages} />
        </div>
        <div className="block md:hidden">
          <Image
            src={urlForImage(project.image)}
            alt={project.image.alt}
            width="900"
            height="600"
            className="h-auto w-full rounded-md object-cover"
            priority
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        {project.github && (
          <LinkButton variant="secondary" href={project.github} newTab>
            See in Github
          </LinkButton>
        )}
        {project.liveSite && (
          <LinkButton variant="secondary" href={project.liveSite} newTab>
            Check out the live site
          </LinkButton>
        )}
      </div>
      <div className="mt-10 flex flex-col justify-center gap-9 sm:flex-row">
        <div className="flex flex-col items-center gap-4 rounded-md border p-4">
          <TypographyH4>Technologies used</TypographyH4>
          <div className="flex flex-wrap justify-center gap-4">
            {project.techs.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-md border p-4">
          <TypographyH4>Tags</TypographyH4>
          <div className="flex flex-wrap justify-center gap-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
