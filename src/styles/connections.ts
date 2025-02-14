import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 40px 8px 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const ConnectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: min(873px, 100%);
`
export const RequestConnection = styled.div``

export const Title = styled.h3`
  color: #2c3136;
  font-weight: 600;
  font-size: var(--font-size-2xl);
`

export const ListOfConnections = styled.div`
  padding: var(--padding-container);
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: 1.5rem;
  column-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  background: var(--background-container);
  border-radius: var(--border-radius-default);
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

export const Connection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: var(--transition);

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* :hover {
    background: #f4f3f6;
    border-radius: 10px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  } */
`
export const Avatar = styled(Image)`
  min-width: 64px;
  object-fit: cover;
  border-radius: 50%;
`
export const Name = styled.span`
  font-size: var(--font-size-md);
  font-weight: 600;
  color: #3a393b;
  line-height: 18px;
  transition: var(--transition);
  :hover {
    color: var(--color-primary);
  }
`
export const BtnOptions = styled.button`
  font-size: 1.5rem;
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
