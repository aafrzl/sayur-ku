'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'
import { bannerImages } from "@/lib/data/bannerImages"

export default function SliderImage() {
  return (
    <Carousel
      plugins={[Autoplay()]}
    >
      <CarouselContent>
        {bannerImages.map((image, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={936 / 294}>
              <Image
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-full object-cover rounded-md"
                fill
              />
              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md"
              />
              <p className="absolute top-1/2 left-5 font-semibold text-white md:text-xl lg:text-2xl">
                {image.title}
              </p>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
