import { BlogPostMeta, BlogPostWithContent } from './types'

import matter from 'gray-matter'
import path from 'path'

// Use dynamic imports for fs to avoid client-side issues
let fs: any
let postsDirectory: string

// Initialize fs only on server side
if (typeof window === 'undefined') {
  fs = require('fs')
  postsDirectory = path.join(process.cwd(), 'content/blog')
}

// Calculate reading time based on content length
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readingTime} min read`
}

// Get all blog posts metadata (for listing)
export function getBlogPosts(): BlogPostMeta[] {
  // Return empty array if running on client side
  if (typeof window !== 'undefined' || !fs) {
    return []
  }

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory) as string[]
  const allPostsData = fileNames
    .filter((fileName: string) => fileName.endsWith('.mdx'))
    .map((fileName: string) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        tags: data.tags || [],
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content)
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a: BlogPostMeta, b: BlogPostMeta) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPostWithContent | null {
  // Return null if running on client side
  if (typeof window !== 'undefined' || !fs) {
    return null
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Return a placeholder for mdxSource (required by BlogPostWithContent)
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      mdxSource: null as any, // Will be replaced at build time with real MDX source
      author: data.author,
      tags: data.tags || [],
      coverImage: data.coverImage,
      content,
      readingTime: calculateReadingTime(content)
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

// Get all blog post slugs for static generation
export function getBlogPostSlugs(): string[] {
  // Return empty array if running on client side
  if (typeof window !== 'undefined' || !fs) {
    return []
  }

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory) as string[]
  return fileNames
    .filter((fileName: string) => fileName.endsWith('.mdx'))
    .map((fileName: string) => fileName.replace(/\.mdx$/, ''))
}

// Get related posts based on tags
export function getRelatedPosts(currentSlug: string, currentTags: string[], limit: number = 3): BlogPostMeta[] {
  const allPosts = getBlogPosts()
  
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => ({
      ...post,
      tagMatchCount: post.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .filter(post => post.tagMatchCount > 0)
    .sort((a, b) => b.tagMatchCount - a.tagMatchCount)
    .slice(0, limit)
    .map(({ tagMatchCount, ...post }) => post)
} 