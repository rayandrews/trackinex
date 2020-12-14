import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  styles: {
    global: {
      'html, body, body > div:first-of-type, div#__next': {
        height: '100%',
      },
    },
  },
  //   colors: {
  // brand: {
  //   100: '#f7fafc',
  //   // ...
  //   900: '#1a202c',
  // },
  //   },
})
