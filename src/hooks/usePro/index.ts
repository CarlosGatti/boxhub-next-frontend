import { useCurrentUser } from '../../context/CurrentUser'

export function useProAccess() {
  const { currentUser } = useCurrentUser()
  const now = new Date()

  const trialUntil = currentUser?.willExpireAt ? new Date(currentUser.willExpireAt) : null
  const premiumUntil = currentUser?.expiresAt ? new Date(currentUser.expiresAt) : null

  const isTrialActive = !!trialUntil && trialUntil > now
  const isPremiumActive = currentUser?.isPremium === true && !!premiumUntil && premiumUntil > now

  const trialDaysLeft = isTrialActive
    ? Math.max(Math.ceil((trialUntil.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)), 0)
    : 0

  const isPro = isTrialActive || isPremiumActive

  return {
    isPro,
    isTrialActive,
    isPremiumActive,
    trialDaysLeft,
  }
}
