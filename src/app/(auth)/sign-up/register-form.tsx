'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { signUpFormSchema, signUpFormType } from '@/schema/register-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { EyeIcon, EyeOffIcon, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterForm() {
  const router = useRouter()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const form = useForm<signUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = async (data: signUpFormType) => {
    try {
      const response = await axios.post('/api/auth/sign-up', data)
      if (response.status === 200) {
        toast({
          title: "Berhasil mendaftar",
          description: "Silahkan login untuk melanjutkan",
        })

        form.reset()
        router.push('/sign-in')
      }
    } catch (error) {
      toast({
        title: "Gagal mendaftar",
        description: "Terjadi kesalahan saat mendaftar, silahkan coba lagi nanti",
        variant: 'destructive'
      })
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
        <FormField
          control={form.control}
          name='name'
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
  )
}
