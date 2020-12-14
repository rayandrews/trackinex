---
to: "<%= module ? `app/${module}/components/${name}/${name}.tsx` : `app/components/${name}/${name}.tsx` %>"
---

import React from 'react'

import { isDev } from '@utils/env'

export interface <%= Name %>Props {}

export const <%= Name %>: React.FC<<%= Name %>Props> = () => {
  return <><%= Name %></>
}

if (isDev) {
  <%= Name %>.displayName = '<%= Name %>'
}
