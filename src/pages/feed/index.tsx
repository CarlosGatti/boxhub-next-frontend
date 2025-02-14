import { Container, Wrapper } from '../../styles/feed'
import { GetServerSideProps, NextPage } from 'next'

import { Header } from '../../components/_ui/Header'
import { MainFeed } from '../../components/Feed/Main'
import { MainLayout } from '../../layouts/MainLayout'
import { MenuBar } from '../../components/_ui/MenuBar'
import { SideBarFeed } from '../../components/Feed/SideBar'
import { parseCookies } from 'nookies'

const Feed: NextPage = () => {
  return (
    <MainLayout
      headTitle="BoxHub | Feed"
      metaName="description"
      metaContent="feed"
    >
      <Container>
        <Header />
        <Wrapper>
          <MenuBar />
          <MainFeed />
          <SideBarFeed />
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
export default Feed

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
