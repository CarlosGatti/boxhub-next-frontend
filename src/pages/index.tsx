import { parseCookies } from 'nookies'
import { useCurrentUser } from '../context/CurrentUser'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const { currentUser } = useCurrentUser()

  useEffect(() => {
    const { '@token': token } = parseCookies()

    if (!token && !currentUser) {
      router.push('home')
    } else {
      router.push('/qrcode-app/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
