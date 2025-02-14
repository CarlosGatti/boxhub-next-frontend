import React from 'react'
import { Options } from './components/Options'

import { Container } from './styles'

export function Survey() {
  return (
    <Container>
      <Options label="Opção 1" type="radio" name="typeCommunity" />
      <Options label="Opção 2" type="radio" name="typeCommunity" />
      <Options label="Opção 3" type="radio" name="typeCommunity" />
    </Container>
  )
}
