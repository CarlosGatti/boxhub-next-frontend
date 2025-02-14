import { NumericFormat } from 'react-number-format'
import styled from 'styled-components'

interface InputProps {
  error?: boolean
}

export const InputContainer = styled(NumericFormat)<InputProps>`
  background: #ffffff;
  padding: 9.5px 16px;
  border: ${(props) => (props.error ? 'solid 1px red' : '0.5px solid #878688')};
  border-radius: var(--border-radius-input);
  font-size: var(--font-size-sm);
  font-weight: 500;
  width: 100%;
  &:focus {
    outline: 2px solid #00214A;
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
