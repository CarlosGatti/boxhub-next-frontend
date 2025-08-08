import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline, IoNotificationsOutline } from 'react-icons/io5'

import { IdentityCurrentUser } from '../SideBar/IdentityCurrentUser'
import { IoMdLogOut } from 'react-icons/io'
import Link from 'next/link'
import { MenuBar } from '../MenuBar'
import { useAuth } from '../../../hooks/useAuth'
import { useState } from 'react'

export function Header() {
  const { logout } = useAuth()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-700 bg-zinc-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left section */}
        <div className="flex items-center gap-4 flex-1">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="md:hidden text-white"
          >
            {isOpenMenu ? <IoCloseOutline size={24} /> : <AiOutlineMenu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/qrcode-app/dashboard">
            <img
              src="/image/brand/pires-logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </Link>
        </div>

        {/* User Info on Mobile (right-aligned) */}
        <div className="block md:hidden ml-auto">
          <IdentityCurrentUser displayName={false} />
        </div>

        {/* Right section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/qrcode-app/dashboard">
            <AiOutlineHome size={22} className="hover:text-blue-400 transition" />
          </Link>
          <IoNotificationsOutline size={22} className="hover:text-blue-400 transition" />

          <button onClick={logout}>
            <IoMdLogOut size={22} className="hover:text-red-400 transition" />
          </button>

          {/* IdentityCurrentUser added on Desktop */}
          <div className="flex items-center">
            <div className="w-20">
              <IdentityCurrentUser displayName={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpenMenu && (
        <div className="fixed inset-0 top-[60px] z-40 bg-black/70 backdrop-blur-md md:hidden">
          <div className="bg-white w-64 h-full shadow-lg overflow-y-auto">
            <div className="px-4 pt-4 pb-2 border-b">
              <IdentityCurrentUser displayName />
            </div>
            <MenuBar open />
          </div>
        </div>
      )}
    </header>
  )
}