import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #191919;
  width: 42px;
  height: 42px;
  border-radius: 0.5rem;
  color: #fff;
  transition: var(--transition);
  min-width: 42px;

  font-size: 1.5rem;

  svg {
    margin-left: 5px;
    margin-bottom: 3px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`
