import { ButtonHTMLAttributes, ReactElement } from 'react'
import { FaBoxOpen, FaRegListAlt } from "react-icons/fa"

import { BsFileBarGraph } from "react-icons/bs"
import { CiBoxes } from "react-icons/ci";
import { FaQrcode } from "react-icons/fa"
import { GiExitDoor } from "react-icons/gi";
import Link from 'next/link'
import Menu from 'react-select/dist/declarations/src/components/Menu';
import { PrivacyTerms } from '../../../components/_ui/SideBar/PrivacyTerms'
import { useAuth } from '../../../hooks/useAuth'

interface MenuBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  item: string
  link: string
  title?: string
  onClick?: () => void
}

const MenuBtn = ({ icon, item, link, onClick, title }: MenuBtnProps) => {
  const isLink = !!link;

  const content = (
    <div className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-100 transition-all text-gray-700">
      <div className="text-2xl">{icon}</div>
      <span className="text-md font-medium">{item}</span>
    </div>
  )

  if (isLink) {
    return (
      <Link href={link} title={title}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} title={title} className="w-full text-left">
      {content}
    </button>
  )
}

interface MenuBarProps {
  open?: boolean
}

export const MenuBar = ({ open = false }: MenuBarProps) => {
  const { logout } = useAuth()

  return (
    <div className={`flex flex-col ${open ? 'p-4' : 'p-6'} bg-white h-full`}>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        <MenuBtn link="/qrcode-app/dashboard" icon={<BsFileBarGraph />} item="Dashboard" />
        <MenuBtn link="/qrcode-app/storage" icon={<CiBoxes />} item="Storage" />
        <MenuBtn link="/qrcode-app/container/list" icon={<FaBoxOpen />} item="Containers" />
        <MenuBtn link="/qrcode-app/items/list" icon={<FaRegListAlt />} item="Items" />
        <MenuBtn link="/qrcode-app/scanner" icon={<FaQrcode />} item="Scanner" />
        <MenuBtn link="" icon={<GiExitDoor />} item="Logout" onClick={logout} title="Sign out" />
      </div>

      <div className="mt-auto pt-6">
        <PrivacyTerms />
      </div>
    </div>
  )
}
