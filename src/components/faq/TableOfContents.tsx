'use client'

import { useEffect, useState } from 'react'

import { FaqSection } from '../../lib/faq/types'

interface TableOfContentsProps {
  sections: FaqSection[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function TableOfContents({ sections, activeSection, onSectionClick }: TableOfContentsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
      } fixed top-24 left-4 right-4 z-40 transition-all duration-300 ease-in-out lg:hidden`}
      aria-label="Table of contents"
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          Quick Navigation
        </h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-orange-50 text-orange-700 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                aria-current={activeSection === section.id ? 'location' : undefined}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 