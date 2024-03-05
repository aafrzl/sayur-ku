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
import { Button } from "@/components/ui/button"
import { toast } from "../ui/use-toast"
import axios from "axios"

export default function DialogDeleteAddress({ id }: { id: string }) {
  const handleDelete = async () => {
    try {
      const res = await axios.delete('/api/account/' + id)

      if (res.status === 200) return toast({
        title: "Success",
        description: "Berhasil menghapus alamat",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal menghapus alamat",
        variant: "destructive"
      })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size={'sm'}>
          Hapus
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hapus Alamat
          </AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin ingin menghapus alamat ini?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
