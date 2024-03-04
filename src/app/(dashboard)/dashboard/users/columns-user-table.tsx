'use client'

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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const columnsUserTable: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const router = useRouter();

      const user = row.original

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
              <AlertDialogTitle className="text-rose-500">
                Delete User
              </AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete user <span className="font-semibold">{user.name}</span>?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => deleteUser(user.id)}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    }
  }
]