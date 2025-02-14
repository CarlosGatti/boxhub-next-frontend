import {
  Card,
  Container,
  ImageCard,
  Title,
  TitleCard,
  WrapperCard,
} from '../../styles/onboarding'
import { HeaderSimpleWrapper, HeaderWrapper } from '../../styles/signup'

import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { NextPage } from 'next'

const Onboarding: NextPage = () => {
  return (
    <MainLayout
      headTitle="BoxHub | Cadastrar"
      metaName="description"
      metaContent="cadastrar uma conta"
    >
      <HeaderWrapper>
        <HeaderSimpleWrapper>
          <Image
            src="/image/brand/brand-blue.png"
            width={250}
            height={55}
            alt="Logo da BoxHub"
          />
        </HeaderSimpleWrapper>
      </HeaderWrapper>
      <Container>
        <Title>
          <h1>Let's start!</h1>
          <span>Choose how you want to start your journey</span>
        </Title>
        <WrapperCard>
          <Link href="/community">
            <Card>
              <ImageCard>
                <Image
                  src="/image/group1.png"
                  width={361}
                  height={262}
                  alt="pessoas trabalhando em grupo"
                />
              </ImageCard>
              <TitleCard>
                <h3>Create your community</h3>
                <span>
                  Following a simple step by step, we will help you to create
                  your community
                </span>
              </TitleCard>
            </Card>
          </Link>
          <Link href="/community/create">
            <Card>
              <ImageCard>
                <Image
                  src="/image/group2.png"
                  width={361}
                  height={262}
                  alt="pessoas se divertindo em grupo"
                />
              </ImageCard>
              <TitleCard>
                <h3>create your community</h3>
                <span>
                  Following a simple step by step, we will help you to create
                  your community
                </span>
              </TitleCard>
            </Card>
          </Link>
        </WrapperCard>
      </Container>
    </MainLayout>
  )
}
export default Onboarding
