import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          {/* Favicon básico */}
          <link rel="icon" href="/favicon.ico" />
          <title>Pires Builders Inc. - Custom Home Builders in Massachusetts</title>
          <meta name="title" content="Pires Builders Inc. - Custom Home Builders in Massachusetts" />
          <meta name="description" content="Pires Builders Inc. is a custom home builder in Massachusetts that specializes in building custom homes and remodeling projects." />


          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Pires Builders Inc. - Custom Home Builders in Massachusetts" />
          <meta property="og:description" content="Pires Builders Inc. is a custom home builder in Massachusetts that specializes in building custom homes and remodeling projects." />
          <meta property="og:image" content="https://www.piresbuildersinc.com/image/drone-cape.jpeg" />


          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Pires Builders Inc. - Custom Home Builders in Massachusetts" />
          <meta property="twitter:description" content="Pires Builders Inc. is a custom home builder in Massachusetts that specializes in building custom homes and remodeling projects." />
          <meta property="og:image" content="https://www.piresbuildersinc.com/image/drone-cape.jpeg" />




        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
