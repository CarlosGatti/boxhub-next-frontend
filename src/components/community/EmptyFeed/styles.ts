import Image from 'next/image'
import styled from 'styled-components'

export const CardViewPublication = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding-bottom: 1.5rem;
`
export const HeaderPublication = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #3c9956;
  border-radius: 10px 10px 0px 0px;
  color: #ffffff;
  padding: 0.25rem 1rem;

  svg {
    font-size: 1.5rem;
  }

  span {
    font-weight: 400;
    font-size: var(--font-size-xs);
    font-style: italic;
  }
`
export const TopPublication = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-container);
  align-items: flex-start;
`
export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const AvatarAuthor = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  background: #d9d9d9;
  padding: 0.3rem;
`
export const NameAuthor = styled.div`
  font-size: var(--font-size-md);
  font-weight: 600;
`

export const BodyPublication = styled.div`
  padding: var(--padding-container);
`
export const Title = styled.div`
  font-weight: 600;
  font-size: var(--font-size-2xl);
  color: #2c3136;
  padding-bottom: 0.5rem;
`

export const TextBodyPublication = styled.div`
  font-size: var(--font-size-md);
  color: #2c3136;
  position: relative;
  padding-bottom: 2.5rem;
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
