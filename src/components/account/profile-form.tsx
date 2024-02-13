'use client'

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Save, Upload } from 'lucide-react'
import UserAvatar from '../auth/user-avatar'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { useState } from 'react'
import Link from 'next/link'

interface ProfileFormProps {
  user: {
    id: number,
    name: string,
    email: string,
    avatar: string,
    role: string,
  }
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const { id, name, email, avatar, role } = user;

  const [avatarFile, setAvatarFile] = useState<File>();
  const [userName, setUserName] = useState<string>(name);

  const avatarSource = avatarFile ? URL.createObjectURL(avatarFile) : avatar;
  const showSubmitButton = avatarSource !== avatar || userName !== name;

  const isAdmin = role === "Admin" ? true : false

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <Card className='max-w-lg lg:flex-1 h-fit'>
      <CardContent>
        <form
          className='flex flex-col justify-center items-center py-4 gap-4'
          onSubmit={handleSubmit}
        >
          <div className='relative inline-block'>
            {avatar ? (
              <UserAvatar
                user={{
                  name: name,
                  image: avatar || null,
                }}
                className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-20 h-20 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
              />
            ) : (
              <UserAvatar
                user={{
                  name: name || null,
                  image: `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=256&rounded=true&length=1`,
                }}
                className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-20 h-20 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
              />
            )}
            <label
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
                  if (files && files.length > 0) setAvatarFile(files[0]);
                }}
              />
              <Upload size={16} />
            </label>
          </div>
          <div className='flex flex-col gap-y-2 items-center'>
            <p className='text-sm'>{email}</p>
            {isAdmin && (
              <p className='text-xs'>You login as Admin</p>
            )}
          </div>
          <div className='w-full'>
            <Label htmlFor='name'>Nama</Label>
            <Input
              id='name'
              type='text'
              placeholder='Nama'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          {showSubmitButton && (
            <Button
              type='submit'
              size='lg'
              className='w-full'
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
      </CardContent>
    </Card>
  )
}