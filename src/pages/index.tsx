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
            <ProjectsGallery />
            <AboutSection />
            <ContactSection />
            <CtaBand />
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
                        Pires Builders Inc delivers top-quality construction and remodeling services across Massachusetts and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/get-started" className="rounded-lg bg-black text-white px-6 py-3 text-sm font-medium hover:bg-brand-orange transition">
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
    const item = (t: string, d: string) => (
        <div className="text-center p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">{t}</h3>
            <p className="text-sm text-gray-600 mt-2">{d}</p>
        </div>
    )
    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Why Pires Builders?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2">Licensed & insured general contractor serving Massachusetts.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {item("Licensed & Insured", "Peace of mind with every project.")}
                    {item("Transparent Pricing", "Clear estimates. No surprises.")}
                    {item("Local Expertise", "We understand Massachusetts codes and permitting.")}
                </div>
            </div>
        </section>
    )
}

function CtaBand() {
    return (
      <section className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold">Ready to start your project?</h3>
          <Link href="/get-started" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-orange-400 transition">
            Get a Free Estimate
          </Link>
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
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                            About Pires Builders
                        </h2>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6 order-2 lg:order-1">
                            <p className="text-gray-600 md:text-lg leading-relaxed">
                                With over a decade of experience in the construction industry, Pires Builders Inc is committed to delivering reliable, high-quality construction and remodeling solutions.
                                Our skilled team takes pride in craftsmanship, attention to detail, and a strong focus on customer satisfaction.
                            </p>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                From custom home builds to residential renovations and commercial improvements, we handle every project with transparency and professionalism.
                                At Pires Builders, we don't just build structures—we build trust and lasting relationships with our clients.
                            </p>
                        </div>
                        
                        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative">
                                <Image
                                    src="/landing/keys-house.jpeg"
                                    alt="Pires Builders construction project"
                                    width={400}
                                    height={300}
                                    className="rounded-xl shadow-xl object-cover w-full max-w-sm"
                                    priority
                                />
                                <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-lg shadow-lg">
                                    <p className="text-sm font-semibold text-gray-900">10+ Years</p>
                                    <p className="text-xs text-gray-600">of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            📧 Email: <a href="mailto:contact@piresbuildersinc.com" className="text-gray-600 hover:underline">contact@piresbuildersinc.com</a>
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

function ProjectsGallery() {
    const projects = [
        {
            id: 1,
            title: "Modern Kitchen Renovation",
            description: "Complete kitchen remodel with custom cabinets and quartz countertops",
            image: "/projects/kitchen-renovation.jpeg",
            category: "Renovation"
        },
        {
            id: 2,
            title: "Custom Home Build",
            description: "3-bedroom contemporary home with open floor plan",
            image: "/projects/home-building-custom.jpg",
            category: "New Construction"
        },
        {
            id: 3,
            title: "Bathroom Remodel",
            description: "Luxury bathroom with walk-in shower and double vanity",
            image: "/projects/bathroom-remodeling.webp",
            category: "Renovation"
        },
        {
            id: 4,
            title: "Addition a New Space",
            description: "Modern office addirenovation with open workspace design",
            image: "/projects/commercial-remodeling.jpg",
            category: "Addition"
        },
        {
            id: 5,
            title: "Deck & Patio Construction",
            description: "Custom outdoor living space with pergola",
            image: "/projects/deck-builders.jpg",
            category: "Outdoor"
        },
        {
            id: 6,
            title: "Basement Finish",
            description: "Complete basement transformation into living space",
            image: "/projects/basement-finish.avif",
            category: "Renovation"
        }
    ];

    return (
        <section id="projects" className="w-full py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Recent Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                        Take a look at some of our latest work and see the quality craftsmanship we bring to every project.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: { id: number; title: string; description: string; image: string; category: string } }) {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="aspect-[3/2] relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                <div className="absolute top-2 left-2">
                    <span className="inline-block px-2 py-1 bg-white text-gray-800 text-xs font-medium rounded-full">
                        {project.category}
                    </span>
                </div>
            </div>
            
            <div className="p-3 bg-white">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                    {project.description}
                </p>
            </div>
        </div>
    );
}
