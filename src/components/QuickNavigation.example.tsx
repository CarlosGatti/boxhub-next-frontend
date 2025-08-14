/**
 * Example usage of QuickNavigation component
 * 
 * This file demonstrates how to integrate the QuickNavigation component
 * into other pages of the website.
 */

import { QuickNavigation } from './QuickNavigation'

// Example 1: Homepage with sections
export function HomepageWithQuickNav() {
  const sections = [
    { id: 'hero', title: 'Hero Section', href: '#hero' },
    { id: 'services', title: 'Our Services', href: '#services' },
    { id: 'about', title: 'About Us', href: '#about' },
    { id: 'projects', title: 'Recent Projects', href: '#projects' },
    { id: 'contact', title: 'Contact', href: '#contact' }
  ]

  return (
    <div className="relative">
      {/* Main content with data-section attributes */}
      <section id="hero" data-section="hero" className="min-h-screen">
        <h1>Hero Section</h1>
      </section>
      
      <section id="services" data-section="services" className="py-20">
        <h2>Our Services</h2>
      </section>
      
      <section id="about" data-section="about" className="py-20">
        <h2>About Us</h2>
      </section>
      
      <section id="projects" data-section="projects" className="py-20">
        <h2>Recent Projects</h2>
      </section>
      
      <section id="contact" data-section="contact" className="py-20">
        <h2>Contact</h2>
      </section>

      {/* Quick Navigation positioned in the layout */}
      <div className="hidden lg:block fixed left-8 top-24 w-64 z-30">
        <QuickNavigation sections={sections} />
      </div>
    </div>
  )
}

// Example 2: Service page with subsections
export function ServicePageWithQuickNav() {
  const sections = [
    { id: 'overview', title: 'Overview', href: '#overview' },
    { id: 'process', title: 'Our Process', href: '#process' },
    { id: 'materials', title: 'Materials', href: '#materials' },
    { id: 'timeline', title: 'Timeline', href: '#timeline' },
    { id: 'pricing', title: 'Pricing', href: '#pricing' },
    { id: 'faq', title: 'FAQ', href: '#faq' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Quick Navigation in sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-8">
            <QuickNavigation sections={sections} />
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <section id="overview" data-section="overview">
            <h2>Overview</h2>
          </section>
          
          <section id="process" data-section="process">
            <h2>Our Process</h2>
          </section>
          
          <section id="materials" data-section="materials">
            <h2>Materials</h2>
          </section>
          
          <section id="timeline" data-section="timeline">
            <h2>Timeline</h2>
          </section>
          
          <section id="pricing" data-section="pricing">
            <h2>Pricing</h2>
          </section>
          
          <section id="faq" data-section="faq">
            <h2>FAQ</h2>
          </section>
        </div>
      </div>
    </div>
  )
}

// Example 3: Mobile-only Quick Navigation
export function MobileOnlyQuickNav() {
  const sections = [
    { id: 'intro', title: 'Introduction', href: '#intro' },
    { id: 'features', title: 'Features', href: '#features' },
    { id: 'benefits', title: 'Benefits', href: '#benefits' }
  ]

  return (
    <div>
      {/* Main content */}
      <section id="intro" data-section="intro">
        <h2>Introduction</h2>
      </section>
      
      <section id="features" data-section="features">
        <h2>Features</h2>
      </section>
      
      <section id="benefits" data-section="benefits">
        <h2>Benefits</h2>
      </section>

      {/* Mobile Quick Navigation - appears on scroll */}
      <div className="lg:hidden fixed top-20 left-4 right-4 z-40">
        <QuickNavigation sections={sections} />
      </div>
    </div>
  )
} 