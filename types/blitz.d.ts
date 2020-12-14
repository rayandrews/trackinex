/* eslint-disable @typescript-eslint/ban-types */
import type { NextPage, NextPageContext } from 'next'
import type { AppProps as NextAppProps } from 'next/app'
import type {
  DefaultCtx,
  SessionContext,
  DefaultPublicData,
  BlitzComponentType,
  // BlitzPage as DefaultBlitzPage,
} from 'blitz'
import type { User } from 'db'

declare module 'blitz' {
  declare interface Ctx extends DefaultCtx {
    session: SessionContext
  }
  declare interface PublicData extends DefaultPublicData {
    userId: User['id']
  }
  declare type PageProps<T> = T & {
    cookies: string
  }
  // declare type GetLayout<T = {}, P = {}> = {
  //   getLayout?(component: JSX.Element, pageProps: P & T): JSX.Element
  // }

  declare interface AppProps<P = {}> extends NextAppProps<P> {
    Component: BlitzComponentType<NextPageContext, any, P> & {
      getLayout?: (component: JSX.Element, pageProps: P) => JSX.Element
    }
  }
  declare type BlitzPage<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (component: JSX.Element, pageProps: P) => JSX.Element
  }

  declare type DefaultPage<P = {}, IP = P> = NextPage<PageProps<P>, IP> & {
    getLayout?: (component: JSX.Element, pageProps: PageProps<P>) => JSX.Element
  }
  // export type CustomBlitzPage = DefaultBlitzPage<PageProps>
}
