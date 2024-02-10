import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { dataDashboardUsers } from "@/lib/data/dashboardData"
import { Search, Trash2 } from "lucide-react"


export default function DashboardUsersPage() {
  return (
    <div className='container mx-auto py-14 flex flex-col'>
      <h3 className='text-2xl font-bold mb-4 text-leaf'>List Users</h3>
      <p className="text-sm text-gray-500">
        A table of users will be displayed here.
      </p>
      <div className="relative max-w-md">
        <Search className="absolute top-6 left-3 w-6 h-6 text-gray-400" />
        <Input type="text" placeholder="Search users" className="mt-4 pl-10" />
      </div>
      <Table className="mt-8">
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
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
