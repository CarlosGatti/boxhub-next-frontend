// lib/blog/types.ts
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string              // ISO (ex: 2025-08-14)
  author: string
  tags: string[]
  coverImage: string
  content: string           // MDX cru (opcional manter para build)
  readingTime?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string              // ISO
  author: string
  tags: string[]
  coverImage: string
  readingTime?: string
  formattedDate?: string    // <<< NEW: string pronta para exibir (SSR == Client)
}

export interface BlogPostWithContent extends BlogPostMeta {
  content?: string                          // pode manter opcional
  mdxSource: MDXRemoteSerializeResult       // <<< NEW: usado pelo MDXRemote
}
