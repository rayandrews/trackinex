import { NextSeo, NextSeoProps } from 'next-seo'

import { titleTemplate } from '@configs/seo'

import { isDev } from '@utils/env'

export type SeoProps = Omit<NextSeoProps, 'titleTemplate'> & {
  title?: string
  description?: string
}

export const SEO: React.FC<SeoProps> = (props) => (
  <NextSeo {...props} titleTemplate={titleTemplate} />
)

if (isDev) {
  SEO.displayName = 'SEO'
}
