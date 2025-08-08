import { Cloud, QrCode, Search } from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import { PublicLayout } from "../layouts/PublicLayout"
import { graphqlRequestClient } from "../lib/graphql.request"
import { useSendEmailMutation } from "../generated/graphql"
import { useState } from "react"

export default function LandingPage() {


    return (
        <PublicLayout>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <AboutSection />
            <ContactSection />
        </PublicLayout>

    )
}

function HeroSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-10">
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                        Build your dream with confidence.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                        Pires Builders Inc delivers top-quality construction and remodeling services across Colorado Springs and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="#contact" className="rounded-lg bg-black text-white px-6 py-3 text-sm font-medium hover:bg-brand-orange transition">
                            Get a Free Estimate
                        </Link>
                        <Link href="#services" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            See Our Services
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src="/image/drone-cape.jpeg"
                        alt="Construction site with workers"
                        width={500}
                        height={600}
                        className="rounded-lg shadow-lg mx-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

function ServicesSection() {
    return (
        <section id="services" className="w-full py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Services</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mt-2">Complete solutions for residential and commercial projects.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ServiceCard title="Home Renovations" description="Transform your space with expert remodeling, flooring, painting, and more." />
                    <ServiceCard title="New Construction" description="From ground up – foundations, framing, roofing, and finish work." />
                    <ServiceCard title="Project Management" description="We handle permits, timelines, and contractors so you don’t have to." />
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-6 bg-white border shadow-sm rounded-xl text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
    );
}

function WhyChooseUs() {
    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Why Pires Builders?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem title="Licensed & Insured" description="Peace of mind with every project." />
                    <FeatureItem title="Transparent Pricing" description="No surprises. Clear and fair estimates." />
                    <FeatureItem title="Local Expertise" description="We understand Colorado building codes and weather challenges." />
                </div>
            </div>
        </section>
    )
}

function FeatureItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
    );
}


function AboutSection() {
    return (
        <section id="about" className="w-full py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        About Pires Builders
                    </h2>
                    <p className="text-gray-600 md:text-lg">
                        With over a decade of experience in the construction industry, Pires Builders Inc is committed to delivering reliable, high-quality construction and remodeling solutions.
                        Our skilled team takes pride in craftsmanship, attention to detail, and a strong focus on customer satisfaction.
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        From custom home builds to residential renovations and commercial improvements, we handle every project with transparency and professionalism.
                        At Pires Builders, we don’t just build structures—we build trust and lasting relationships with our clients.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    const { mutate: sendEmailMutation, data, isLoading, error } = useSendEmailMutation(graphqlRequestClient);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await sendEmailMutation({
                to: "eduardo.gf@hotmail.com",
                subject: 'Email Contact Form - Website BoxHub',
                name: form.name,
                email: form.email,
                message: form.message
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Erro ao enviar email:', error);
        }
    };

    return (
        <section id="contact" className="w-full py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        Contact
                    </h2>
                    <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
                        We'd love to connect with you. Send a message or reach out directly!
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {submitted && (
                            <div className="mt-4 text-green-600 font-medium">
                                Thank you for your message! We will get back to you within 24 hours.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                            disabled={submitted}
                        >
                            {submitted ? 'Thank you!' : 'Send Message'}
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-4 text-gray-700">
                        <p className="text-base md:text-lg">
                            🌐 Website: <a href="https://piresbuilders.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">piresbuilders.com</a>
                        </p>
                        <p className="text-base md:text-lg">
                            📧 Email: <a href="mailto:the@piresbuilders.com" className="text-gray-600 hover:underline">the@piresbuilders.com</a>
                        </p>
                        <p className="text-base md:text-lg">
                            📞 Phone: <a href="tel:+18573507504" className="text-gray-600 hover:underline">+1 (857)350-7504</a>
                        </p>
                        <p className="text-base text-gray-500 pt-4">
                            Support available Monday to Friday, 9 AM to 6 PM (MT)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
