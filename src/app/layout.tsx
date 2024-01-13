import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const font = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'SayurKu',
  description: 'SayurKu tempat belanja sayur terpercaya',
  applicationName: 'SayurKu',
  authors: {
    name: 'Coding with Afrizal',
    url: 'https://aafrzl.my.id'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "text-neutral-800")}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
