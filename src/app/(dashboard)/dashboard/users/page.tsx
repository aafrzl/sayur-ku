import { Input } from "@/components/ui/input";

import prisma from "@/lib/db";
import { Search } from "lucide-react";
import TableUsers from "./table-users";
import { User } from "next-auth";
import { redirect } from "next/navigation";
import SearchUser from "./search-users";
import CommonPagination from "@/components/common/common-pagination";

interface Props {
  searchParams: {
    query: string;
    page: string;
  }
}

export default async function DashboardUsersPage({ searchParams }: Props) {
  const where = {
    name: {
      contains: searchParams.query,
    },
  }

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const users = await prisma.user.findMany({
    where,
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return (
    <div className='container mx-auto py-14 flex flex-col'>
      <h3 className='text-2xl font-bold mb-4 text-leaf'>List Users</h3>
      <p className="text-sm text-gray-500">
        A table of users will be displayed here.
      </p>
      <SearchUser />
      <TableUsers
        users={users as []}
      />
      <CommonPagination
        itemCount={page}
        pageSize={pageSize}
        currentPage={parseInt(searchParams.page)}
      />
    </div>
  )
}
