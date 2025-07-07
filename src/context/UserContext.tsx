/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { createContext } from 'react'

interface UserContextProps {
  followOrUnfollowUser?: ({
    idUser,
    idFollowUser,
    message,
  }: unfollowUserProps) => void

  updateProfilePicture?: ({
    profilePicture,
    idUser,
  }: updateProfilePictureProps) => void

  connectCommunity?: (idCommunity: number) => void
}

interface unfollowUserProps {
  idUser: string | null | undefined
  idFollowUser: string | null | undefined
  message: string | null | undefined
}

interface updateProfilePictureProps {
  profilePicture: string
  idUser: number
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
)

// provider
export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
 
 

  return (
    <UserContext.Provider
      value={{
      
        updateProfilePicture: undefined,


      }}
    >
      {children}
    </UserContext.Provider>
  )
}
