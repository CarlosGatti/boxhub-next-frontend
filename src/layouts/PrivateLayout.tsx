import Head from 'next/head'
import { Header } from '../components/_ui/Header'
import { MenuBar } from '../components/_ui/MenuBar'
import { ReactNode } from 'react'
import { useProAccess } from '../hooks/usePro'

interface PrivateLayoutProps {
  children: ReactNode
  title: string
  description: string
}

export function PrivateLayout({ children, title, description }: PrivateLayoutProps) {
  const { isTrialActive, isPremiumActive, trialDaysLeft } = useProAccess()

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <aside className="hidden md:block w-64 bg-white border-r shadow-sm">
            <MenuBar />
          </aside>
          <main className="flex-1 bg-gray-50 p-4">
            {isTrialActive && (
              <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded mb-4 text-sm text-center">
                You are currently on a free trial. Your trial ends in {trialDaysLeft} day(s).          
              </div>
            )}
            {!isPremiumActive && !isTrialActive && (
              <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded text-sm text-center">
                Your access has expired. Please upgrade to regain access to the system.
              </div>
            )}
            {(isTrialActive || isPremiumActive) && children}
          </main>
        </div>
      </div>
      <footer className="w-full border-t py-4 bg-white text-center text-sm text-gray-500">
        © 2025 BoxHub — Internal
      </footer>
    </div>
  )
}
