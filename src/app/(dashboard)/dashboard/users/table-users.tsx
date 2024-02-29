'use client'

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
import { User } from "@prisma/client"
import { Trash2 } from "lucide-react"

interface Props {
  users: User[]
}

//TODO: add functionality to delete user (Soft delete)

export default function TableUsers({ users }: Props) {
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
          {users.length === 0 && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No users found
                </TableCell>
              </TableRow>
            </TableBody>
          )}
          <TableBody>
            {users.map((user) => (
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
      </CardContent>
    </Card>
  )
}
