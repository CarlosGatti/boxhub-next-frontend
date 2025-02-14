import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  button {
    border: 0;
    outline: 0;
    background: transparent;

    svg {
      font-size: 1.5rem;
      color: #3a393b;
      margin-left: 10px;
    }
  }
`

export const Option = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  margin-bottom: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #f6f5f5;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-sm);
    color: #3a393b;
    margin-left: 16px;
  }

  input[type='radio'] {
    height: 16px;
    width: 16px;
  }
`
