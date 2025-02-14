import {
  Container,
  NoCommunity,
  SideBarLeft,
  SubTitle,
  Title,
  WrapperBody,
  WrapperViewCommunities,
} from '../../styles/community'
import { GetServerSideProps, NextPage } from 'next'

import { Button } from '../../components/_ui/Button'
import { Card } from '../../components/community/Card'
import { EmptyCommunity } from '../../components/community/EmptyCommunity'
import { Header } from '../../components/_ui/Header'
import { HorizontalDivider } from '../../components/_ui/Divider'
import { Input } from '../../components/_ui/Input/textInput'
import { ItemMyCommunity } from '../../components/community/ItemMyCommunity'
import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { RiVipCrownLine } from 'react-icons/ri'
import { TbHandRock } from 'react-icons/tb'
import graphqlRequestClient from '../../lib/graphql.request'
import { parseCookies } from 'nookies'
import { useCurrentUser } from '../../context/CurrentUser'
import { useSearchCommunitiesQuery } from '../../generated/graphql'
import { useState } from 'react'

const Community: NextPage = () => {
  const [text, setText] = useState<string | null>(null)

  const { currentUser } = useCurrentUser()

  const {
    data: searchCommunities,
    isFetching,
    refetch: refetchSearchCommunities,
  } = useSearchCommunitiesQuery(graphqlRequestClient, {
    term: text ?? '',
  })

  return (
    <MainLayout
      headTitle="BoxHub | Comunidade"
      metaName="description"
      metaContent="find communities"
    >
      <Header />
      <Container>
        <SideBarLeft title="Communities" privacyLink>
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <Input
              styleInput={{ height: '48px' }}
              isSearch
              isLoading={isFetching}
              value={text ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              placeholder="Pesquisar..."
              type="text"
              iconPosition="left"
            />
            <HorizontalDivider />
          </div>
          {/*   <ItemMenuButton
          item="Feed de suas comunidades"
          icon={<MdOutlineWysiwyg />}
          active={active === 'my_community'}
          onClick={() => setActive('my_community')}
        />
        <ItemMenuButton
          item="Descobrir novas comunidades"
          icon={<MdOutlineExplore />}
          active={active === 'new_community'}
          onClick={() => setActive('new_community')}
        /> */}
          <Link
            href="/community/create"
            style={{ marginTop: 20, width: '100%' }}
          >
            <Button>+ Create new community</Button>
          </Link>
          {currentUser?.adminCommunities &&
            currentUser?.adminCommunities?.length > 0 && (
              <>
                <HorizontalDivider
                  style={{ marginTop: 16, marginBottom: 16 }}
                />
                <SubTitle>Communities you manage</SubTitle>
                <div className="communityContainer">
                  {currentUser?.adminCommunities?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        <ItemMyCommunity
                          community={item}
                          icon={<RiVipCrownLine />}
                        />
                      </div>
                    )
                  })}
                </div>
              </>
            )}

          <HorizontalDivider style={{ marginBottom: 16, marginTop: 16 }} />
          <SubTitle>Communities you join</SubTitle>
          {currentUser?.memberCommunities?.length === 0 ? (
            <NoCommunity>
              <span>
                Hello <strong>{currentUser?.firstName}</strong> you still not
                are participating in any community, choose one to
                start your journey!
              </span>
            </NoCommunity>
          ) : (
            <div className="communityContainer">
              {currentUser?.memberCommunities?.map((item) => (
                <ItemMyCommunity
                  key={item.community.id}
                  community={item.community}
                  icon={<TbHandRock fill="#fff" />}
                  backgroundIcon="#2793F7"
                />
              ))}
            </div>
          )}
        </SideBarLeft>
        <WrapperBody>
          {searchCommunities?.searchCommunities && (
            <>
              <Title style={{ marginTop: '0' }}>
                {text?.length === 0 || text === null
                  ? 'Suggestion of communities'
                  : `Looking for "${text}"`}
              </Title>
              {searchCommunities?.searchCommunities.length === 0 ? (
                <EmptyCommunity title="Your search did not return any results. :(" />
              ) : (
                <WrapperViewCommunities>
                  {searchCommunities?.searchCommunities.map((value) => {
                    if (value.ownerId === Number(currentUser?.id)) return null
                    return (
                      <Card
                        refetchSearchCommunities={refetchSearchCommunities}
                        key={value.id}
                        card={value}
                      />
                    )
                  })}
                </WrapperViewCommunities>
              )}
            </>
          )}
        </WrapperBody>
      </Container>
    </MainLayout>
  )
}

export default Community

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
