/* eslint-disable @typescript-eslint/no-unused-vars */

import * as yup from 'yup'

import {
  AddCover,
  AddPhoto,
  ButtonCreatePublication,
  ButtonInfo,
  Caption,
  CheckboxSeparator,
  Container,
  ContainerAboutGroup,
  ContainerAddPhoto,
  ContainerCommunitySetting,
  ContainerCover,
  ContainerOption,
  ContainerOptionPrivacy,
  ContainerTextArea,
  GroupView,
  Line,
  SideBarCreateGroup,
  TitleCheckboxPaidCommunity,
  Wrapper,
  WrapperPreviewCommmunity,
} from '../../../styles/createCommunity'
import {
  ButtonPopOver,
  ContentPopOver,
  PopOver,
} from '../../../components/_ui/PopOver'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  CreateCommunityInput,
  useCreateCommunityMutation,
} from '../../../generated/graphql'
import { GetServerSideProps, NextPage } from 'next'
import { privateRules, publicRules } from '../../../variables/rules'

import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsImage } from 'react-icons/bs'
import { Button } from '../../../components/_ui/Button'
import { Checkbox } from '../../../components/_ui/Checkbox'
import { FormatCurrencyInput } from '../../../components/_ui/Input/currencyInput'
import { GroupPreview } from '../../../components/community/GroupPreview'
import { Header } from '../../../components/_ui/Header'
import Image from 'next/image'
import { Input } from '../../../components/_ui/Input/textInput'
import { MainLayout } from '../../../layouts/MainLayout'
import { ProgressBar } from '../../../components/groups/ProgressBar'
import { UploadPhoto } from '../../../components/community/UploadPhoto'
import graphqlRequestClient from '../../../lib/graphql.request'
import { parseCookies } from 'nookies'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../lib/imgBB'
import { useCurrentUser } from '../../../context/CurrentUser'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

const createCommmunityFormSchema = yup.object().shape({
  name: yup.string().required('Community name required!'),
  description: yup.string().required('Community description required!'),
  inviteEnabledRole: yup.string(),
  postEnabledRole: yup.string(),
  'plan.price': yup.string(),
  'plan.name': yup.string(),
  'plan.description': yup.string(),
  visibility: yup.string(),
})

const CreateCommunity: NextPage = () => {
  const { currentUser, refetchCurrentUser } = useCurrentUser()
  const [stepGroup, setStepGroup] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [coverPhoto, setCoverPhoto] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')

  const [isPaid, setIsPaid] = useState(false)

  const router = useRouter()

  const { mutate: createCommunity } =
    useCreateCommunityMutation(graphqlRequestClient)

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(createCommmunityFormSchema),
  })

  const handleCreateCommmunity: SubmitHandler<CreateCommunityInput> = async (
    values,
  ) => {
    let banner = ''
    let profilePicture = ''

    const planPrice = values.plan?.price?.replace('R$', '').replace(',', '.')

    const formattedPlanPrice =
      planPrice?.length > 6 ? planPrice?.replace('.', '') : planPrice

    try {
      setIsLoading(true)
      if (coverPhoto) {
        await uploadImages(coverPhoto).then((res) => {
          banner = res.data.url
        })
      }

      if (profilePhoto) {
        await uploadImages(profilePhoto).then((res) => {
          profilePicture = res.data.url
        })
      }
      createCommunity(
        {
          data: {
            ...values,
            plan: formattedPlanPrice
              ? {
                  ...values.plan,
                  price: Number(formattedPlanPrice),
                }
              : undefined,
            profilePicture,
            banner,
          },
        },
        {
          onSuccess(data) {
            if (data.createCommunity.id) {
              refetchCurrentUser()
              toast.success('Congratulations 🎊🎊🎊 this is your new community!')
              router.push(`/community/${data.createCommunity?.id}`)
              setIsLoading(false)
            } else {
              toast.error('Error creating community, try again!')
              setIsLoading(false)
            }
          },
          onError() {
            setIsLoading(false)
            toast.error('Error creating community, try again!')
          },
        },
      )
    } catch {
      toast.error('Error creating community, try again!')
      setIsLoading(false)
    }
  }

  return (
    <MainLayout
      headTitle="BoxHub | Create communities"
      metaName="description"
      metaContent="create communities"
    >
      <Container>
        <Header />
        <Wrapper>
          <SideBarCreateGroup title="Create community">
            <ProgressBar percentage={stepGroup * 20} />
            <form
              onSubmit={handleSubmit(handleCreateCommmunity)}
              style={{ width: '100%' }}
            >
              {/*  <StepCreateGroup /> */}
              {stepGroup === 1 && (
                <>
                  <Caption>Community data</Caption>
                  <Input
                    label="Nome da comunidade"
                    error={errors.name}
                    {...register('name')}
                  />
                  <ContainerTextArea>
                    <p>Descrição da comunidade</p>
                    <textarea {...register('description')} />
                  </ContainerTextArea>
                </>
              )}
              {stepGroup === 2 && (
                <>
                  <Caption>Community data</Caption>
                  <TitleCheckboxPaidCommunity>
                    Paid community?
                  </TitleCheckboxPaidCommunity>
                  <ContainerCommunitySetting>
                    <Checkbox
                      label="Sim"
                      checked={isPaid}
                      onChange={() => setIsPaid(true)}
                      type="radio"
                      value="true"
                    />
                    <CheckboxSeparator />

                    <Checkbox
                      label="Não"
                      checked={!isPaid}
                      onChange={() => setIsPaid(false)}
                      type="radio"
                      value="false"
                    />
                  </ContainerCommunitySetting>

                  {isPaid && (
                    <>
                      <Input
                        label="Nome do plano"
                        error={errors.name_plan}
                        {...register('plan.name')}
                      />
                      <Controller
                        name="plan.price"
                        control={control}
                        render={({ field }) => (
                          <FormatCurrencyInput
                            {...field}
                            label="Valor do plano"
                          />
                        )}
                      />
                      <ContainerTextArea>
                        <p>Plan description</p>
                        <textarea {...register('plan.description')} />
                      </ContainerTextArea>
                    </>
                  )}
                </>
              )}
              {stepGroup === 3 && (
                <>
                  <Caption>Privacy settings</Caption>
                  <ContainerOption>
                    <Checkbox
                      {...register('visibility')}
                      label="Comunidade pública"
                      type="radio"
                      value="PUBLIC"
                    />
                    <PopOver>
                      <ButtonPopOver>
                        <ButtonInfo title="informações">
                          <AiOutlineExclamationCircle />
                        </ButtonInfo>
                      </ButtonPopOver>
                      <ContentPopOver>{publicRules}</ContentPopOver>
                    </PopOver>
                  </ContainerOption>
                  <ContainerOption>
                    <Checkbox
                      {...register('visibility')}
                      label="Comunidade privada"
                      type="radio"
                      value="PRIVATE"
                    />
                    <PopOver>
                      <ButtonPopOver>
                        <ButtonInfo title="informações">
                          <AiOutlineExclamationCircle />
                        </ButtonInfo>
                      </ButtonPopOver>
                      <ContentPopOver>{privateRules}</ContentPopOver>
                    </PopOver>
                  </ContainerOption>
                </>
              )}

              {stepGroup === 4 && (
                <>
                  <Caption>Privacy settings</Caption>
                  <ContainerOptionPrivacy>
                    <h3>Which members can invite others?</h3>

                    <Checkbox
                      {...register('inviteEnabledRole')}
                      label="Todos os membros"
                      type="radio"
                      value="ALL"
                    />
                    <Checkbox
                      {...register('inviteEnabledRole')}
                      label="Somente moderadores"
                      type="radio"
                      value="ADMIN"
                    />
                    <Line />
                  </ContainerOptionPrivacy>

                  <ContainerOptionPrivacy>
                    <h3>Which members can post to the feed?</h3>

                    <Checkbox
                      {...register('postEnabledRole')}
                      label="Todos os membros"
                      type="radio"
                      value="ALL"
                    />

                    <Checkbox
                      {...register('postEnabledRole')}
                      label="Somente moderadores"
                      type="radio"
                      value="ADMIN"
                    />

                    <Line />
                  </ContainerOptionPrivacy>
                </>
              )}

              {stepGroup === 5 && (
                <>
                  <Caption>Add photo</Caption>
                  <ContainerAddPhoto>
                    {profilePhoto ? (
                      <AddPhoto>
                        <div>
                          <Image
                            width={200}
                            height={200}
                            src={profilePhoto}
                            alt="Profile photo"
                          />
                        </div>
                      </AddPhoto>
                    ) : (
                      <AddPhoto>
                        <div>
                          <BsImage />
                        </div>
                      </AddPhoto>
                    )}
                    <UploadPhoto
                      url={(value: string) => setProfilePhoto(value)}
                    />
                  </ContainerAddPhoto>

                  <ContainerCover>
                    <Caption>Add Cover</Caption>

                    {coverPhoto ? (
                      <AddCover>
                        <div>
                          <Image
                            src={coverPhoto}
                            width={247}
                            height={120}
                            alt="imagem de capa"
                          />
                        </div>
                      </AddCover>
                    ) : (
                      <AddCover>
                        <div>
                          <BsImage />
                        </div>
                      </AddCover>
                    )}
                    <UploadPhoto
                      url={(value: string) => setCoverPhoto(value)}
                    />
                  </ContainerCover>
                </>
              )}
              {stepGroup === 5 && (
                <Button type="submit" isLoading={isLoading}>
                  Create
                </Button>
              )}
            </form>

            {stepGroup < 5 && (
              <Button
                disabled={
                  watch('name')?.length <= 2 ||
                  watch('description')?.length <= 3
                }
                type="button"
                onClick={() => setStepGroup(stepGroup + 1)}
              >
                Next
              </Button>
            )}
            {stepGroup > 1 && (
              <Button
                buttonStyle={{ marginTop: 8 }}
                typeButton="secondary"
                type="button"
                disabled={isLoading}
                onClick={() => setStepGroup(stepGroup - 1)}
              >
                Back
              </Button>
            )}
          </SideBarCreateGroup>
          <WrapperPreviewCommmunity>
            <GroupPreview
              title="Prévia da comunidade"
              name={watch('name') || 'Nome'}
              coverPhoto={coverPhoto}
              profilePhoto={profilePhoto}
              groupAdminName={
                `${currentUser?.firstName} ${currentUser?.lastName}` || ''
              }
              groupAdminPicture={currentUser?.profilePicture}
              memberNumber={90}
              typePreview="CreateCommunity"
            />
            <GroupView>
              <SideBarCreateGroup title="Sobre">
                <ContainerAboutGroup>
                  <p>{watch('description') || 'Descrição da comunidade'}</p>
                </ContainerAboutGroup>
              </SideBarCreateGroup>
              <ButtonCreatePublication>
                <button>
                  Hello {currentUser?.firstName}, what do you tell us today?
                </button>
              </ButtonCreatePublication>
            </GroupView>
          </WrapperPreviewCommmunity>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
export default CreateCommunity

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
