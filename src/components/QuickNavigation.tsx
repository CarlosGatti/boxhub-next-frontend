'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface QuickNavigationProps {
  sections: Array<{
    id: string
    title: string
    href: string
  }>
  className?: string
}

export function QuickNavigation({ sections, className = '' }: QuickNavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle scroll with throttling for performance
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return

    scrollTimeoutRef.current = setTimeout(() => {
      const scrollY = window.scrollY
      const headerHeight = 64 // Height of the main header
      const showThreshold = headerHeight + 100 // Show after scrolling past header + 100px

      // Show/hide based on scroll position
      setIsVisible(scrollY > showThreshold)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('[data-section]')
      let currentActive = ''

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionHeight = rect.height

        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentActive = section.getAttribute('data-section') || ''
        }
      })

      setActiveSection(currentActive)
      scrollTimeoutRef.current = null
    }, 16) // ~60fps
  }, [])

  // Setup intersection observer for footer detection
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && navRef.current) {
            // Footer is visible, remove sticky positioning
            navRef.current.style.position = 'relative'
            navRef.current.style.top = 'auto'
          } else if (navRef.current && isVisible) {
            // Footer is not visible, restore sticky positioning
            navRef.current.style.position = 'sticky'
            navRef.current.style.top = '80px' // Header height + some padding
          }
        })
      },
      { threshold: 0.1 }
    )

    observerRef.current.observe(footer)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isVisible])

  // Setup scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  // Handle section navigation
  const handleSectionClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80 // Account for header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSectionClick(href)
    }
  }

  // Handle expand/collapse on mobile
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <nav
      ref={navRef}
      className={`
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        ${className}
      `}
      aria-label="Quick navigation"
      role="navigation"
    >
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
            Quick Navigation
          </h3>
          <ul className="space-y-2" role="list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleSectionClick(section.href)}
                  onKeyDown={(e) => handleKeyDown(e, section.href)}
                  className={`
                    w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset
                    ${activeSection === section.id
                      ? 'bg-orange-50 text-orange-700 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                  aria-current={activeSection === section.id ? 'location' : undefined}
                  aria-label={`Navigate to ${section.title} section`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Mobile Header - Always visible */}
          <button
            onClick={toggleExpanded}
            className="w-full px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
            aria-expanded={isExpanded}
            aria-controls="mobile-nav-content"
            aria-label="Toggle quick navigation"
          >
            <span className="text-sm font-semibold text-gray-900">
              Quick Navigation
            </span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-gray-500" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Content - Expandable */}
          <div
            id="mobile-nav-content"
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <ul className="px-4 pb-3 space-y-1" role="list">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      handleSectionClick(section.href)
                      setIsExpanded(false) // Close mobile menu after selection
                    }}
                    onKeyDown={(e) => handleKeyDown(e, section.href)}
                    className={`
                      w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                      focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset
                      ${activeSection === section.id
                        ? 'bg-orange-50 text-orange-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                    aria-current={activeSection === section.id ? 'location' : undefined}
                    aria-label={`Navigate to ${section.title} section`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
} 