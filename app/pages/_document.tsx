import {
  Document as BlitzDocument,
  Html,
  DocumentHead,
  Main,
  BlitzScript /*DocumentContext*/,
} from 'blitz'

import { ColorModeScript } from '@chakra-ui/react'

import { colorKey } from '@configs/theme'

class Document extends BlitzDocument {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body>
          <ColorModeScript key={colorKey} initialColorMode="system" />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default Document
