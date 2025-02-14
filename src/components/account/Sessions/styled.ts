import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div``
export const ContainerCommunities = styled.div``

export const Wrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  gap: 24px;
  padding: 15px 0px 0px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 736px) {
    max-width: 100%;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
export const RequestConnection = styled.div``

export const Group = styled.div`
  padding: var(--padding-container);
  gap: 1rem;
  column-gap: 3rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  @media (max-width: 736px) {
    grid-template-columns: 1fr;
    border-radius: 0;
  }
`

export const ListOfGroups = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  max-height: 300px;

  overflow-y: auto;
  scroll-behavior: smooth;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const NoConnection = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  grid-column: 1/3;

  h3 {
    font-weight: 600;
    font-size: 2rem;
    line-height: var(--font-size-sm);
    line-height: 30px;
    text-align: center;
    color: #2c3136;
    margin: 40px 0 8px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    max-width: 450px;
    text-align: center;
    color: #3a393b;
  }

  svg {
    background: var(--color-primary);
    border-radius: 50%;
    padding: 5px;
    font-size: 3.7rem;
    color: #fff;

    path {
      stroke: var(--color-primary);
      stroke-width: 44px;
    }
  }
`

export const ContentCommunity = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  transition: var(--transition);

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const BtnOptions = styled.button`
  font-size: 10rem;
  display: flex;
  background: #fff;
  padding: 3px 4px;
  border: 1px solid #000;
  border-radius: 8px;
  transition: var(--transition);
  margin-right: 1rem;

  :hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
`

export const BtnBodyPopOver = styled.button`
  display: flex;
  gap: 10px;
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
export const NoCommunities = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  grid-column: 1/3;

  h3 {
    font-weight: 600;
    font-size: 2rem;
    line-height: var(--font-size-sm);
    line-height: 30px;
    text-align: center;
    color: #2c3136;
    margin: 40px 0 8px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    max-width: 450px;
    text-align: center;
    color: #3a393b;
  }

  svg {
    background: var(--color-primary);
    border-radius: 50%;
    padding: 5px;
    font-size: 3.4rem;
    color: #fff;

    path {
      stroke: var(--color-primary);
    }
  }
`

export const Banner = styled(Image)`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 767px) {
    min-width: 40px;
    width: 45px;
    height: 45px;
  }
`

export const CardCommunity = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  max-height: 400px;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`

export const TitleCommunity = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #3a393b;
  align-items: center;
  display: flex;

  white-space: nowrap;
  overflow: hidden;
  max-width: 240px;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  :hover {
    color: var(--color-primary);
  }
`
