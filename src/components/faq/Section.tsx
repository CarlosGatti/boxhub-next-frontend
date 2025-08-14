'use client'

import { FaqItem, FaqSection } from '../../lib/faq/types'

import { Accordion } from './Accordion'

interface SectionProps {
  section: FaqSection
  openItems: string[]
  onToggleItem: (id: string) => void
  filteredItems: FaqItem[]
}

export function Section({ section, openItems, onToggleItem, filteredItems }: SectionProps) {
  if (filteredItems.length === 0) {
    return null
  }

  return (
    <section id={section.id} data-section={section.id} className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {section.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          {section.description}
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredItems.map((item, index) => (
          <Accordion
            key={item.id}
            item={item}
            isOpen={openItems.includes(item.id)}
            onToggle={onToggleItem}
            index={index}
          />
        ))}
      </div>
    </section>
  )
} 