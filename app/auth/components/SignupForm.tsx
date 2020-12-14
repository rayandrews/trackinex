import React from 'react'
import { useMutation } from 'blitz'

import { Form, FORM_ERROR } from '@components/form'
import { TextField } from '@components/text-field'

import signup from 'app/auth/mutations/signup'
import { SignupInput } from '@app/auth/validations'

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <div>
      <h1>Create an Account</h1>

      <Form
        submitText="Create Account"
        schema={SignupInput}
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values)
            props.onSuccess?.()
          } catch (error) {
            if (
              error.code === 'P2002' &&
              error.meta?.target?.includes('email')
            ) {
              // This error comes from Prisma
              return { email: 'This email is already being used' }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <TextField name="email" label="Email" placeholder="Email" />
        <TextField
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
      </Form>
    </div>
  )
}

export default SignupForm
