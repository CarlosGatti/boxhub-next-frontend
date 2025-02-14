import * as yup from 'yup'

import {
  Back,
  Container,
  Description,
  Form,
  SentEmail,
  Title,
  WrapperForm,
} from '../../../styles/forgotPassword'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AiFillCheckCircle } from 'react-icons/ai'
import { AllRightsReserved } from '../../../components/account/AllRightsReserved'
import { Button } from '../../../components/_ui/Button'
import { Input } from '../../../components/_ui/Input/textInput'
import Link from 'next/link'
import { MainLayout } from '../../../layouts/MainLayout'
import { NextPage } from 'next'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

interface ForgotPasswordData {
  email?: string
}

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
})

const ForgotPassword: NextPage = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [valueInput, setValueInput] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  })

  const handleForgotPassword: SubmitHandler<ForgotPasswordData> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setMessageSent(true)
  }

  return (
    <MainLayout
      headTitle="BoxHub | Recuperar senha"
      metaContent="recuperar senha"
      metaName="description"
    >
      <Container>
        <WrapperForm>
          <Title>Esqueceu sua senha?</Title>
          <Form onSubmit={handleSubmit(handleForgotPassword)}>
            <Description>
              Informe o seu email para receber o link de recuperação de senha
            </Description>
            <SentEmail>
              {messageSent && (
                <>
                  <AiFillCheckCircle color="#66B734" />
                  <p>Link enviado com sucesso!</p>
                </>
              )}
            </SentEmail>
            <Input
              placeholder="E-mail"
              error={errors.email}
              {...register('email')}
              onChange={(e: { target: HTMLInputElement }) =>
                e.target.value.length > 3
                  ? setValueInput(false)
                  : setValueInput(true)
              }
            />

            <Button
              type="submit"
              backgroundColor={valueInput ? '#DDDCDF' : ''}
              labelColor={valueInput ? '#2C3136' : '#fff'}
              buttonStyle={{ width: '100%' }}
              isDisabled={valueInput}
              isLoading={isSubmitting}
            >
              Enviar código
            </Button>
            <Link href="/account/login">
              <Back>voltar para login</Back>
            </Link>
          </Form>
        </WrapperForm>
        <AllRightsReserved style={{ marginTop: 16 }} />
      </Container>
    </MainLayout>
  )
}
export default ForgotPassword
