'use client'

import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AutosizeTextarea } from "../ui/textarea"
import { ProductCategoryJSON } from "@/lib/data/productCategory"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Max file 2MB
const MAX_FILE_SIZE = 2 * 1024 * 1024
const ACCEPT_FILE_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg']

type Product = z.infer<typeof productSchema>

const productSchema = z.object({
  title: z.string().min(1, "Nama produk tidak boleh kosong").max(50, "Nama produk tidak boleh lebih dari 50 karakter"),
  price: z.number().min(1, "Harga produk tidak boleh kosong").positive("Harga produk tidak boleh negatif").int("Harga produk tidak boleh desimal"),
  stock: z.number().min(1, "Stok produk tidak boleh kosong").positive("Stok produk tidak boleh negatif").int("Stok produk tidak boleh desimal"),
  description: z.string().min(1, "Deskripsi produk tidak boleh kosong").max(500, "Deskripsi produk tidak boleh lebih dari 500 karakter"),
  image: z.any().refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Ukuran file tidak boleh lebih dari 2MB").refine((files) => files?.[0]?.type && ACCEPT_FILE_TYPES.includes(files[0].type), "Format file tidak didukung"),
  category: z.string().min(1, "Kategori produk tidak boleh kosong"),
  unit: z.string().min(1, "Satuan produk tidak boleh kosong"),
})

export default function DashboardAddProduct() {
  const [images, setImages] = useState<File | null>(null)

  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = (value: Product) => {
    console.log(value)
  }

  return (
    <div className='flex flex-col items-start'>
      <div className='flex flex-col'>
        <h3 className='text-leaf font-bold text-xl'>
          Add Product
        </h3>
        <p className='text-sm text-gray-400'>
          Tambahkan produk baru ke toko
        </p>
      </div>
      <Form {...form}>
        <form
          className='my-4 space-y-4 w-1/2'
          onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="image" className="text-leaf font-semibold">Foto Product</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    <Input
                      type="file"
                      id="image"
                      accept="image/*"
                      className='border-leaf border-2 border-dashed text-leaf file:text-carrot cursor-pointer file:cursor-pointer'
                      {...field}
                      onChange={(e) => {
                        const { files } = e.target
                        if (files && files.length > 0) setImages(files[0])
                        field.onChange(e)
                      }}
                    />
                    {images && (
                      <div className='border p-4 rounded-md relative'>
                        <div className='relative w-14 h-14'>
                          <Image
                            src={URL.createObjectURL(images)}
                            alt={images.name}
                            fill
                            className='object-contain'
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={() => {
                            form.resetField('image')
                            setImages(null)
                          }}
                          size={'icon'}
                          variant={'outline'}
                          className="absolute top-0 right-0"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title" className="text-leaf font-semibold">Nama Product</FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Nama Produk"
                    {...field}
                    className="border-leaf placeholder:text-leaf-hover"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="price" className="text-leaf font-semibold">Harga Product</FormLabel>
                <FormControl>
                  <div className="relative">
                    <p className="absolute left-3 top-2 text-sm font-medium text-leaf">Rp</p>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Harga Produk"
                      {...field}
                      className="pl-10 border-leaf placeholder:text-leaf-hover" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="stock" className="text-leaf font-semibold">Stok Product</FormLabel>
                <FormControl>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="Stok Produk"
                    {...field}
                    className="border-leaf placeholder:text-leaf-hover"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description" className="text-leaf font-semibold">Deskripsi Product</FormLabel>
                <FormControl>
                  <AutosizeTextarea
                    id="description"
                    placeholder="Deskripsi Produk"
                    {...field}
                    className="border-leaf placeholder:text-leaf-hover"
                    maxLength={500}
                    maxHeight={200}
                    minHeight={80}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category" className="text-leaf font-semibold">Kategori Product</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='border-leaf placeholder:text-leaf text-leaf'>
                        <SelectValue placeholder="Kategori Produk" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='text-leaf'>
                      {ProductCategoryJSON.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="unit" className="text-leaf font-semibold">Unit Product</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='border-leaf placeholder:text-leaf text-leaf'>
                        <SelectValue placeholder="Unit Produk" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='text-leaf'>
                      <SelectItem value="pcs">
                        pcs
                      </SelectItem>
                      <SelectItem value="kg">
                        kg
                      </SelectItem>
                      <SelectItem value="gr">
                        gr
                      </SelectItem>
                      <SelectItem value="ml">
                        ml
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-full'
          >
            Simpan Produk
          </Button>
        </form>
      </Form>
    </div>
  )
}
