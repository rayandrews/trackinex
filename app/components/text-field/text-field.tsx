import React from 'react'

import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormControlProps,
  InputProps,
} from '@chakra-ui/react'

export interface TextFieldProps extends InputProps {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: 'text' | 'password' | 'email' | 'number'
  outerProps?: FormControlProps
}

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  outerProps,
  ...props
}) => {
  const {
    register,
    formState: { isSubmitting },
    errors,
  } = useFormContext()
  const error = Array.isArray(errors[name])
    ? errors[name].join(', ')
    : errors[name]?.message || errors[name]

  return (
    <FormControl {...outerProps} isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...props}
        id={name}
        variant="outline"
        disabled={isSubmitting}
        name={name}
        placeholder={name}
        ref={register}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}
