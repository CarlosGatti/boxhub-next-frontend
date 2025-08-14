import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

import { BlogPostWithContent } from '../../lib/blog/types'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'

interface PostContentProps {
  post: BlogPostWithContent
}

// Custom components for MDX rendering
const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-gray-700" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-700" {...props} />
  ),
  a: (props: any) => (
    <Link 
      {...props} 
      className="text-orange-600 hover:text-orange-700 underline transition-colors"
    />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 mb-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  img: (props: any) => (
    <div className="my-6">
      <Image
        src={props.src}
        alt={props.alt || ''}
        width={800}
        height={400}
        className="rounded-lg shadow-md"
      />
    </div>
  )
}
// ...imports iguais

export function PostContent({ post }: PostContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back to Blog Button */}
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-block px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{post.description}</p>

        <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{post.formattedDate}</time>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          )}
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote {...post.mdxSource} components={components} />
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Published on <time dateTime={post.date}>{post.formattedDate}</time>
          </div>
          <Link href="/blog" className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </footer>
    </article>
  )
}
