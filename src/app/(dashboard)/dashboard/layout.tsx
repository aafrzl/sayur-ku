'use client'

import React, { ElementRef, useRef, useState } from 'react'

import DashboardNav from '@/components/dashboard/dashboard-nav'
import DashboardUser from '@/components/dashboard/dashboard-user'
import LogoNav from '@/components/navbar/logo-nav'
import { cn } from '@/lib/utils'
import { ChevronsLeft, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  const isResizing = useRef(false);
  const sidebarRef = useRef<ElementRef<'aside'>>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    isResizing.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing.current) return;

    let newWidth = e.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
    }
  }

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  const resetWidth = () => {
    if (sidebarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = '240px';

      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  }

  const collapse = () => {
    if (sidebarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = '0';
      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  }

  return (
    <main className='flex'>
      <aside
        ref={sidebarRef}
        className={cn('group/sidebar flex flex-col justify-between h-screen sticky top-0 w-80 bg-satin',
          isResetting && "transition-all ease-in-out duration-300",
          !isCollapsed && 'p-10'
        )}>
        {/* Left Sidebar */}
        <div className='flex flex-col gap-y-4'>
          {
            isCollapsed ? (
              <Button
                onClick={resetWidth}
                variant={'ghost'}
                size={'icon'}
                className='absolute top-5 left-10'
              >
                <Menu className='w-6 h-6 text-leaf' />
              </Button>
            ) : (
              <Button
                onClick={collapse}
                variant={'ghost'}
                size={'icon'}
                className='absolute top-5 right-6'
              >
                <ChevronsLeft className='w-6 h-6 text-leaf' />
              </Button>
            )
          }
          <LogoNav />
          <DashboardNav
            isCollapsed={isCollapsed}
          />
        </div>
        <div className={cn("hidden gap-x-2 items-center", !isCollapsed && "flex")}>
          <DashboardUser
            session={session?.user}
          />
          <p className='text-leaf font-semibold'>
            {session?.user?.name}
          </p>
        </div>
        <div
          onMouseDown={handleMouseDown}
          className='opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-screen w-1 bg-satin right-0 top-0'
        />
      </aside>
      <div className='container mx-auto flex-1 p-4 overflow-auto'>
        {/* Right side */}
        {children}
      </div>
    </main>
  )
}
