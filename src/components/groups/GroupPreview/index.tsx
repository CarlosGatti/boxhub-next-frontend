import {
  AdminInformation,
  Container,
  ContainerButton,
  Content,
  ContentBannerImg,
  ContentBannerSvg,
  ContentImgGrupo,
  GroupDetails,
  GroupInformation,
  GroupParticipants,
  ImgBanner,
  Information,
} from './styles'

import { BsImage } from 'react-icons/bs'
import Image from 'next/image'
import { Tabs } from '../../../components/_ui/Tabs'

interface GroupPreviewProps {
  title: string
  name?: string
  coverPhoto?: string
  profilePhoto?: string
  memberNumber: number
  groupAdminName: string
  groupAdminPicture?: string
  ImgGroup?: React.ReactNode
  typePreview: 'CreateCommunity' | 'CreateGroup'
}

export const GroupPreview = ({
  title,
  name,
  coverPhoto,
  profilePhoto,
  memberNumber = 0,
  groupAdminName,
  groupAdminPicture,
}: GroupPreviewProps) => {
  // const [selectView, setSelectView] = useState('feed')
  // const [currentValueTabs, setCurrentValueTabs] = useState('')

  // const changView = (value: string) => {
  //   setSelectView(value)
  // }

  const updateTabCheck = (e: string) => {
    // setCurrentValueTabs(e)
  }
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        {coverPhoto ? (
          <ContentBannerImg>
            <ImgBanner>
              <Image width={1000} height={300} src={coverPhoto} alt="banner" />
            </ImgBanner>
          </ContentBannerImg>
        ) : (
          <ContentBannerSvg>
            <BsImage />
          </ContentBannerSvg>
        )}

        <GroupInformation>
          <Information>
            <ContentImgGrupo>
              {profilePhoto ? (
                <Image
                  src={profilePhoto}
                  width={160}
                  height={160}
                  alt="foto perfil"
                />
              ) : (
                <BsImage />
              )}
            </ContentImgGrupo>
            <GroupDetails>
              <h1>{name}</h1>
              <GroupParticipants>
                <h1>Group privacy</h1>
                <h1>{memberNumber} members</h1>
              </GroupParticipants>
              {groupAdminName && (
                <AdminInformation>
                  <Image
                    width={24}
                    height={24}
                    alt="Avatar do Admin"
                    src={groupAdminPicture ?? '/image/mockups/avatar.svg'}
                  />
                  <h1>{groupAdminName} (adm)</h1>
                </AdminInformation>
              )}
            </GroupDetails>
          </Information>
          <ContainerButton>
            <div>
              <Tabs
                labelTabs={['Feed', 'Members', 'Groups']}
                checkLabelTab={'Feed'}
                currentTabCheck={updateTabCheck}
              />
            </div>
          </ContainerButton>
        </GroupInformation>
      </Content>
    </Container>
  )
}
