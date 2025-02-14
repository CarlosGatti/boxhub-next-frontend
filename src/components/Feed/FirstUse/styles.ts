import Image from 'next/image'
import styled from 'styled-components'

export const CardViewPublication = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
`
export const HeaderPublication = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #191919;
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
export const BtnOptions = styled.button`
  font-size: 1.5rem;
  display: flex;
  height: 100%;
  border: none;
  background: transparent;
  transition: var(--transition);

  :hover {
    color: var(--color-primary);
  }
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

export const BottomPublication = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-container);
  svg {
    font-size: 1.5rem;
  }
  > div {
    display: flex;
    gap: 45px;
  }
`
export const BtnIcon = styled.button`
  display: flex;
  border: none;
  background: transparent;
  transition: var(--transition);

  :hover {
    color: var(--color-primary);
  }
`

export const BtnBodyTooltip = styled.button`
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
  align-items: center;
  border: none;
  background: transparent;
  transition: var(--transition);
  color: #3a393b;
  font-size: var(--font-size-sm);
  font-weight: 500;
  width: 100%;
  :hover {
    color: var(--color-primary);
  }
`

export const Divider = styled.div`
  border: 1px solid #c7c6c8;
  margin: 16px 0;
`
export const BottomChooseComunity = styled.button`
  display: flex;
  gap: 20px;
  border: none;
  background: #191919;
  transition: var(--transition);
  color: #ffffff;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  width: 100%;
  justify-content: center;
  :hover {
    color: var(--color-primary);
  }

  span {
 
    justify-content: center;
    font-style: italic;
    align-items: center;
  }
`