import {
  Author,
  AvatarAuthor,
  BodyPublication,
  BottomPublication,
  BtnIcon,
  BtnShowMore,
  CardViewPublication,
  CreationDate,
  HeaderPublication,
  ImageBodyPublication,
  ItemBodyPopOver,
  NameAuthor,
  PostContainer,
  SaveComment,
  TextBodyPublication,
  TopPublication,
} from './styles'
import { BsChat, BsHeart, BsHeartFill } from 'react-icons/bs'
import React, { useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Timeline,
  useCommentPublicationMutation,
  useLikePublicationMutation,
  useUncommentPublicationMutation,
  useUnlikePublicationMutation,
  useUnpublishMutation,
} from '../../../generated/graphql'

import { AiOutlineCalendar } from 'react-icons/ai'
import { CommentCard } from '../Comment'
import { Event } from './components/Event'
import { FiTrash2 } from 'react-icons/fi'
import { HorizontalDivider } from '../../_ui/Divider'
import { ImageModal } from '../ImageModal'
import Link from 'next/link'
import { LoadingIcon } from '../../_ui/LoadingIcon'
import { MdOutlineCampaign } from 'react-icons/md'
import { Pagination } from 'swiper'
import { PopOverOptions } from '../../_ui/ButtonIcon/PopOverOptions'
import { RiNumbersFill } from 'react-icons/ri'
import { Survey } from './components/Survey'
import graphqlRequestClient from '../../../lib/graphql.request'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../../context/CurrentUser'
import { useTimeline } from '../../../context/TimelineContext'

interface PublicationProps {
  publication: Timeline
}

export function Publication({ publication }: PublicationProps) {
  const { currentUser } = useCurrentUser()
  const { refetchTimeline } = useTimeline()

  const [newComment, setNewComment] = useState(false)
  const [textComment, setTextComment] = useState('')
  const [postType, setPostType] = useState('')

  const [isOpenModal, setIsOpenModal] = useState(false)

  const { mutate: likePublication, isLoading: loadingLike } =
    useLikePublicationMutation(graphqlRequestClient)

  const { mutate: _unCommentPublication } =
    useUncommentPublicationMutation(graphqlRequestClient)

  const { mutate: unlikePublication, isLoading: loadingUnlike } =
    useUnlikePublicationMutation(graphqlRequestClient)

  const { mutate: _commentPublication, isLoading: loadingComment } =
    useCommentPublicationMutation(graphqlRequestClient)

  const { mutate: _unpublish, isLoading: loadingDeletePub } =
    useUnpublishMutation(graphqlRequestClient)

  const redirectProfile =
    Number(currentUser?.id) === publication?.user?.id
      ? '/account/profile'
      : `/account/profile/${publication?.user.id}`

  const handleExpandText = useCallback((e: any) => {
    e.target.parentElement.classList.add('text-expanded')
  }, [])

  const [imageSource, setImageSource] = useState('')

  const commentPublication = (publicationId: number) => {
    _commentPublication(
      {
        content: textComment,
        publicationId,
      },
      {
        onSuccess(data) {
          if (data.commentPublication) {
            refetchTimeline()
            setTextComment('')
            setNewComment(false)
          } else {
            toast.error(
              'Não foi possível comentar na publicação. Tente novamente!',
            )
          }
        },
      },
    )
  }

  const likeOrUnlike = (publicationId: number) => {
    if (publication.liked) {
      unlikePublication(
        {
          id: publicationId,
        },
        {
          onSuccess(data) {
            if (data.unlikePublication) {
              refetchTimeline()
            } else {
              toast.error(
                'Não foi possível deixar de curtir a publicação! Tente novamente',
              )
            }
          },
        },
      )
    } else {
      likePublication(
        {
          id: publicationId,
        },
        {
          onSuccess(data) {
            if (data.likePublication) {
              refetchTimeline()
            } else {
              toast.error(
                'Não foi possível curtir a publicação! Tente novamente',
              )
            }
          },
        },
      )
    }
  }

  const uncommentPublication = (publicationCommentId?: number) => {
    if (publicationCommentId) {
      _unCommentPublication(
        {
          commentId: publicationCommentId,
          id: publication.id,
        },
        {
          onSuccess(data) {
            if (data.uncommentPublication) {
              refetchTimeline()
              setTextComment('')
              setNewComment(false)
            }
          },
        },
      )
    } else {
      setNewComment(false)
    }
  }

  const unpublish = (id: number) => {
    _unpublish(
      {
        id,
      },
      {
        onSuccess(data) {
          if (data.unpublish) {
            refetchTimeline()
            toast.success('Publicação deletada com sucesso!')
            refetchTimeline()
          } else {
            toast.error('Erro ao deletar publicação. Tente novamente!')
          }
        },
      },
    )
  }

  const selectTextHeaderPublication = (postType: string) => {
    if (postType === 'announcement') return 'Anúncio'
    if (postType === 'survey') return 'Enquete'
    if (postType === 'events') return 'Eventos'
  }

  const selectIconHeaderPublication = (postType: string) => {
    if (postType === 'announcement') return <MdOutlineCampaign />
    if (postType === 'survey') return <RiNumbersFill />
    if (postType === 'events') return <AiOutlineCalendar />
  }

  const selectPost = (postType?: string) => {
    if (postType === 'survey') return <Survey />
    if (postType === 'events') return <Event publication={publication} />
    else {
      return (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {publication?.post.images?.map((item, index) =>
            publication?.post.images.length > 1 ? (
              <SwiperSlide key={index}>
                <ImageBodyPublication
                  onClick={() => {
                    setImageSource(item)
                    setIsOpenModal(true)
                  }}
                  height={296}
                  width={1000}
                  src={item}
                  alt="post"
                />
              </SwiperSlide>
            ) : (
              <ImageBodyPublication
                onClick={() => {
                  setImageSource(item)
                  setIsOpenModal(true)
                }}
                key={index}
                height={296}
                width={1000}
                src={item}
                alt="post"
              />
            ),
          )}
        </Swiper>
      )
    }
  }

  useEffect(() => {
    if (publication.event) {
      setPostType('events')
    } else {
      setPostType('publication')
    }
  }, [publication])

  return (
    <>
      <ImageModal
        isOpen={isOpenModal}
        onOpenChange={setIsOpenModal}
        src={imageSource}
      />
      <PostContainer>
        <CardViewPublication>
          {postType !== 'publication' && (
            <HeaderPublication postType={postType}>
              {selectIconHeaderPublication(postType)}
              <p>{selectTextHeaderPublication(postType)}</p>
            </HeaderPublication>
          )}
          <TopPublication>
            <Link href={redirectProfile}>
              <Author>
                <AvatarAuthor
                  width={64}
                  height={64}
                  src={
                    publication?.user.profilePicture || '/image/no-photo.png'
                  }
                  alt="Avatar do usuário"
                />
                <div>
                  <NameAuthor>{publication?.user.name}</NameAuthor>
                  <CreationDate>
                    {moment(publication?.post.createdAt).calendar()}
                  </CreationDate>
                </div>
              </Author>
            </Link>
            {publication?.user?.id === Number(currentUser?.id) && (
              <PopOverOptions typeButton="secondary">
                <ItemBodyPopOver onClick={() => unpublish(publication.id)}>
                  <FiTrash2 />
                  <button disabled={loadingDeletePub}>
                    <span>Excluir</span>
                  </button>
                </ItemBodyPopOver>
              </PopOverOptions>
            )}
          </TopPublication>
          <BodyPublication>
            <TextBodyPublication>
              <div>
                <div>{publication?.post.text}</div>
                {publication?.post.text &&
                  publication?.post.text.length > 100 && (
                    <BtnShowMore onClick={(e) => handleExpandText(e)}>
                      Ver mais
                    </BtnShowMore>
                  )}
              </div>
            </TextBodyPublication>
            {selectPost(postType)}
          </BodyPublication>
          <BottomPublication>
            <div className="mainActions">
              <BtnIcon
                aria-label="curtir a publicação"
                title="curtir"
                disabled={loadingLike || loadingUnlike}
                onClick={() => likeOrUnlike(publication.id)}
              >
                {publication.liked ? (
                  <BsHeartFill color="#00214A" />
                ) : (
                  <BsHeart />
                )}{' '}
                {publication.likeCount}
              </BtnIcon>
              <BtnIcon
                style={{
                  color: newComment ? 'var(--color-primary)' : '',
                }}
                aria-label="comentar na publicação"
                title="comentar"
                onClick={() => setNewComment(true)}
              >
                <BsChat />{' '}
                {publication?.commentCount > 0 && (
                  <span>{publication?.commentCount}</span>
                )}
              </BtnIcon>
            </div>
          </BottomPublication>

          {newComment && (
            <>
              <HorizontalDivider
                style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}
              />
              <div
                style={{ paddingLeft: 8, paddingRight: 8, paddingBottom: 16 }}
              >
                <CommentCard
                  textComment={textComment}
                  newComment
                  onChange={(e: { target: { value: string } }) =>
                    setTextComment(e.target.value)
                  }
                  deleteComment={() => uncommentPublication()}
                />
                <SaveComment
                  onClick={() => commentPublication(publication.id)}
                  style={{
                    opacity: textComment.length < 1 ? 0.4 : 1,
                  }}
                  disabled={textComment.length <= 2}
                >
                  {!loadingComment ? 'Publish' : <LoadingIcon />}
                </SaveComment>
              </div>
            </>
          )}

          {publication?.comments?.length !== 0 && (
            <>
              {!newComment && (
                <HorizontalDivider
                  style={{ paddingLeft: 16, paddingRight: 16 }}
                />
              )}
              {publication?.comments?.map((value, index) => (
                <div key={index} style={{ padding: 16 }}>
                  <CommentCard
                    {...value}
                    comment={value}
                    iconDelete={
                      value.user.id === Number(currentUser?.id) ||
                      publication.user?.id === Number(currentUser?.id)
                    }
                    //  editComent={(e) => handleEditComment(e.target.value)}
                    deleteComment={() => uncommentPublication(value.id)}
                  />
                </div>
              ))}
              {/* <CommentsModal publication={publication} /> */}
            </>
          )}
        </CardViewPublication>
      </PostContainer>
    </>
  )
}
