import SliderImage from "@/components/home/slider-image";
import ProductShowcase from "@/components/products/product-showcase";
import { Button } from "@/components/ui/button";
import ProductCategory from "@/components/products/product-category";
import Link from "next/link";

//dummy data product JSON
import productJSON from "@/lib/data/json/product.json";
import { ProductCategoryJSON } from "@/lib/data/productCategory";

export default function Home() {
  return (
    <main className="flex w-full items-center justify-between py-4">
      <div className="container m-auto flex flex-col">
        <SliderImage />
        <div className="flex flex-col mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-leaf text-xl md:text-2xl">
              Produk Unggulan
            </h3>
            <Button
              asChild
              className="text-sm"
              variant={'link'}
              size={'sm'}
            >
              <Link href={'/product'}>
                Lihat Selengkapnya &rarr;
              </Link>
            </Button>
          </div>
          {/* Product Showcase */}
          <ProductShowcase
            products={productJSON.slice(0, 4)}
            gridConfig="grid-cols-2 md:grid-cols-4"
          />
        </div>
        {/* Product Category */}
        <div className="mt-8">
          <h3 className="text-leaf font-semibold text-xl md:text-2xl">
            Produk Berdasarkan Kategori
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ProductCategoryJSON.map((category) => (
              <ProductCategory
                key={category.id}
                id={category.id}
                icon={category.icon}
                title={category.title}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
