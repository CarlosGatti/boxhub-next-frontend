import { Container, Error, Label } from '../textInput/styles'
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useRef,
} from 'react'

import { InputContainer } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  error?: any
  styleContainer?: any
  onChange?: any
  format: string
}

const FormatInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error, styleContainer, onChange, format }) => {
  const ref = useRef()
  return (
    <Container style={styleContainer}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputContainer
        getInputRef={ref}
        format={format}
        allowEmptyFormatting
        mask="_"
        id={name}
        name={name}
        error={!error}
        onChange={onChange}
      />
      <Error>{error && <div>{error?.message}</div>}</Error>
    </Container>
  )
}

export const FormatNumberInput = forwardRef(FormatInputBase)
