import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/tailwind.css'
import '../styles/hubspot-forms.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { CurrentUserProvider } from '../context/CurrentUser'
import { GlobalStyle } from '../styles/global'
import { HubspotTracking } from '../components/hubspot/HubspotTracking'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from '../context/UserContext'

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
        <HubspotTracking />
      </QueryClientProvider>
    </>
  )
}
