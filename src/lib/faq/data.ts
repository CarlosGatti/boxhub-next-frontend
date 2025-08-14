import { FaqData } from './types'

export const faqData: FaqData = {
  sections: [
    {
      id: 'clients',
      title: 'Clients',
      description: 'Frequently asked questions for our clients about services, quotes, and project management.',
      items: [
        {
          id: 'clients-services',
          question: 'What services do you offer?',
          answer: 'We provide comprehensive construction and remodeling services for residential and commercial projects, including foundations, framing, finishing, electrical, and plumbing work with licensed subcontractors. Our services cover everything from new construction to renovations and additions.',
          tags: ['services', 'construction', 'remodeling']
        },
        {
          id: 'clients-quote',
          question: 'How do I request a quote?',
          answer: 'Use our "Request a Quote" form to submit a brief description of your project, including address, photos/videos, and desired timeline. We respond within 3 business days with a detailed estimate and project timeline.',
          tags: ['quote', 'estimate', 'pricing']
        },
        {
          id: 'clients-warranty',
          question: 'Do you provide warranties?',
          answer: 'Yes, we offer comprehensive warranties. Labor comes with a limited 12-month warranty, while materials follow the manufacturer\'s warranty. We stand behind our work and ensure customer satisfaction.',
          tags: ['warranty', 'guarantee', 'quality']
        },
        {
          id: 'clients-licensed',
          question: 'Are you licensed and insured?',
          answer: 'Yes, we maintain a valid state license and carry comprehensive liability insurance and workers\' compensation coverage. We can provide proof of insurance and licensing upon request.',
          tags: ['licensed', 'insured', 'compliance']
        },
        {
          id: 'clients-progress',
          question: 'How can I track my project progress?',
          answer: 'We provide weekly updates with photos and milestones through our client portal (when applicable). You\'ll receive regular communication about project status, timeline, and any important developments.',
          tags: ['progress', 'updates', 'communication']
        },
        {
          id: 'clients-timeline',
          question: 'What is the typical project timeline?',
          answer: 'Project timelines vary based on scope and complexity. Small renovations typically take 2-4 weeks, while larger projects can take 3-6 months. We provide detailed timelines during the quote process.',
          tags: ['timeline', 'schedule', 'duration']
        }
      ]
    },
    {
      id: 'subcontractors',
      title: 'Subcontractors',
      description: 'Information for subcontractors interested in partnering with Pires Builders.',
      items: [
        {
          id: 'subcontractors-register',
          question: 'How do I register as a subcontractor?',
          answer: 'Fill out our "Become a Subcontractor" form with your licenses, W-9, Certificate of Insurance (COI), and references. We review all applications and contact qualified candidates within 2-3 business days.',
          tags: ['registration', 'application', 'partnership']
        },
        {
          id: 'subcontractors-documents',
          question: 'What documents are required?',
          answer: 'Required documents include: valid license, COI with minimum required limits, W-9 form, and signed subcontractor agreement. Additional documentation may be requested based on project requirements.',
          tags: ['documents', 'requirements', 'compliance']
        },
        {
          id: 'subcontractors-payment',
          question: 'How does payment work?',
          answer: 'Payment is made based on approved milestones through invoices. Standard payment terms are Net 15 after approval. We offer various payment methods including direct deposit and check.',
          tags: ['payment', 'invoicing', 'milestones']
        },
        {
          id: 'subcontractors-invoices',
          question: 'How do I submit invoices and RFIs?',
          answer: 'Submit invoices and RFIs through our subcontractor portal or dedicated email address provided during onboarding. We have streamlined processes to ensure timely processing and responses.',
          tags: ['invoices', 'RFIs', 'submissions']
        },
        {
          id: 'subcontractors-safety',
          question: 'What are the safety and compliance standards?',
          answer: 'All subcontractors must comply with OSHA regulations, local building codes, and our safety protocols. This includes proper PPE, safety checklists, and adherence to site-specific safety requirements.',
          tags: ['safety', 'compliance', 'OSHA']
        },
        {
          id: 'subcontractors-opportunities',
          question: 'What types of projects are available?',
          answer: 'We work on various project types including residential renovations, new construction, commercial projects, and specialized work. Project opportunities are based on your trade and current workload.',
          tags: ['projects', 'opportunities', 'workload']
        }
      ]
    },
    {
      id: 'internal-system',
      title: 'Internal Project Management System',
      description: 'Information about our internal project management platform for team members and partners.',
      items: [
        {
          id: 'system-overview',
          question: 'What is the internal project management system?',
          answer: 'Our internal platform is a comprehensive project management tool for schedules, scope management, RFIs, submittals, change orders, and construction logs. It streamlines communication and documentation throughout the project lifecycle.',
          tags: ['system', 'platform', 'management']
        },
        {
          id: 'system-access',
          question: 'Who has access to the system?',
          answer: 'Access is granted to internal team members, project managers, and approved subcontractors. Access levels are role-based, ensuring appropriate permissions for different user types.',
          tags: ['access', 'permissions', 'users']
        },
        {
          id: 'system-features',
          question: 'What features are available?',
          answer: 'Key features include project scheduling, document management, RFI tracking, submittal processing, change order management, construction logs, photo documentation, and real-time collaboration tools.',
          tags: ['features', 'tools', 'functionality']
        },
        {
          id: 'system-training',
          question: 'Is training provided for the system?',
          answer: 'Yes, we provide comprehensive training for all users. This includes initial onboarding, feature tutorials, and ongoing support. Training sessions are scheduled based on user availability.',
          tags: ['training', 'onboarding', 'support']
        },
        {
          id: 'system-mobile',
          question: 'Is there a mobile app available?',
          answer: 'Yes, our system is fully responsive and works on mobile devices. Key features are optimized for field use, allowing project updates, photo uploads, and communication from the job site.',
          tags: ['mobile', 'app', 'field']
        },
        {
          id: 'system-support',
          question: 'How do I get technical support?',
          answer: 'Technical support is available through our help desk during business hours. Emergency support is provided for critical issues. We also maintain comprehensive documentation and video tutorials.',
          tags: ['support', 'help', 'technical']
        }
      ]
    }
  ]
}

export const getAllFaqItems = () => {
  return faqData.sections.flatMap(section => 
    section.items.map(item => ({
      ...item,
      sectionId: section.id,
      sectionTitle: section.title
    }))
  )
} 