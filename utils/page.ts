import type { ParsedUrlQuery } from 'querystring'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import { noObj } from './noop'

export function redirect404(res: GetServerSidePropsContext['res']) {
  if (res.headersSent) return
  res.statusCode = 302
  res.setHeader('Location', '/404')
  res.end()
}

// export type ServerSidePropsResult<T> = GetServerSidePropsResult<T | Promise<T>>

export function getCookies(req: GetServerSidePropsContext['req']): string {
  return req.headers.cookie ?? ''
}

// export function getDefaultServerSideProps({
//   req,
// }: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
//   return {
//     props: {
//       cookies: getCookies(req),
//     },
//   }
// }

// export type GetServerSidePropsResult<P> =
//   | { props: P }
//   | { redirect: Redirect }
//   | { notFound: true }

// export type GetServerSideProps<
//   P extends { [key: string]: any } = { [key: string]: any },
//   Q extends ParsedUrlQuery = ParsedUrlQuery
// > = (
//   context: GetServerSidePropsContext<Q>,
// ) => Promise<GetServerSidePropsResult<P>>

export type ServerSidePropsCallback<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (ctx: GetServerSidePropsContext<Q>) => Promise<GetServerSidePropsResult<P>>

export type DefaultServerSideProps = {
  cookies: string
}

export function serverSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(cb?: ServerSidePropsCallback<P, Q>) {
  return async function callbackFunction(
    ctx: GetServerSidePropsContext<Q>,
  ): Promise<GetServerSidePropsResult<DefaultServerSideProps & P>> {
    const res: GetServerSidePropsResult<P> = cb
      ? await cb(ctx)
      : ({ props: noObj } as any)

    if ((res as any).notFound) {
      return {
        notFound: (res as any).notFound,
      }
    }

    if ((res as any).redirect) {
      return {
        redirect: (res as any).redirect,
      }
    }

    return {
      props: {
        ...(res as any).props,
        cookies: getCookies(ctx.req),
      },
    }
  }
}
