import * as yup from 'yup'

import { Container, Form, SignUp, TitleForm } from '../../../styles/login'
import { GetServerSideProps, NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AllRightsReserved } from '../../../components/account/AllRightsReserved'
import { Button } from '../../../components/_ui/Button'
import Image from 'next/image'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { MainLayout } from '../../../layouts/MainLayout'
import { parseCookies } from 'nookies'
import { useAuth } from '../../../hooks'
import { yupResolver } from '@hookform/resolvers/yup'

interface LoginData {
  email: string
  password: string
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(5, 'Senha contem pelo menos 8 dígitos'),
})

const Login: NextPage = () => {
  const { login, isLoadingLogin } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin: SubmitHandler<LoginData> = (values) => {
    login(values)
  }

  return (
    <MainLayout
      headTitle="BoxHub | Login"
      metaName="description"
      metaContent="fazer login"
    >
      <Container>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <TitleForm>
            <Image
              width={150}
              height={150}
              className="mb-4"
              src="/image/brand/rh-blue.png"
              alt="icone BoxHub"
            />
          </TitleForm>
          <Input
            placeholder="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            type="password"
            placeholder="Senha"
            {...register('password')}
            error={errors.password}
          />
          <Button type="submit" isLoading={isLoadingLogin}>
            Sign in
          </Button>
          <SignUp>
            <p>Don't have an account?</p>
            <Link href="/account/create">Create an account</Link>
          </SignUp>
        </Form>
        <AllRightsReserved style={{ marginTop: 40 }} />
      </Container>
    </MainLayout>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@token': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/qrcode-app/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
