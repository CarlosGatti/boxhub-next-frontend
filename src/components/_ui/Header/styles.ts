import Image from 'next/image'
import styled from 'styled-components'
interface ContainerProps {
  open: boolean
}

export const Container = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  overflow-y: auto;
  z-index: 10;
  top: 0;
  left: 0;
  z-index: 10;
  background: #191919;
  height: 60px;
  padding: 0 16px;
  border-bottom: 2px solid #0033A1;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  align-items: center;
  align-content: center;
  height: 100%;
`

export const ContainerOption = styled.div`
  display: flex;
  align-items: center;
`

export const Option = styled.div`
  background-color: transparent;
  outline: 0;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;
  transition: var(--transition);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: var(--font-size-2xl);
    color: var(--background);
  }

  :hover {
    background-color: rgba(210, 210, 210, 0.2);
  }

  :focus {
    border: 1px solid #fff;
  }
  @media (max-width: 768px) {
    padding: 3px;
    padding-left: 5px;

    svg {
      font-size: var(--font-size-xl);
    }
  }
`

export const LogoMobile = styled(Image)`
  @media (min-width: 769px) {
    display: none;
  }
`
export const LogoDesktop = styled(Image)`

  @media (max-width: 768px) {
    display: none;
  }
`

export const IdentityOwner = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  display: flex;
  gap: 16px;
  align-items: center;
  position: sticky;
  top: 77px;
  overflow-y: auto;
  transition: var(--transition);
  &:hover {
    strong {
      color: var(--color-link-hover);
    }
  }
`
export const LeftMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const ButtonMenuMobile = styled.button`
  display: flex;
  border: none;
  background: transparent;
  color: #fff;
  font-size: var(--font-size-2xl);

  @media (min-width: 1020px) {
    display: none;
  }
`
export const WrapperIdentityCurrentUser = styled.div`
  height: 48px;
  @media (min-width: 769px) {
    display: none;
  }
`
export const WrapperMenuMobile = styled.div<ContainerProps>`
  position: fixed;
  top: 60px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;

  display: ${(props) => (props.open ? 'block' : 'none')};

  @media (min-width: 1020px) {
    display: none;
  }
`
