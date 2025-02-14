import { Close, Container, Content, Title } from './styles'
import { ReactNode, useEffect, useRef } from 'react'

interface ModalHeaderProps {
  title?: string
  children?: ReactNode
}

interface ModalFooterProps {
  children?: ReactNode
}

const Modal = (props: any) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickOutsideContent = (e: Event) => {
      if (e.target === modalRef.current) {
        props.setShow(false)
      }
    }
    window.addEventListener('click', clickOutsideContent)
    return () => {
      window.removeEventListener('click', clickOutsideContent)
    }
  }, [props])

  return (
    <Container ref={modalRef} className={`modal ${props.show ? 'active' : ''}`}>
      <div className="content">
        {!props.hideCloseButton && (
          <Close onClick={() => props.setShow(false)} className="close">
            &times;
          </Close>
        )}
        {props.children}
      </div>
    </Container>
  )
}

export default Modal

export const ModalContent = ({ title, children }: ModalHeaderProps) => {
  return (
    <Content>
      <Title>{title}</Title>
      <div>{children}</div>
    </Content>
  )
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="footer">{children}</div>
}
