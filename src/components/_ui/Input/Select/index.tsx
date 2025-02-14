import { Container, Label } from './style'
import React, {
  ForwardRefRenderFunction,
  SelectHTMLAttributes,
  forwardRef,
} from 'react'

import { Error } from '../textInput/styles'
import ReactSelect from 'react-select'

export const genderOptions = [
  { value: 'other', label: 'Outro', name: 'Outro' },
  { value: 'male', label: 'Masculino', name: 'Outro' },
  { value: 'female', label: 'Feminino', name: 'Outro' },
]

export interface GenderSelectprops
  extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: any
  label: string
  onChange: () => void
  options: any[]
}

const GenderSelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  GenderSelectprops
> = ({ error, label, onChange, options }, ref) => {
  return (
    <Container>
      <Label htmlFor="select">{label}</Label>
      <ReactSelect
        id="select"
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        options={options}
        onChange={onChange}
      />
      <Error>{error && <div>{error?.message}</div>}</Error>
    </Container>
  )
}

export const Select = forwardRef(GenderSelectBase)
