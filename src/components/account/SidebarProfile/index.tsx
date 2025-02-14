import { Container, Title, Topside } from './styles'
import { MeDto, SearchUserDto } from '../../../generated/graphql'

import Image from 'next/image'
import Link from 'next/link'
import { useCurrentUser } from '../../../context/CurrentUser'

interface MenuBarProps {
  open?: boolean
  user: MeDto | SearchUserDto | undefined
}

export const SidebarProfile = ({ open = false, user }: MenuBarProps) => {
  const emptyLinks = !user?.githubUrl && !user?.linkedinUrl && !user?.twitterUrl

  const { currentUser } = useCurrentUser()

  const isCurrentUser = currentUser?.id === user?.id

  return (
    <Container open={open}>
      <Topside>
        <div className="content">
          <Title>Sobre</Title>
          {!user?.about ? (
            <span className="empty">
              {!isCurrentUser
                ? 'Esse usuário ainda não se apresentou'
                : 'Edite seu perfil e fale mais um pouco sobre você!'}
            </span>
          ) : (
            <span className="about">{user.about}</span>
          )}
        </div>
        <div className="content">
          <Title>Links</Title>

          <div className="links">
            {emptyLinks ? (
              <span className="empty">
                {isCurrentUser ? 'Você' : 'Esse usuário'} não possui links
                cadastrados
              </span>
            ) : (
              <>
                {user?.githubUrl && (
                  <Link
                    href={`https://${user?.githubUrl}` ?? ''}
                    target="_blank"
                  >
                    <div>
                      <Image
                        width={20}
                        height={20}
                        src="/social/github.png"
                        alt="github logo"
                      />
                      <span>{user?.githubUrl}</span>
                    </div>
                  </Link>
                )}
                {user?.linkedinUrl && (
                  <Link
                    href={`https://${user?.linkedinUrl}` ?? ''}
                    target="_blank"
                  >
                    <div>
                      <Image
                        width={20}
                        height={20}
                        src="/social/linkedin.png"
                        alt="linkedin logo"
                      />
                      <span>{user?.linkedinUrl}</span>
                    </div>
                  </Link>
                )}

                {user?.twitterUrl && (
                  <Link
                    href={`https://${user?.twitterUrl}` ?? '' ?? ''}
                    target="_blank"
                  >
                    <div>
                      <Image
                        width={20}
                        height={20}
                        src="/social/twitter.png"
                        alt="twitter logo"
                      />
                      <span>{user?.twitterUrl}</span>
                    </div>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </Topside>
    </Container>
  )
}
