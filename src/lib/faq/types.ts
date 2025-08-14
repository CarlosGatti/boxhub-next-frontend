export interface FaqItem {
  id: string
  question: string
  answer: string
  tags?: string[]
}

export interface FaqSection {
  id: string
  title: string
  description: string
  items: FaqItem[]
}

export interface FaqData {
  sections: FaqSection[]
} 