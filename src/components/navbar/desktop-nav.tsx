'use client'

import React from 'react'
import LogoNav from './logo-nav'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
interface DesktopNavProps {
  links: {
    title: string;
    href: string;
  }[]
}

export default function DesktopNav({ links }: DesktopNavProps) {
  return (
    <div className='hidden md:flex gap-x-8 items-center'>
      <LogoNav />
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-semibold text-carrot hover:text-carrot transition-colors duration-300 ease-in-out"
                  )}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
