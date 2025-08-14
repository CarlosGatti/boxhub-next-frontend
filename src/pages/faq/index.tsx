import { faqData, getAllFaqItems } from '../../lib/faq/data'
import { useEffect, useMemo, useState } from 'react'

import { FaqItem } from '../../lib/faq/types'
import Head from 'next/head'
import { PublicLayout } from '../../layouts/PublicLayout'
import { QuickNavigation } from '../../components/QuickNavigation'
import { Search } from '../../components/faq/Search'
import { Section } from '../../components/faq/Section'
import { generateFaqJsonLd } from '../../lib/seo/faq-jsonld'

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeSection, setActiveSection] = useState('')

  // Filter FAQ items based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqData.sections
    }

    const query = searchQuery.toLowerCase()
    return faqData.sections.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    })).filter(section => section.items.length > 0)
  }, [searchQuery])

  // Handle accordion toggle
  const handleToggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  // Prepare sections data for QuickNavigation
  const navigationSections = faqData.sections.map(section => ({
    id: section.id,
    title: section.title,
    href: `#${section.id}`
  }))

  // Handle section navigation
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveSection(sectionId)
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = faqData.sections
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Generate JSON-LD structured data
  const jsonLd = generateFaqJsonLd(getAllFaqItems())

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Pires Builders</title>
        <meta 
          name="description" 
          content="Find answers to common questions about our construction services, subcontractor partnerships, and project management system." 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <PublicLayout>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white border-b">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about our services, partnerships, and project management system.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
            <div className="relative">
              {/* Quick Navigation - Desktop */}
              <div className="hidden lg:block fixed left-8 top-24 w-64 z-30">
                <QuickNavigation 
                  sections={navigationSections}
                  className="sticky top-24"
                />
              </div>

              {/* Main Content Area */}
              <div className="lg:ml-80">
                {/* Search */}
                <div className="mb-8">
                  <Search
                    onSearch={setSearchQuery}
                    placeholder="Search questions, answers, or topics..."
                  />
                </div>

                {/* Search Results Summary */}
                {searchQuery && (
                  <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-sm text-orange-800">
                      Found {filteredSections.reduce((total, section) => total + section.items.length, 0)} results for "{searchQuery}"
                    </p>
                  </div>
                )}

                {/* FAQ Sections */}
                <div className="space-y-12">
                  {filteredSections.map((section) => (
                    <Section
                      key={section.id}
                      section={section}
                      openItems={openItems}
                      onToggleItem={handleToggleItem}
                      filteredItems={section.items}
                    />
                  ))}
                </div>

                {/* No Results */}
                {searchQuery && filteredSections.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No results found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or browse our FAQ sections below.
                    </p>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Can't find what you're looking for? Our team is here to help. Contact us directly and we'll get back to you as soon as possible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/#contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
                    >
                      Contact Us
                    </a>
                    <a
                      href="/subcontractors/register"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      Become a Partner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Quick Navigation - Flutuante */}
        <div className="lg:hidden fixed top-20 left-4 right-4 z-40">
          <QuickNavigation 
            sections={navigationSections}
          />
        </div>
      </PublicLayout>
    </>
  )
}

// Force static generation
export const dynamic = 'force-static' 