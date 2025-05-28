import * as yup from 'yup'

import { AiFillCheckCircle } from 'react-icons/ai'
import { Button } from '../../../components/_ui/Button'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { NextPage } from 'next'
import { PublicLayout } from '../../../layouts/PublicLayout'
import graphqlRequestClient from '../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useRequestPasswordResetMutation } from '../../../generated/graphql'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

interface ForgotPasswordData {
  email?: string
}

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
})

const ForgotPassword: NextPage = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  })

  const { mutate: requestPasswordReset } = useRequestPasswordResetMutation(graphqlRequestClient)

  const handleForgotPassword = async (values: ForgotPasswordData) => {
    requestPasswordReset(
      { email: values.email || '' },
      {
        onSuccess: (data) => {
          if (data?.requestPasswordReset?.success) {
            setMessageSent(true)
          } else {
            toast.error(data?.requestPasswordReset?.message || 'Erro ao enviar o email')
          }
        },
        onError: () => {
          toast.error('Erro ao tentar enviar o email. Tente novamente mais tarde.')
        }
      }
    )
  }

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto py-16 px-4">
        <h1 className="text-3xl font-semibold text-center mb-4 text-gray-900">Forgot your password?</h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your email to receive the password reset link.
        </p>

        {messageSent && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 p-3 rounded-md mb-4 text-sm">
            <AiFillCheckCircle size={20} />
            Link enviado com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className="space-y-2">
            <Input
              placeholder="E-mail"
              error={errors.email}
              {...register('email')}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIsButtonDisabled(e.target.value.length <= 3)
              }
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Button
              type="submit"
              className="w-full"
              isLoading={isSubmitting}
              isDisabled={isButtonDisabled}
            >
              Send code
            </Button>
          </div>
          <Link href="/account/login" className="block text-center text-blue-600 hover:underline text-sm py-4">
            Back to login
          </Link>
        </form>
      </div>
    </PublicLayout>
  )
}

export default ForgotPassword
