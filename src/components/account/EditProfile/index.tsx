import {
  ButtonModal,
  Form,
  Group,
  ImageUploadPhotoWithCrop,
  ModalBody,
  Top,
} from './styles'
import {
  UserUpdateInput,
  useUpdateUserMutation,
} from '../../../generated/graphql'

import { Button } from '../../../components/_ui/Button'
import { Input } from '../../../components/_ui/Input/textInput'
import { Modal } from '../../../components/_ui/Modal'
import { TextArea } from '../../_ui/Input/textAreaInput'
import { UploadPhotoWithCrop } from '../../../components/_ui/UploadPhotoWithCrop'
import { editFormSchema } from './validateForm'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../lib/imgBB'
import { useCurrentUser } from '../../../context/CurrentUser'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

export const EditProfileModal = () => {
  const { currentUser, refetchCurrentUser } = useCurrentUser()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateInput>({
    resolver: yupResolver(editFormSchema),
  })

  const [profilePicture, setProfilePicture] = useState('')

  const [openModal, setOpenModal] = useState(false)

  const { mutate: updateUser } = useUpdateUserMutation(graphqlRequestClient)
  const handleEditProfile = async (values: UserUpdateInput) => {
    setIsLoading(true)
    try {
      if (profilePicture && !profilePicture.includes('imgbb')) {
        const { data } = await uploadImages(profilePicture)
        values.profilePicture = data.url
      }
      updateUser(
        {
          data: {
            firstName: {
              set: values.firstName,
            },
            lastName: {
              set: values.lastName,
            },
            nickname: {
              set: values.nickname,
            },
            profilePicture: {
              set: values.profilePicture || profilePicture,
            },
            githubUrl: {
              set: values?.githubUrl
                .replace('https://', '')
                .replace('www.', ''),
            },
            linkedinUrl: {
              set: values?.linkedinUrl
                .replace('https://', '')
                .replace('www.', ''),
            },
            twitterUrl: {
              set: values?.twitterUrl
                .replace('https://', '')
                .replace('www.', ''),
            },
            email: { set: values.email },
            about: {
              set: values.about,
            },
          },
        },
        {
          onSuccess: () => {
            refetchCurrentUser()
            setIsLoading(false)
            setOpenModal(false)
            toast.success('Conta atualizada com sucesso!')
          },
        },
      )
    } catch (error) {
      setIsLoading(false)
      toast.error('Não foi possível editar sua conta. Tente novamente!')
    }
  }

  return (
    <Modal isOpen={openModal} onOpenChange={setOpenModal}>
      <ButtonModal>Editar perfil</ButtonModal>

      <ModalBody title="Editar perfil">
        <Form onSubmit={handleSubmit(handleEditProfile)}>
          <Top>
            <div>
              <span>Foto do perfil</span>

              <ImageUploadPhotoWithCrop>
                <UploadPhotoWithCrop
                  setBanner={(value: string) => setProfilePicture(value)}
                  imageUser={currentUser?.profilePicture || profilePicture}
                />
              </ImageUploadPhotoWithCrop>
            </div>
          </Top>

          <Group>
            <Input
              label="Nome *"
              type="text"
              defaultValue={currentUser?.firstName ?? ''}
              error={errors.firstName}
              {...register('firstName')}
            />
            <Input
              label="Sobrenome *"
              type="text"
              defaultValue={currentUser?.lastName ?? ''}
              error={errors.lastName}
              {...register('lastName')}
            />
          </Group>
          <Group>
            <Input
              label="Nickname *"
              type="text"
              defaultValue={currentUser?.nickname ?? ''}
              error={errors.nickname}
              {...register('nickname')}
            />
          </Group>
          <Group>
            <Input
              label="Email *"
              type="text"
              defaultValue={currentUser?.email ?? ''}
              error={errors.email}
              {...register('email')}
            />
          </Group>
          <TextArea
            label="Sobre"
            defaultValue={currentUser?.about ?? ''}
            error={errors.about}
            {...register('about')}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <h4>Links</h4>
            <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
              <Group>
                <Input
                  label="Github"
                  type="text"
                  defaultValue={currentUser?.githubUrl ?? ''}
                  error={errors.githubUrl}
                  {...register('githubUrl')}
                />
              </Group>
              <Group>
                <Input
                  label="Linkedin"
                  type="text"
                  defaultValue={currentUser?.linkedinUrl ?? ''}
                  error={errors.linkedinUrl}
                  {...register('linkedinUrl')}
                />
              </Group>
              <Group>
                <Input
                  label="Twitter"
                  type="text"
                  defaultValue={currentUser?.twitterUrl ?? ''}
                  error={errors.twitterUrl}
                  {...register('twitterUrl')}
                />
              </Group>
            </div>
          </div>

          <Button isLoading={isLoading}>Salvar mudanças</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}
