'use client'

import React, { useState } from 'react'
import ProductJSON from '@/lib/data/json/product.json'
import { ProductDetail } from '@/types/product-detail'
import ProductCheckoutList from './product-checkout-list'

export default function ItemList() {
  const [products, setProducts] = useState<ProductDetail[]>([
    ProductJSON[0],
    ProductJSON[1],
    ProductJSON[2]
  ])

  return (
    <div className='flex flex-col items-start'>
      <p className='font-bold text-lg'>Barang yang dibeli</p>
      {
        products.map((product, index) => (
          <ProductCheckoutList
            key={index}
            productDetails={product}
            onChangeItemCount={(count) => {
              const updatedProducts = [...products]
              updatedProducts[index].itemCount = count
              setProducts(updatedProducts)
            }}
            onRemove={() => {
              const updatedProducts = [...products]
              updatedProducts.splice(index, 1)
              setProducts(updatedProducts)
            }}
          />
        ))
      }
    </div>
  )
}
