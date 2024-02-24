'use client'

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import UserAvatar from '../auth/user-avatar'
import { LogOut } from 'lucide-react'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'

interface Props {
  session: User
}

export default function DashboardUser({ session }: Props) {
  const { name, image } = session

  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <UserAvatar user={{
          name: name || null,
          image: image || null,
        }}
          className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-10 h-10 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mx-5'>
        <DropdownMenuItem
          onClick={() => signOut()}
          className='cursor-pointer'
          asChild
        >
          <div className='text-rose-500'>
            <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}