import {
  ButtonPostType,
  Cancel,
  Container,
  HeaderCreatePublication,
} from './styles'
import { MdOutlineClose, MdOutlineModeEditOutline } from 'react-icons/md'

import { AiOutlineCalendar } from 'react-icons/ai'
import { CreateAd } from './components/CreateAd'
import { CreateEvent } from './components/CreateEvent'
import { CreatePost } from './components/CreatePost'
import { CreateSurvey } from './components/CreateSurvey'
import { MeQuery } from '../../../generated/graphql'
import { useState } from 'react'

interface CreatePublicationProps {
  cancelPublication: () => void
  currentUser: MeQuery['me'] | undefined
  communityId?: number
}

export const CreatePublication = ({
  cancelPublication,
  currentUser,
  communityId,
}: CreatePublicationProps) => {
  const [typePost, setTypePost] = useState('publication')

  const changePostType = (type: string) => {
    setTypePost(type)
  }

  const nameAuthor = `${currentUser?.firstName ?? ''} ${
    currentUser?.lastName ?? ''
  }`

  const avatarAuthor = currentUser?.profilePicture || '/image/no-photo.png'

  const changePublicationType = () => {
    if (typePost === 'publication')
      return (
        <CreatePost
          avatarAuthor={avatarAuthor}
          nameAuthor={nameAuthor}
          idAuthor={currentUser?.id ?? ''}
          cancelPublication={cancelPublication}
          communityId={communityId}
        />
      )

    if (typePost === 'announcement')
      return <CreateAd avatarAuthor={avatarAuthor} nameAuthor={nameAuthor} />

    if (typePost === 'survey')
      return (
        <CreateSurvey avatarAuthor={avatarAuthor} nameAuthor={nameAuthor} />
      )
    if (typePost === 'events') {
      return (
        <CreateEvent
          cancelPublication={cancelPublication}
          communityId={communityId}
        />
      )
    }
  }

  return (
    <Container>
      <Cancel
        onClick={cancelPublication}
        aria-label="cancel create post"
      >
        <MdOutlineClose />
      </Cancel>
      <HeaderCreatePublication>
        <h1>Create:</h1>
        <ButtonPostType
          onClick={() => changePostType('publication')}
          aria-label="Create publication"
          select={typePost === 'publication'}
          backgroundColor="#00214A"
        >
          <MdOutlineModeEditOutline />
          <p>Publication</p>
        </ButtonPostType>

        <ButtonPostType
          onClick={() => changePostType('events')}
          aria-label="Create event"
          select={typePost === 'events'}
          backgroundColor="#B54BE2"
        >
          <AiOutlineCalendar />
          <p>Events</p>
        </ButtonPostType>
      </HeaderCreatePublication>
      {changePublicationType()}
    </Container>
  )
}
