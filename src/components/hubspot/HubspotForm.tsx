'use client'

import { useEffect, useRef, useState } from 'react'

import Script from 'next/script'
import { useRouter } from 'next/router'

interface HubspotFormProps {
  className?: string
  onLoaded?: () => void
}

export function HubspotForm({ className = '', onLoaded }: HubspotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const router = useRouter()

  // Handle form submission and redirect
  useEffect(() => {
    if (!isScriptLoaded || !formRef.current) return

    const handleFormSubmission = () => {
      // Check for HubSpot's success message
      const successMessage = formRef.current?.querySelector('.submitted-message')
      if (successMessage) {
        // Redirect to thank you page
        router.push('/lp/thank-you')
      }
    }

    // Observer for form submission
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              if (element.classList?.contains('submitted-message')) {
                handleFormSubmission()
              }
            }
          })
        }
      })
    })

    if (formRef.current) {
      observer.observe(formRef.current, {
        childList: true,
        subtree: true
      })
    }

    return () => observer.disconnect()
  }, [isScriptLoaded, router])

  // Add UTM parameters and page context to form
  useEffect(() => {
    if (!isScriptLoaded || !formRef.current) return

    const addHiddenFields = () => {
      const form = formRef.current?.querySelector('form')
      if (!form) return

      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmCampaign = urlParams.get('utm_campaign')
      const utmContent = urlParams.get('utm_content')
      const utmTerm = urlParams.get('utm_term')

      // Create hidden fields for UTMs and page context
      const hiddenFields = [
        { name: 'utm_source', value: utmSource || '' },
        { name: 'utm_medium', value: utmMedium || '' },
        { name: 'utm_campaign', value: utmCampaign || '' },
        { name: 'utm_content', value: utmContent || '' },
        { name: 'utm_term', value: utmTerm || '' },
        { name: 'pageUrl', value: window.location.href },
        { name: 'pageName', value: 'Landing Page - Estimate' }
      ]

      hiddenFields.forEach(({ name, value }) => {
        // Check if field already exists
        const existingField = form.querySelector(`input[name="${name}"]`)
        if (!existingField) {
          const hiddenInput = document.createElement('input')
          hiddenInput.type = 'hidden'
          hiddenInput.name = name
          hiddenInput.value = value
          form.appendChild(hiddenInput)
        }
      })
    }

    // Wait a bit for the form to be fully rendered
    const timer = setTimeout(addHiddenFields, 1000)
    return () => clearTimeout(timer)
  }, [isScriptLoaded])

  // Handle script load
  const handleScriptLoad = () => {
    setIsScriptLoaded(true)
  }

  // Handle form load
  useEffect(() => {
    if (!isScriptLoaded) return

    const checkFormLoaded = () => {
      const form = formRef.current?.querySelector('form')
      if (form && !isFormLoaded) {
        setIsFormLoaded(true)
        onLoaded?.()
      }
    }

    // Check periodically for form
    const interval = setInterval(checkFormLoaded, 500)
    
    // Also check immediately
    checkFormLoaded()

    return () => clearInterval(interval)
  }, [isScriptLoaded, isFormLoaded, onLoaded])

  return (
    <>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/243749134.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
      
      <div 
        ref={formRef}
        className={`hs-form-frame ${className}`}
        data-region="na2"
        data-portal-id="243749134"
        data-form-id="00114c76-bc96-45bd-b24d-4032ba62243f"
        aria-live="polite"
      >
        {!isFormLoaded && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        )}
      </div>
    </>
  )
}
