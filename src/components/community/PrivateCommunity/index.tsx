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

import Image from 'next/image'
import { MdOutlineCampaign } from 'react-icons/md'

export const PrivateCommunity = () => {
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
            src="/image/brand/brand.svg"
            alt="logo global"
          />
          <NameAuthor>BoxHub</NameAuthor>
        </Author>
      </TopPublication>
      <BodyPublication>
        <TextBodyPublication>
          <Title>Private community...</Title>
          <div>
          You are trying to view a private community feed.
          Apply for membership and wait to be accepted to view!
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

        {/* <Button>Criar uma conta</Button> */}
      </BodyPublication>
    </CardViewPublication>
  )
}
