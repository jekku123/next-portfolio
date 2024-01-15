import { ProjectTeaser as ProjectTeaserType } from '@/lib/zod/project-teaser';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { TypographyH3, TypographyParagraph } from './typography';
import { Card, CardContent } from './ui/card';
import { LinkButton } from './ui/link-button';

interface ProjectTeaserProps {
  project: ProjectTeaserType;
}

export default function ProjectTeaser({ project }: ProjectTeaserProps) {
  return (
    <Card>
      <Image
        src={urlForImage(project.image)}
        width={300}
        height={200}
        alt=""
        className="rounded-t-xl w-full h-full"
      />
      <CardContent className="mt-4">
        <TypographyH3>{project.title}</TypographyH3>
        <TypographyParagraph className="mt-0">{project.excerpt}</TypographyParagraph>
        <LinkButton variant="outline" href={`/projects/${project.slug.current}`}>
          Click
        </LinkButton>
      </CardContent>
    </Card>
  );
}
