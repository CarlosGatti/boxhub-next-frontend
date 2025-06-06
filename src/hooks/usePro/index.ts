import { useCurrentUser } from '../../context/CurrentUser'

export function useProAccess() {
  const { currentUser } = useCurrentUser()
  const now = new Date()

  const trialUntil = currentUser?.willExpireAt ? new Date(currentUser.willExpireAt) : null
  const premiumUntil = currentUser?.expiresAt ? new Date(currentUser.expiresAt) : null

  // Coloque aqui:
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const trialDate = trialUntil ? new Date(trialUntil.getFullYear(), trialUntil.getMonth(), trialUntil.getDate()) : null;
  const premiumDate = premiumUntil ? new Date(premiumUntil.getFullYear(), premiumUntil.getMonth(), premiumUntil.getDate()) : null;

  const isTrialActive = !!trialDate && trialDate >= nowDate;
  const isPremiumActive = currentUser?.isPremium === true && !!premiumDate && premiumDate >= nowDate;

  const trialDaysLeft = isTrialActive
    ? Math.max(Math.ceil((trialUntil.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)), 0)
    : 0;

  const isPro = isTrialActive || isPremiumActive;

  return {
    isPro,
    isTrialActive,
    isPremiumActive,
    trialDaysLeft,
  }
}
