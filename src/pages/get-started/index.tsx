import { PublicLayout } from "../../layouts/PublicLayout"
import { useState } from "react"

export default function FreeEstimatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PublicLayout>
      <div className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Request a Free Estimate</h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Tell us about your project and we’ll get back to you with a custom estimate.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project Type</label>
            <select
              name="projectType"
              required
              value={form.projectType}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option value="">Select a type</option>
              <option value="Remodeling">Remodeling</option>
              <option value="New Construction">New Construction</option>
              <option value="Additions">Additions</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your project..."
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {submitted && (
            <div className="text-green-600 font-medium">
              Thank you! We'll be in touch soon with your estimate.
            </div>
          )}

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            {submitted ? "Submitted" : "Request Estimate"}
          </button>
        </form>
      </div>
    </PublicLayout>
  )
}
