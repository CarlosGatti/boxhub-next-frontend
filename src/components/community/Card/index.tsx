import {
  CommunityDto,
  useJoinCommunityMutation,
  useLeaveCommunityMutation,
} from '../../../generated/graphql'
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  Container,
  ImageCover,
  ImagePicture,
  ImageWrapper,
  Info,
  Title,
} from './styled'

import { Button } from '../../../components/_ui/Button'
import { MouseEvent } from 'react'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../../context/CurrentUser'
import { useRouter } from 'next/router'

interface CommunityCardProps {
  card: Partial<CommunityDto> | undefined
  refetchSearchCommunities: () => void
}
export const Card = ({
  card,
  refetchSearchCommunities,
}: CommunityCardProps) => {
  const { currentUser, refetchCurrentUser } = useCurrentUser()

  const router = useRouter()

  const isPendingCommunityAccess =
    currentUser?.memberCommunities?.find(
      (item) => item.community.id === card?.id,
    )?.status === 'PENDING'

  const { mutate: _joinCommunity, isLoading: isLoadingJoin } =
    useJoinCommunityMutation(graphqlRequestClient)
  const { mutate: _leaveCommunity, isLoading: isLoadingExit } =
    useLeaveCommunityMutation(graphqlRequestClient)

  const joinCommunity = (e: MouseEvent) => {
    e.preventDefault()
    _joinCommunity(
      {
        communityId: Number(card?.id),
      },
      {
        onSuccess(data) {
          if (data.joinCommunity.success) {
            refetchCurrentUser()
            router.push(`/community/${card?.id ?? ''}`)
            toast.success(data.joinCommunity.message)
          } else {
            toast.error(data.joinCommunity.message)
          }
        },
      },
    )
  }

  const leaveCommunity = (e: MouseEvent) => {
    e.preventDefault()
    _leaveCommunity(
      {
        communityId: Number(card?.id),
      },
      {
        onSuccess(data) {
          if (data.leaveCommunity.success) {
            refetchSearchCommunities()
            refetchCurrentUser()
            toast.success(data.leaveCommunity.message)
          } else {
            toast.error(data.leaveCommunity.message)
          }
        },
      },
    )
  }

  return (
    <Container href={`/community/${card?.id ?? ''}`}>
      <ImageWrapper>
        <ImageCover
          width={380}
          height={213}
          src={card?.banner || '/image/no-photo.png'}
          alt="assinatura"
        />
        <ImagePicture
          width={150}
          height={150}
          src={card?.profilePicture || '/image/no-photo.png'}
          alt="assinatura"
        />
      </ImageWrapper>

      <div className="content">
        <Info>
          <Title>{card?.name}</Title>
          <span>{card?.description}</span>
        </Info>
        <Button
          isLoading={isLoadingJoin || isLoadingExit}
          onClick={(e) =>
            isPendingCommunityAccess
              ? {}
              : card?.isMember
              ? leaveCommunity(e)
              : joinCommunity(e)
          }
          typeButton="secondary"
        >
          {isPendingCommunityAccess
            ? 'Ver comunidade'
            : card?.isMember
            ? 'Sair da comunidade'
            : 'Participar da comunidade'}
        </Button>
      </div>
    </Container>
  )
}
