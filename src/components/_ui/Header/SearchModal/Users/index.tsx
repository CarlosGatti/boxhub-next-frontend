import { ResultName, User, UserBox } from '../styles'

import { AvatarAuthor } from '../../../../publications/Post/styles'
import { SearchQuery } from '../../../../../generated/graphql'
import { useRouter } from 'next/router'

interface UsersProps {
  data: SearchQuery['search'] | undefined
  setOpenModal: (value: boolean) => void
}

export const Users = ({ data, setOpenModal }: UsersProps) => {
  const router = useRouter()

  return (
    <>
      <UserBox>
        {data?.users?.map((item) => (
          <User
            key={item.id}
            onClick={async () => {
              await router.push({
                pathname: '/account/profile/[id]',
                query: { id: item.id },
              })
              setOpenModal(false)
            }}
          >
            <AvatarAuthor
              width={24}
              height={24}
              alt="foto de perfil"
              src={item.profilePicture || '/image/no-photo.png'}
            />
            <ResultName>{item.name}</ResultName>
          </User>
        ))}
      </UserBox>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {data?.users?.length === 0 && <span>Nenhum usuário encontrado</span>}
      </div>
    </>
  )
}
