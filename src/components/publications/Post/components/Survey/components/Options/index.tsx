import React, { InputHTMLAttributes } from 'react'

import { Container, Option } from './styles'

export interface OptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Options({ label, ...rest }: OptionsProps) {
  return (
    <Container>
      <Option>
        <label>
          <input type="checkbox" onChange={() => {}} {...rest} />
          <span>{label}</span>
        </label>
      </Option>
    </Container>
  )
}
