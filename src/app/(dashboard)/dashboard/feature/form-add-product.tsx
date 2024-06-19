"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ProductCategoryJSON } from "@/lib/data/productCategory";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AutosizeTextarea } from "@/components/ui/textarea";
import { Product, productSchema } from "@/schema/product-schema";

export default function FormAddProduct() {
  const [images, setImages] = useState<File | undefined>(undefined);

  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (value: Product) => {
    console.log(value);

    // reset form
    form.reset({
      title: "",
      description: "",
      image: undefined,
      category: "",
      unit: "",
      price: "",
      stock: "",
    });
    setImages(undefined);

    // redirect("/dashboard/products");
  };

  return (
    <Form {...form}>
      <form
        className="my-4 w-1/2 space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="image"
                className="font-semibold text-leaf"
              >
                Foto Product
              </FormLabel>
              <FormControl>
                <div className="flex flex-col gap-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const files = e.target.files;

                      if (files) {
                        const image = files[0];
                        setImages(image);
                        field.onChange(image);
                      }
                    }}
                    className="cursor-pointer border-2 border-dashed border-leaf text-leaf file:cursor-pointer file:text-carrot"
                  />
                  {images && (
                    <div className="relative rounded-md border p-4">
                      <div className="relative size-14">
                        <Image
                          src={URL.createObjectURL(images)}
                          alt={images.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={() => {
                          form.reset({
                            image: undefined,
                          });
                          setImages(undefined);
                        }}
                        size={"icon"}
                        variant={"outline"}
                        className="absolute right-0 top-0"
                      >
                        <X className="size-5" />
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
              <FormLabel
                htmlFor="title"
                className="font-semibold text-leaf"
              >
                Nama Product
              </FormLabel>
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
              <FormLabel
                htmlFor="price"
                className="font-semibold text-leaf"
              >
                Harga Product
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <p className="absolute left-3 top-2 text-sm font-medium text-leaf">
                    Rp
                  </p>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Harga Produk"
                    {...field}
                    className="border-leaf pl-10 placeholder:text-leaf-hover"
                  />
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
              <FormLabel
                htmlFor="stock"
                className="font-semibold text-leaf"
              >
                Stok Product
              </FormLabel>
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
              <FormLabel
                htmlFor="description"
                className="font-semibold text-leaf"
              >
                Deskripsi Product
              </FormLabel>
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
              <FormLabel
                htmlFor="category"
                className="font-semibold text-leaf"
              >
                Kategori Product
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-leaf text-leaf placeholder:text-leaf">
                      <SelectValue placeholder="Kategori Produk" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="text-leaf">
                    {ProductCategoryJSON.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id}
                      >
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
              <FormLabel
                htmlFor="unit"
                className="font-semibold text-leaf"
              >
                Unit Product
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-leaf text-leaf placeholder:text-leaf">
                      <SelectValue placeholder="Unit Produk" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="text-leaf">
                    <SelectItem value="pcs">pcs</SelectItem>
                    <SelectItem value="kg">kg</SelectItem>
                    <SelectItem value="gr">gr</SelectItem>
                    <SelectItem value="ml">ml</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
        >
          Simpan Produk
        </Button>
      </form>
    </Form>
  );
}
