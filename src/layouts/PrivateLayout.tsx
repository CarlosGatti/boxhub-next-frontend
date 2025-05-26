import Head from 'next/head'
import { Header } from '../components/_ui/Header'
import { MenuBar } from '../components/_ui/MenuBar'
import { ReactNode } from 'react'

interface PrivateLayoutProps {
  children: ReactNode
  title: string
  description: string
}

export function PrivateLayout({ children, title, description }: PrivateLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="flex flex-col min-h-screen">
  {/* Top Header */}
  <Header />

  <div className="flex flex-1">
    {/* Sidebar (MenuBar) */}
    <aside className="hidden md:block w-64 bg-white border-r shadow-sm">
      <MenuBar />
    </aside>

    {/* Main Content */}
    <main className="flex-1 bg-gray-50 p-4">
      {children}
    </main>
  </div>
</div>


      {/* Opcional: Footer para usuários logados */}
      <footer className="w-full border-t py-4 bg-white text-center text-sm text-gray-500">
        © 2025 BoxHub — Internal
      </footer>
    </div>
  )
}
