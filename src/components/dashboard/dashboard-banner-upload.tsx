'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Trash } from 'lucide-react'
//TODO: Add validation for file type and size

type uploadImageBanner = z.infer<typeof uploadImageBannerSchema>

const uploadImageBannerSchema = z.object({
  image:
    z.custom<File | undefined>()
      .refine((file) => !file || file instanceof File, 'Foto produk harus diisi')
      .refine(
        (file) => !file || (file instanceof File && file.type.startsWith('image/*')),
        'Foto produk harus berupa gambar'
      )
      .refine((file) => {
        return !file || file.size < 2 * 1024 * 1024
      }, 'Foto produk tidak boleh lebih dari 2MB')
})

export default function DashboardBannerUpload() {
  const [images, setImages] = useState<File | undefined>(undefined)

  const form = useForm<uploadImageBanner>({
    resolver: zodResolver(uploadImageBannerSchema),
  })


  const handleFileSelected = (value: uploadImageBanner) => {
    console.log(value)

    form.reset(
      { image: undefined },
    )
  }

  return (
    <div className='flex flex-col items-start gap-4 w-1/2'>
      <h3 className='text-leaf font-bold text-xl'>
        Upload Banner Homepage
      </h3>
      <Form {...form}>
        <form className='space-y-3 w-full' onSubmit={form.handleSubmit(handleFileSelected)}>
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="image" className="text-leaf font-semibold">Foto Product</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          setImages(file)
                        }
                        field.onChange(e)
                      }}
                      className="border-leaf border-2 border-dashed text-leaf file:text-carrot cursor-pointer file:cursor-pointer"
                    />
                    {images && (
                      <div
                        className='aspect-video relative col-span-4 h-24'
                      >
                        <Image
                          src={URL.createObjectURL(images)}
                          alt={images.name}
                          className='object-cover rounded-xl'
                          fill
                        />
                        <Button
                          type='button'
                          className='absolute top-1 right-1 w-8 h-8'
                          onClick={() => {
                            setImages(undefined)
                            field.onChange({ target: { value: undefined } })
                          }}
                          size={'icon'}
                        >
                          <Trash className='w-4 h-4' />
                        </Button>
                        ))
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
          >
            Upload
          </Button>
        </form>
      </Form>
      {/* Preview Images yang sudah ada di database dengan tombol hapusnya */}
    </div>
  )
}
