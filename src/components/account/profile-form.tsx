'use client'

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { ProfileFormType, updateProfileSchema } from '@/schema/update-user-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import axios from 'axios'
import { Save, Upload } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import UserAvatar from '../auth/user-avatar'
import { Card, CardContent } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Label } from '../ui/label'
import { toast } from '../ui/use-toast'
import { useEdgeStore } from '../providers/edgestore-providers'
import { Progress } from '../ui/progress'

interface ProfileFormProps {
  user: User
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter()
  const { edgestore } = useEdgeStore();
  const { name, email, image, isAdmin, password } = user;

  const [avatarFile, setAvatarFile] = useState<File>();
  const [userName, setUserName] = useState<string>(name!);
  const [passWord, setPassword] = useState<string>(password!);
  const [progress, setProgress] = useState<number>(0);

  const avatarSource = avatarFile ? URL.createObjectURL(avatarFile) : image;
  const showSubmitButton = avatarSource !== image || userName !== name || passWord !== password;

  const form = useForm<ProfileFormType>({
    resolver: zodResolver(updateProfileSchema),
  })

  const handleSubmit = async (data: ProfileFormType) => {
    try {
      if (data.avatar) {
        const res = await edgestore.publicFiles.upload({
          file: data.avatar,
          onProgressChange: async (progress) => {
            setProgress(progress);

            if (progress === 100) {
              setProgress(0);
            }
          }
        })

        await axios.patch('/api/users', {
          image: res.url,
        })
      }

      const res = await axios.patch('/api/users', data)

      if (res.status === 200) {
        toast({
          title: "Success",
          description: "Profile berhasil diupdate.",
        })
      }
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Terjadi kesalahan. Silahkan coba lagi nanti.",
      })
    }
  }

  return (
    <Card className='max-w-lg lg:flex-1 h-fit'>
      <CardContent>
        <Form {...form}>
          <form
            className='flex flex-col justify-center items-center py-4 gap-4'
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name='avatar'
              render={({ field }) => (
                <>
                  <FormItem className='relative inline-block'>
                    {image ? (
                      <UserAvatar
                        user={{
                          name: name,
                          image: avatarSource,
                        }}
                        className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-20 h-20 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
                      />
                    ) : (
                      <UserAvatar
                        user={{
                          name: name,
                          image: `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=256&rounded=true&length=1`,
                        }}
                        className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-20 h-20 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
                      />
                    )}
                    <FormControl>
                      <FormLabel
                        htmlFor='avatar'
                        className='absolute bottom-0 right-0 bg-leaf text-background rounded-full p-2 cursor-pointer'
                      >
                        <input
                          type='file'
                          id='avatar'
                          hidden
                          accept='image/*'
                          onChange={(e) => {
                            const { files } = e.target;
                            if (files && files[0]) {
                              setAvatarFile(files[0]);
                              field.onChange(files[0]);
                            }
                          }}
                        />
                        <Upload size={16} />
                      </FormLabel>
                    </FormControl>
                  </FormItem>
                  <FormMessage />
                  <div className='flex flex-col gap-y-2 items-center'>
                    <p className='text-sm'>{email}</p>
                    {isAdmin === true && (
                      <p className='text-xs'>You login as Admin</p>
                    )}
                  </div>
                  {progress > 0 && (
                    <div className='inline-block gap-x-2 items-center w-full'>
                      <Progress
                        value={progress}
                      />
                      <p className='text-sm'>
                        {progress}%
                      </p>
                    </div>
                  )}
                </>
              )}
            />
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormControl className='w-full'>
                  <FormItem>
                    <Label htmlFor='name'>Nama</Label>
                    <Input
                      id='name'
                      type='text'
                      placeholder='Nama'
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        field.onChange(e);
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                </FormControl>
              )}
            />
            {password === null && (
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormControl className='w-full'>
                    <FormItem>
                      <Label htmlFor='password'>
                        Isikan password anda
                      </Label>
                      <Input
                        id='password'
                        type='password'
                        placeholder='Password...'
                        value={passWord}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          field.onChange(e);
                        }}
                      />
                      <FormMessage />
                    </FormItem>
                  </FormControl>
                )}
              />
            )}
            {showSubmitButton && (
              <Button
                type='submit'
                size='lg'
                className='w-full'
                disabled={form.formState.isSubmitting}
              >
                <Save className='mr-2 w-5 h5' /> Update
              </Button>
            )}
            {
              isAdmin && (
                <Button
                  variant={'outline'}
                  asChild
                  className='w-full'
                >
                  <Link href={'/dashboard'}>
                    Go to dashboard Admin
                  </Link>
                </Button>
              )
            }
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}