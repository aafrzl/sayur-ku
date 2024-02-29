import { Input } from "@/components/ui/input"

import { Search } from "lucide-react"
import TableUsers from "./table-users"


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
      <TableUsers />
    </div>
  )
}
