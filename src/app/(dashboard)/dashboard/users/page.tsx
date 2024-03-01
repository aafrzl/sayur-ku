
import CommonPagination from "@/components/common/common-pagination";
import prisma from "@/lib/db";
import SearchUser from "./search-users";
import TableUsers from "./table-users";

type searchParams = {
  query: string;
  page: string;
}

interface Props {
  searchParams: searchParams;
}

export default async function DashboardUsersPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

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
      image: true,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  const usersCount = await prisma.user.count({
    where: {
      name: {
        contains: searchParams.query,
      },
    },
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
        itemCount={usersCount}
        pageSize={pageSize}
        currentPage={parseInt(searchParams.page)}
      />
    </div>
  )
}
