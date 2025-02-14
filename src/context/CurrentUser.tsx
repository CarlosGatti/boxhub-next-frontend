/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { MeQuery, useMeQuery } from '../generated/graphql'
import React, { createContext } from 'react'

import graphqlRequestClient from '../lib/graphql.request'
import { parseCookies } from 'nookies'

interface CurrentUserContextProps {
  currentUser: MeQuery['me'] | undefined
  refetchCurrentUser: () => void
}

const CurrentUserContext = createContext<CurrentUserContextProps>(
  {} as CurrentUserContextProps,
)

export const CurrentUserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { '@token': token } = parseCookies()

  const { data, refetch } = useMeQuery(
    graphqlRequestClient,
    {},
    {
      enabled: !!token,
    },
  )

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: data?.me,
        refetchCurrentUser: refetch,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => {
  const context = React.useContext(CurrentUserContext)

  return context
}

export default CurrentUserContext
