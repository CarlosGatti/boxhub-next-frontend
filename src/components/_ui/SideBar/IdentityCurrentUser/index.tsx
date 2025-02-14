import { Avatar, Container, Name, Wrapper } from './styles'

import Link from 'next/link'
import { useCurrentUser } from '../../../../context/CurrentUser'

interface IdentityCurrentUserProps {
  displayName?: boolean
}

export const IdentityCurrentUser = ({
  displayName = true,
}: IdentityCurrentUserProps) => {
  const { currentUser } = useCurrentUser()

  return (
    <Container>
      <Link href="/account/profile" style={{ height: '100%' }}>
        <Wrapper>
          <Avatar
            alt="foto de perfil"
            src={
              currentUser?.profilePicture?.replace('https', 'http') ||
              '/image/no-photo.png'
            }
          />
          {displayName && (
            <Name>
              <strong>
                {currentUser?.firstName} {currentUser?.lastName}
              </strong>
              <span>{currentUser?.nickname}</span>
            </Name>
          )}
        </Wrapper>
      </Link>
    </Container>
  )
}
