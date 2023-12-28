'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function WorksCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="horizontal"
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-background">
                <CardHeader className="">
                  Header
                  <CardTitle className="">Card {index + 1}</CardTitle>
                  <CardDescription className="">
                    Lorem ipsum dolor sit amet consectetur
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
