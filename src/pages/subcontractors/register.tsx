import { AlertCircle, CheckCircle, Cloud, Upload } from "lucide-react"

import { PublicLayout } from "../../layouts/PublicLayout"
import { graphqlRequestClient } from "../../lib/graphql.request"
import { useCreateSubcontractorMutation } from "../../generated/graphql"
import { useState } from "react"

export default function SubcontractorRegistration() {
    const { mutate: createSubcontractor, isLoading, error } = useCreateSubcontractorMutation(graphqlRequestClient)
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        trade: '',
        bankAccount: '',
        paymentPreference: '',
        notes: '',
        priority: false
    })
    const [insuranceData, setInsuranceData] = useState({
        company: '',
        expiration: '',
        documentUrl: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const trades = [
        'Framing',
        'Electrical',
        'Plumbing',
        'Painting',
        'Roofing',
        'Drywall',
        'HVAC',
        'Concrete',
        'Flooring',
        'Landscaping',
        'Masonry',
        'Carpentry',
        'Other'
    ]

    const paymentMethods = [
        'Check',
        'Direct Deposit',
        'ACH Transfer',
        'Wire Transfer',
        'Other'
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
        if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
        if (!formData.trade) newErrors.trade = 'Trade is required'
        if (!formData.bankAccount.trim()) newErrors.bankAccount = 'Bank account information is required'
        if (!formData.paymentPreference) newErrors.paymentPreference = 'Payment preference is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) return

        try {
            await createSubcontractor({
                data: {
                    companyName: formData.companyName,
                    contactName: formData.contactName,
                    email: formData.email,
                    phone: formData.phone,
                    trade: formData.trade,
                    bankAccount: formData.bankAccount,
                    paymentPreference: formData.paymentPreference,
                    notes: formData.notes || undefined,
                    priority: formData.priority,
                    createdViaPublicForm: true
                }
            })
            setSubmitted(true)
        } catch (error) {
            console.error('Error creating subcontractor:', error)
        }
    }

    if (submitted) {
        return (
            <PublicLayout>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                Registration Successful!
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Thank you for your interest in partnering with Pires Builders. We will review your application and contact you within 2-3 business days.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="/"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                                >
                                    Return to Homepage
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </PublicLayout>
        )
    }

    return (
        <PublicLayout>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Partner with Pires Builders
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our network of trusted subcontractors and grow your business with quality projects across Massachusetts.
                        </p>
                    </div>

                    {/* Benefits Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Projects</h3>
                            <p className="text-gray-600">Access to well-managed construction projects with clear timelines and fair compensation.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Cloud className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Payments</h3>
                            <p className="text-gray-600">Timely payments and transparent invoicing processes for all completed work.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Upload className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                            <p className="text-gray-600">Build long-term partnerships and expand your business with our growing project portfolio.</p>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Company Registration Form</h2>
                        
                        {/* Error handling can be added here when needed */}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Company Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.companyName ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="Your Company Name"
                                    />
                                    {errors.companyName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Person *
                                    </label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.contactName ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="Full Name"
                                    />
                                    {errors.contactName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.email ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="contact@company.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.phone ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="(555) 123-4567"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            {/* Trade and Services */}
                            <div>
                                <label htmlFor="trade" className="block text-sm font-medium text-gray-700 mb-2">
                                    Primary Trade/Specialty *
                                </label>
                                <select
                                    id="trade"
                                    name="trade"
                                    value={formData.trade}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        errors.trade ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select your primary trade</option>
                                    {trades.map(trade => (
                                        <option key={trade} value={trade}>{trade}</option>
                                    ))}
                                </select>
                                {errors.trade && (
                                    <p className="mt-1 text-sm text-red-600">{errors.trade}</p>
                                )}
                            </div>

                            {/* Payment Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-700 mb-2">
                                        Bank Account Information *
                                    </label>
                                    <textarea
                                        id="bankAccount"
                                        name="bankAccount"
                                        value={formData.bankAccount}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.bankAccount ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="Bank name, account type, routing number (for payments)"
                                    />
                                    {errors.bankAccount && (
                                        <p className="mt-1 text-sm text-red-600">{errors.bankAccount}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="paymentPreference" className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Payment Method *
                                    </label>
                                    <select
                                        id="paymentPreference"
                                        name="paymentPreference"
                                        value={formData.paymentPreference}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.paymentPreference ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select payment method</option>
                                        {paymentMethods.map(method => (
                                            <option key={method} value={method}>{method}</option>
                                        ))}
                                    </select>
                                    {errors.paymentPreference && (
                                        <p className="mt-1 text-sm text-red-600">{errors.paymentPreference}</p>
                                    )}
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Information
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tell us about your experience, certifications, specializations, or any other relevant information..."
                                />
                            </div>

                            {/* Priority Checkbox */}
                            <div className="flex items-center">
                                <input
                                    id="priority"
                                    name="priority"
                                    type="checkbox"
                                    checked={formData.priority}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="priority" className="ml-2 block text-sm text-gray-900">
                                    Mark as priority partner (we'll contact you first for urgent projects)
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isLoading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </div>
                        </form>

                        {/* Information Notice */}
                        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
                            <p className="text-sm text-blue-800">
                                <strong>Note:</strong> After submitting your application, our team will review your information and contact you within 2-3 business days. 
                                We may request additional documentation such as insurance certificates, licenses, and references during the review process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
} 