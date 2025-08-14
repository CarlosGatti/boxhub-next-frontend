import type { BlogPostMeta } from '../../lib/blog/types'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { PostCard } from '../../components/blog/PostCard'
import { PublicLayout } from '../../layouts/PublicLayout'
import { getBlogPosts } from '../../lib/blog/getPosts'

interface BlogPageProps {
  posts: BlogPostMeta[]
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog - Construction Tips & Insights | Pires Builders</title>
        <meta 
          name="description" 
          content="Expert construction tips, renovation guides, and industry insights from Pires Builders. Learn about home improvement, project management, and construction best practices." 
        />
        <meta property="og:title" content="Blog - Construction Tips & Insights | Pires Builders" />
        <meta property="og:description" content="Expert construction tips, renovation guides, and industry insights from Pires Builders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piresbuilders.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Construction Tips & Insights | Pires Builders" />
        <meta name="twitter:description" content="Expert construction tips, renovation guides, and industry insights from Pires Builders." />
      </Head>

      <PublicLayout>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white border-b">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Construction Blog
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Expert tips, industry insights, and practical guides for homeowners and construction professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No posts yet
                </h3>
                <p className="text-gray-600">
                  We're working on some great content. Check back soon!
                </p>
              </div>
            ) : (
              <>
                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Get the latest construction tips, industry insights, and project inspiration delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      Subscribe
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const posts = getBlogPosts()
  return {
    props: { posts },
    revalidate: 3600,
  }
}
