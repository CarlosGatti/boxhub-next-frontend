import * as yup from 'yup'

import {
  Back,
  Container,
  Description,
  Form,
  HeaderSimpleWrapper,
  HeaderWrapper,
  ImageUploadPhoto,
  ServiceTerms,
  Title,
  TwoColumn,
  WrapperForm,
  WrapperStep,
} from '../../../styles/signup'
import {
  UserCreateInput,
  useCreateUserMutation,
} from '../../../generated/graphql'

import { AllRightsReserved } from '../../../components/account/AllRightsReserved'
import { Button } from '../../../components/_ui/Button'
import { HorizontalDivider } from '../../../components/_ui/Divider'
import Image from 'next/image'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { MainLayout } from '../../../layouts/MainLayout'
import { ModalServiceTerms } from '../../../components/account/ModalServiceTerms'
import { NextPage } from 'next'
import { UploadPhotoWithCrop } from '../../../components/_ui/UploadPhotoWithCrop'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../lib/imgBB'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

interface StepsProps {
  id: string
  title: string
  description: string
}

const createUserSchema = yup.object().shape({
  firstName: yup.string().required('Nome obrigatório'),
  lastName: yup.string().required('Sobrenome obrigatório'),
  nickname: yup.string().required('Nome de usuário obrigatório'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas não conferem'),
})

const CreateUser: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(createUserSchema),
  })

  const { mutate: _createUser } = useCreateUserMutation(graphqlRequestClient)

  const router = useRouter()

  const [profilePicture, setProfilePicture] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<StepsProps>({
    id: 'form',
    title: 'Register',
    description: 'Its fast and easy',
  })

  const createUser = async (
    values: UserCreateInput & { passwordConfirmation: string | undefined },
  ) => {
    delete values.passwordConfirmation

    if (step.id === 'uploadPhoto') {
      const newImage = ''

      if (profilePicture) {
        // const response = await uploadImages(profilePicture)
        //  newImage = response.data.data.display_url
      }

      await _createUser(
        {
          data: {
            ...values,
            public: true,
            profilePicture: newImage || '',
          },
        },
        {
          onSuccess(data) {
            if (data.createUser?.id) {
              router.push('/account/login')
              toast.success('Account successfully created!')
              setIsLoading(false)
            } else {
              toast.error('Unable to create your account! Try again.')
              setIsLoading(false)
            }
          },
        },
      )
      setIsLoading(false)
    }
    setStep({
      id: 'uploadPhoto',
      title: 'Foto de perfil',
      description: 'Escolha uma foto para usar',
    })
  }

  return (
    <MainLayout
      headTitle="BoxHub | Register"
      metaName="description"
      metaContent="register an account"
    >
      <HeaderWrapper>
        <HeaderSimpleWrapper>
          <Image
            src="/image/brand/rh-blue.png"
            width={150}
            height={70}
            alt="Logo da BoxHub - CSA"
          />
        </HeaderSimpleWrapper>
      </HeaderWrapper>
      <Container>
        <WrapperForm>
          <Title>{step.title}</Title>
          <Description>{step.description}</Description>
          <Form onSubmit={handleSubmit(createUser)}>
            {step.id === 'form' && (
              <WrapperStep>
                <TwoColumn>
                  <Input
                    placeholder="First name"
                    error={errors.firstName}
                    {...register('firstName')}
                  />
                  <Input
                    placeholder="Last name"
                    {...register('lastName')}
                    error={errors.lastName}
                  />
                </TwoColumn>
                <Input
                  placeholder="E-mail"
                  {...register('email')}
                  error={errors.email}
                />
                <Input
                  placeholder="User name"
                  {...register('nickname')}
                  error={errors.nickname}
                />
                <HorizontalDivider style={{ marginBottom: 23 }} />
                <Input
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                  error={errors.password}
                />
                <Input
                  type="password"
                  placeholder="Confirm password"
                  {...register('passwordConfirmation')}
                  error={errors.passwordConfirmation}
                />

                <ServiceTerms>
                  <ModalServiceTerms />
                </ServiceTerms>

                <Button buttonStyle={{ width: '100%' }}>Proxímo</Button>
                <Link href="/account/login">
                  <Back>Back to login</Back>
                </Link>
              </WrapperStep>
            )}
            {step.id === 'uploadPhoto' && (
              <WrapperStep>
                <ImageUploadPhoto>
                  <div>
                    <UploadPhotoWithCrop
                      imageUser={profilePicture}
                      setBanner={(value: string) => setProfilePicture(value)}
                    />
                  </div>
                </ImageUploadPhoto>
                <Button type="submit" isLoading={isLoading}>
                  Save and continue
                </Button>
              </WrapperStep>
            )}
          </Form>
        </WrapperForm>

        <AllRightsReserved style={{ marginTop: 40 }} />
      </Container>
    </MainLayout>
  )
}
export default CreateUser
