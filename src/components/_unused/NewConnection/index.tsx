import { Avatar, BtnClose, Container, Info, Name, WrapperCard } from './styles'

import { Button } from '../../../components/_ui/Button'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import { user } from '../../../components/_unused/textPublication'

export const NewConnection = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handle = () => {
    setIsLoading(true)

    setIsLoading(false)
  }
  return (
    <Container>
      {user.followUser.map((value: any, index: number) => (
        <WrapperCard key={index}>
          <BtnClose>
            <MdOutlineClose />{' '}
          </BtnClose>
          <Avatar
            width={79}
            height={79}
            src="https://images.unsplash.com/photo-1647087602470-886d2be417c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80,"
            alt={value.name}
          />
          <Name>{value.name}</Name>
          <Info>Novo Usuário</Info>
          <Button
            value={value.id}
            buttonStyle={{
              minHeight: 29,
              padding: 0,
              fontSize: 12,
            }}
            onClick={() => handle()}
            isLoading={isLoading}
          >
            Confirmar
          </Button>
        </WrapperCard>
      ))}
    </Container>
  )
}
