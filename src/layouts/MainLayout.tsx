import Head from 'next/head'

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[]
  headTitle: string
  metaName: string
  metaContent: string
}

export function MainLayout({
  children,
  headTitle,
  metaName,
  metaContent,
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name={metaName} content={metaContent} />
      </Head>
      {children}
    </>
  )
}
