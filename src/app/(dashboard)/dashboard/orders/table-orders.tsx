'use client'

import { useState } from 'react'

import CommonPagination from '@/components/common/common-pagination'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import ProductJSON from '@/lib/data/json/product.json'
import { formatCurrency } from '@/lib/utils'
import { MoreHorizontal, ScanEye, Trash, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function TableOrders() {
  //Ambil history transaction yang berhasil
  const [transactions] = useState([
    {
      products: ProductJSON
    },
    {
      products: ProductJSON
    }
  ])

  const product = ProductJSON[0]

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>123123123</TableCell>
                <TableCell>
                  <div className='flex flex-col gap-2'>
                    <p className='text-sm font-medium'>{product.name}</p>
                    <p className='text-sm font-semibold'>
                      {formatCurrency(product.price)}
                    </p>
                    <p className='text-sm'>
                      dan {transaction.products.length - 1} barang lainnya
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p>{formatCurrency(product.price * 2)}</p>
                </TableCell>
                <TableCell>
                  <Badge>Dikirim</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/orders/1`} passHref>
                            <ScanEye className="w-4 h-4 mr-2" />
                            <span>Detail</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <XCircle className="w-4 h-4 mr-2" />
                          <span>Cancel</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash className="w-4 h-4 mr-2" />
                          <span>Hapus</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CommonPagination page={1} total={10} />
      </CardContent>
    </Card>
  )
}
