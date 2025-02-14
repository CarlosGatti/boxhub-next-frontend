import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { CheckboxContainer } from './styles'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  fontWeight?: number
  type: 'checkbox' | 'radio'
}

const CheckboxBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ label, fontWeight, type = 'checkbox', ...rest }, ref) => {
  return (
    <CheckboxContainer fontWeight={fontWeight} type={type}>
      <label>
        <input type={type} onChange={() => {}} {...rest} ref={ref} />
        <span>{label}</span>
      </label>
    </CheckboxContainer>
  )
}

export const Checkbox = forwardRef(CheckboxBase)
