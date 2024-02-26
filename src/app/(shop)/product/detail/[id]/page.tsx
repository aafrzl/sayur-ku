'use client'

import CommonStepper from "@/components/common/common-stepper";
import ProductShowcase from "@/components/products/product-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductJSON from "@/lib/data/json/product.json";
import { hover } from "@/lib/hover";
import { cn, formatCurrency } from "@/lib/utils";
import { ProductDetail } from "@/types/product-detail";
import { ShoppingBag, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  params: {
    id: number;
  }
}

export default function DetailProductPage({ params }: Props) {
  const { id } = params
  const [itemCount, setItemCount] = useState(1);

  const product = ProductJSON.find((item) => String(item.id) === String(id)) as ProductDetail

  return (
    <main className="flex flex-col w-full items-center py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div className="border p-3 rounded-xl w-fit">
          <div className="relative w-96 lg:w-72 h-72 flex-[1]">
            <Image
              src={product?.img}
              alt={product?.name}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-2 flex-[2]">
          <Badge className="w-fit">{product?.category}</Badge>
          <h3 className="text-xl font-semibold">{product?.name}</h3>
          <div className="flex gap-x-2 items-center text-sm">
            <Star className="fill-carrot stroke-carrot w-4 h-4" />
            <span>{product?.rating}</span>
            <span>|</span>
            <span>{product?.sold} terjual</span>
          </div>
          <h4 className="text-2xl font-bold">
            {formatCurrency(product?.price)} / {product?.unit}
          </h4>
          <p className="text-gray-400 text-base/relaxed tracking-tight text-justify">
            {product?.description}
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <CommonStepper
              count={itemCount}
              onChange={(value) => setItemCount(value)}
            />
            <div className="flex flex-col lg:flex-row gap-2">
              <Button
                className={cn("flex gap-x-2 items-center", hover.shadow)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Masukkan Keranjang</span>
              </Button>
              <Button
                className={cn("flex gap-x-2 items-center", hover.shadow)}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Beli Sekarang</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-8">
        <Separator className="mt-8 container px-14 lg:px-0" />
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-leaf text-lg lg:text-xl">Rekomendasi Buat Kamu</h3>
          <Button
            asChild
            variant={"link"}
          >
            <Link href={'/product'}>
              Lihat Selengkapnya &rarr;
            </Link>
          </Button>
        </div>
        <ProductShowcase
          gridConfig="grid-cols-2 md:grid-cols-4"
          products={ProductJSON.slice(0, 4)}
        />
      </div>
    </main>
  )
}
