import {
  Author,
  AvatarAuthor,
  BodyPublication,
  BottomChooseComunity,
  CardViewPublication,
  HeaderPublication,
  NameAuthor,
  TextBodyPublication,
  Title,
  TopPublication,
} from './styles'

import { Button } from '../../../components/_ui/Button'
import { MdOutlineCampaign } from 'react-icons/md'

export const PublicationFirstUse = () => {
  return (
    <CardViewPublication>
      <HeaderPublication>
        <MdOutlineCampaign />
        <span>Warning</span>
      </HeaderPublication>
      <TopPublication>
        <Author>
          <AvatarAuthor
            width={64}
            height={64}
            src="/image/brand/avatar-dark.png"
            alt="logo global"
          />
          <NameAuthor>BoxHub</NameAuthor>
        </Author>
      </TopPublication>
      <BodyPublication>
        <TextBodyPublication>
          <Title>Welcome!</Title>
          <div>
            Hello, it's great to have you on our social network! To start
            enjoying the network, you can: publish your ideas; start
            conversations via chat; follow other members and keep up with their
            posts; and, most importantly, join a COMMUNITY! Discover a community
            that interests you and become a part of it!
          </div>
        </TextBodyPublication>
        <BottomChooseComunity>
          <span>Choose a Community!</span></BottomChooseComunity>
      </BodyPublication>
    </CardViewPublication>
  )
}
