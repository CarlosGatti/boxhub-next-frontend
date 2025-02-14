/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  AdminInformation,
  Container,
  ContainerAboutGroup,
  ContainerButton,
  Content,
  ContentBannerImg,
  ContentBannerSvg,
  ContentImgGrupo,
  GroupDetails,
  GroupInformation,
  GroupParticipants,
  ImgBanner,
  Information,
  SidebarAbout,
  Wrapper,
  WrapperActions,
  WrapperListMembers,
} from '../../styles/detailsCommunity'
import { privateRules, publicRules } from '../../variables/rules'
import { useEffect, useState } from 'react'
import {
  useGetCommunityByIdQuery,
  useJoinCommunityMutation,
  useLeaveCommunityMutation,
} from '../../generated/graphql'

import { AiOutlinePlus } from 'react-icons/ai'
import { BsImage } from 'react-icons/bs'
import { Button } from '../../components/_ui/Button'
import { ButtonCreatePublication } from '../../styles/createCommunity'
import { CreatePublication } from '../../components/publications/CreatePublication'
import { EditCommunityModal } from '../../components/community/EditCommunityModal'
import { EmptyFeed } from '../../components/community/EmptyFeed'
import { Header } from '../../components/_ui/Header'
import { HorizontalDivider } from '../../components/_ui/Divider'
import Image from 'next/image'
import { IoMdTime } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import Link from 'next/link'
import { ListMembers } from '../../components/community/ListMembers/ListMembers'
import { MainLayout } from '../../layouts/MainLayout'
import { MdPeopleOutline } from 'react-icons/md'
import { NextPage } from 'next'
import { NoConnection } from '../../styles/connections'
import { PrivateCommunity } from '../../components/community/PrivateCommunity'
import { Publication } from '../../components/publications/Post'
import { SubTitle } from '../../styles/community'
import { Tabs } from '../../components/_ui/Tabs'
import graphqlRequestClient from '../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useCurrentUser } from '../../context/CurrentUser'
import { useRouter } from 'next/router'
import { useTimeline } from '../../context/TimelineContext'

const DetailsCommunity: NextPage = () => {
  const router = useRouter()
  const { currentUser, refetchCurrentUser } = useCurrentUser()

  const [cardCreatePublication, setCardCreatePublication] = useState(false)
  const [currentValueTabs, setCurrentValueTabs] = useState('')

  const [isAskingToCancel, setIsAskingToCancel] = useState(false)

  const [openEditCommunityModal, setOpenEditCommunityModal] = useState(false)

  const id = router.query.id as string | undefined

  const { timeline, refetchTimeline } = useTimeline()

  const { data, refetch: refetchCommunity } = useGetCommunityByIdQuery(
    graphqlRequestClient,
    {
      id: Number(id),
    },
    {
      enabled: !!id,
    },
  )

  const isMember = data?.communityById?.members?.find(
    (item) => item?.user?.id === currentUser?.id,
  )

  const isOwner = data?.communityById.owner?.id === currentUser?.id

  const isPendingCommunityAccess =
    currentUser?.memberCommunities?.find((item) => item.community.id === id)
      ?.status === 'PENDING'

  const isBlockedCommunityActions =
    !isMember && !isOwner && data?.communityById.visibility === 'PRIVATE'

  const canPublicateCommunity =
    isOwner || (isMember && data?.communityById.postEnabledRole !== 'ADMIN')

  const canViewTimelineCommunity =
    isMember ||
    isOwner ||
    (!isMember && data?.communityById.visibility === 'PUBLIC')

  const canInviteUsersToCommunity =
    isOwner ||
    (isMember &&
      data?.communityById.inviteEnabledRole !== 'ADMIN' &&
      !isPendingCommunityAccess)

  const { mutate: _joinCommunity, isLoading: isLoadingJoin } =
    useJoinCommunityMutation(graphqlRequestClient)
  const { mutate: _leaveCommunity, isLoading: isLoadingExit } =
    useLeaveCommunityMutation(graphqlRequestClient)

  const joinCommunity = () => {
    _joinCommunity(
      {
        communityId: Number(data?.communityById.id),
      },
      {
        onSuccess(data) {
          if (data.joinCommunity.success) {
            refetchCommunity()
            refetchCurrentUser()
            refetchTimeline()
            toast.success(data.joinCommunity.message)
          } else {
            toast.error(
              'Não foi possível entrar na comunidade. Tente novamente!',
            )
          }
        },
      },
    )
  }

  const leaveCommunity = () => {
    _leaveCommunity(
      {
        communityId: Number(data?.communityById.id),
      },
      {
        onSuccess(data) {
          if (data.leaveCommunity.success) {
            refetchCommunity()
            refetchCurrentUser()
            refetchTimeline()
            toast.success(data.leaveCommunity.message)
          } else {
            toast.error('Não foi possível sair na comunidade. Tente novamente!')
          }
        },
      },
    )
  }

  const updateTabCheck = (e: string) => {
    setCurrentValueTabs(e)
  }

  useEffect(() => {
    if (isAskingToCancel) {
      setTimeout(() => {
        setIsAskingToCancel(false)
      }, 2000)
    }
  }, [isAskingToCancel])

  useEffect(() => {
    refetchTimeline()
  }, [])

  return (
    <MainLayout
      headTitle="BoxHub | Detalhes da comunidade"
      metaName="description"
      metaContent="detalhes da comunidade"
    >
      <EditCommunityModal
        refetchCommunity={refetchCommunity}
        isOpen={openEditCommunityModal}
        setIsOpen={setOpenEditCommunityModal}
        community={data?.communityById}
      />
      <Header />
      <Container>
        <Content>
          {data?.communityById.banner ? (
            <ContentBannerImg>
              <ImgBanner>
                <Image
                  width={1000}
                  height={300}
                  src={data.communityById.banner}
                  alt="banner"
                />
              </ImgBanner>
            </ContentBannerImg>
          ) : (
            <ContentBannerSvg>
              <BsImage />
            </ContentBannerSvg>
          )}
          <GroupInformation>
            <Information>
              <div>
                <ContentImgGrupo>
                  {data?.communityById?.profilePicture ? (
                    <Image
                      src={data.communityById.profilePicture}
                      width={160}
                      height={160}
                      alt="foto perfil"
                    />
                  ) : (
                    <BsImage />
                  )}
                </ContentImgGrupo>
                <GroupDetails>
                  <h3>{data?.communityById.name}</h3>
                  <GroupParticipants>
                    <p>
                      {data?.communityById.visibility === 'PUBLIC'
                        ? 'Comunidade pública'
                        : 'Comunidade Privada'}
                    </p>
                    {data?.communityById.members?.length === 0 ? (
                      <span>Nenhum membro</span>
                    ) : (
                      <span>
                        {data?.communityById.members?.length}{' '}
                        {data?.communityById.members?.length === 1
                          ? 'membro'
                          : 'membros'}
                      </span>
                    )}
                  </GroupParticipants>
                  <AdminInformation>
                    <Link
                      style={{ display: 'flex', alignItems: 'center' }}
                      href="/account/profile"
                    >
                      <Image
                        width={24}
                        height={24}
                        alt="Avatar do Admin"
                        src={
                          data?.communityById?.owner?.profilePicture ||
                          '/image/no-photo.png'
                        }
                      />
                      <p>
                        {`${data?.communityById?.owner?.firstName} ${data?.communityById?.owner?.lastName}`}{' '}
                        (adm)
                      </p>
                    </Link>
                  </AdminInformation>
                </GroupDetails>
              </div>
              <WrapperActions>
                {isOwner && (
                  <Button
                    onClick={() => setOpenEditCommunityModal(true)}
                    typeButton="secondary"
                    icon={<IoSettingsOutline size={20} color="#3A393B" />}
                  />
                )}
                {!isOwner && (
                  <Button
                    isLoading={isLoadingJoin || isLoadingExit}
                    icon={
                      isPendingCommunityAccess ? (
                        <IoMdTime style={{ marginRight: '5px' }} />
                      ) : (
                        <MdPeopleOutline style={{ marginRight: '5px' }} />
                      )
                    }
                    onClick={() =>
                      isPendingCommunityAccess && !isAskingToCancel
                        ? setIsAskingToCancel(true)
                        : !isMember
                        ? joinCommunity()
                        : leaveCommunity()
                    }
                  >
                    {isPendingCommunityAccess ? (
                      <>
                        {isAskingToCancel
                          ? 'Cancelar solicitação?'
                          : 'Aguardando aprovação'}
                      </>
                    ) : isMember ? (
                      'Sair da comunidade'
                    ) : (
                      'Entrar na comunidade'
                    )}
                  </Button>
                )}

                {canInviteUsersToCommunity && (
                  <Button
                    disabled
                    icon={<AiOutlinePlus style={{ marginRight: '5px' }} />}
                    onClick={() => {}}
                  >
                    Convidar
                  </Button>
                )}
              </WrapperActions>
            </Information>
            <ContainerButton>
              <div>
                <Tabs
                  labelTabs={['Feed', 'Membros', 'Grupos']}
                  checkLabelTab={'Feed'}
                  currentTabCheck={updateTabCheck}
                />
              </div>
            </ContainerButton>
          </GroupInformation>
        </Content>
        <Wrapper>
          <SidebarAbout>
            <p className="title">Sobre</p>
            <ContainerAboutGroup>
              <p className="subtitle">Apresentação</p>
              <p>{data?.communityById.description}</p>
            </ContainerAboutGroup>
            <ContainerAboutGroup>
              <p className="subtitle">
                {data?.communityById.visibility === 'PUBLIC'
                  ? 'Comunidade pública'
                  : 'Comunidade Privada'}
              </p>
              <div className="rules">
                {data?.communityById.visibility === 'PUBLIC'
                  ? publicRules
                  : privateRules}
              </div>
            </ContainerAboutGroup>
          </SidebarAbout>

          {currentValueTabs === 'Feed' && (
            <>
              <div className="feed">
                {isPendingCommunityAccess || isBlockedCommunityActions ? (
                  <PrivateCommunity />
                ) : (
                  canPublicateCommunity && (
                    <>
                      {!cardCreatePublication ? (
                        <ButtonCreatePublication
                          onClick={() => setCardCreatePublication(true)}
                        >
                          <button>Poste algo na comunidade!</button>
                        </ButtonCreatePublication>
                      ) : (
                        <CreatePublication
                          communityId={Number(id)}
                          currentUser={currentUser}
                          cancelPublication={() =>
                            setCardCreatePublication(false)
                          }
                        />
                      )}
                    </>
                  )
                )}
                {canViewTimelineCommunity && !isPendingCommunityAccess && (
                  <>
                    {timeline?.length === 0 ? (
                      <EmptyFeed />
                    ) : (
                      <>
                        {timeline?.map((publication, index) => (
                          <div key={index} style={{ marginTop: 16 }}>
                            <Publication
                              publication={publication}
                              key={publication?.id}
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )}

          {currentValueTabs === 'Membros' && (
            <WrapperListMembers>
              <SubTitle style={{ marginBottom: '0' }}>Administradores</SubTitle>
              <ListMembers
                communityId={undefined}
                member={data?.communityById?.owner}
              />
              <HorizontalDivider />
              <SubTitle style={{ marginBottom: '0' }}>Membros</SubTitle>
              {data?.communityById?.members?.map((member, index) => (
                <ListMembers
                  communityId={id}
                  isOwner={isOwner}
                  key={index}
                  member={member.user}
                />
              ))}
              {data?.communityById?.members?.length === 0 && (
                <NoConnection>
                  <h4>Essa comunidade ainda não possui membros</h4>
                </NoConnection>
              )}
            </WrapperListMembers>
          )}
          {currentValueTabs === 'Grupos' && 'Em breve...'}
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
export default DetailsCommunity
