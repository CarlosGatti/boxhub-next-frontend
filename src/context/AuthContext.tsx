/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { LoginUserInput, useLoginMutation } from '../generated/graphql'
import React, { createContext } from 'react'
import { destroyCookie, setCookie } from 'nookies'

import {graphqlRequestClient} from '../lib/graphql.request'
import { queryClient } from '../pages/_app'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface AuthContextProps {
  isLoadingLogin: boolean

  login: (loginUserInput: LoginUserInput) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

// provider
export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { mutate: _login, isLoading: isLoadingLogin } =
    useLoginMutation(graphqlRequestClient)

  const router = useRouter()

  const logout = () => {
    destroyCookie(undefined, '@token', { path: '/' }) 
    localStorage.clear()
    queryClient.removeQueries({ queryKey: ['me'] })
    router.push('/account/login')
  }
  
  const login = async (data: LoginUserInput) => {
    try {
      _login(
        {
          data,
        },
        {
          onSuccess(data) {
            if (data.login.token) {
              setCookie(undefined, '@token', data.login.token, {
                maxAge: 60 * 60 * 24 * 3,
              })
              window.location.href = '/qrcode-app/dashboard'
            }
          },
          onError() {
            toast.error('Não foi possível acessar sua conta! Tente novamente.')
          },
        }
      )
    } catch {
      toast.error('Não foi possível acessar sua conta! Tente novamente.')
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
