import {
  BodyWrapperMain,
  Contact,
  Container,
  Follow,
  HeaderWrapperMain,
  ImageProfile,
  InfoPersonal,
  Main,
  Name,
  Wrapper,
  WrapperContact,
  WrapperFollow,
  WrapperMain,
} from '../../../styles/profile'
import { GetServerSideProps, NextPage } from 'next'
import { MdOutlinePersonAdd, MdOutlinePersonRemove } from 'react-icons/md'
import {
  useFollowUserMutation,
  useSearchQuery,
  useUnfollowUserMutation,
} from '../../../generated/graphql'

import { Header } from '../../../components/_ui/Header'
import Link from 'next/link'
import { MainLayout } from '../../../layouts/MainLayout'
import { MenuBar } from '../../../components/_ui/MenuBar'
import { SidebarProfile } from '../../../components/account/SidebarProfile'
import graphqlRequestClient from '../../../lib/graphql.request'
import { parseCookies } from 'nookies'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../../context/CurrentUser'
import { useRouter } from 'next/dist/client/router'

interface UserProps {
  userId: number
  name: string | null | undefined
}

const UserProfile: NextPage = () => {
  const router = useRouter()

  const { id } = router.query

  const { currentUser, refetchCurrentUser } = useCurrentUser()

  const { data } = useSearchQuery(
    graphqlRequestClient,
    {
      userId: Number(id),
    },
    {
      enabled: !!id,
    },
  )

  const userProfile = data?.search?.users && data?.search?.users[0]

  const isFollowingUser =
    data?.search?.users && data?.search?.users.length > 0
      ? currentUser?.peopleImFollowing.find(
          (item) => Number(item.id) === data.search.users[0].id 
        )
      : null

  const { mutate: follow } = useFollowUserMutation(graphqlRequestClient)
  const { mutate: unfollow } = useUnfollowUserMutation(graphqlRequestClient)

  const followUser = ({ userId, name }: UserProps) => {
    follow(
      {
        userId,
      },
      {
        onSuccess(data) {
          if (!data.followUser) {
            toast.error('We couldn’t complete this action. Please try again!')
          } else {
            refetchCurrentUser()
            toast.success(`Você seguiu ${name ?? ''}`)
          }
        },
      },
    )
  }

  const unfollowUser = ({ userId, name }: UserProps) => {
    unfollow(
      {
        userId,
      },
      {
        onSuccess(data) {
          if (!data.unfollowUser) {
            toast.error('We couldn’t complete this action. Please try again!')
          } else {
            refetchCurrentUser()
            toast.success(`Você deixou de seguir ${name ?? ''}`)
          }
        },
      },
    )
  }

  return (
    <MainLayout
      headTitle="BoxHub | Profile"
      metaName="description"
      metaContent="ver perfil"
    >
      <Container>
        <Header />
        <Wrapper>
          <Main>
            <MenuBar />
            {!userProfile ? (
              <div>Perfil privado ou não encontrado</div>
            ) : (
              <>
                <WrapperMain>
                  <HeaderWrapperMain>
                    {isFollowingUser ? (
                      <div
                        onClick={() =>
                          unfollowUser({
                            userId: Number(userProfile?.id),
                            name: userProfile?.name,
                          })
                        }
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '5px 10px',
                          gap: '8px',
                          cursor: 'pointer',
                          color: '#ffffff',
                          backgroundColor: 'var(--color-primary)',
                          borderRadius: '20px',
                        }}
                      >
                        <MdOutlinePersonRemove size={20} />{' '}
                        <span style={{ fontSize: '14px' }}>
                          Deixar de seguir
                        </span>
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          followUser({
                            userId: Number(userProfile?.id),
                            name: userProfile?.name,
                          })
                        }
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '5px 10px',
                          gap: '8px',
                          cursor: 'pointer',
                          color: 'var(--color-primary)',
                          border: '1px solid var(--color-primary)',
                          backgroundColor: '#ffffff',
                          borderRadius: '20px',
                        }}
                      >
                        <MdOutlinePersonAdd size={20} />{' '}
                        <span style={{ fontSize: '14px' }}>Seguir</span>
                      </div>
                    )}
                  </HeaderWrapperMain>
                  <BodyWrapperMain>
                    <InfoPersonal>
                      <ImageProfile
                        width={136}
                        height={136}
                        alt={userProfile?.name ?? 'avatar'}
                        src={
                          userProfile?.profilePicture || '/image/no-photo.png'
                        }
                      />
                      <Name>{userProfile?.name}</Name>
                      <WrapperContact>
                        <Contact>
                          <span>{userProfile?.nickname}</span>
                        </Contact>
                      </WrapperContact>
                      <WrapperFollow>
                        <Link href="/connections?type=Seguidores">
                          <Follow>
                            <strong>
                              {userProfile?.peopleFollowingMeCount ?? 0}
                            </strong>
                            <span>seguidores</span>
                          </Follow>
                        </Link>
                        <Link href="/connections?type=Seguindo">
                          <Follow>
                            <strong>
                              {userProfile?.peopleImFollowingCount ?? 0}
                            </strong>
                            <span>seguindo</span>
                          </Follow>
                        </Link>
                      </WrapperFollow>
                    </InfoPersonal>
                  </BodyWrapperMain>
                </WrapperMain>
                <SidebarProfile user={userProfile} />
              </>
            )}
          </Main>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}

export default UserProfile

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
