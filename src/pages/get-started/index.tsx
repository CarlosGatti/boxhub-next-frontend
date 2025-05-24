import Link from "next/link"
import { PublicLayout } from "../../layouts/PublicLayout"

export default function GetStartedPage() {
  return (
    <PublicLayout>
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Upgrade to BoxHub Pro</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Get full access to QR code scanning, cloud sync, and more.
        </p>

        <div className="max-w-md mx-auto border rounded-lg p-6 shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">BoxHub Pro</h2>
          <p className="text-gray-600 mb-4">$5/month or $50/year</p>
          <ul className="text-sm text-left mb-6 space-y-2 text-gray-700">
            <li>✅ Unlimited QR code storage</li>
            <li>✅ Cloud sync across devices</li>
            <li>✅ Priority email support</li>
          </ul>
          <Link
            href="https://boxhub.lemonsqueezy.com/buy/9bd599bf-e31b-4c81-abbc-bed560e0a6d3"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </PublicLayout>
  )
}
