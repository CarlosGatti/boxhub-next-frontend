import { ButtonHTMLAttributes, ReactElement, useState } from 'react'
import { Icon, MenuButton, SubMenuContainer } from './styles'

import Link from 'next/link';
import SubMenuItem from './SubMenuItem';

interface MenuBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  item: string
  onClick?: () => void
  subMenus?: SubMenu[]
}

interface SubMenu {
  title: string;
  href?: string;
  onClick: () => void;
}

export const MenuBtn = ({ icon, item, onClick, subMenus, ...rest }: MenuBtnProps) => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toogleSubMenu = () => {
    if (subMenus && subMenus.length > 0) {
      setSubmenuVisible(!submenuVisible);
    }
    if (onClick) onClick();
  
  }

  return (
    <>
    <MenuButton onClick={toogleSubMenu} {...rest}>
      <Icon>{icon}</Icon>
      <span>{item}</span>
    </MenuButton>
     {subMenus && (

      <SubMenuContainer className={submenuVisible ? 'active' : ''}>
        {subMenus.map((submenu, index) => (
          <SubMenuItem key={index} onClick={submenu.onClick}>
            <Link href={submenu.href || ''} style={{ textDecoration: 'none', color: 'inherit' }}>
            {submenu.title}
            </Link>
          </SubMenuItem>
        ))}
      </SubMenuContainer>

    )}
    </>
  )
}
