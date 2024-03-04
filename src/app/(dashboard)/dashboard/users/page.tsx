
import prisma from "@/lib/db";
import { User } from "@prisma/client";
import { columnsUserTable } from "./columns-user-table";
import TableUsers from "./table-users";

type searchParams = {
  query: string;
  page: string;
}

interface Props {
  searchParams: searchParams;
}

export default async function DashboardUsersPage({ searchParams }: Props) {
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: searchParams.query,
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  return (
    <div className='container mx-auto py-14 flex flex-col'>
      <h3 className='text-2xl font-bold mb-4 text-leaf'>List Users</h3>
      <p className="text-sm text-gray-500">
        A table of users will be displayed here.
      </p>
      <TableUsers
        columns={columnsUserTable}
        data={users as User[]}
      />
    </div>
  )
}
