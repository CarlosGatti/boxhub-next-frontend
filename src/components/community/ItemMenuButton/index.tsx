import { ButtonHTMLAttributes, ReactElement } from 'react'

import { MenuButton, Icon } from './styles'

interface MenuBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  item: string
  onClick?: () => void
  active?: any
}

export const ItemMenuButton = ({
  icon,
  item,
  onClick,
  active,
  ...rest
}: MenuBtnProps) => {
  return (
    <MenuButton onClick={onClick} {...rest} active={active}>
      <Icon>{icon}</Icon>
      <span>{item}</span>
    </MenuButton>
  )
}
