import { Avatar, Connection, Container, Name } from './styles'
import {
  CommunityMember,
  useApproveCommunityMemberMutation,
  useGetPendingCommunityMembersQuery,
} from '../../../generated/graphql'

import { Button } from '../../_ui/Button'
import Link from 'next/link'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../../context/CurrentUser'

interface ListMembersProps {
  member: Partial<CommunityMember['user']>
  isOwner?: boolean
  communityId: string | undefined
}

export const ListMembers = ({
  member,
  isOwner,
  communityId,
}: ListMembersProps) => {
  const { currentUser } = useCurrentUser()

  const { data, refetch } = useGetPendingCommunityMembersQuery(
    graphqlRequestClient,
    {
      communityId: Number(communityId),
    },
    {
      enabled: !!communityId,
    },
  )

  const { mutate, isLoading } =
    useApproveCommunityMemberMutation(graphqlRequestClient)

  const isPendingMember = data?.getPendingCommunityMember.find(
    (item) => item.id === member?.id,
  )

  const approveMember = () => {
    mutate(
      {
        communityId: Number(communityId),
        userId: Number(member?.id),
      },
      {
        onSuccess(data) {
          if (data.approveCommunityMember.success) {
            refetch()
            toast.success(data.approveCommunityMember.message)
          } else {
            toast.error(data.approveCommunityMember.message)
          }
        },
      },
    )
  }

  return (
    <Container>
      <Connection>
        <div className="content">
          <Avatar
            width={64}
            height={64}
            src={member?.profilePicture || '/image/no-photo.png'}
            alt="foto perfil"
          />
          <Link
            href={
              currentUser?.id === member?.id
                ? '/account/profile'
                : `/account/profile/${member?.id}`
            }
          >
            <Name>
              {member?.firstName} {member?.lastName}
            </Name>
          </Link>
          {isPendingMember && (
            <>
              <span className="pendingMember">(Pendente de aprovação)</span>
              {isOwner && (
                <Button
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  onClick={approveMember}
                  maxWidth={120}
                >
                  Aprovar
                </Button>
              )}
            </>
          )}
        </div>
      </Connection>
    </Container>
  )
}
