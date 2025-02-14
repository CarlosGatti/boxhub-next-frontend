import {
  BodyPublication,
  CardViewPublication,
  TextBodyPublication,
  Title,
  WrapperImage,
} from './styles'

import Image from 'next/image'

export const EmptyFeed = () => {
  return (
    <CardViewPublication>
      <BodyPublication>
        <TextBodyPublication>
          <Title>Looks like the feed is empty...</Title>
          {/* <div>Entre na comunidade e seja o primeiro a publicar!</div> */}
        </TextBodyPublication>
        <WrapperImage>
          <Image
            width={237}
            height={283}
            src="/image/chatting.png"
            alt="homem pegando uma carta da caixa de correio"
          />
        </WrapperImage>
      </BodyPublication>
    </CardViewPublication>
  )
}
