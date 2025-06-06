import * as yup from 'yup'

import { useEffect, useState } from 'react'
import { useMeQuery, useUpdateUserMutation } from '../../../generated/graphql'

import { Button } from '../../../components/_ui/Button'
import Image from 'next/image'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { PrivateLayout } from '../../../layouts/PrivateLayout'
import { UploadPhotoWithCrop } from '../../../components/_ui/UploadPhotoWithCrop'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'

const editUserSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  nickname: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
})

export default function EditUserPage() {
  const router = useRouter()
  const [profilePicture, setProfilePicture] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { data, refetch } = useMeQuery(graphqlRequestClient)
  const { mutate: updateUser } = useUpdateUserMutation(graphqlRequestClient)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserSchema),
    mode: 'onBlur',
  })

  useEffect(() => {
    if (data?.me) {
      const user = data.me
      setValue('firstName', user.firstName)
      setValue('lastName', user.lastName)
      setValue('nickname', user.nickname || '')
      setValue('email', user.email)
      setProfilePicture(user.profilePicture || '')
    }
  }, [data, setValue])

  const onSubmit = async (values: any) => {
    setIsLoading(true)
    const payload = {
      ...values,
      profilePicture: profilePicture || '',
    }

    updateUser(
      { data: 
        {
          firstName: { set: payload.firstName },
          lastName: { set: payload.lastName },
          nickname: { set: payload.nickname },
          email: { set: payload.email },
          profilePicture: { set: payload.profilePicture },
        }
       },
      {
        onSuccess: () => {
          toast.success('Profile updated successfully!')
          refetch()
          router.push('/account/profile')
          setIsLoading(false)
        },
        onError: () => {
          toast.error('Error updating profile.')
          setIsLoading(false)
        },
      }
    )
  }

  return (
    <PrivateLayout>
         <div className="p-6 bg-white rounded-lg shadow-md max-w-md ">
    
        <h1 className="text-3xl font-semibold text-center mb-2">
          Edit your profile
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Keep your information up to date.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


          <UploadPhotoWithCrop
            imageUser={profilePicture}
            setBanner={(value: string) => setProfilePicture(value)}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First Name" {...register('firstName')} error={errors.firstName} />
            <Input placeholder="Last Name" {...register('lastName')} error={errors.lastName} />
          </div>
          <Input placeholder="Email" {...register('email')} error={errors.email} />
          <Input placeholder="Username" {...register('nickname')} error={errors.nickname} />


          <Button type="submit" isLoading={isLoading} className="w-full">
            Save changes
          </Button>

        </form>
      </div>
    </PrivateLayout>
  )
}
