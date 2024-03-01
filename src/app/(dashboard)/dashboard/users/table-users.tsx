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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { User } from "@prisma/client"
import { Trash2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import axios from "axios"
import { useRouter } from "next/navigation"

interface Props {
  users: User[]
}

export default function TableUsers({ users }: Props) {
  // if email is same with session email, disable delete button
  const { data: session } = useSession()
  const router = useRouter()

  const isUser = (email: string) => {
    if (session?.user?.email === email) return true
  }

  const deleteUser = async (id: string) => {
    try {
      await axios.delete("/api/users/" + id)
      router.refresh()
      toast({
        title: "Success",
        description: "User has been deleted.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Server error. Please try again later.",
        variant: "destructive",
      })
    }
  }

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
                  {!isUser(user.email!) && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size={'icon'}
                          variant={'destructive'}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteUser(user.id)}
                          >Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
