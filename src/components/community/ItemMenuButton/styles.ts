import styled from 'styled-components'

interface MenuButtonprops {
  active: boolean
}

export const MenuButton = styled.button<MenuButtonprops>`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 0.5rem 0;
  width: 100%;

  img {
    background: var(--color-link);
    padding: 5px;
    border-radius: 50%;
  }

  span {
    display: inline;
    text-align: left;
    margin-left: 1rem;
    font-weight: 500;
    font-size: var(--font-size-md);
    transition: var(--transition);
    color: #3a393b;
  }

  &:hover {
    span {
      color: var(--color-primary);
    }
  }

  div {
    background: ${(props) => (props.active ? '#2793f7' : ' #c1c1c1')};
    color: ${(props) => (props.active ? ' #f4f3f6' : ' #3a393b')};
  }
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 200px;
  transition: var(--transition);

  svg {
    font-size: 20px;
  }
`
