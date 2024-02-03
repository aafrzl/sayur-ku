'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../Icons'

export default function OAuthSignIn() {
  return (
    <Button
      onClick={() => console.log('clicked')}
      aria-label='Sign in with Google'
      variant={'outline'}
      className='w-full sm:w-auto'
    >
      <Icons.google className='w-5 h-5 mr-2' /> Sign in with Google
    </Button>
  )
}
