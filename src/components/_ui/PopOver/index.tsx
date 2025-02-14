import { Content, Portal, Root, Trigger } from './styles'

import { ReactNode } from 'react'

interface PopOverProps {
  children?: ReactNode
}

export const ButtonPopOver = ({ children }: PopOverProps) => {
  return <Trigger asChild>{children}</Trigger>
}

export const PopOver = ({ children }: PopOverProps) => <Root>{children}</Root>

export const ContentPopOver = ({ children }: PopOverProps) => {
  return (
    <Portal>
      <Content>{children}</Content>
    </Portal>
  )
}
