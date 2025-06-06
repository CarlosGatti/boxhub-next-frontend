import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/tailwind.css'

import { CurrentUserProvider, useCurrentUser } from '../context/CurrentUser'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { GlobalStyle } from '../styles/global'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from '../context/UserContext'
import { parseCookies } from 'nookies'
import { useAuth } from '../hooks'
import { useEffect } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 2, staleTime: 5 * 1000 },
  },
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CurrentUserProvider>
            <UserProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </UserProvider>
          </CurrentUserProvider>
        </AuthProvider>
        <ToastContainer draggablePercent={60} />
      </QueryClientProvider>
    </>
  )
}
