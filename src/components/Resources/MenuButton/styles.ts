import styled from 'styled-components'

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 0.8rem 0 0.8rem;
  width: 100%;

  img {
    background: var(--color-link);
    padding: 5px;
    border-radius: 50%;
  }

  span {
    display: inline;
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

  &.active div {
    background: #191919;
    color: #0033A1;
  }
  &.disabled div {
    color: #3a393b;
    background: #c1c1c1;
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

export const SubMenuContainer = styled.div`
  display: none;
  padding-left: 1rem; 

 
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  
  &.hover {
    span {
      color: var(--color-primary);
      padding: 1rem 0;
    }
  }
  &.active {
    display: block;
    animation: fadeIn 0.3s ease-out;

  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
