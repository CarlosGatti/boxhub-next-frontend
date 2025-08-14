import { GetStaticPaths, GetStaticProps } from 'next'
import { getBlogPost, getBlogPostSlugs } from '../../lib/blog/getPosts'

import { BlogPostWithContent } from '../../lib/blog/types'
import Head from 'next/head'
import { PostContent } from '../../components/blog/PostContent'
import { PublicLayout } from '../../layouts/PublicLayout'
import { serialize } from 'next-mdx-remote/serialize'

interface BlogPostPageProps {
  post: BlogPostWithContent
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pires Builders',
      logo: {
        '@type': 'ImageObject',
        url: 'https://piresbuilders.com/image/brand/pires-logo.png'
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://piresbuilders.com/blog/${post.slug}`
    }
  }

  return (
    <>
      <Head>
        <title>{post.title} | Pires Builders Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://piresbuilders.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.coverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.coverImage} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <PublicLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
            <PostContent post={post} />
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getBlogPostSlugs()
  
  const paths = slugs.map((slug) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string
  const post = getBlogPost(slug)
  if (!post) return { notFound: true }
  if (!post.content) return { notFound: true }

  const mdxSource = await serialize(post.content)

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(post.date))

  return {
    props: {
      post: {
        ...post,
        mdxSource,
        formattedDate, // <<< importante
      },
    },
    revalidate: 3600,
  }
}