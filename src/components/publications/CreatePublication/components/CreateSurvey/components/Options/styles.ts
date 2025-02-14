import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

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
  border: 1px solid #878688;
  display: flex;
  margin-bottom: 8px;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
  }

  input[type='text'] {
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-sm);
    color: #3a393b;
    white-space: nowrap;
    margin-left: 12px;
    align-items: center;
    width: 100%;
    border: 0;
    outline: 0;
  }

  input[type='checkbox'] {
    height: 16px;
    width: 16px;
  }
`
