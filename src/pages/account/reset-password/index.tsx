import * as yup from 'yup'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '../../../components/_ui/Button'
import { Input } from '../../../components/_ui/Input/textInput'
import { NextPage } from 'next'
import { PublicLayout } from '../../../layouts/PublicLayout'
import {graphqlRequestClient} from '../../../lib/graphql.request'
import { useResetPasswordMutation } from '../../../generated/graphql'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'

interface ResetPasswordData {
  password?: string
  passwordConfirmation?: string
}

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Minimum 6 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
})

const ResetPassword: NextPage = () => {
  const router = useRouter()
  const token = router.query.token as string

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(resetPasswordSchema),
  })

  const { mutateAsync: resetPassword } = useResetPasswordMutation(graphqlRequestClient)

  const handleResetPassword: SubmitHandler<ResetPasswordData> = async (data) => {
    try {
      await resetPassword({
        token,
        password: data.password!,
      })
      alert('Password successfully reset!')
      router.push('/account/login')
    } catch (error) {
      console.error('Error resetting password:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto py-16 px-4">
        <h1 className="text-3xl font-semibold text-center mb-4 text-gray-900">
          Reset your password
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Fill in the fields below to create a new password.
        </p>

        <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-4">
          <Input
            type="password"
            placeholder="New password"
            error={errors.password}
            {...register('password')}
            className="w-full"
          />
          <Input
            type="password"
            placeholder="Confirm password"
            error={errors.passwordConfirmation}
            {...register('passwordConfirmation')}
            className="w-full"
          />

          <Button
            type="submit"
            className="w-full"
            isLoading={isSubmitting}
          >
            Reset Password
          </Button>
        </form>
      </div>
    </PublicLayout>
  )
}

export default ResetPassword
