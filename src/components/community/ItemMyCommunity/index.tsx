import { Container, Icon, ImageLogo, Info } from './styled'

import { CommunityMember } from '../../../generated/graphql'
import { ReactElement } from 'react'

interface ItemMyCommunityProps {
  icon: ReactElement
  community: Partial<CommunityMember['community']>
  backgroundIcon?: string
}
export const ItemMyCommunity = ({
  icon,
  community,
  backgroundIcon = '#fdcb30',
}: ItemMyCommunityProps) => {
  return (
    <Container>
      <div>
        <ImageLogo
          width={38}
          height={38}
          src={community.profilePicture ?? '/image/mockups/image-banner.png'}
          alt="minha comunidade"
        />
        <Info href={`/community/${community.id}`}>
          <strong>{community.name}</strong>
          {/* <span>ùltima atualização a 1 hora</span> */}
        </Info>
      </div>
      {icon && <Icon backgroundIcon={backgroundIcon}>{icon}</Icon>}
    </Container>
  )
}
