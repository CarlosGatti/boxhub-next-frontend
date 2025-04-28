import { ButtonHTMLAttributes, ReactElement, useState } from 'react'
import { FaBoxOpen, FaRegListAlt } from "react-icons/fa"

import { BsFileBarGraph } from "react-icons/bs"
import { FaQrcode } from "react-icons/fa"
import Link from 'next/link'
import { MdFamilyRestroom } from "react-icons/md"
import { PrivacyTerms } from '../../../components/_ui/SideBar/PrivacyTerms'

interface MenuBtnProps {
  icon: ReactElement
  item: string
  link: string
  title?: string
  onClick?: () => void
}

const MenuBtn = ({ icon, item, link, onClick, title }: MenuBtnProps) => {
  return (
    <Link
      href={link}
      title={title}
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-100 transition-all text-gray-700"
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-md font-medium">{item}</span>
    </Link>
  )
}

interface MenuBarProps {
  open?: boolean
}

export const MenuBar = ({ open = false }: MenuBarProps) => {
  const [containerOpen, setContainerOpen] = useState(false)

  return (
    <aside className="flex flex-col w-64 min-h-screen p-6 bg-white border-r shadow-md">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>

        <MenuBtn link="/qrcode-app/dashboard" icon={<BsFileBarGraph />} item="Dashboard" />
        <MenuBtn link="/qrcode-app/families" icon={<MdFamilyRestroom />} item="Families" />

        {/* Containers with submenu */}
        <button
          onClick={() => setContainerOpen(!containerOpen)}
          className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-100 transition-all text-gray-700"
        >
          <div className="text-2xl">
            <FaBoxOpen />
          </div>
          <span className="text-md font-medium">Containers</span>
        </button>

        {/* Submenu (Dropdown) */}
        {containerOpen && (
          <div className="ml-8 flex flex-col gap-2">
            <Link href="/qrcode-app/container/list" className="text-gray-600 hover:text-gray-800 text-sm">
              List Containers
            </Link>
            <Link href="/qrcode-app/container/create" className="text-gray-600 hover:text-gray-800 text-sm">
              Create Container
            </Link>
          </div>
        )}

        <MenuBtn link="/qrcode-app/items/list" icon={<FaRegListAlt />} item="Items" />
        <MenuBtn link="/qrcode-app/scanner" icon={<FaQrcode />} item="Scanner" />
      </div>

      <div className="mt-auto pt-6">
        <PrivacyTerms />
      </div>
    </aside>
  )
}
export default MenuBar