'use client'

import CommonPagination from "@/components/common/common-pagination"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { dataDashboardUsers } from "@/lib/data/dashboardData"
import { Trash2 } from "lucide-react"
import React from 'react'

export default function TableUsers() {
  return (
    <Card className="mt-8">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataDashboardUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    size={'icon'}
                    variant={'destructive'}
                    onClick={() => console.log('delete user')}
                  >
                    <Trash2 size={16} />
                  </Button>
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
