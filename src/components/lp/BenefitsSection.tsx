export function BenefitsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "Save Money",
      description: "Get competitive pricing and avoid costly mistakes with our expert guidance"
    },
    {
      icon: "⏰",
      title: "Save Time",
      description: "Professional project management means your project stays on schedule"
    },
    {
      icon: "🛡️",
      title: "Peace of Mind",
      description: "Licensed, insured, and backed by 10+ years of experience"
    },
    {
      icon: "🏆",
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive warranties"
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Pires Builders?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just build homes - we build relationships and deliver results that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Get your free estimate today and see why 50+ families trust us with their homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#estimate-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Free Estimate
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+18573507504"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold text-lg rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
