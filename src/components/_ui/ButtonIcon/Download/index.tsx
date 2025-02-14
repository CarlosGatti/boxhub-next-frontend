import { ButtonHTMLAttributes } from 'react'
import { BsDownload } from 'react-icons/bs'
import { Container } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description: string
}

export const DownloadButton = ({
  description = 'download',
  ...rest
}: ButtonProps) => {
  return (
    <Container aria-label={description} {...rest}>
      <BsDownload />
    </Container>
  )
}
