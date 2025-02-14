import { ReactNode } from 'react'

import { Container, Title } from './styles'

export interface SideBarProps {
  children?: ReactNode
  title?: string
  styleTitle?: any
  privacyLink?: boolean
}

export const ContainerMain = ({ children, title, ...rest }: SideBarProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
