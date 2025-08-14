import { FaqItem } from '../faq/types'

export interface FaqItemWithSection extends FaqItem {
  sectionId: string
  sectionTitle: string
}

export const generateFaqJsonLd = (faqItems: FaqItemWithSection[]) => {
  const mainEntity = faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity
  }
} 