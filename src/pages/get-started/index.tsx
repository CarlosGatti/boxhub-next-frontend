import Link from "next/link"
import { PublicLayout } from "../../layouts/PublicLayout"

export default function GetStartedPage() {
  return (
    <PublicLayout>
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Upgrade to BoxHub Pro</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Choose the plan that best fits your workflow.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Free Trial Card */}
          <div className="border rounded-lg p-6 shadow-md bg-white text-left">
            <h2 className="text-2xl font-semibold mb-2">Free 14-Day Trial</h2>
            <p className="text-gray-600 mb-4">Try BoxHub Pro features at no cost.</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✅ Full feature access</li>
              <li>✅ No credit card required</li>
              <li>✅ Cancel anytime</li>
            </ul>
            <Link
              href="/account/create"
              className="inline-block w-full text-center bg-gray-100 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Pro Plan Card */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 text-left">
            <h2 className="text-2xl font-semibold mb-2">BoxHub Pro</h2>
            <p className="text-gray-600 mb-4">$5/month or $50/year</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✅ Unlimited QR code storage</li>
              <li>✅ Cloud sync across devices</li>
              <li>✅ Priority email support</li>
            </ul>
            <Link
              href="/account/create?redirect=paid"
              className="inline-block w-full text-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Subscribe Now
            </Link>

          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
