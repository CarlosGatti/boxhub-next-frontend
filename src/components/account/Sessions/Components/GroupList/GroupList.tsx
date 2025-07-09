import {
  Banner,
  BtnBodyPopOver,
  ContentCommunity,
  ListOfGroups,
  NoCommunities,
  TitleCommunity,
} from '../../styled'
import {
  MeDto,
  UnpublishMutationVariables,
  useUnplishCommunityMutation,
} from '../../../../../generated/graphql'

import { HiOutlineUserGroup } from 'react-icons/hi'
import Link from 'next/link'
import { MdOutlineGroup } from 'react-icons/md'
import { PopOverOptions } from '../../../../_ui/ButtonIcon/PopOverOptions'
import {graphqlRequestClient} from '../../../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../../../../context/CurrentUser'

interface CommunitiesListProps {
  adminCommunities?: MeDto['adminCommunities'] | undefined
  memberCommunities?: MeDto['memberCommunities'] | undefined
}

export const CommunitiesList = ({
  adminCommunities,
  memberCommunities,
}: CommunitiesListProps) => {
  const communities = memberCommunities ?? adminCommunities
  const { mutate: unpublish } =
    useUnplishCommunityMutation(graphqlRequestClient)
  const { refetchCurrentUser } = useCurrentUser()

  const unpublishCommunity = (
    values: UnpublishMutationVariables & { name: string },
  ) => {
    unpublish(
      {
        communityId: values.id,
      },
      {
        onSuccess(data) {
          if (!data.unpublishCommunity.success) {
            toast.error('We couldn’t complete this action. Please try again!')

          } else {
            toast.success(`You have successfully removed the community  ${values.name}`)
            refetchCurrentUser()
          }
        },
      },
    )
  }

  return (
    <>
      <ListOfGroups>
        <>
          {communities?.length === 0 && (
            <>
              <NoCommunities>
                <MdOutlineGroup />
                <h3>Você ainda não possui grupo.</h3>
                <span>
                  Crie uma comunidade e convide novas pessoas para participarem.
                </span>
              </NoCommunities>
            </>
          )}
          {communities?.map((community) => {
            if (memberCommunities) {
              community = community.community
            }

            return (
              <ContentCommunity key={community.id}>
                <Banner
                  width={64}
                  height={64}
                  src={community.banner || '/image/no-photo-group.png'}
                  alt="Foto de perfil do usuário"
                />
                <Link
                  style={{ marginRight: 'auto' }}
                  href={`/community/${community?.id}`}
                >
                  <TitleCommunity>{community?.name}</TitleCommunity>
                </Link>
                {adminCommunities && (
                  <PopOverOptions>
                    <BtnBodyPopOver
                      onClick={async () =>
                        unpublishCommunity({
                          id: Number(community.id),
                          name: community.name,
                        })
                      }
                    >
                      <HiOutlineUserGroup />
                      <span>Deletar Comunidade</span>
                    </BtnBodyPopOver>
                  </PopOverOptions>
                )}
              </ContentCommunity>
            )
          })}
        </>
      </ListOfGroups>
    </>
  )
}
