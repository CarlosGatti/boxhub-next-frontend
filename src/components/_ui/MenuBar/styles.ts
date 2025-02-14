import Link from 'next/link'
import styled from 'styled-components'

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: sticky;
  max-width: 272px;
  width: 100%;
  top: 77px;
  left: 0;
  max-height: 100vh;

  background: ${(props) => (props.open ? '#fff' : 'transparent')};
  border-radius: ${(props) => (props.open ? '0 8px 0' : 'none')};
  height: ${(props) => (props.open ? '100%' : 'auto')};

  @media (max-width: 1024px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`

export const Topside = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 1rem;
  flex-direction: column;
  align-items: flex-start;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
`

export const Title = styled.p`
  color: #2c3136;
  font-weight: 600;
  font-size: var(--font-size-2xl);
  padding: 16px 0 0 16px;
`

export const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);

  padding: 0.5rem 0 0.5rem 1rem;
  width: 100%;

  span {
    display: inline;
    margin-left: 1rem;
    font-weight: 500;
    font-size: var(--font-size-md);
    transition: var(--transition);
    color: #3a393b;
  }

  &:hover,
  &.active {
    span {
      color: var(--color-primary);
    }
  }

  svg.icon-arrow,
  svg.icon-arrow-sub {
    position: absolute;
    right: 1rem;
    color: #2793f6;
    font-size: 1.5rem;
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 200px;
  color: #f4f3f6;
  background: #191919;

  svg {
    font-size: 20px;
  }
`
