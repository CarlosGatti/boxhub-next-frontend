import styled from 'styled-components'

interface InputProps {
  error: boolean
  isSearch?: boolean
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.input<InputProps>`
  background: #ffffff;
  /*  padding: 5px; */
  border: ${(props) => (props.error ? 'solid 1px red' : '0.5px solid #878688')};
  border-radius: var(--border-radius-input);
  font-size: var(--font-size-sm);
  font-weight: 500;
  width: 100%;
  &:focus {
    outline: 2px solid #00214A;
  }

  :disabled {
    background: #dddcdf;
    border: 0.5px solid #dddcdf;
    color: #3a393b;
  }
  :after {
    content: 'x';
  }
`
export const Label = styled.label`
  font-size: var(--font-size-sm);
`
export const Error = styled.div`
  min-height: 23px;
  font-size: var(--font-size-xs);
  color: var(--color-danger);
  padding: 3px 0 0 5px;
`
export const WrapperInput = styled.div`
  position: relative;
`

export const Content = styled.button`
  outline: 0;
  background-color: transparent;
  width: 100%;
  height: 42px;
  border: 0.5px solid #3a393b;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #3a393b;

  svg {
    font-size: 18px;
  }
`
export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #3a393b;
`
