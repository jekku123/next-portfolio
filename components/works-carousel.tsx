'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Project as ProjectType } from '@/lib/zod/project';
import Project from './project';

interface WorksCarouselProps {
  projects: ProjectType[];
}

export default function WorksCarousel({ projects }: WorksCarouselProps) {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        orientation="horizontal"
        className="max-w-3xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project: ProjectType) => (
            <CarouselItem key={project._id} className="">
              <Project project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

/* <Card className="bg-background">
    <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="mt-2">{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
        <Image
            src={urlForImage(project.image)}
            alt=""
            width="300"
            height="200"
            className="object-cover"
            priority
        />
        <Link
            href={`projects/${project._id}`}
            className="flex items-center justify-center mt-4 text-foreground"
        >
            <span className="mr-2">View project</span>
        </Link>
    </CardContent>
</Card> */
