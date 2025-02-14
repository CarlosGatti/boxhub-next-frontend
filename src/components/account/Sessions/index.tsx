import { Container, Content, Group, Wrapper } from './styled'

// import { CommunitiesList } from './components/GroupList/GroupList'
import { MeDto } from '../../../generated/graphql'
import { Tabs } from '../../../components/_ui/Tabs'
import { useState } from 'react'

interface Profile {
  user: MeDto | undefined
}

export const SessionProfile = ({ user }: Profile) => {
  const [currentValueTabs, setCurrentValueTabs] = useState('')

  const updateTabCheck = (e: string) => {
    setCurrentValueTabs(e)
  }
  return (
    <Container>
      <Wrapper>
        <Content>
          <Tabs
            // style={{ width: '100%', alignItems: 'center' }}
            labelTabs={[
              'Communities I manage',
              'Communities that I participate',
            ]}
            checkLabelTab={'Communities I manage'}
            currentTabCheck={updateTabCheck}
          />
          <Group>
            {(() => {
              switch (currentValueTabs) {
                case 'Communities I manage':
                  return (
                    <>
                      {/* <CommunitiesList
                        adminCommunities={user?.adminCommunities}
                      /> */}
                    </>
                  )
                case 'Communities that I participate':
                  return (
                    <>
                      {/* <CommunitiesList
                        memberCommunities={user?.memberCommunities}
                      /> */}
                    </>
                  )
                default:
                  return null
              }
            })()}
          </Group>
        </Content>
      </Wrapper>
    </Container>
  )
}
