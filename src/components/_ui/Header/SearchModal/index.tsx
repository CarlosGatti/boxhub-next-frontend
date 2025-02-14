import { AiOutlineDeploymentUnit, AiOutlineSearch } from 'react-icons/ai'
import { ButtonOpenModal, Modal } from '../../../../components/_ui/Modal'
import {
  Card,
  Cards,
  ModalBody,
  ResultName,
  ResultUser,
  User,
  UserBox,
} from './styles'
import {
  useSearchCommunitiesQuery,
  useSearchQuery,
} from '../../../../generated/graphql'

import { AvatarAuthor } from '../../../../components/publications/Post/styles'
import { Communities } from './Communities'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { Input } from '../../Input/textInput'
import { Users } from './Users'
import graphqlRequestClient from '../../../../lib/graphql.request'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface SearchModalProps {
  textButton?: string
  styleButton?: any
}
export const SearchModal = ({ textButton, styleButton }: SearchModalProps) => {
  const [text, setText] = useState<string | null>(null)

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [selected, setSelected] = useState<'users' | 'communities'>('users')

  const { data: users, isFetching: fetchingSearch } = useSearchQuery(
    graphqlRequestClient,
    {
      term: text,
    },
    {
      enabled: !!text && selected === 'users',
    },
  )

  const { data: communities, isFetching: fetchingCommunities } =
    useSearchCommunitiesQuery(
      graphqlRequestClient,
      {
        term: text ?? '',
      },
      {
        enabled: !!text && selected === 'communities',
      },
    )

  return (
    <Modal isOpen={isOpenModal} onOpenChange={setIsOpenModal}>
      <ButtonOpenModal style={styleButton}>
        {textButton || <AiOutlineSearch />}
      </ButtonOpenModal>
      <ModalBody
        styleModal={{ backgroundColor: '#F4F3F6' }}
        title="Search communities and users"
      >
        <div style={{ marginTop: '1rem' }}>
          <Cards>
            <Card
              selected={selected === 'users'}
              onClick={() => setSelected('users')}
              className="card"
            >
              <HiOutlineUserGroup /> Usuários
            </Card>
            <Card
              selected={selected === 'communities'}
              onClick={() => setSelected('communities')}
              className="card"
            >
              <AiOutlineDeploymentUnit /> Communities
            </Card>
          </Cards>

          <Input
            styleInput={{ height: '48px' }}
            isSearch
            isLoading={fetchingSearch || fetchingCommunities}
            value={text ?? ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder={
              selected === 'users'
                ? 'Search users'
                : 'Search communities'
            }
            type="text"
            iconPosition="left"
          />
        </div>
        {selected === 'users' && (
          <Users data={users?.search} setOpenModal={setIsOpenModal} />
        )}
        {selected === 'communities' && (
          <Communities
            data={communities?.searchCommunities}
            setOpenModal={setIsOpenModal}
          />
        )}
      </ModalBody>
    </Modal>
  )
}
