'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { EyeIcon, EyeOffIcon, LogIn } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import React from 'react'
import { signInFormSchema, signInFormType } from '@/schema/login-schema'

export default function LoginForm() {
  const router = useRouter()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const form = useForm<signInFormType>({
    resolver: zodResolver(signInFormSchema),
  })

  const onSubmit = async (data: signInFormType) => {
    try {
      const user = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
        redirect: false
      })

      if (!user?.error) {
        toast({
          title: "Berhasil Masuk",
          description: "Anda berhasil masuk.",
        })
        router.push('/')
      } else {
        toast({
          title: "Gagal Masuk",
          description: "Email atau password salah.",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "Gagal Masuk",
        description: "Terjadi kesalahan saat masuk. Silahkan coba lagi nanti.",
        variant: "destructive"
      })
    }
  }

  return (
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
                    placeholder='Kata Sandi'
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
  )
}
