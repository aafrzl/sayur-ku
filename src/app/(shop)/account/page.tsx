'use client'

import ProfileForm from "@/components/account/profile-form";
import ProfileHistory from "@/components/account/profile-history";

const UserProfile = {
  id: 1,
  name: 'Shadcn',
  email: 'shadcn@email.com',
  avatar: 'https://github.com/shadcn.png',
  role: 'Admin'
}

export default function AccoutPage() {


  return (
    <main className='flex min-h-screen w-full flex-col py-14 container mx-auto gap-4'>
      <div className='flex flex-col items-start'>
        <h3 className='text-leaf font-bold text-3xl'>
          Akun
        </h3>
        <p className='text-muted-foreground text-sm'>
          Kelola informasi akun Anda
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <ProfileForm
          user={UserProfile}
        />

        <ProfileHistory />
      </div>
    </main>
  )
}
