'use client'

import { LogOut, ShoppingBag, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import UserAvatar from './user-avatar'

export default function UserAccountNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none'>
        <UserAvatar user={{
          name: 'Shadcn' || null,
          image: 'https://github.com/shadcn.png' || null,
        }}
          className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-10 h-10 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white' align='end'>
        <div className='flex items-center justify-center gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            <p className='text-sm font-medium'>Shadcn</p>
            <p className='w-[200px] truncate text-xs text-muted-foreground'>
              shadcn@email.com
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className='cursor-pointer'>
            <Link href='/account'>
              <UserIcon className='mr-2 h-4 w-4' aria-hidden='true' />
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='cursor-pointer'>
            <Link href='/history'>
              <ShoppingBag className='mr-2 h-4 w-4' aria-hidden='true' />
              History Orders
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => console.log('logout')}
          className='cursor-pointer'
          asChild
        >
          <div>
            <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
            Sign out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
