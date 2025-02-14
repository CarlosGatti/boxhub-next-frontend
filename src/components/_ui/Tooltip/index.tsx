import { Arrow, Content, Portal, Provider, Root, Trigger } from './styles'

import { ReactNode } from 'react'

interface TooltipProps {
  children?: ReactNode
  message?: string
}

export const ButtonTooltip = ({ children }: TooltipProps) => {
  return (
    <Trigger asChild>
      <div>{children}</div>
    </Trigger>
  )
}

export const Tooltip = ({ children }: TooltipProps) => (
  <Provider delayDuration={50}>
    <Root>{children}</Root>
  </Provider>
)

export const ContentTooltip = ({ children, message }: TooltipProps) => {
  return (
    <Portal>
      <Content>
        {children}
        <Arrow className="TooltipArrow" />
      </Content>
    </Portal>
  )
}
