import { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'
import { hubspotLeadSchema } from '../../lib/lead/validator'
import { hubspotService } from '../../lib/lead/hubspot'
import path from 'path'

// Rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimit.get(ip)
  
  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60 * 1000 }) // 1 minute
    return true
  }
  
  if (limit.count >= 5) { // 5 requests per minute
    return false
  }
  
  limit.count++
  return true
}

function saveLeadLocally(data: any): void {
  try {
    const leadsDir = path.join(process.cwd(), '.next', 'cache', 'leads')
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true })
    }
    
    const timestamp = new Date().toISOString()
    const filename = `lead-${timestamp.replace(/[:.]/g, '-')}.json`
    const filepath = path.join(leadsDir, filename)
    
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
    console.log(`Lead saved locally: ${filepath}`)
  } catch (error) {
    console.error('Error saving lead locally:', error)
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  try {
    // Rate limiting
    const clientIp = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'unknown'
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        ok: false, 
        message: 'Too many requests. Please try again in a minute.' 
      })
    }

    // Validate input
    const validation = hubspotLeadSchema.safeParse(req.body)
    if (!validation.success) {
      return res.status(400).json({ 
        ok: false, 
        message: 'Invalid data provided',
        errors: validation.error.errors 
      })
    }

    const leadData = validation.data

    // Try HubSpot first
    if (hubspotService.isConfigured()) {
      const hubspotResult = await hubspotService.submitLead(leadData)
      
      if (hubspotResult.ok) {
        // Success with HubSpot
        return res.status(200).json({ 
          ok: true, 
          message: 'Lead submitted successfully',
          id: hubspotResult.id 
        })
      } else {
        console.error('HubSpot submission failed:', hubspotResult.error)
        // Continue to fallback
      }
    }

    // Fallback: Save locally
    const leadWithMetadata = {
      ...leadData,
      submittedAt: new Date().toISOString(),
      source: 'landing-page',
      userAgent: req.headers['user-agent'],
      ip: clientIp
    }

    saveLeadLocally(leadWithMetadata)

    // Optional: Send email notification (if configured)
    // await sendEmailNotification(leadWithMetadata)

    return res.status(200).json({ 
      ok: true, 
      message: 'Lead submitted successfully (stored locally)',
      stored: 'local'
    })

  } catch (error) {
    console.error('Lead submission error:', error)
    return res.status(500).json({ 
      ok: false, 
      message: 'Internal server error. Please try again.' 
    })
  }
}
