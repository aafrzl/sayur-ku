'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface NotificationDetails {
  count?: number,
  color: string,
}

interface NotificationIconProps {
  children: React.ReactNode,
  notificationDetail: NotificationDetails,
  onClick?: () => void,
}

export default function CommonNotificationBadge({ children, notificationDetail, onClick }: NotificationIconProps) {
  const isNumberedNotification = notificationDetail.count != null
  const pillsDimension = cn({
    "w-[16px] h-[16px]": isNumberedNotification,
    "w-[12px] h-[12px]": !isNumberedNotification
  })

  return (
    <div className="relative cursor-pointer" onClick={() => onClick?.()}>
      <div className={cn(
        pillsDimension,
        "right-[-6px] top-[-6px] absolute rounded-full text-xs text-white text-center flex items-center justify-center z-20",
        notificationDetail.color
      )}>
        {notificationDetail.count}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
