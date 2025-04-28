import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import {
  ButtonMenuMobile,
  Container,
  ContainerOption,
  Content,
  LeftMobileWrapper,
  LogoDesktop,
  LogoMobile,
  Option,
  WrapperIdentityCurrentUser,
  WrapperMenuMobile,
} from './styles'
import { IoCloseOutline, IoNotificationsOutline } from 'react-icons/io5'

import { IdentityCurrentUser } from '../SideBar/IdentityCurrentUser'
import { IoMdLogOut } from 'react-icons/io'
import Link from 'next/link'
import { MenuBar } from '../MenuBar'
import { SearchModal } from './SearchModal'
import { useAuth } from '../../../hooks'
import { useState } from 'react'

export const Header = () => {
  const { logout } = useAuth()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <Container>
      <Content>
        <LeftMobileWrapper>
          <ButtonMenuMobile
            onClick={() => handleOpenMenu()}
            aria-label="menu mobile"
          >
            {isOpenMenu ? <IoCloseOutline /> : <AiOutlineMenu />}
          </ButtonMenuMobile>

          <WrapperIdentityCurrentUser>
            <IdentityCurrentUser displayName={false} />
          </WrapperIdentityCurrentUser>
          <Link style={{ display: 'flex' }} href="/qrcode-app/dashboard">
            <LogoDesktop
     width={60}
     height={60}
              src="/image/brand/rh-blue.png"
              alt="Logo da BoxHub"
            />
          </Link>
        </LeftMobileWrapper>
        <Link style={{ display: 'flex' }} href="/qrcode-app/dashboard">
          <LogoMobile
     width={60}
     height={60}
            src="/image/brand/rh-blue.png"
            alt="Icone BoxHub"
          />
        </Link>
        <ContainerOption>
          <Link href="/qrcode-app/dashboard" aria-label="Home">
            <Option>
              <AiOutlineHome />
            </Option>
          </Link>
          <Option>
            <SearchModal />
          </Option>
          {/* <Option type="button" aria-label="Chat">
            <BsChatDots />
          </Option> */}
          <Option aria-label="Notificação">
            <IoNotificationsOutline />
          </Option>
          <Link href="/account/login" aria-label="Sair">
            <Option onClick={logout}>
              <IoMdLogOut />
            </Option>
          </Link>
        </ContainerOption>
      </Content>
      <WrapperMenuMobile open={isOpenMenu}>
        <MenuBar open={isOpenMenu} />
      </WrapperMenuMobile>
    </Container>
  )
}
