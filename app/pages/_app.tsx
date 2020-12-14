import { AppProps, ErrorComponent, useRouter, Head } from 'blitz'

import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { queryCache } from 'react-query'

import { DefaultSeo } from 'next-seo'

import * as seo from '@configs/seo'

import LoginForm from '@app/auth/components/LoginForm'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: JSX.Element, _: any) => page)
  const router = useRouter()

  return (
    <>
      <Head key="meta">
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...seo} />
      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        resetKeys={[router.asPath]}
        onReset={() => {
          // This ensures the Blitz useQuery hooks will automatically refetch
          // data any time you reset the error boundary
          queryCache.resetErrorBoundaries()
        }}
      >
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ErrorBoundary>
    </>
  )
}

export default App

function RootErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  if (error?.name === 'AuthenticationError') {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error?.name === 'AuthorizationError') {
    return (
      <ErrorComponent
        statusCode={(error as any).statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error?.message || error?.name}
      />
    )
  }
}
