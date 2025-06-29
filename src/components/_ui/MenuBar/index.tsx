import { ButtonHTMLAttributes, ReactElement } from 'react'
import { FaBoxOpen, FaQrcode, FaRegListAlt } from 'react-icons/fa'

import { BsFileBarGraph } from 'react-icons/bs'
import { CiBoxes } from 'react-icons/ci'
import { FaTrowelBricks } from "react-icons/fa6";
import { GiExitDoor } from 'react-icons/gi'
import { GrUserWorker } from "react-icons/gr";
import Link from 'next/link'
import { PrivacyTerms } from '../../../components/_ui/SideBar/PrivacyTerms'
import { useAuth } from '../../../hooks/useAuth'
import { useState } from 'react'

interface MenuItem {
  label: string
  icon: ReactElement
  path?: string
  children?: { label: string; path: string }[]
  onClick?: () => void
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: <BsFileBarGraph />,
    path: '/qrcode-app/dashboard',
  },
  {
    label: 'Subcontractors',
    icon: <GrUserWorker />,
    path: '/subcontractors/',
    children: [
      {label: 'Create', path: '/subcontractors/create/'}
      , {label: 'List', path: '/subcontractors/'}
    ]
  },
  {
    label: 'Projects',
    icon: <FaTrowelBricks />,
    path: '/projects',
    children: [
      { label: 'Create', path: '/projects/create' },
      { label: 'List', path: '/projects/' },
    ]
  },
  {
    label: 'Storage',
    icon: <CiBoxes />,
    children: [
      { label: 'Storage', path: '/qrcode-app/storage' },
      { label: 'Containers', path: '/qrcode-app/container/list' },
      { label: 'Items', path: '/qrcode-app/items/list' },
      { label: 'Scanner', path: '/qrcode-app/scanner' },
    ],
  },
  {
    label: 'Logout',
    icon: <GiExitDoor />,
    onClick: () => {},
  },
]

interface MenuBarProps {
  open?: boolean
}

export const MenuBar = ({ open = false }: MenuBarProps) => {
  const { logout } = useAuth()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleSubmenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <div className={`flex flex-col ${open ? 'p-4' : 'p-6'} bg-white h-full`}>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>

        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0

          if (hasChildren) {
            return (
              <div key={item.label} className="flex flex-col">
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-md font-medium">{item.label}</span>
                </button>
                {openMenus[item.label] &&
                  item.children!.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.path}
                      className="ml-8 mt-1 px-2 py-1 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 text-sm"
                    >
                      {sub.label}
                    </Link>
                  ))}
              </div>
            )
          }

          if (item.path) {
            return (
              <Link
                key={item.label}
                href={item.path}
                className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-md font-medium">{item.label}</span>
              </Link>
            )
          }

          if (item.onClick) {
            return (
              <button
                key={item.label}
                onClick={logout}
                className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-md font-medium">{item.label}</span>
              </button>
            )
          }

          return null
        })}
      </div>

      <div className="mt-auto pt-6">
        <PrivacyTerms />
      </div>
    </div>
  )
}
