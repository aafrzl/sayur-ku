'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

//TODO: Add validation for file type and size
export default function DashboardBannerUpload() {
  const [images, setImages] = useState<File[]>([])

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files) {
      const imagesArray = Array.from(files)
      setImages(imagesArray)
    }
  }

  return (
    <form className='flex flex-col items-start gap-4 w-1/2'>
      <h3 className='text-leaf font-bold text-xl'>
        Upload Banner Homepage
      </h3>
      <Input
        type="file"
        id="image"
        multiple
        accept='image/png image/jpeg image/jpg'
        className='border-leaf border-2 border-dashed text-leaf file:text-carrot cursor-pointer file:cursor-pointer'
        onChange={handleFileSelected}
      />
      <Button
        type='submit'
      >
        Upload
      </Button>
      {/* Image Previews */}
      {images.length === 0 ? (
        <p className='text-muted-foreground text-sm'>
          No images selected
        </p>
      ) : (
        <div className='grid grid-cols-12 gap-2 my-2'>
          {images.map((image) => (
            <div
              key={image.name}
              className='aspect-video relative col-span-4 h-24'
            >
              <Image
                src={URL.createObjectURL(image)}
                alt={image.name}
                className='object-cover'
                fill
              />
            </div>
          ))}
        </div>
      )}
    </form>
  )
}
