import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

/**
 * # MyDocument
 *
 * Static icon stuff, some SEO stuff, hardly ever changes
 *
 * {@link public/icons}
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="application-name"
            content="Nextjs-starter | A GVEMPIRE product"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Nextjs-starter | A GVEMPIRE product"
          />
          <meta name="description" content="TM1 from Nextjs-starter" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://Nextjs-starter.gvempire.dev"
          />
          <meta
            name="twitter:title"
            content="Nextjs-starter | A GVEMPIRE product"
          />
          <meta name="twitter:description" content="TM1 from Nextjs-starter" />
          <meta
            name="twitter:image"
            content="https://Nextjs-starter.gvempire.dev/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Nextjs-starter | A GVEMPIRE product"
          />
          <meta property="og:description" content="TM1 from Nextjs-starter" />
          <meta
            property="og:site_name"
            content="Nextjs-starter | A GVEMPIRE product"
          />
          <meta
            property="og:url"
            content="https://Nextjs-starter.gvempire.dev"
          />
          <meta
            property="og:image"
            content="https://Nextjs-starter.gvempire.dev/icons/apple-touch-icon.png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}
