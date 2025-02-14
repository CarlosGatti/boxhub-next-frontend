import {
  AddCover,
  AddPhoto,
  ButtonCreatePublication,
  Caption,
  Container,
  ContainerAboutGroup,
  ContainerAddPhoto,
  ContainerCover,
  ContainerOption,
  ContainerOptionPrivacy,
  ContainerTextArea,
  GroupView,
  Line,
  SideBarCreateGroup,
  Wrapper,
  WrapperAttach,
} from '../../styles/createGroup'
import { useEffect, useState } from 'react'

import { BsImage } from 'react-icons/bs'
import { Button } from '../../components/_ui/Button'
import { Checkbox } from '../../components/_ui/Checkbox'
import { GroupPreview } from '../../components/groups/GroupPreview'
import { Header } from '../../components/_ui/Header'
import { Input } from '../../components/_ui/Input/textInput'
import { MainLayout } from '../../layouts/MainLayout'
import { NextPage } from 'next'
import { ProgressBar } from '../../components/groups/ProgressBar'
import { useDropzone } from 'react-dropzone'

const CreateGroups: NextPage = () => {
  const [stepGroup, setStepGroup] = useState('groupData')
  const [files, setFiles] = useState<File[]>([])

  const handleAttach = () => {}

  const { getRootProps, getInputProps } = useDropzone({
    // accept: "image/*",
    onDrop: (acceptedFiles: File[]) => {
      Array.prototype.push.apply(acceptedFiles, files)
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  useEffect(() => {
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const GroupData = () => {
    return (
      <>
        <ProgressBar percentage={20} />
        <Caption>Dados do grupo</Caption>
        <Input label="Nome do grupo" />
        <ContainerTextArea>
          <p>Descrição do grupo</p>
          <textarea placeholder="Digite a descrição do grupo" name="comment" />
        </ContainerTextArea>
        <Input label="Convidar amigos (opicional) " />
        <Button onClick={() => setStepGroup('privacySettingI')}>Próximo</Button>
      </>
    )
  }

  const PrivacySettingI = () => {
    return (
      <>
        <ProgressBar percentage={40} />
        <Caption>Privacy settings</Caption>
        <ContainerOption>
          <Checkbox label="Grupo público" type="checkbox" />
          <p>- Any site member can join this group.</p>
          <p>
            - This group will be listed in the group directory and in the search results.
            search.
          </p>
          <p>
            - Group content and activity will be visible to anyone
            site member.
          </p>
        </ContainerOption>
        <ContainerOption>
          <Checkbox label="Grupo privado" type="checkbox" />
          <p>
            - Only people who apply for membership and are accepted
            can join the group.
          </p>
          <p>
            - This group will be listed in the group directory and in the search results.
            search.
          </p>
          <p>
            - Group content and activity will only be visible to members
            Group members.
          </p>
        </ContainerOption>
        <ContainerOption>
          <Checkbox label="Grupo oculto" type="checkbox" />
          <p>
            - Only people who apply for membership and are accepted
            can join the group.
          </p>
          <p>
            - This group will be listed in the group directory and in the search results.
            search.
          </p>
          <p>
            - Group content and activity will only be visible to members
            Group members.
          </p>
        </ContainerOption>
        <Button onClick={() => setStepGroup('privacySettingII')}>
          Next
        </Button>
      </>
    )
  }

  const PrivacySettingII = () => {
    return (
      <>
        <ProgressBar percentage={60} />
        <Caption>Privacy settings</Caption>
        <ContainerOptionPrivacy>
          <h1>Which members can invite others?</h1>
          <Checkbox label="Todos os membros" fontWeight={500} type="checkbox" />
          <Checkbox
            label="Somente moderadores"
            fontWeight={500}
            type="checkbox"
          />
          <Line />
        </ContainerOptionPrivacy>

        <ContainerOptionPrivacy>
          <h1>Which members can post to the feed?</h1>
          <Checkbox label="Todos os membros" fontWeight={500} type="checkbox" />
          <Checkbox
            label="Somente moderadores"
            fontWeight={500}
            type="checkbox"
          />
          <Line />
        </ContainerOptionPrivacy>
        <ContainerOptionPrivacy>
          <h1>Which members can post photos?</h1>
          <Checkbox label="Todos os membros" fontWeight={500} type="checkbox" />
          <Checkbox
            label="Somente moderadores"
            fontWeight={500}
            type="checkbox"
          />
        </ContainerOptionPrivacy>
        <Button onClick={() => setStepGroup('addPhotos')}>Próximo</Button>
      </>
    )
  }

  const AddPhotos = () => {
    return (
      <>
        <ProgressBar percentage={80} />
        <Caption>Add photo</Caption>
        <ContainerAddPhoto>
          <AddPhoto>
            <div>
              <BsImage />
            </div>
          </AddPhoto>
          <WrapperAttach>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button
                onClick={() => handleAttach('Add photo')}
                typeButton="tertiary"
              >
                Adicionar foto
              </Button>
            </div>
          </WrapperAttach>
          <div>
            <h2>Recommendations for the photo</h2>
            <p>- Supported formats: .png, .jpeg, .jpg</p>
            <p>- Maximum size supported: 10mb</p>
          </div>
        </ContainerAddPhoto>

        <ContainerCover>
          <h1>Add cover</h1>
          <AddCover>
            <div>
              <BsImage />
            </div>
          </AddCover>
          <WrapperAttach>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button
                onClick={() => handleAttach('Add photos')}
                typeButton="tertiary"
              >
                Add photo
              </Button>
            </div>
          </WrapperAttach>

          <div>
            <h2>Recommendations for the photo</h2>
            <p>- Supported formats: .png, .jpeg, .jpg</p>
            <p>- Suggested resolution: 1800 x 600px</p>
            <p>- Maximum supported size: 10mb</p>
          </div>
        </ContainerCover>
        <Button>Create</Button>
      </>
    )
  }

  const StepCreateGroup = () => {
    if (stepGroup === 'groupData') {
      return (
        <SideBarCreateGroup title="Create group">
          <GroupData />
        </SideBarCreateGroup>
      )
    }

    if (stepGroup === 'privacySettingI') {
      return (
        <SideBarCreateGroup title="Create group">
          <PrivacySettingI />
        </SideBarCreateGroup>
      )
    }

    if (stepGroup === 'privacySettingII') {
      return (
        <SideBarCreateGroup title="Create group">
          <PrivacySettingII />
        </SideBarCreateGroup>
      )
    }

    if (stepGroup === 'addPhotos') {
      return (
        <SideBarCreateGroup title="Create group">
          <AddPhotos />
        </SideBarCreateGroup>
      )
    }

    return <></>
  }

  return (
    <MainLayout
      headTitle="BoxHub | Create group"
      metaName="description"
      metaContent="feed"
    >
      <Container>
        <Header />
        <Wrapper>
          <StepCreateGroup />
          <div style={{ width: 'min(873px, 100%)' }}>
            <GroupPreview
              title="Prévia do grupo"
              groupAdminName="Carlos Silva"
              memberNumber={90}
              typePreview="CreateGroup"
            />
            <GroupView>
              <SideBarCreateGroup title="Sobre">
                <ContainerAboutGroup>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus laoreet interdum elit, non urna. Nulla nunc tortor,
                    nisi phasellus. Nunc posuere posuere fermentum sit et
                    malesuada hac arcu.
                  </p>
                </ContainerAboutGroup>
              </SideBarCreateGroup>
              <ButtonCreatePublication
              // onClick={() => setCardCreatePublication(true)}
              >
                Hello what do you tell us today?
              </ButtonCreatePublication>
            </GroupView>
          </div>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}

export default CreateGroups
