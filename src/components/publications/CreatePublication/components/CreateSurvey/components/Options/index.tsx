import React, { InputHTMLAttributes } from 'react'

import { IoCloseOutline } from 'react-icons/io5'

import { Container, Option } from './styles'

export interface OptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function Options({ placeholder, ...rest }: OptionsProps) {
  return (
    <Container>
      <Option>
        <label>
          <input type="checkbox" onChange={() => {}} {...rest} />
          <input type="text" placeholder={placeholder} />
        </label>
      </Option>
      <button>
        <IoCloseOutline />
      </button>
    </Container>
  )
}
