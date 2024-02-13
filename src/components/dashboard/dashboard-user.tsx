'use client'

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import UserAvatar from '../auth/user-avatar'
import { LogOut } from 'lucide-react'

interface Props {
  name: string,
  image: string,
}

export default function DashboardUser({ name, image }: Props) {
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
          onClick={() => console.log('logout')}
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
