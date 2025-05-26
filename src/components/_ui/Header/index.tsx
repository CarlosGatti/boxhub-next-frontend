import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline, IoNotificationsOutline } from 'react-icons/io5'

import { IdentityCurrentUser } from '../SideBar/IdentityCurrentUser'
import { IoMdLogOut } from 'react-icons/io'
import Link from 'next/link'
import { SearchModal } from './SearchModal'
import { useAuth } from '../../../hooks/useAuth'
import { useState } from 'react'

export function Header() {
  const { logout } = useAuth()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-700 bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpenMenu(!isOpenMenu)} className="md:hidden text-white">
            {isOpenMenu ? <IoCloseOutline size={24} /> : <AiOutlineMenu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/qrcode-app/dashboard">
            <img src="/image/brand/rh-blue.png" alt="Logo" className="h-10 w-10" />
          </Link>

          {/* User Info (Mobile) */}
          <div className="block md:hidden">
            <IdentityCurrentUser displayName={false} />
          </div>
        </div>

        {/* Header Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/qrcode-app/dashboard">
            <AiOutlineHome size={22} className="hover:text-blue-400 transition" />
          </Link>
          <SearchModal />
          <IoNotificationsOutline size={22} className="hover:text-blue-400 transition" />
          <button onClick={logout}>
            <IoMdLogOut size={22} className="hover:text-red-400 transition" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpenMenu && (
        <div className="fixed inset-0 top-[60px] z-40 bg-black/70 backdrop-blur-md md:hidden">
          <div className="bg-zinc-900 w-64 h-full">
            {/* Você pode usar <MenuBar open /> aqui também */}
            <IdentityCurrentUser displayName />
            {/* Adicione seus links ou componentes de menu aqui */}
          </div>
        </div>
      )}
    </header>
  )
}
