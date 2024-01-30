"use client";

import { Card, CardContent } from "@/components/ui/card";
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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.alt}>
            <Card>
              <CardContent>
                <Image
                  src={urlForImage(item.asset)}
                  alt={item.alt}
                  width="300"
                  height="200"
                  className="h-auto w-full rounded-md object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
