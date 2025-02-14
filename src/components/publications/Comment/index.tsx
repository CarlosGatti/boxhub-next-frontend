import {
  Avatar,
  BtnIcon,
  CommentTextarea,
  Container,
  CreationDate,
  Info,
  Name,
  Wrapper,
  WrapperComment,
} from './styles'
import {
  PublicationCommentsDto,
  UserTimelineDto,
} from '../../../generated/graphql'

import { FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'
import moment from 'moment'
import { useCurrentUser } from '../../../context/CurrentUser'

interface CommentCardProps {
  comment?: PublicationCommentsDto
  deleteComment?: () => void
  onChange?: any
  user?: UserTimelineDto
  newComment?: boolean
  iconDelete?: boolean
  textComment?: string | undefined
}

export const CommentCard = ({
  comment,
  user,
  deleteComment,
  textComment,
  onChange,
  iconDelete = true,
}: CommentCardProps) => {
  const { currentUser } = useCurrentUser()

  const commentUser = user || currentUser

  return (
    <Container>
      <Link href={`/account/profile/${commentUser?.id ?? ''}`}>
        <Avatar
          width={70}
          height={70}
          alt="foto de perfil"
          src={commentUser?.profilePicture || '/image/no-photo.png'}
        />
      </Link>
      <Wrapper>
        <WrapperComment textComment={!!textComment}>
          <div>
            <Info href={`/account/profile/${comment?.user.id ?? ''}`}>
              <Name>
                {user
                  ? user?.name
                  : `${currentUser?.firstName} ${currentUser?.lastName}`}
              </Name>
              {comment?.createdAt && (
                <CreationDate>
                  {moment(comment?.createdAt).fromNow()}
                </CreationDate>
              )}
            </Info>
            <CommentTextarea
              value={textComment ?? comment?.text}
              onChange={onChange}
              rows={2}
              readOnly={!!comment?.text}
            />
          </div>

          {iconDelete && (
            <BtnIcon
              title="deletar"
              aria-label="deletar"
              onClick={deleteComment}
            >
              <FiTrash2 />
            </BtnIcon>
          )}
        </WrapperComment>

        {/*   {!newComment && (
          <WrapperAction>
            <BtnIcon title="curtir" aria-label="curtir">
              {totalComments >= 1 ? (
                <>
                  {' '}
                  <BsHeartFill color="#00214A" /> {totalComments}
                </>
              ) : (
                <BsHeart />
              )}
            </BtnIcon>
            <BtnIcon title="comentar" aria-label="comentar">
              <BsChat />
            </BtnIcon>
          </WrapperAction>
        )} */}
      </Wrapper>
    </Container>
  )
}
