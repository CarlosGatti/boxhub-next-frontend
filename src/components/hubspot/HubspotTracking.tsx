'use client'

import Script from 'next/script'

export function HubspotTracking() {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* HubSpot Tracking Code */}
      <Script
        id="hubspot-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d,s,i,r) {
              r=d.createElement(s);r.id=i;r.src='https://js.hs-scripts.com/243749134.js';
              (d.getElementsByTagName(s)[0]).appendChild(r);
            })(document,"script","hs-analytics");
          `
        }}
      />
    </>
  )
}
