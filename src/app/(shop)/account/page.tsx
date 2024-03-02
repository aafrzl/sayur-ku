import ProfileForm from "@/components/account/profile-form";
import ProfileHistory from "@/components/account/profile-history";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db";
import { User } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import ProfileAddress from "@/components/account/profile-address";

export default async function AccoutPage() {
  const session = await getServerSession(authOptions)

  const getUserData = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string
    },
    include: {
      ShippingAddress: true
    }
  })

  const address = getUserData?.ShippingAddress || []

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
        <Card className='max-w-lg lg:flex-1 h-fit'>
          <CardContent>
            <ProfileForm
              user={getUserData as User}
            />
            <Separator className="my-5" />
            <ProfileAddress
              Alamat={address}
            />
          </CardContent>
        </Card>
        <ProfileHistory />
      </div>
    </main>
  )
}
