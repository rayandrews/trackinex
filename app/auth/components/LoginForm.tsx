import React from 'react'
import { Link, useMutation } from 'blitz'

import { Form, FORM_ERROR } from '@components/form'
import { TextField } from '@components/text-field'

import login from 'app/auth/mutations/login'
import { LoginInput } from 'app/auth/validations'

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div>
      <h1>Login</h1>

      <Form
        submitText="Log In"
        schema={LoginInput}
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            props.onSuccess?.()
          } catch (error) {
            if (error.name === 'AuthenticationError') {
              return { [FORM_ERROR]: 'Sorry, those credentials are invalid' }
            } else {
              return {
                [FORM_ERROR]:
                  'Sorry, we had an unexpected error. Please try again. - ' +
                  error.toString(),
              }
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

      <div style={{ marginTop: '1rem' }}>
        Or <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default LoginForm
