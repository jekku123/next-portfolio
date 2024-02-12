"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image as ImageType } from "@/lib/zod/image";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export function ProjectCarousel({ items }: { items: ImageType[] }) {
  return (
    <Carousel className="mx-auto w-full max-w-xs md:mx-9">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.alt}>
            <Image
              src={urlForImage(item.asset)}
              alt={item.alt}
              width="300"
              height="200"
              className="h-auto w-full rounded-md object-cover"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
