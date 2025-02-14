import Image from 'next/image'
import { SideBar } from '../components/_ui/SideBar'
import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.5rem 0.5rem 1rem;

  @media (max-width: 640px) {
    padding: 0;
  }

  flex-direction: column;
`
export const Main = styled.main`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  width: 100%;
`

export const SideBarLeft = styled(SideBar)`
  width: 100%;
  /*  width: min(281px, 100%); */

  /*  @media (max-width: 640px) {
    width: 100%;
  } */
`

export const InfoPersonal = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*  width: min(873px, 100%); */
  width: 100%;
`
export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #878688;
  font-weight: 500;
  padding-bottom: 2.5rem;

  font-size: var(--font-size-sm);
`
export const Skills = styled.div`
  padding-top: 2.5rem;
`
export const TitleSkills = styled.div`
  color: #2c3136;
  font-weight: 600;
  font-size: var(--font-size-2xl);
  margin-bottom: 0.5rem;
`
export const BadgeSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  div {
    display: flex;
    background: #f4f3f6;
    border-radius: var(--border-radius-default);
    padding: 1rem;
    transition: var(--transition);
    :hover {
      background: var(--color-link);
    }

    svg {
      width: 36px;
      height: 36px;
    }
  }
`

export const ImageProfile = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  padding: 5px;
`
export const Name = styled.div`
  font-weight: 600;
  font-size: var(--font-size-2xl);
  color: #2c3136;

  text-transform: capitalize;
`
export const WrapperContact = styled.div`
  display: flex;
  gap: 1rem;
  color: #878688;

  span {
    font-weight: 400;
    font-size: var(--font-size-md);
  }
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Contact = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: #3a393b;
  }
  span {
    color: #878688;
    font-size: var(--font-size-md);
  }
`

export const WrapperFollow = styled.div`
  display: flex;
  gap: 1.5rem;
`
export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  strong {
    transition: var(--transition);
    color: #3a393b;
    font-size: var(--font-size-md);
  }
  span {
    transition: var(--transition);
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: #9c9b9d;
  }

  :hover span,
  :hover strong {
    color: var(--color-primary);
  }
`

export const ButtonsBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HeaderWrapperMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 0.5rem;
`
export const BodyWrapperMain = styled.div``

export const BtnBodyPopOver = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px 0;
  border: none;
  background: transparent;
  transition: var(--transition);
  color: #3a393b;
  font-size: var(--font-size-sm);
  font-weight: 500;
  width: 100%;

  svg {
    font-size: 1.2rem;
  }
  :hover {
    color: var(--color-primary);
  }
`
