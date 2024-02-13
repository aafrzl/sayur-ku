'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { EyeIcon, EyeOffIcon, LogIn } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import z from 'zod'
import LogoNav from '@/components/navbar/logo-nav'
import Link from 'next/link'
import OAuthSignIn from '@/components/auth/oauth-signin'

type signUpFormType = z.infer<typeof signUpFormSchema>

const signUpFormSchema = z.object({
  nama: z.string().min(1, "Nama tidak boleh kosong"),
  email: z.string().email('Email tidak valid').min(1, "Email tidak boleh kosong"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  passwordConfirm: z.string().min(6, "Password minimal 6 karakter"),
}).refine(data => data.password === data.passwordConfirm, {
  message: "Password tidak sama",
  path: ["passwordConfirm"],
})

export default function SignUpPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const form = useForm<signUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = (data: signUpFormType) => {
    console.log(data)
  }

  return (
    <div className='mx-auto'>
      <Card className='max-w-[350px] min-w-[350px] xl:w-[500px]'>
        <CardHeader className='items-center'>
          <LogoNav />
          <CardTitle className='text-leaf font-semibold text-lg'>
            Buat Akun Baru
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center gap-4'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
                <FormField
                  control={form.control}
                  name='nama'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder='Nama Lengkap'
                          {...field}
                          type='text'
                        />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
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
                <FormField
                  control={form.control}
                  name='passwordConfirm'
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
                            placeholder='Konfirmasi kata sandi'
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
                  <LogIn className='w-5 h-5' /> Buat Akun
                </Button>
              </form>
            </Form>
            <p className='text-sm'>
              Sudah punya akun? <Link href='/sign-in' className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>Masuk</Link>
            </p>
            <Separator className='mt-2 w-[80%]' />
            <OAuthSignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
