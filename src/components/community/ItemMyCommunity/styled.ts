import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

interface iconProps {
  backgroundIcon: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: var(--transition);

  > div {
    gap: 1rem;
    display: flex;
    align-items: center;
  }
  strong {
    font-weight: 600;
    font-size: var(--font-size-sm);
    line-height: 21px;
    color: #3a393b;
  }
  span {
    font-weight: 400;
    font-size: var(--font-size-sm);
    line-height: 21px;
    color: #9c9b9d;
  }
  /* :hover {
    background: #f4f3f6;
    border-radius: 10px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  } */
`

export const ImageLogo = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`
export const Info = styled(Link)`
  display: flex;
  flex-direction: column;

  span,
  strong {
    transition: var(--transition);
  }

  :hover span,
  :hover strong {
    color: var(--color-primary);
  }
`
export const Icon = styled.div<iconProps>`
  background: ${(props) => props.backgroundIcon};
  padding: 5px;
  border-radius: 50%;
`
