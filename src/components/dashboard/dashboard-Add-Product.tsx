import FormAddProduct from "@/app/(dashboard)/dashboard/feature/form-add-product"

export default function DashboardAddProduct() {
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
      <FormAddProduct />
    </div>
  )
}
