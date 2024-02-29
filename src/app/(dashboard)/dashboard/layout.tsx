import DashboardSidebar from '@/components/dashboard/dashboard-sidebar'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex'>
      {/* Left sidebar */}
      <DashboardSidebar />
      <div className='container mx-auto flex-1 p-4 overflow-auto'>
        {/* Right side */}
        {children}
      </div>
    </main>
  )
}
