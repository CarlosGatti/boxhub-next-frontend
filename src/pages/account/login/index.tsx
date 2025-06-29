import * as yup from 'yup'

import { GetServerSideProps, NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AllRightsReserved } from '../../../components/account/AllRightsReserved'
import { Button } from '../../../components/_ui/Button'
import Image from 'next/image'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { PublicLayout } from '../../../layouts/PublicLayout'
import { parseCookies } from 'nookies'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks'
import { yupResolver } from '@hookform/resolvers/yup'

interface LoginData {
  email: string
  password: string
}

const loginSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: yup.string().required('Senha obrigatória').min(5, 'Mínimo 5 caracteres'),
})

const LoginPage: NextPage = () => {
  const { login, isLoadingLogin } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema)
  })

  const handleLogin: SubmitHandler<LoginData> = async (values) => {
    try {
      await login(values)
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Erro ao fazer login')
    }
  }

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto py-12 px-6">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image
              src="/image/brand/rh-blue.png"
              alt="BoxHub logo"
              width={120}
              height={60}
              className="grayscale transition duration-300 hover:grayscale-0"
            />
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">Sign in to BoxHub</h1>
        <p className="text-sm text-gray-600 text-center mb-8">Enter your credentials to access your account</p>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
          <Input
            placeholder="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <div>
          <Input
            type="password"
            placeholder="Password"
            error={errors.password}
            {...register('password')}
          />
          
          <div className="text-right text-sm">
            <Link href="/account/forgot-password" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
          </div>
          <Button type="submit" isLoading={isLoadingLogin} className="w-full">
            Sign in
          </Button>
          
        </form>

        <div className="text-center text-sm text-gray-700 mt-4">
          Don’t have an account?{' '}
          <Link href="/account/create" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </div>
{/* 
        <div className="mt-10">
          <AllRightsReserved />
        </div> */}
      </div>
    </PublicLayout>
  )
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@token': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/qrcode-app/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
