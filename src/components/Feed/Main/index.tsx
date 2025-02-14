import { ButtonCreatePublication, Container } from './styles'
import { useEffect, useState } from 'react'

import { CreatePublication } from '../../../components/publications/CreatePublication'
import { GetServerSideProps } from 'next'
import { Publication } from '../../../components/publications/Post'
import { PublicationFirstUse } from '../FirstUse'
import { parseCookies } from 'nookies'
import { useCurrentUser } from '../../../context/CurrentUser'
import { useTimeline } from '../../../context/TimelineContext'

export const MainFeed = () => {
  const { currentUser } = useCurrentUser()

  const [cardCreatePublication, setCardCreatePublication] = useState(false)

  const { timeline, refetchTimeline } = useTimeline()

  useEffect(() => {
    refetchTimeline()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {!cardCreatePublication ? (
        <ButtonCreatePublication onClick={() => setCardCreatePublication(true)}>
          <button>What are you thinking today?</button>
        </ButtonCreatePublication>
      ) : (
        <CreatePublication
          currentUser={currentUser}
          cancelPublication={() => setCardCreatePublication(false)}
        />
      )}
      <div className="publicationsContent">
        {timeline?.length === 0 ? (
          <PublicationFirstUse />
        ) : (
          timeline?.map((publication : any) => (
            <Publication
              key={publication.id}
              publication={publication}
              refetchTimeline={refetchTimeline}
            />
          ))
        )}
      </div>
    </Container>
  )
}
