import * as yup from 'yup'

import { Eye, EyeOff, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { toast } from 'react-toastify'
import { useAuth } from '../../../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { yupResolver } from '@hookform/resolvers/yup'

interface LoginFormData {
  emailOrUser: string
  password: string
  remember?: boolean
}

const loginSchema = yup.object().shape({
  emailOrUser: yup
    .string()
    .required('Email or username is required')
    .min(3, 'Must be at least 3 characters')
    .test('email-or-username', 'Invalid email format', function(value) {
      if (!value) return false
      if (value.includes('@')) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      }
      return true
    }),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  remember: yup.boolean()
})

export function LoginDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const { login } = useAuth()
  const { width } = useWindowSize()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setFocus
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange'
  })

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Close dropdown when screen size changes to mobile
  useEffect(() => {
    if (width < 768 && isOpen) {
      setIsOpen(false)
    }
  }, [width, isOpen])

  // Focus trap
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const focusableElements = dropdownRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault()
              lastElement.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault()
              firstElement.focus()
            }
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      firstElement?.focus()

      return () => {
        document.removeEventListener('keydown', handleTabKey)
      }
    }
  }, [isOpen])

  const handleLoginClick = () => {
    // On mobile, redirect to login page
    if (width < 768) {
      router.push('/account/login')
      return
    }
    
    // On desktop, toggle dropdown
    setIsOpen(!isOpen)
  }

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    
    try {
      // Use existing login function from AuthContext
      await login({
        email: data.emailOrUser.includes('@') ? data.emailOrUser : `${data.emailOrUser}@example.com`, // Fallback for username
        password: data.password
      })
      
      // Success handling is done in AuthContext
      setIsOpen(false)
      reset()
      toast.success('Welcome back!')
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Invalid credentials. Please try again.')
      setFocus('emailOrUser')
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = () => {
    setIsOpen(false)
    router.push('/account/forgot-password')
  }

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={handleLoginClick}
        className="hover:text-primary transition-colors duration-200"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="login-dropdown"
      >
        Login
      </button>

      {/* Dropdown (Desktop only) */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id="login-dropdown"
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-title"
          className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 border border-gray-200 z-50 transform-gpu transition-all duration-150 ease-out animate-in fade-in-0 zoom-in-95"
          style={{
            transformOrigin: 'top right'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 id="login-title" className="text-lg font-semibold text-gray-900">
              Sign in
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close login form"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
            {/* Email/Username Field */}
            <div>
              <label htmlFor="emailOrUser" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Username
              </label>
              <input
                {...register('emailOrUser')}
                type="text"
                id="emailOrUser"
                autoComplete="username"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                  errors.emailOrUser ? 'border-red-300' : 'border-gray-300'
                }`}
                aria-invalid={errors.emailOrUser ? 'true' : 'false'}
                aria-describedby={errors.emailOrUser ? 'emailOrUser-error' : undefined}
              />
              {errors.emailOrUser && (
                <p id="emailOrUser-error" className="mt-1 text-sm text-red-600" aria-live="assertive">
                  {errors.emailOrUser.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1 text-sm text-red-600" aria-live="assertive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  {...register('remember')}
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-orange-600 hover:text-orange-700 hover:underline transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="w-full bg-brand-orange text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Footer */}
          <div className="px-4 pb-4 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600 text-center">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  router.push('/account/create')
                }}
                className="text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors"
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 