import { Container, Title, Topside } from './styles'

import { PrivacyTerms } from './PrivacyTerms'
import { ReactNode } from 'react'

export interface SideBarProps {
  children?: ReactNode
  title?: string
  styleTitle?: any
  privacyLink?: boolean
}

export const SideBar = ({
  children,
  title,
  styleTitle,
  privacyLink = false,
  ...rest
}: SideBarProps) => {
  return (
    <Container {...rest}>
      <Topside>
        <Title style={{ ...styleTitle }}>{title}</Title>
        {children}
      </Topside>
      {privacyLink && <PrivacyTerms />}
    </Container>
  )
}
