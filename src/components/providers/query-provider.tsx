'use client'

import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export default function QueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
