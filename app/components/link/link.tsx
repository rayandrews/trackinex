import React from 'react'
import { LinkProps as BlitzLinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Link as BlitzLink } from 'blitz'

export type LinkProps = React.PropsWithChildren<
  BlitzLinkProps & Omit<ChakraLinkProps, 'as' | 'isExternal' | 'href'>
> & {
  disabled?: boolean
}

export const Link = React.memo<LinkProps>(
  ({
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    children,
    disabled,
    ...props
  }) => {
    if (disabled) {
      return <>{children}</>
    }

    return (
      <BlitzLink
        passHref
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
      >
        <ChakraLink {...props} isExternal={false}>
          {children}
        </ChakraLink>
      </BlitzLink>
    )
  },
)
