import { Calendar, Clock, User } from 'lucide-react'

import { BlogPostMeta } from '../../lib/blog/types'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
    post: BlogPostMeta
}

export function PostCard({ post }: PostCardProps) {


    const formatDate = (iso: string) =>
        new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
        }).format(new Date(iso));

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Cover Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="inline-block px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-orange-600 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="block">
                        {post.title}
                    </Link>
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                </p>

                {/* Meta Information */}
                <dl
                    className="
    flex flex-wrap items-center gap-x-4 gap-y-2
    text-[13px] leading-5 text-gray-500 mb-4
  "
                    aria-label="Post metadata"
                >
                    {/* Autor */}
                    <div className="flex items-center gap-1.5">
                        <User className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <dt className="sr-only">Author</dt>
                        <dd className="font-medium">{post.author}</dd>
                    </div>

                    {/* Separador */}
                    <span className="hidden sm:inline select-none text-gray-300">•</span>

                    {/* Data */}
                    <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <dt className="sr-only">Published</dt>
                        <dd>
                            <time dateTime={post.date}>
                                {post.formattedDate ??
                                    new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        timeZone: 'UTC',
                                    }).format(new Date(post.date))}
                            </time>
                        </dd>
                    </div>

                    {/* Separador (mostra só se houver reading time) */}
                    {post.readingTime && (
                        <span className="hidden sm:inline select-none text-gray-300">•</span>
                    )}

                    {/* Tempo de leitura */}
                    {post.readingTime && (
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <dt className="sr-only">Reading time</dt>
                            <dd>{post.readingTime}</dd>
                        </div>
                    )}
                </dl>

                {/* Read More Button */}
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    )
} 