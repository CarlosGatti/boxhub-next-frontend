import { ButtonHTMLAttributes } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Container } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description?: string
}

export const EditButton = ({
  description = 'editar',
  ...rest
}: ButtonProps) => {
  return (
    <Container aria-label={description} {...rest}>
      <FaRegEdit />
    </Container>
  )
}
