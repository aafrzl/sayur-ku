import DashboardAddProduct from '@/components/dashboard/dashboard-Add-Product'
import DashboardBannerUpload from '@/components/dashboard/dashboard-banner-upload'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function DashboardFeaturePage() {
  return (
    <div className='container mx-auto py-14 flex flex-col gap-5'>
      <DashboardBannerUpload />
      <Separator />
      <DashboardAddProduct />
    </div>
  )
}
