import { Avatar, Container, Info, Name, WrapperCard } from './styles'

import { Button } from '../../../components/_ui/Button'
import { useState } from 'react'
import { user } from '../../../components/_unused/textPublication'

export const SuggestionToFollowCad = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handle = () => {
    setIsLoading(true)

    setIsLoading(false)
  }
  return (
    <Container>
      {user.followUser.map((value: any, index: number) => (
        <WrapperCard key={index}>
          <Avatar
            width={64}
            height={64}
            src="https://images.unsplash.com/photo-1647087602470-886d2be417c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,"
            alt={value.name}
          />
          <Name>{value.name}</Name>
          <Info>Novo Usuário</Info>
          <Button
            value={value.id}
            buttonStyle={{
              minHeight: 24,
              padding: 0,
              fontSize: 12,
            }}
            onClick={() => handle()}
            isLoading={isLoading}
          >
            Seguir
          </Button>
        </WrapperCard>
      ))}
    </Container>
  )
}
