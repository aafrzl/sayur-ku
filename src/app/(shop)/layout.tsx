import CommonFooter from '@/components/common/common-footer'
import CommonHeader from '@/components/common/common-header'
import React from 'react'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonHeader />
      {children}
      {/* Footer */}
      <CommonFooter />
    </>
  )
}
