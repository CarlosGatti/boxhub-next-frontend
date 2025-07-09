import {
  Avatar,
  BtnBodyPopOver,
  Connection,
  ConnectionWrapper,
  Container,
  ListOfConnections,
  Name,
  NoConnection,
  Title,
  Wrapper,
} from '../../styles/connections'
import { GetServerSideProps, NextPage } from 'next'
import { MdOutlinePersonAdd, MdOutlinePersonRemove } from 'react-icons/md'
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../../generated/graphql'

import { AiOutlineUser } from 'react-icons/ai'
import { Header } from '../../components/_ui/Header'
import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { MenuBar } from '../../components/_ui/MenuBar'
import { PopOverOptions } from '../../components/_ui/ButtonIcon/PopOverOptions'
import { SearchModal } from '../../components/_ui/Header/SearchModal'
import { Tabs } from '../../components/_ui/Tabs'
import {graphqlRequestClient} from '../../lib/graphql.request'
import { parseCookies } from 'nookies'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../context/CurrentUser'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface UserProps {
  userId: number
  name: string
}

const Connections: NextPage = () => {
  const router = useRouter()
  const { currentUser, refetchCurrentUser } = useCurrentUser()
  const { mutate: follow } = useFollowUserMutation(graphqlRequestClient)
  const { mutate: unfollow } = useUnfollowUserMutation(graphqlRequestClient)

  const type = router.query.type as string

  const [currentValueTabs, setCurrentValueTabs] = useState('')

  const updateTabCheck = (e: string) => {
    setCurrentValueTabs(e)
  }

  const followUser = async ({ userId, name }: UserProps) => {
    await follow(
      {
        userId,
      },
      {
        onSuccess(data) {
          if (!data.followUser) {
            toast.error(`We were unable to complete this action, please try again.`)
          } else {
            refetchCurrentUser()
            toast.success(`You followed ${name}`)
          }
        },
      },
    )
  }

  const unfollowUser = async ({ userId, name }: UserProps) => {
    await unfollow(
      {
        userId,
      },
      {
        onSuccess(data) {
          if (!data.unfollowUser) {
            toast.error(`We were unable to complete this action, please try again.`)
          } else {
            refetchCurrentUser()
            toast.success(`You unfollowed ${name}`)
          }
        },
      },
    )
  }

  return (
    <MainLayout
      headTitle="BoxHub | Connections"
      metaName="description"
      metaContent="connections"
    >
      <Container>
        <Header />
        <Wrapper>
          <MenuBar />
          <ConnectionWrapper>
            <Title>My Connections</Title>

            <div>
              <Tabs
                style={{ width: '100%' }}
                labelTabs={['Followers', 'Following']}
                checkLabelTab={type || 'Followers'}
                currentTabCheck={updateTabCheck}
              />

              <ListOfConnections>
                {(() => {
                  switch (currentValueTabs) {
                    case 'Followers':
                      return currentUser?.peopleFollowingMe?.length === 0 ? (
                        <NoConnection>
                          <AiOutlineUser />
                          <h3>You have no followers yet</h3>
                          <span>
                          People you follow will be displayed here. In between
                        in communities and groups to meet new people.
                          </span>
                          <SearchModal
                            styleButton={{
                              marginTop: '20px',
                              color: '#ffffff',
                              backgroundColor: 'var(--color-primary)',
                              padding: '10px 20px',
                              borderRadius: '20px',
                            }}
                            textButton="Buscar usuários"
                          />
                        </NoConnection>
                      ) : (
                        currentUser?.peopleFollowingMe.map((value, index) => {
                          const isFollowingUser =
                            currentUser?.peopleImFollowing?.find(
                              (item) => item.id === value.id,
                            )
                          return (
                            <Connection key={index}>
                              <div>
                                <Avatar
                                  width={64}
                                  height={64}
                                  src={
                                    value.profilePicture ||
                                    '/image/no-photo.png'
                                  }
                                  alt="Foto de perfil do usuário"
                                />

                                <Link href={`/account/profile/${value?.id}`}>
                                  <Name>
                                    {value?.firstName} {value?.lastName}
                                  </Name>
                                </Link>
                              </div>
                              {!isFollowingUser && (
                                <div>
                                  <PopOverOptions>
                                    <BtnBodyPopOver
                                      onClick={async () =>
                                        await followUser({
                                          userId: Number(value.id),
                                          name: `${value?.firstName} ${value?.lastName}`,
                                        })
                                      }
                                    >
                                      <MdOutlinePersonAdd />
                                      <span>Follow</span>
                                    </BtnBodyPopOver>
                                  </PopOverOptions>
                                </div>
                              )}
                            </Connection>
                          )
                        })
                      )
                    case 'Following':
                      return currentUser?.peopleImFollowing?.length === 0 ? (
                        <NoConnection>
                          <AiOutlineUser />
                          <h3>You are not following anyone yet</h3>
                          <span>
                            People who are following you will be displayed
                            here. Join communities and groups to learn
                            new people.
                          </span>
                          <SearchModal
                            styleButton={{
                              marginTop: '20px',
                              color: '#ffffff',
                              backgroundColor: 'var(--color-primary)',
                              padding: '10px 20px',
                              borderRadius: '20px',
                            }}
                            textButton="Buscar usuários"
                          />
                        </NoConnection>
                      ) : (
                        currentUser?.peopleImFollowing?.map((value, index) => (
                          <Connection key={index}>
                            <div>
                              <Avatar
                                width={64}
                                height={64}
                                src={
                                  value.profilePicture || '/image/no-photo.png'
                                }
                                alt="Foto de perfil do usuário"
                              />
                              <Link href={`/account/profile/${value?.id}`}>
                                <Name>
                                  {value?.firstName} {value?.lastName}
                                </Name>
                              </Link>
                            </div>
                            <div style={{ marginRight: '20px' }}>
                              <PopOverOptions>
                                <BtnBodyPopOver
                                  onClick={async () =>
                                    await unfollowUser({
                                      userId: Number(value.id),
                                      name: `${value?.firstName} ${value?.lastName}`,
                                    })
                                  }
                                >
                                  <MdOutlinePersonRemove />
                                  <span>Unfollow</span>
                                </BtnBodyPopOver>
                              </PopOverOptions>
                            </div>
                          </Connection>
                        ))
                      )
                    default:
                      return null
                  }
                })()}
              </ListOfConnections>
            </div>
          </ConnectionWrapper>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
export default Connections

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
