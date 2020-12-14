import React from 'react'

import { BaseLayout, BaseLayoutProps } from '@layouts/base-layout'

export function getDefaultLayout<T extends BaseLayoutProps>(
  baseProps?: Omit<BaseLayoutProps, 'cookies'>,
) {
  return function (page: JSX.Element, props: T) {
    return React.createElement(BaseLayout, { ...baseProps, ...props }, page)
  }
}
