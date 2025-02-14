import styled from 'styled-components'

interface InputProps {
  error: boolean
  iconPosition?: string
}

interface IconProps {
  iconPosition: string
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.input<InputProps>`
  background: #ffffff;
  padding: ${(props) =>
    props.iconPosition === 'left'
      ? '9.5px 40px 9.5px 40px'
      : '9.5px 40px 9.5px 16px'};
  border: ${(props) => (props.error ? 'solid 1px red' : '0.5px solid #878688')};
  border-radius: var(--border-radius-input);
  font-size: var(--font-size-sm);
  font-weight: 500;
  width: 100%;
  &:focus {
    outline: 2px solid #0033A1;
  }

  :disabled {
    background: #dddcdf;
    border: 0.5px solid #dddcdf;
    color: #3a393b;
  }
`
export const Label = styled.label`
  font-size: var(--font-size-sm);
`
export const Error = styled.div`
  min-height: 23px;
  font-size: var(--font-size-xs);
  color: var(--color-danger);
  padding-left: 3px;
`
export const IconPassword = styled.button`
  display: flex;
  align-items: center;
  height: 100%;

  position: absolute;
  right: 3px;
  top: 0px;
  padding: 9px 7px;
  border: none;
  background: transparent;

  &:hover svg {
    fill: var(--color-primary);
  }

  svg {
    transition: var(--transition);
    font-size: 16px;
  }
`

export const IconSearch = styled.button`
  position: absolute;
  top: 0px;
  padding: 9px 7px;

  left: 5px;

  border: none;
  background: transparent;

  &:hover svg {
    fill: var(--color-primary);
  }

  svg {
    transition: var(--transition);
    font-size: 24px;
  }
`
export const Icon = styled.div<IconProps>`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  left: ${(props) => (props.iconPosition === 'left' ? '5px' : 'none')};
  right: ${(props) => (props.iconPosition === 'right' ? '5px' : 'none')};
  /* right: 10px; */
  padding: 9px 7px;
`
