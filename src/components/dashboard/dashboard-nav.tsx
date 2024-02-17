import { dashboardLinks } from '@/lib/data/links'
import { hover } from '@/lib/hover'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function DashboardNav({isCollapsed}: {isCollapsed: boolean}) {
  return (
    <ul className='space-y-4 '>
      {dashboardLinks.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className={cn('font-semibold text-lg text-leaf hover:text-carrot transition-all duration-300 ease-in-out hidden', hover.shadow, !isCollapsed && 'block')}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}