import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'
import { FiTrash2 } from 'react-icons/fi'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description?: string
}

export const DeleteButton = ({
  description = 'delete',
  ...rest
}: ButtonProps) => {
  return (
    <Container aria-label={description} {...rest}>
      <FiTrash2 />
    </Container>
  )
}
