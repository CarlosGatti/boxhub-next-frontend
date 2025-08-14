'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { FaqItem } from '../../lib/faq/types'

interface AccordionProps {
  item: FaqItem
  isOpen: boolean
  onToggle: (id: string) => void
  index: number
}

export function Accordion({ item, isOpen, onToggle, index }: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px'
    }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle(item.id)
    }
  }

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        ref={buttonRef}
        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset hover:bg-gray-50 transition-colors"
        onClick={() => onToggle(item.id)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
        id={`faq-button-${item.id}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 pr-4">
            {item.question}
          </h3>
          <div className="flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
            )}
          </div>
        </div>
      </button>
      
      <div
        ref={contentRef}
        id={`faq-content-${item.id}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0px' }}
        aria-labelledby={`faq-button-${item.id}`}
        role="region"
      >
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">
            {item.answer}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 