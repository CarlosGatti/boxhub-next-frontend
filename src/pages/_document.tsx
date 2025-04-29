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
          <meta property="og:site_name" content="BoxHub" />
          <meta property="og:title" content="BoxHub" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="BoxHub is a platform for creating and managing communities and groups."
          />
          <meta
            property="og:description"
            content="BoxHub is a platform for creating and managing communities and groups."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="#" />
          <meta name="copyright" content="© Developed by CSA" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="icon" href="/rh-blue.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
