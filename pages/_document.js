import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet()       
      const originalRenderPage = ctx.renderPage

      // Run the React rendering logic synchronously
      try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
              enhanceComponent: (Component) => Component
            })
    
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
  }
  

  render() {
      return (
        <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="overflow-x-hidden antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
      );
  };
}

export default MyDocument
