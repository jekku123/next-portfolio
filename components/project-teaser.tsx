import { ProjectTeaser as ProjectTeaserType } from "@/lib/zod/project-teaser";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface ProjectTeaserProps {
  project: ProjectTeaserType;
}

export default function ProjectTeaser({ project }: ProjectTeaserProps) {
  return (
    <Link
      href={"projects/" + project.slug.current}
      className="group grid h-full rounded-3xl pb-3 shadow-md shadow-muted transition-all hover:shadow-xl hover:shadow-muted"
    >
      {project.image && (
        <div className="mb-2 overflow-hidden rounded-t-xl">
          <div className="transform transition-transform duration-700 group-hover:scale-110">
            <Image
              src={urlForImage(project.image)}
              width={384}
              height={240}
              alt={project.image.alt}
              className="h-full w-full rounded-t-xl object-cover"
              priority
            />
          </div>
        </div>
      )}
      <div className="flex h-full flex-col p-3">
        <div className="mb-1 text-xs">
          <span className="uppercase text-muted-foreground">
            {project.tags.map((tag) => tag).join(", ")}
          </span>
        </div>
        <h3 className="mt-1 line-clamp-2 text-xl font-bold text-secondary-foreground underline-offset-2 group-hover:underline">
          {project.title}
        </h3>
        <p className="mt-2 leading-5 text-muted-foreground">
          {project.excerpt}
        </p>
      </div>
    </Link>
  );
}
