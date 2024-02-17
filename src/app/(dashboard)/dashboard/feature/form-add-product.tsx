'use client'

import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
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
import { AutosizeTextarea } from '@/components/ui/textarea'

type Product = z.infer<typeof productSchema>

const productSchema = z.object({
  title: z.string().min(1, { message: "Nama produk tidak boleh kosong" }).max(50, { message: "Nama produk tidak boleh lebih dari 50 karakter" }),
  price: z.coerce.number().min(1, { message: "Harga produk tidak boleh kosong" }).nonnegative({ message: "Harga produk tidak boleh negatif" }).int({ message: "Harga produk harus berupa bilangan bulat" }),
  stock: z.coerce.number().min(1, { message: "Stok produk tidak boleh kosong" }).nonnegative({ message: "Stok produk tidak boleh negatif" }).int({ message: "Harga produk harus berupa bilangan bulat" }),
  description: z.string().min(1, { message: "Deskripsi produk tidak boleh kosong" }).max(500, { message: "Deskripsi produk tidak boleh lebih dari 500 karakter" }),
  image:
    z.custom<File | undefined>()
      .refine((file) => !file || file instanceof File, 'Foto produk harus diisi')
      .refine(
        (file) => !file || (file instanceof File && file.type.startsWith('image/')),
        'Foto produk harus berupa gambar'
      )
      .refine((file) => {
        return !file || file.size < 1024 * 1024 * 2;
      }, 'Foto produk tidak boleh lebih dari 2MB'),
  category: z.string().min(1, { message: "Kategori produk harus dipilih" }),
  unit: z.string().min(1, { message: "Satuan produk harus dipilih" }),
})

export default function FormAddProduct() {
  const [images, setImages] = useState<File | undefined>(undefined)

  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      image: undefined,
      category: "",
      unit: "",
    },
  })

  const onSubmit = (value: Product) => {
    console.log(value)

    // reset form
    form.reset({
      title: "",
      description: "",
      image: undefined,
      category: "",
      unit: "",
    })
    setImages(undefined)
  }

  return (
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
                    id="image"
                    type="file"
                    accept="image/*"
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
                          setImages(undefined)
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
  )
}
