import React from 'react'
import { useRouter, DefaultPage } from 'blitz'

import { BaseLayout } from '@app/layouts/base-layout'
import { LoginForm } from '@app/auth/components/LoginForm'

const LoginPage: DefaultPage = () => {
  const router = useRouter()

  return <LoginForm onSuccess={() => router.push('/')} />
}

LoginPage.getLayout = (page, { cookies }) => (
  <BaseLayout title="Log In" cookies={cookies}>
    {page}
  </BaseLayout>
)

export default LoginPage
