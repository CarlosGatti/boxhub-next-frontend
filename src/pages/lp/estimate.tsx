import { BenefitsSection } from '../../components/lp/BenefitsSection'
import { FAQ } from '../../components/lp/FAQ'
import { FooterMini } from '../../components/lp/FooterMini'
import Head from 'next/head'
import { Hero } from '../../components/lp/Hero'
import { HubspotForm } from '../../components/hubspot/HubspotForm'
import { LandingHeader } from '../../components/lp/LandingHeader'
import { NextPage } from 'next'
import { SocialProof } from '../../components/lp/SocialProof'
import { UrgencyBanner } from '../../components/lp/UrgencyBanner'

const EstimatePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Get Your Free Estimate - Pires Builders Inc</title>
        <meta 
          name="description" 
          content="Transform your home with expert craftsmanship. Get a free, detailed estimate for your construction or renovation project. Licensed, insured, and trusted by 50+ families in Massachusetts." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Get Your Free Estimate - Pires Builders Inc" />
        <meta property="og:description" content="Transform your home with expert craftsmanship. Get a free, detailed estimate for your construction or renovation project. Licensed, insured, and trusted by 50+ families in Massachusetts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piresbuilders.com/lp/estimate" />
        <meta property="og:image" content="https://piresbuilders.com/image/drone-cape.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Your Free Estimate - Pires Builders Inc" />
        <meta name="twitter:description" content="Transform your home with expert craftsmanship. Get a free, detailed estimate for your construction or renovation project. Licensed, insured, and trusted by 50+ families in Massachusetts." />
        <meta name="twitter:image" content="https://piresbuilders.com/image/drone-cape.jpeg" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pires Builders Inc",
              "description": "Construction and residential remodeling in Massachusetts",
              "url": "https://piresbuildersinc.com",
              "telephone": "+1-508-313-6329",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "MA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.3601",
                "longitude": "-71.0589"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "image": "https://piresbuildersinc.com/image/brand/pires-logo.png",
              "sameAs": [
                "https://piresbuildersinc.com"
              ]
            })
          }}
        />
        
        {/* UTM Parameters */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preserve UTM parameters
              (function() {
                var urlParams = new URLSearchParams(window.location.search);
                var utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
                var hasUtm = false;
                
                utmParams.forEach(function(param) {
                  if (urlParams.has(param)) {
                    hasUtm = true;
                  }
                });
                
                if (hasUtm) {
                  // Store UTM parameters in sessionStorage
                  utmParams.forEach(function(param) {
                    var value = urlParams.get(param);
                    if (value) {
                      sessionStorage.setItem(param, value);
                    }
                  });
                }
              })();
            `
          }}
        />
      </Head>

      <main className="min-h-screen bg-white">
        <LandingHeader />
        <Hero />
        <UrgencyBanner />
        <BenefitsSection />
        <SocialProof />
        
        {/* HubSpot Form Section */}
        <section id="estimate-form" className="w-full py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  Get Your Free Estimate
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and our team will contact you within 24 hours
                </p>
              </div>

              <div className="rounded-2xl shadow-xl ring-1 ring-black/5 bg-white p-6">
                <HubspotForm />
              </div>
            </div>
          </div>
        </section>
        
        <FAQ />
        <FooterMini />
      </main>
    </>
  )
}

export default EstimatePage
