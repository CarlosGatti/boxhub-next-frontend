import { Container, Error, Label, TextAreaContainer } from './styles'
import {
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string
  label?: string
  error?: any
  styleContainer?: any
  onChange?: any
}

const TextAreaInputBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ name, label, error, styleContainer, onChange, ...rest }, ref) => {
  return (
    <Container style={styleContainer}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextAreaContainer
        error={!!error}
        id={name}
        name={name}
        ref={ref}
        onChange={onChange}
        {...rest}
      />
      <Error>{error && <div>{error?.message}</div>}</Error>
    </Container>
  )
}

export const TextArea = forwardRef(TextAreaInputBase)
