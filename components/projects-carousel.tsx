"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/lib/zod/image";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

export function ProjectCarousel({ items }: { items: ImageType[] }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleCarouselFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  return (
    <Carousel className={cn(isFullScreen && "absolute left-0 top-0 z-50")}>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.alt} onPointerUp={handleCarouselFullScreen}>
            <Image
              src={urlForImage(item.asset)}
              alt={item.alt}
              width="900"
              height="600"
              className="h-auto w-full cursor-pointer rounded-md object-cover"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <p className="mt-1 text-center text-sm text-muted-foreground">
        {isFullScreen
          ? "Click image to exit full screen"
          : "Click image to expand"}
      </p>
    </Carousel>
  );
}
