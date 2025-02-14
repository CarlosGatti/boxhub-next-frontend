import {
  ButtonsBottom,
  Contact,
  Container,
  Follow,
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

import { Button } from '../../../components/_ui/Button'
import { EditProfileModal } from '../../../components/account/EditProfile'
import { Header } from '../../../components/_ui/Header'
import Link from 'next/link'
import { MainLayout } from '../../../layouts/MainLayout'
import { MdOutlineEmail } from 'react-icons/md'
import { MenuBar } from '../../../components/_ui/MenuBar'
import { SessionProfile } from '../../../components/account/Sessions'
import { SidebarProfile } from '../../../components/account/SidebarProfile'
import { parseCookies } from 'nookies'
import { useCurrentUser } from '../../../context/CurrentUser'

const Profile: NextPage = () => {
  const { currentUser } = useCurrentUser()

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
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <WrapperMain>
                <InfoPersonal>
                  <ImageProfile
                    alt="imagem de perfil"
                    src={currentUser?.profilePicture || '/image/no-photo.png'}
                    width={136}
                    height={136}
                  />
                  <Name>{`${currentUser?.firstName ?? ''} ${
                    currentUser?.lastName ?? ''
                  }`}</Name>
                  <WrapperContact>
                    <Contact>
                      <MdOutlineEmail />
                      <span>{currentUser?.email}</span>
                    </Contact>
                  </WrapperContact>
                  <WrapperFollow>
                    <Link href="/connections?type=Seguidores">
                      <Follow>
                        <strong>
                          {currentUser?.peopleFollowingMe?.length ?? 0}
                        </strong>
                        <span>seguidores</span>
                      </Follow>
                    </Link>
                    <Link href="/connections?type=Seguindo">
                      <Follow>
                        <strong>
                          {currentUser?.peopleImFollowing?.length ?? 0}
                        </strong>
                        <span>seguindo</span>
                      </Follow>
                    </Link>
                  </WrapperFollow>
                  {currentUser && (
                    <ButtonsBottom>
                      <EditProfileModal />
                      <Link
                        href="/feed"
                        style={{ width: '100%', maxWidth: 312 }}
                      >
                        <Button typeButton="primary" maxWidth={312}>
                          Adicionar publicação
                        </Button>
                      </Link>
                    </ButtonsBottom>
                  )}
                </InfoPersonal>
              </WrapperMain>
              <SessionProfile user={currentUser} />
            </div>
            <SidebarProfile user={currentUser} />
          </Main>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}

export default Profile

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
