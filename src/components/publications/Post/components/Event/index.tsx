import {
  BannerContainer,
  Container,
  ContainerDate,
  ContainerInfoEvent,
  Description,
  SeeEventButton,
  Title,
} from './styles'

import Image from 'next/image'
import React from 'react'
import { TimelineQuery } from '../../../../../generated/graphql'
import moment from 'moment'

interface EventProps {
  publication: TimelineQuery['timeline']['publications'][number]
}

export function Event({ publication }: EventProps) {
  const date = moment(publication.post.event?.startDate)

  const day = moment(date).format('DD')
  const month = moment(date).format('MMM')

  return (
    <Container>
      {publication.post?.event?.banner && (
        <BannerContainer>
          <Image
            alt="Banner do evento"
            src={publication.post?.event?.banner ?? ''}
            fill
            className="image"
          />
        </BannerContainer>
      )}
      <ContainerDate>
        <div>
          <p>{day}</p>
          <p style={{ textTransform: 'capitalize' }}>{month}</p>
        </div>
      </ContainerDate>
      <ContainerInfoEvent>
        <Title>{publication.post.event?.title}</Title>
        <Description>{publication.post.event?.description}</Description>
        <div>
          <SeeEventButton>Ver evento</SeeEventButton>
        </div>
      </ContainerInfoEvent>
    </Container>
  )
}
