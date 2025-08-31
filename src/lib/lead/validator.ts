import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone is required'),
  city: z.string().min(1, 'City is required'),
  projectType: z.enum(['Renovation', 'New Construction', 'Maintenance']),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted'
  }),
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
