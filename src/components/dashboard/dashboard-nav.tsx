'use client'

import { useSidebar } from '@/hooks/useSidebar'
import { dashboardLinks } from '@/lib/data/links'
import { cn } from '@/lib/utils'
import { DollarSign, HomeIcon, LogOut, ShoppingBasket, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { signOut, useSession } from 'next-auth/react'
import UserAvatar from '../auth/user-avatar'
import LogoNav from '../navbar/logo-nav'

export default function DashboardNav() {
  const { data: session } = useSession()
  const path = usePathname();

  const { isOpen } = useSidebar()

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "home":
        return <HomeIcon size={24} className='text-leaf' />
      case "product":
        return <ShoppingBasket size={24} className='text-leaf' />
      case "orders":
        return <DollarSign size={24} className='text-leaf' />
      case "users":
        return <Users size={24} className='text-leaf' />
      default:
        return <HomeIcon size={24} className='text-leaf' />
    }
  }

  return (
    <nav
      className='space-y-10 flex flex-col'
    >
      <div className='flex flex-col gap-4'>
        <LogoNav />
        {dashboardLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'group relative flex h-12 justify-start',
              path === link.href && 'bg-muted font-bold hover:bg-muted'
            )}
          >
            {renderIcon(link.icon)}
            <span
              className={cn(
                "absolute left-12 text-base duration-200 transition-all ease-in-out text-leaf",
                !isOpen && "opacity-0",
              )}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </div>
      <div className='flex gap-x-2 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger className={"px-2"}>
            <UserAvatar user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
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
        <p
          className={cn(
            "text-sm duration-200 transition-all ease-in-out",
            !isOpen && "opacity-0"
          )}>
          {session?.user.name}
        </p>
      </div>
    </nav>
  )
}
