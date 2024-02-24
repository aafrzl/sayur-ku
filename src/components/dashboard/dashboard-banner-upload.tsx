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

type uploadImageBanner = z.infer<typeof uploadImageBannerSchema>

const uploadImageBannerSchema = z.object({
  image:
    z.custom<File | undefined>()
      .refine(
        (file) => !file || (file instanceof File && file.type.startsWith('image/')),
        'Foto banner harus berupa gambar'
      )
      .refine((file) => {
        return !file || file.size < 1024 * 1024 * 2;
      }, 'Foto banner tidak boleh lebih dari 2MB')
      .refine((file) => file instanceof File, 'Foto banner tidak boleh kosong')
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
                      accept="image/"
                      onChange={(e) => {
                        const files = e.target.files

                        if (files) {
                          const image = files[0]
                          setImages(image)
                          field.onChange(image)
                        }
                      }}
                      className="border-leaf border-2 border-dashed text-leaf file:text-carrot cursor-pointer file:cursor-pointer"
                    />
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
