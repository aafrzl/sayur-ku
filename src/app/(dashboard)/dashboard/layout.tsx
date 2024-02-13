import React from 'react'

import DashboardNav from '@/components/dashboard/dashboard-nav'
import DashboardUser from '@/components/dashboard/dashboard-user'
import LogoNav from '@/components/navbar/logo-nav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex'>
      <div className='flex flex-col justify-between h-screen sticky top-0 w-80 bg-satin p-10'>
        {/* Left Sidebar */}
        <div className='flex flex-col gap-y-4'>
          <LogoNav />
          <DashboardNav />
        </div>
        <div className='flex gap-x-2 items-center'>
          <DashboardUser
            name='Shadcn'
            image='https://github.com/shadcn.png'
          />
          <p className='text-leaf font-semibold'>Shadcn</p>
        </div>
      </div>
      <div className='container mx-auto flex-1 p-4 overflow-auto'>
        {/* Right side */}
        {children}
      </div>
    </main>
  )
}
