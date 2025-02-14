/* eslint-disable @typescript-eslint/consistent-type-assertions */

import React, { createContext, useEffect } from 'react'
import { TimelineQuery, useTimelineQuery } from '../generated/graphql'

import graphqlRequestClient from '../lib/graphql.request'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/dist/client/router'

interface TimelineContextProps {
  refetchTimeline: () => void
  timeline: TimelineQuery['timeline'] | undefined
}

const TimelineContext = createContext<TimelineContextProps>(
  {} as TimelineContextProps,
)

export const TimelineProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { '@token': token } = parseCookies()

  const router = useRouter()

  const { id } = router.query

  const { data, refetch: refetchTimeline } = useTimelineQuery(
    graphqlRequestClient,
    {
      filter: {
        communityId: Number(id),
      },
      pagination: {
        take: 10000,
      },
    },
    {
      enabled: (!!token && !!id) || !!token,
    },
  )

  return (
    <TimelineContext.Provider
      value={{
        refetchTimeline,
        timeline: data?.timeline.publications,
      }}
    >
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => {
  const context = React.useContext(TimelineContext)

  return context
}

export default TimelineContext
