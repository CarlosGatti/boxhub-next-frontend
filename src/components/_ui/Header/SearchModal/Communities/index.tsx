import { ResultName, User, UserBox } from '../styles'

import { AvatarAuthor } from '../../../../publications/Post/styles'
import { SearchCommunitiesQuery } from '../../../../../generated/graphql'
import { useRouter } from 'next/router'

interface CommunitiesProps {
  data: SearchCommunitiesQuery['searchCommunities'] | undefined
  setOpenModal: (value: boolean) => void
}

export const Communities = ({ data, setOpenModal }: CommunitiesProps) => {
  const router = useRouter()

  return (
    <>
      <UserBox>
        {data?.map((item) => (
          <User
            key={item.id}
            onClick={async () => {
              await router.push({
                pathname: '/community/[id]',
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
        {data?.length === 0 && <span>Nenhuma comunidade encontrada</span>}
      </div>
    </>
  )
}
