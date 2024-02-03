'use client'

import LogoNav from '@/components/navbar/logo-nav'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from 'react'
import z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { EyeIcon, EyeOffIcon, LogIn } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import OAuthSignIn from '@/components/auth/oauth-signin'
import Link from 'next/link'

type signInFormType = z.infer<typeof signInFormSchema>

const signInFormSchema = z.object({
  email: z.string().email('Email tidak valid').min(1, "Email tidak boleh kosong"),
  password: z.string().min(6, "Password minimal 6 karakter"),
})

export default function SignInPage() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const form = useForm<signInFormType>({
    resolver: zodResolver(signInFormSchema),
  })

  const onSubmit = (data: signInFormType) => {
    console.log(data)
  }

  return (
    <div className='mx-auto'>
      <Card className='w-[400px] xl:w-[500px]'>
        <CardHeader className='items-center'>
          <LogoNav />
          <CardTitle className='text-leaf font-semibold text-lg'>
            Masuk Akun Anda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center gap-4'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder='Email'
                          {...field}
                          type='email'
                        />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className='relative'>
                          <Button
                            type='button'
                            size={'icon'}
                            variant={'ghost'}
                            className='absolute right-0 top-1/2 transform -translate-y-1/2'
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                          >
                            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                          </Button>
                          <Input
                            placeholder='Kata sandi'
                            type={isPasswordVisible ? 'text' : 'password'}
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='w-full flex gap-x-2 items-center'
                >
                  <LogIn className='w-5 h-5' /> Masuk
                </Button>
              </form>
            </Form>
            <p className='text-sm'>
              Belum punya akun? <Link href='/sign-up' className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>Daftar</Link>
            </p>
            <Separator className='mt-2 w-[80%]' />
            <OAuthSignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
