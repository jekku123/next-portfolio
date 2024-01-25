'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

interface ProjectCarouselProps {
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export function ProjectCarousel({ items }: { items: ProjectCarouselProps[] }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent>
                <Image
                  src={urlForImage(item.asset)}
                  alt={item.alt}
                  width="300"
                  height="200"
                  className="object-cover rounded-md w-full h-auto"
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
