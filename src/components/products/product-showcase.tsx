import { cn } from '@/lib/utils';
import { ProductDetail } from '@/types/product-detail';
import Link from 'next/link';
import React from 'react'
import ProductCard from './product-card';

interface Props {
  products: ProductDetail[];
  gridConfig?: string;
}

export default function ProductShowcase({ products, gridConfig }: Props) {
  return (
    <div className="w-full">
      <div className={cn("grid gap-5 transition-all duration-300 ease-in", gridConfig)}>
        {/* Mapping product cards */}
        {products.map((product) => (
          <Link href={`/product/detail/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}
