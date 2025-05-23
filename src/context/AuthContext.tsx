import { LoginUserInput, useLoginMutation } from '../generated/graphql'
import React, { createContext } from 'react'
import { destroyCookie, setCookie } from 'nookies'

import graphqlRequestClient from '../lib/graphql.request'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

/* eslint-disable @typescript-eslint/consistent-type-assertions *//* eslint-disable @typescript-eslint/consistent-type-assertions */


interface AuthContextProps {
  isLoadingLogin: boolean
  login: (loginUserInput: LoginUserInput) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const { mutate: _login, isLoading: isLoadingLogin } = useLoginMutation(graphqlRequestClient)

  const logout = () => {
    // destrói o cookie corretamente
    destroyCookie(undefined, '@token', { path: '/' })

    // opcional: limpar estado do usuário se estiver usando CurrentUserContext
    // setCurrentUser(null)

    // redireciona para login
    router.push('/account/login')
  }

  const login = async (data: LoginUserInput) => {
    try {
      await _login(
        { data },
        {
          onSuccess(response) {
            if (response.login?.token) {
              setCookie(undefined, '@token', response.login.token, {
                path: '/', // obrigatório para funcionar globalmente
                maxAge: 60 * 60 * 24 * 3, // 3 dias
              })
              router.push('/qrcode-app/dashboard')
            } else {
              toast.error('Invalid login response: token missing.')
            }
          },
          onError() {
            toast.error('We couldn’t complete this action. Please try again!')
          },
        },
      )
    } catch {
      toast.error('We couldn’t complete this action. Please try again!')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoadingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
