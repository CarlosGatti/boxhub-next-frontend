/* eslint-disable @typescript-eslint/consistent-type-assertions */

import {
  CreatePublicationMutation,
  Exact,
  FollowUserMutation,
  PublicationCreateArgs,
  UnfollowUserMutation,
  useCreatePublicationMutation,
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../generated/graphql'
import React, { createContext } from 'react'

import { UseMutateFunction } from 'react-query'
import graphqlRequestClient from '../lib/graphql.request'

interface UserActionsContextProps {
  createPub: UseMutateFunction<
    CreatePublicationMutation,
    unknown,
    Exact<{
      data: PublicationCreateArgs
    }>,
    unknown
  >
  follow: UseMutateFunction<
    FollowUserMutation,
    unknown,
    Exact<{
      followedId: number
    }>,
    unknown
  >
  unfollow: UseMutateFunction<
    UnfollowUserMutation,
    unknown,
    Exact<{
      followedId: number
    }>,
    unknown
  >
}

const UserActionsContext = createContext<UserActionsContextProps>(
  {} as UserActionsContextProps,
)

export const UserActionsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { mutate: createPub } =
    useCreatePublicationMutation(graphqlRequestClient)

  const { mutate: follow } = useFollowUserMutation(graphqlRequestClient)
  const { mutate: unfollow } = useUnfollowUserMutation(graphqlRequestClient)

  return (
    <UserActionsContext.Provider value={{ createPub, follow, unfollow }}>
      {children}
    </UserActionsContext.Provider>
  )
}

export const useUserActions = () => {
  const context = React.useContext(UserActionsContext)

  return context
}

export default UserActionsContext
