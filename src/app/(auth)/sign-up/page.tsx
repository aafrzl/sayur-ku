import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import OAuthSignIn from '@/components/auth/oauth-signin'
import LogoNav from '@/components/navbar/logo-nav'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import RegisterForm from './register-form'

export default function SignUpPage() {
  return (
    <div className='mx-auto'>
      <Card className='max-w-[500px] min-w-[350px] xl:w-[500px]'>
        <CardHeader className='items-center'>
          <LogoNav />
          <CardTitle className='text-leaf font-semibold text-lg'>
            Buat Akun Baru
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center gap-4'>
            <RegisterForm />
            <p className='text-sm'>
              <span className='mr-1'>Sudah punya akun?</span>
              <Link href='/sign-in' className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>Masuk</Link>
            </p>
            <Separator className='mt-2 w-[80%]' />
            <OAuthSignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
