import { cn } from '@/lib/utils';
import { hover } from '@/lib/hover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function TransactionFilter() {
  return (
    <Select>
      <SelectTrigger defaultValue={'harga-terendah'}
        className={cn("border-leaf w-fit", hover.shadow)}
      >
        <SelectValue placeholder='Urut berdasarkan' />
      </SelectTrigger>
      <SelectContent className='border-leaf'>
        <SelectGroup>
          <SelectItem value="transaksi-terbaru">Transaksi Terbaru</SelectItem>
          <SelectItem value="transaksi-lama">Transaksi Lama</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
