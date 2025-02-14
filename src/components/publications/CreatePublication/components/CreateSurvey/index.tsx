import {
  AddOptionButton,
  Avatar,
  Container,
  ContainerButton,
  ContainerOptions,
  InfoAuthor,
  Name,
  PreferenceButton,
  Textarea,
  WrapperTextarea,
} from './styles'

import { Button } from '../../../../../components/_ui/Button'
import { FiSettings } from 'react-icons/fi'
import { IoAddOutline } from 'react-icons/io5'
import { Options } from './components/Options'
import { useState } from 'react'

interface CreatePostProps {
  avatarAuthor: string
  nameAuthor: string
}

export function CreateSurvey({ avatarAuthor, nameAuthor }: CreatePostProps) {
  const [messageTextarea, setMessageTextarea] = useState('')

  // const [dataPublication, setDataPublication] = useState({})

  // useEffect(() => {
  //   setDataPublication({ messageTextarea })
  // }, [messageTextarea])

  return (
    <Container>
      <InfoAuthor>
        <Avatar
          width={48}
          height={48}
          alt="Avatar do Autor do Post"
          src={avatarAuthor}
        />
        <Name>
          <strong>{nameAuthor}</strong>
        </Name>
      </InfoAuthor>
      <WrapperTextarea>
        <Textarea
          value={messageTextarea}
          onChange={(e) => setMessageTextarea(e.target.value)}
          placeholder={`Olá ${nameAuthor}, o que você nos fala hoje? `}
        />
      </WrapperTextarea>

      <ContainerOptions>
        <Options placeholder="Opção 1" />
        <Options placeholder="Opção 2" />

        <ContainerButton>
          <AddOptionButton>
            <IoAddOutline />
            <p>Add Option</p>
          </AddOptionButton>
          <PreferenceButton>
            <FiSettings />
            <p>Preferências</p>
          </PreferenceButton>
        </ContainerButton>
      </ContainerOptions>

      <Button
        type="submit"
        /* value={value.id} */
        buttonStyle={{ minHeight: 42, width: '100%' }}
        isLoading={false}
        /*  isDisabled={true} */
        // onClick={() => valueTextarea(dataPublication)}
      >
        Publicação
      </Button>
    </Container>
  )
}
