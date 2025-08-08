import * as yup from 'yup'

import { Button } from '../../../components/_ui/Button'
import { EmailAvailableDocument } from '../../../generated/graphql'
import Image from 'next/image'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { ModalServiceTerms } from '../../../components/account/ModalServiceTerms'
import { PublicLayout } from '../../../layouts/PublicLayout'
import { UploadPhotoWithCrop } from '../../../components/_ui/UploadPhotoWithCrop'
import { graphqlRequestClient } from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useCreateUserMutation } from '../../../generated/graphql'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

const createUserSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  nickname: yup.string().required('Username is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .test(
      'email-available',
      'This email is already in use',
      async function (value) {
        if (!value) return false
        try {
          const response = await graphqlRequestClient.request(
            EmailAvailableDocument,
            { email: value }
          )
          const { emailAvailable } = response as { emailAvailable: boolean }

          if (!emailAvailable) {
            return this.createError({ message: 'This email is already in use' })
          }

          return true
        } catch (error) {
          return this.createError({ message: 'Could not validate email' })
        }
      }
    )
  ,
  password: yup.string().required('Password is required').min(6, 'Min. 6 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
})

export default function RegisterPage() {
  const [step, setStep] = useState<'form' | 'uploadPhoto'>('form')
  const [profilePicture, setProfilePicture] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createUserSchema),
    mode: 'onBlur',
  })

  const { mutate: createUser } = useCreateUserMutation(graphqlRequestClient)

  const onSubmit = async (values: any) => {
    if (step === 'form') {
      setStep('uploadPhoto')
      return
    }

    setIsLoading(true)
    const payload = {
      ...values,
      profilePicture: profilePicture || '',
      public: true
    }
    delete payload.passwordConfirmation

    createUser(
      { data: payload },
      {
        onSuccess: (data) => {
          if (data.createUser?.id) {
            toast.success('Account created successfully!')

            const redirect = router.query.redirect

            if (redirect === 'paid') {
              setIsRedirecting(true)
              setTimeout(() => {
                router.push('https://boxhub.lemonsqueezy.com/buy/9bd599bf-e31b-4c81-abbc-bed560e0a6d3')
              }, 2000)
            } else {
              router.push('/account/login')
            }

          } else {
            toast.error('Error creating account.')
          }
          setIsLoading(false)
        },
        onError: () => {
          toast.error('Something went wrong.')
          setIsLoading(false)
        }
      }
    )
  }

  return (
    <PublicLayout>
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="flex justify-center mb-6">
          <Image
            src="/image/brand/pires-logo.png"
            alt="BoxHub logo"
            width={120}
            height={60}
            className="grayscale transition duration-300 hover:grayscale-0"
          />
        </div>
        <h1 className="text-3xl font-semibold text-center mb-2">
          {step === 'form' ? 'Create your account' : 'Upload your photo'}
        </h1>
        <p className="text-gray-600 text-center mb-6">
          {step === 'form' ? "It's fast and easy." : 'Choose a profile picture.'}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 'form' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" {...register('firstName')} error={errors.firstName} />
                <Input placeholder="Last Name" {...register('lastName')} error={errors.lastName} />
              </div>
              <Input placeholder="Email" {...register('email')} error={errors.email} />

              <Input placeholder="Username" {...register('nickname')} error={errors.nickname} />
              <Input type="password" placeholder="Password" {...register('password')} error={errors.password} />
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register('passwordConfirmation')}
                error={errors.passwordConfirmation}
              />

              <div className="text-sm text-gray-600">
                <ModalServiceTerms />
              </div>

              <Button className="w-full">Next</Button>
              <Link href="/account/login" className="block text-center text-blue-600 hover:underline">
                Back to login
              </Link>
            </>
          )}

          {step === 'uploadPhoto' && (
            <div className="space-y-6">
              <UploadPhotoWithCrop
                imageUser={profilePicture}
                setBanner={(value: string) => setProfilePicture(value)}
              />
              <Button type="submit" isLoading={isLoading} className="w-full">
                Save and continue
              </Button>

              {isRedirecting && (
                <div className="mt-6">
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                    <span className="text-sm text-gray-600">Redirecting to checkout...</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>

    </PublicLayout>


  )
}
