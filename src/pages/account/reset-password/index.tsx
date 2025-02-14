import * as yup from 'yup'

import {
  Container,
  Description,
  Form,
  Title,
  WrapperForm,
} from '../../../styles/resetPassword'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AllRightsReserved } from '../../../components/account/AllRightsReserved'
import { Button } from '../../../components/_ui/Button'
import { Input } from '../../../components/_ui/Input/textInput'
import { MainLayout } from '../../../layouts/MainLayout'
import { NextPage } from 'next'
import { yupResolver } from '@hookform/resolvers/yup'

interface ResetPasswordData {
  password?: string
  passwordConfirmation?: string
}

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Mínino 6 caracteres'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não correspondem'),
})

const ResetPassword: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(resetPasswordSchema),
  })

  const handleResetPassword: SubmitHandler<ResetPasswordData> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <MainLayout
      headTitle="BoxHub | Redefinir senha"
      metaName="description"
      metaContent="redefinir senha"
    >
      <Container>
        <WrapperForm>
          <Title>Redefinição de senha</Title>
          <Form onSubmit={handleSubmit(handleResetPassword)}>
            <Description>Preencha corretamente os campos abaixo</Description>
            <Input
              type="password"
              placeholder="Senha"
              error={errors.password}
              {...register('password')}
            />
            <Input
              type="password"
              placeholder="Repetir senha"
              error={errors.passwordConfirmation}
              {...register('passwordConfirmation')}
            />

            <Button
              type="submit"
              buttonStyle={{ width: '100%' }}
              isLoading={isSubmitting}
            >
              Redefinir senha
            </Button>
          </Form>
        </WrapperForm>
        <AllRightsReserved style={{ marginTop: 16 }} />
      </Container>
    </MainLayout>
  )
}
export default ResetPassword
