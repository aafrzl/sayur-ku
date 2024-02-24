import LogoNav from '@/components/navbar/logo-nav'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import OAuthSignIn from '@/components/auth/oauth-signin'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import LoginForm from './login-form'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  
  if (session) {
    return redirect('/')
  }

  return (
    <div className='mx-auto'>
      <Card className='max-w-[500px] min-w-[350px] xl:w-[500px]'>
        <CardHeader className='items-center'>
          <LogoNav />
          <CardTitle className='text-leaf font-semibold text-lg'>
            Masuk Akun Anda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center gap-4'>
            <LoginForm />
            <p className='text-sm'>
              <span className='mr-1'>Belum punya akun?</span>
              <Link href='/sign-up'
                className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>
                Daftar
              </Link>
            </p>
            <Separator className='mt-2 w-[80%]' />
            <OAuthSignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
