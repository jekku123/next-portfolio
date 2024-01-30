import { urlForImage } from "@/sanity/lib/image";

import { Project as ProjectType } from "@/lib/zod/project";
import Image from "next/image";
import FormattedText from "./formatted-text";
import { TypographyH1 } from "./typography";
import { LinkButton } from "./ui/link-button";

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <TypographyH1>{project.title}</TypographyH1>
      <div className="mx-auto mt-6 flex max-w-2xl gap-12">
        <div className="aspect-auto">
          <Image
            src={urlForImage(project.image)}
            alt=""
            width="300"
            height="200"
            className="rounded-md object-cover"
            priority
          />
        </div>
        {project.body && (
          <FormattedText
            content={project.body}
            className="flex flex-col justify-center"
          />
        )}
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
          <span key={technology._id}>#{technology.title}</span>
        ))}
      </div>
    </>
  );
}
