import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string()
    .min(3, 'Name must have at least 3 characters')
    .max(100, 'Name must have maximum 100 characters'),
  
  email: z.string()
    .email('Invalid email')
    .min(1, 'Email is required'),
  
  phone: z.string()
    .min(10, 'Phone must have at least 10 digits')
    .max(15, 'Phone must have maximum 15 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Phone must contain only numbers'),
  
  city: z.string()
    .min(2, 'City must have at least 2 characters')
    .max(50, 'City must have maximum 50 characters'),
  
  projectType: z.enum(['Renovation', 'New Build', 'Maintenance'], {
    errorMap: () => ({ message: 'Please select a valid project type' })
  }),
  
  message: z.string()
    .max(500, 'Message must have maximum 500 characters')
    .optional()
    .or(z.literal('')),
  
  consent: z.boolean()
    .refine((val) => val === true, {
      message: 'You must agree to be contacted'
    }),
  
  // Honeypot field
  _gotcha: z.string().optional()
})

export type LeadFormData = z.infer<typeof leadFormSchema>

export const hubspotLeadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  city: z.string(),
  projectType: z.string(),
  message: z.string().optional(),
  pageUrl: z.string().url(),
  pageName: z.string(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional()
})

export type HubSpotLeadData = z.infer<typeof hubspotLeadSchema>
