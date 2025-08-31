import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ThankYouPage: NextPage = () => {
  const router = useRouter()

  // Track conversion
  useEffect(() => {
    // Google Analytics conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        value: 1.0,
        currency: 'USD'
      })
    }

    // Meta Pixel conversion tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Thank You! - Pires Builders Inc</title>
        <meta 
          name="description" 
          content="Thank you for requesting your estimate. We will contact you within 24 hours." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Main Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank you for your interest!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We have successfully received your estimate request. Our team will contact you within <strong>24 hours</strong> to schedule a technical visit and provide a detailed estimate.
            </p>

            {/* Next Steps */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Next steps:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600 text-sm">We'll contact you within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Visit</h3>
                  <p className="text-gray-600 text-sm">We'll schedule a visit to assess the project</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Estimate</h3>
                  <p className="text-gray-600 text-sm">We'll send a detailed estimate within 3 days</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Need to talk now?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18573507504"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (857) 350-7504
                </a>
                <a
                  href="mailto:contact@piresbuildersinc.com"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Back to main site
              </Link>
              <Link
                href="/lp/estimate"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Request another estimate
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ThankYouPage
