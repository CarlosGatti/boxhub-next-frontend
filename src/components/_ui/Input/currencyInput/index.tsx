import { Container, Error, Label } from '../textInput/styles'
import { InputHTMLAttributes, forwardRef, useRef } from 'react'

import { InputContainer } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  error?: any
  styleContainer?: any
  onChange?: any
}

const CurrencyInput = ({
  name,
  label,
  error,
  styleContainer,
  onChange,
}: InputProps) => {
  const ref = useRef()
  return (
    <Container style={styleContainer}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputContainer
        getInputRef={ref}
        name={name}
        onChange={onChange}
        type="text"
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$"
      />
      <Error>{error && <div>{error?.message}</div>}</Error>
    </Container>
  )
}

export const FormatCurrencyInput = forwardRef(CurrencyInput)
