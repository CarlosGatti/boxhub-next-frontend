import * as yup from 'yup'

import {
  AddContainer,
  Caption,
  ContainerOption,
  ContainerOptionPrivacy,
  ImageContainer,
  Line,
  ModalBody,
} from './styles'
import {
  GetCommunityByIdQuery,
  UpdateCommunityInput,
  useUpdateCommunityMutation,
} from '../../../generated/graphql'
import { useEffect, useState } from 'react'

import { BsImage } from 'react-icons/bs'
import { Button } from '../../_ui/Button'
import { Checkbox } from '../../_ui/Checkbox'
import Image from 'next/image'
import { Input } from '../../_ui/Input/textInput'
import { Modal } from '../../../components/_ui/Modal'
import { TextArea } from '../../_ui/Input/textAreaInput'
import { UploadPhoto } from '../UploadPhoto'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../lib/imgBB'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface EditCommunityModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  community: GetCommunityByIdQuery['communityById'] | undefined
  refetchCommunity: () => void
}

const editCommunitySchema = yup.object().shape({})

export const EditCommunityModal = ({
  isOpen,
  setIsOpen,
  community,
  refetchCommunity,
}: EditCommunityModalProps) => {
  const [coverPhoto, setCoverPhoto] = useState<string | null | undefined>()
  const [profilePhoto, setProfilePhoto] = useState<string | null | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit } = useForm<UpdateCommunityInput>({
    resolver: yupResolver(editCommunitySchema),
  })

  const { mutate: updateCommunity } =
    useUpdateCommunityMutation(graphqlRequestClient)

  const handleUpdateCommunity = async (values: UpdateCommunityInput) => {
    try {
      setIsLoading(true)
      if (profilePhoto && !profilePhoto.includes('ibb.co')) {
        const { data } = await uploadImages(profilePhoto)
        values.profilePicture = data.url
      }
      if (coverPhoto && !coverPhoto.includes('ibb.co')) {
        const { data } = await uploadImages(coverPhoto)
        values.banner = data.url
      }

      updateCommunity(
        {
          data: { ...values, id: Number(community?.id) },
        },
        {
          onSuccess(data) {
            if (data.updateCommunity.success) {
              refetchCommunity()
              setIsOpen(false)
              toast.success('Community successfully edited!')
              setIsLoading(false)
            } else {
              toast.error(
                'Unable to edit community. Try again!',
              )
              setIsLoading(false)
            }
          },
        },
      )
    } catch {
      setIsLoading(false)

      toast.error('Unable to edit community. Try again!')
    }
  }

  useEffect(() => {
    if (community) {
      setProfilePhoto(community?.profilePicture)
      setCoverPhoto(community?.banner)
    }
  }, [community])

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <ModalBody
        styleModal={{ backgroundColor: '#F4F3F6', height: '90vh' }}
        title="Edit community"
      >
        <form onSubmit={handleSubmit(handleUpdateCommunity)}>
          <div className="imagesContainer">
            <div style={{ width: '100%' }}>
              <Caption>Adicionar foto</Caption>
              <ImageContainer>
                <AddContainer>
                  <div className="profile">
                    {profilePhoto ? (
                      <Image
                        src={profilePhoto}
                        width={104}
                        height={104}
                        alt="imagem de capa"
                      />
                    ) : (
                      <BsImage />
                    )}
                  </div>
                </AddContainer>
                <UploadPhoto url={setProfilePhoto} />
              </ImageContainer>
              <ImageContainer>
                <Caption>Add cover</Caption>

                <AddContainer>
                  <div className="banner">
                    {coverPhoto ? (
                      <Image
                        src={coverPhoto}
                        width={247}
                        height={120}
                        alt="imagem de capa"
                      />
                    ) : (
                      <BsImage />
                    )}
                  </div>
                </AddContainer>
                <UploadPhoto url={(value: string) => setCoverPhoto(value)} />
              </ImageContainer>
            </div>
            <div style={{ width: '100%' }}>
              <Caption>Community data</Caption>
              <Input
                {...register('name')}
                label="Nome da comunidade"
                defaultValue={community?.name}
              />
              <TextArea
                {...register('description')}
                style={{ resize: 'none', height: '100px' }}
                label="Descrição da comunidade"
                defaultValue={community?.description}
              />
            </div>
          </div>
          <Line />
          <div
            className="privacyContainer"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div>
              <Caption>Privacy settings</Caption>
              <ContainerOption>
                <Checkbox
                  {...register('visibility')}
                  fontWeight={400}
                  label="Comunidade pública"
                  type="radio"
                  value="PUBLIC"
                  defaultChecked={community?.visibility === 'PUBLIC'}
                />
                {/* <PopOver>
                  <ButtonPopOver>
                    <ButtonInfo title="informações">
                      <AiOutlineExclamationCircle />
                    </ButtonInfo>
                  </ButtonPopOver>
                  <ContentPopOver>{publicRules}</ContentPopOver>
                </PopOver> */}
              </ContainerOption>
              <ContainerOption>
                <Checkbox
                  {...register('visibility')}
                  fontWeight={400}
                  label="Comunidade privada"
                  type="radio"
                  value="PRIVATE"
                  defaultChecked={community?.visibility === 'PRIVATE'}
                />
                {/* <PopOver>
                  <ButtonPopOver>
                    <ButtonInfo title="informações">
                      <AiOutlineExclamationCircle />
                    </ButtonInfo>
                  </ButtonPopOver>
                  <ContentPopOver>{privateRules}</ContentPopOver>
                </PopOver> */}
              </ContainerOption>
            </div>
            <Line />
            <Caption>Permissions</Caption>
            <div
              className="permissionsContainer"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <ContainerOptionPrivacy>
                <h3>Which members can invite others?</h3>
                <Checkbox
                  {...register('inviteEnabledRole')}
                  fontWeight={400}
                  label="Todos os membros"
                  type="radio"
                  value="ALL"
                  defaultChecked={!!community?.inviteEnabledRole}
                />
                <Checkbox
                  {...register('inviteEnabledRole')}
                  fontWeight={400}
                  label="Somente moderadores"
                  type="radio"
                  value="ADMIN"
                  defaultChecked={!community?.inviteEnabledRole}
                />
                <Line />
              </ContainerOptionPrivacy>
              <ContainerOptionPrivacy>
                <h3>Which members can post to the feed?</h3>
                <Checkbox
                  {...register('postEnabledRole')}
                  fontWeight={400}
                  label="Todos os membros"
                  type="radio"
                  value="ALL"
                  defaultChecked={!!community?.postEnabledRole}
                />
                <Checkbox
                  {...register('postEnabledRole')}
                  fontWeight={400}
                  label="Somente moderadores"
                  type="radio"
                  value="ADMIN"
                  defaultChecked={!community?.postEnabledRole}
                />
                <Line />
              </ContainerOptionPrivacy>
            </div>
          </div>
          <Button isDisabled={isLoading} isLoading={isLoading}>
            Save changes
          </Button>
        </form>
      </ModalBody>
    </Modal>
  )
}
