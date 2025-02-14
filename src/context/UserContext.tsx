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
  // const { refetch } = useUserFollowsQuery(graphqlRequestClient, {
  //   id: Number(currentUser),
  // })

  // const { mutate: _useFollowOrUnfollowUserMutation } =
  //   useFollowOrUnfollowUserMutation(graphqlRequestClient)

  // const { mutate: _updateProfilePicture } =
  //   useUpdateProfilePictureMutation(graphqlRequestClient)

  // const { mutateAsync: _connectCommunity } =
  //   useJoinOrUnjoinCommunityMutation(graphqlRequestClient)

  /*  const { mutate: _follow } = useFollowUserMutation(graphqlRequestClient) */

  // const { mutate: _updateProfile, isLoading: loadingUpdateProfile } =
  //   useUpdateUserMutation(graphqlRequestClient)

  // const updateProfile = async (
  //   data: UserUpdateInput,
  //   where: UserWhereUniqueInput,
  // ) => {
  //   await _updateProfile(
  //     {
  //       data,
  //       where,
  //     },
  //     {
  //       onSuccess(data) {
  //         if (data.updateUser) {
  //           toast.success('Perfil editado com suceso!')
  //           refetchCurrentUser()
  //         } else {
  //           toast.error('Erro ao salvar. Tente novamente!')
  //         }
  //       },
  //     },
  //   )
  // }

  // const updateProfilePicture = async ({
  //   profilePicture,
  //   idUser,
  // }: updateProfilePictureProps) => {
  //   await uploadImages(profilePicture).then((res) => {
  //     _updateProfilePicture(
  //       {
  //         id: Number(idUser),
  //         profile_picture: res.data.url,
  //       },
  //       {
  //         onSuccess(data) {
  //           if (data.update_user_by_pk?.id) {
  //             /* toast.success('Post criado com sucesso!') */
  //           }
  //         },
  //       },
  //     )
  //   })
  // }
  // const followOrUnfollowUser = ({
  //   idUser,
  //   idFollowUser,
  //   message,
  // }: unfollowUserProps) => {
  //   _useFollowOrUnfollowUserMutation(
  //     { id_user: Number(idUser), id_follow_user: Number(idFollowUser) },
  //     {
  //       onSuccess(data) {
  //         if (data) {
  //           /* refetchCurrentUser() */
  //           toast.success(` ${message}.`)
  //           refetch()
  //         } else {
  //           toast.error(`Erro. Tente novamente!`)
  //         }
  //       },
  //     },
  //   )
  // }

  // const connectCommunity = (idCommunity: number) => {
  //   _connectCommunity(
  //     {
  //       id_user: Number(currentUser),
  //       id_community: Number(idCommunity) ?? '',
  //     },
  //     {
  //       onSuccess(data) {
  //         if (data.joinOrUnjoinCommunity?.success) {
  //           console.log('deu bom')
  //         } else {
  //           console.log('error')
  //         }
  //       },
  //     },
  //   )
  // }

  /*  const followUser = ({ id, name }: Props) => {
    _follow(
      { followingId: Number(id) },
      {
        async onSuccess(data) {
          if (data.followUser) {
            await refetchCurrentUser()
            toast.success(`Você seguiu o usuário ${name}.`)
          } else {
            toast.error(`Erro ao seguir o usuário ${name}. Tente novamente!`)
          }
        },
      },
    )
  } */

  return (
    <UserContext.Provider
      value={{
        /* currentUser: data?.me,
        refetchCurrentUser,
        followUser, */
        followOrUnfollowUser: undefined,
        updateProfilePicture: undefined,
        connectCommunity: undefined,
        // loadingUpdateProfile,
        // updateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
