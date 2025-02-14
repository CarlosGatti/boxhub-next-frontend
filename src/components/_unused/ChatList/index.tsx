import {
  Container,
  ContainerMessage,
  ContainerMessageInformation,
  Header,
  Message,
  MessageInformation,
  PendingMessage,
} from './styles'

import Avatar from '@assets/mockups/avatar.svg'
import { BsChatRightDots } from 'react-icons/bs'
import IconMessageSent from '@assets/icon/iconMessageSent.svg'
import IconMessageViewed from '@assets/icon/iconMessageViewed.svg'
import Image from 'next/image'

interface ChatListProps {
  messageStatus: 'pendingMessage' | 'messageViewed' | 'messageSent'
}

export function ChatList({ messageStatus }: ChatListProps) {
  return (
    <Container>
      <Header>
        <h1>Bate-papos</h1>
        <button>
          <BsChatRightDots />
        </button>
      </Header>

      <ContainerMessage>
        <div style={{ display: 'flex', gap: 12 }}>
          <Image height={48} width={48} src={Avatar} alt="Avatar do usuário" />

          <Message>
            <h1>Carolina Silveira</h1>
            <p>Lorem ipsum dolor sit...</p>
          </Message>
        </div>

        <ContainerMessageInformation>
          <MessageInformation>
            <p>7:11 PM</p>
          </MessageInformation>
          {messageStatus === 'pendingMessage' ? (
            <PendingMessage>2</PendingMessage>
          ) : (
            <Image
              src={
                messageStatus === 'messageViewed'
                  ? IconMessageViewed
                  : IconMessageSent
              }
              alt="Status da mensagem"
              height={20}
              width={20}
            />
          )}
        </ContainerMessageInformation>
      </ContainerMessage>
    </Container>
  )
}
