import {
  Author,
  AvatarAuthor,
  BodyPublication,
  CardViewPublication,
  HeaderPublication,
  NameAuthor,
  TextBodyPublication,
  Title,
  TopPublication,
  WrapperImage,
} from './styles'

import { Button } from '../../../components/_ui/Button'
import Image from 'next/image'
import { MdOutlineCampaign } from 'react-icons/md'

export const PostPrivate = () => {
  return (
    <CardViewPublication>
      <HeaderPublication>
        <MdOutlineCampaign />
        <span>Announcement</span>
      </HeaderPublication>
      <TopPublication>
        <Author>
          <AvatarAuthor
            width={64}
            height={64}
            src="/image/icon_global/icon_global.svg"
            alt="logo global"
          />
          <NameAuthor>BoxHub</NameAuthor>
        </Author>
      </TopPublication>
      <BodyPublication>
        <TextBodyPublication>
          <Title>Private post...</Title>
          <div>
          You are trying to view a private post. Log in to
          your account or create a new one and enjoy the best social network!
          </div>
        </TextBodyPublication>
        <WrapperImage>
          <Image
            width={237}
            height={283}
            src="/image/chatting.png"
            alt="homem pegando uma carta da caixa de correio"
          />
        </WrapperImage>

        <Button>Create an account</Button>
      </BodyPublication>
    </CardViewPublication>
  )
}
