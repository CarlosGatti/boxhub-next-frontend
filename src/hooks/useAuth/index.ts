import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  // Destructure the context to get the values you need
  const { login, logout } = context
  // Return the values you need
  return {
    login,
    logout,
  }
}

