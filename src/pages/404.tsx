import Head from 'next/head'
import Link from 'next/link'

export default function Page404() {
  return (
    <div>
      <Head>
        <title>BoxHub | Page not found.</title>
        <meta name="description" content="página não encontrada" />
      </Head>

      <main>
        <h1>Page not found under construction:)</h1>
        <Link href="/account/login">Login</Link>
        <br />
        <Link href="/feed">feed</Link>
      </main>
    </div>
  )
}
