import { HubSpotLeadData } from './validator'

interface HubSpotConfig {
  portalId: string
  formId: string
  token: string
}

interface HubSpotResponse {
  ok: boolean
  id?: string
  error?: string
}

export class HubSpotService {
  private config: HubSpotConfig

  constructor() {
    this.config = {
      portalId: process.env.HUBSPOT_PORTAL_ID || '',
      formId: process.env.HUBSPOT_FORM_ID || '',
      token: process.env.HUBSPOT_TOKEN || ''
    }
  }

  async submitLead(data: HubSpotLeadData): Promise<HubSpotResponse> {
    try {
      if (!this.config.portalId || !this.config.formId || !this.config.token) {
        throw new Error('HubSpot configuration missing')
      }

      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${this.config.portalId}/${this.config.formId}`

      const payload = {
        fields: [
          { name: 'firstname', value: data.name.split(' ')[0] },
          { name: 'lastname', value: data.name.split(' ').slice(1).join(' ') || '' },
          { name: 'email', value: data.email },
          { name: 'phone', value: data.phone },
          { name: 'city', value: data.city },
          { name: 'project_type', value: data.projectType },
          { name: 'message', value: data.message || '' }
        ],
        context: {
          pageUri: data.pageUrl,
          pageName: data.pageName,
          ...(data.utm_source && { utm_source: data.utm_source }),
          ...(data.utm_medium && { utm_medium: data.utm_medium }),
          ...(data.utm_campaign && { utm_campaign: data.utm_campaign })
        }
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.token}`
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('HubSpot API Error:', errorData)
        throw new Error(`HubSpot API error: ${response.status}`)
      }

      const result = await response.json()
      
      return {
        ok: true,
        id: result.id || result.inlineMessage
      }

    } catch (error) {
      console.error('HubSpot submission error:', error)
      return {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  isConfigured(): boolean {
    return !!(this.config.portalId && this.config.formId && this.config.token)
  }
}

export const hubspotService = new HubSpotService()
