import React from 'react'

import { Chakra } from '@components/chakra'
import { SEO, SeoProps } from '@components/seo'

import { isDev } from '@utils/env'

export interface BaseLayoutProps extends SeoProps {
  cookies: string
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  cookies,
  title,
  description,
  children,
}) => {
  return (
    <Chakra cookies={cookies}>
      <SEO title={title} description={description} />
      {children}
    </Chakra>
  )
}

if (isDev) {
  BaseLayout.displayName = 'BaseLayout'
}
