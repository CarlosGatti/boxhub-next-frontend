import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { PublicLayout } from "../../layouts/PublicLayout"

export default function ThankYouPage() {
  return (
    <PublicLayout>
      <div className="min-h-[60vh] flex flex-col justify-center items-center px-6 text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank you for subscribing!</h1>
        <p className="text-gray-600 max-w-md">
          Your BoxHub Pro subscription is active. You now have full access.
        </p>
        <Link
          href="/qrcode-app/dashboard"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </PublicLayout>
  )
}
