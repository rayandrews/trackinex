import React from 'react'

import { useRouter, DefaultPage } from 'blitz'

import { BaseLayout } from '@app/layouts/base-layout'
import { SignupForm } from '@app/auth/components/SignupForm'

const SignupPage: DefaultPage = () => {
  const router = useRouter()

  return <SignupForm onSuccess={() => router.push('/')} />
}

SignupPage.getLayout = (page, { cookies }) => (
  <BaseLayout title="Sign Up" cookies={cookies}>
    {page}
  </BaseLayout>
)

export default SignupPage
