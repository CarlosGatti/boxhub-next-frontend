import { useCurrentUser } from '../../context/CurrentUser'

export function useProAccess() {
  const { currentUser } = useCurrentUser()
  console.log('currentUser', currentUser)
  const now = new Date()

  const trialUntil = currentUser?.willExpireAt ? new Date(currentUser.willExpireAt) : null
  const premiumUntil = currentUser?.expiresAt ? new Date(currentUser.expiresAt) : null

  const isPremiumActive =
    currentUser?.isPremium === true &&
    premiumUntil &&
    premiumUntil.getTime() >= now.getTime()

  const isTrialActive =
    !isPremiumActive &&
    trialUntil &&
    trialUntil.getTime() >= now.getTime()

  const trialDaysLeft = isTrialActive
    ? Math.max(Math.ceil((trialUntil!.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)), 0)
    : 0

  const isPro = isPremiumActive || isTrialActive


  return {
    isPro,
    isTrialActive,
    isPremiumActive,
    trialDaysLeft,
  }
}
