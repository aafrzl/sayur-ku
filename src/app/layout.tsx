import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import AuthProviders from '@/components/providers/auth-providers'
import QueryProvider from '@/components/providers/query-provider'
import { EdgeStoreProvider } from '@/components/providers/edgestore-providers'

//TODO: Ganti nama aplikasi ada yang sama hehehe :)

const font = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'SayurKu',
  description: 'SayurKu tempat belanja sayur dan buah segar terpercaya',
  applicationName: 'SayurKu',
  authors: {
    name: 'Coding with Afrizal',
    url: 'https://aafrzl.my.id'
  },
  keywords: ['sayur', 'buah', 'belanja', 'online', 'terpercaya'],
  creator: 'Coding with Afrizal',
  publisher: 'Coding with Afrizal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(font.className, "text-neutral-800")}>
        <AuthProviders>
          <QueryProvider>
            <EdgeStoreProvider>
              {children}
              <Toaster />
            </EdgeStoreProvider>
          </QueryProvider>
        </AuthProviders>
      </body>
    </html>
  )
}
