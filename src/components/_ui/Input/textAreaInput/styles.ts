import styled from 'styled-components'

interface textAreaProps {
  error: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TextAreaContainer = styled.textarea<textAreaProps>`
  background: #ffffff;
  padding: 9.5px 16px;
  border: ${(props) => (props.error ? 'solid 1px red' : '0.5px solid #878688')};
  border-radius: var(--border-radius-input);
  font-size: var(--font-size-sm);
  font-weight: 500;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  &:focus {
    outline: 2px solid #00214A;
  }

  :disabled {
    background: #dddcdf;
    border: 0.5px solid #dddcdf;
    color: #3a393b;
    resize: none;
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
