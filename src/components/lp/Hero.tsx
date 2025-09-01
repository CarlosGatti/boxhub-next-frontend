import Image from 'next/image'

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Free Estimate • No Obligation
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your Home with{' '}
                  <span className="text-orange-600">Expert Craftsmanship</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Get a <strong>free, detailed estimate</strong> for your construction or renovation project. 
                  Licensed, insured, and trusted by 50+ families in Massachusetts.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Free estimate within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Licensed & insured contractor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">10+ years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">5-star customer rating</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#estimate-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Free Estimate Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+15083136329"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">50+ happy customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image/drone-cape.jpeg"
                  alt="Professional construction services in Massachusetts"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-orange-600 text-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">FREE</div>
                  <div className="text-xs">Estimate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
