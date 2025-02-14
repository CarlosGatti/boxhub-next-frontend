import { Contact, Container, Header, Title } from './styles'

import Avatar from '@assets/mockups/avatar.svg'
import Image from 'next/image'

export function ContactList() {
  return (
    <Container>
      <Header>
        <Title>
          <h1>Nova mensagem</h1>
          <button>X</button>
        </Title>
        <input placeholder="Para:" />
      </Header>
      <h2>Contatos</h2>
      <Contact>
        <Image height={32} width={32} alt="Avatar do usuário" src={Avatar} />
        <h3>Carolina Silveira</h3>
      </Contact>
    </Container>
  )
}
