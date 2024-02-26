'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../Icons'
import { signIn } from 'next-auth/react'

export default function OAuthSignIn() {
  return (
    <Button
      onClick={() => signIn('google', { callbackUrl: '/' })}
      aria-label='Sign in with Google'
      variant={'outline'}
      className='w-full sm:w-auto'
    >
      <Icons.google className='w-5 h-5 mr-2' /> Sign in with Google
    </Button>
  )
}
