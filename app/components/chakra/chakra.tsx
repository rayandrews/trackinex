import React from 'react'

import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react'

import { theme } from '@libs/theme'

import { isDev } from '@utils/env'

export interface ChakraProps
  extends React.PropsWithChildren<
    Omit<ChakraProviderProps, 'colorModeManager' | 'theme'>
  > {
  cookies: string
}

export const Chakra: React.FC<ChakraProps> = ({
  children,
  cookies,
  ...props
}) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider
      {...props}
      colorModeManager={colorModeManager}
      theme={theme}
    >
      {children}
    </ChakraProvider>
  )
}

if (isDev) {
  Chakra.displayName = 'Chakra'
}
