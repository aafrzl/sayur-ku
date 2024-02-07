'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { bannerImages } from "@/lib/data/bannerImages"
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"

export default function SliderImage() {
  return (
    <Carousel
      plugins={[Autoplay()]}
    >
      <CarouselContent>
        {bannerImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video lg:aspect-[936/294] transition-all duration-200 ease-in">
              <Image
                src={image.imageUrl}
                alt={image.title}
                className="object-cover object-center rounded-md"
                fill
              />
              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md"
              />
              <p className="absolute top-1/2 left-5 font-semibold text-white md:text-xl lg:text-2xl">
                {image.title}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
