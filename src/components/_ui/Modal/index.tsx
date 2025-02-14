import { Close, Content, Overlay, Portal, Root, Title, Trigger } from './styles'

import { MdOutlineClose } from 'react-icons/md'
import { ReactNode } from 'react'

interface ModalProps {
  children?: ReactNode
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  label?: string
}
interface ModalContentProps {
  title?: string
  children?: ReactNode
  styleModal?: any
}

export const ButtonOpenModal = Trigger

export const Modal = ({
  isOpen,
  children,
  onOpenChange,
  disabled = false,
}: ModalProps) => (
  <Root open={isOpen} onOpenChange={disabled ? undefined : onOpenChange}>
    {children}
  </Root>
)

export const ModalContent = ({
  title,
  children,
  styleModal,
  ...rest
}: ModalContentProps) => {
  return (
    <Portal>
      <Overlay />
      <Content style={styleModal} {...rest}>
        {title && <Title>{title}</Title>}
        <div>
          <Close>
            <MdOutlineClose />
          </Close>
          {children}
        </div>
      </Content>
    </Portal>
  )
}
