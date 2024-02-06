import FilterCategory from "@/components/filter/filter-category"
import FilterPrice from "@/components/filter/filter-price"
import FilterRating from "@/components/filter/filter-rating"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { Filter } from "lucide-react"

export default function FilterMobile() {
  return (
    <div className='flex lg:hidden flex-[1]'>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant={'outline'}
            className="flex gap-x-1 rounded-xl">
            <Filter className="w-4 h-4" />
            <span>Filter Produk</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="container py-4">
          <DrawerHeader>
            <DrawerTitle>Filter Produk</DrawerTitle>
            <DrawerDescription>
              Filter produk berdasarkan kategori, harga, dan rating.
            </DrawerDescription>
          </DrawerHeader>
          <Separator className="my-2" />
          {/* FilterCategory */}
          <FilterCategory />
          <Separator className="my-2" />
          {/* FilterHarga */}
          <FilterPrice />
          <Separator className="my-2" />
          {/* FilterRating */}
          <FilterRating />
        </DrawerContent>
      </Drawer>
    </div>
  )
}
