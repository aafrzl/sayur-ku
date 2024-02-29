'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SearchUser() {
  const router = useRouter()

  return (
    <div className="relative max-w-md">
      <Search className="absolute top-6 left-3 w-6 h-6 text-gray-400" />
      <Input
        type="text"
        placeholder="Search users"
        className="mt-4 pl-10"
        onChange={(e) => {
          const query = e.target.value === "" ? "" : `?query=${e.target.value}`

          router.push(`/dashboard/users${query}`)
        }}
      />
    </div>
  )
}
