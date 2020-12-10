# NextJS workshop, part I: Common customizations and options

Most of the time, we want app-wide settings such as a ThemeProvider, layout, or auth wrapper. However, we don't want to have to repeat ourselves for every page.

You can add app-wide components and configs by customizing `_app.js`. For SSR performance, you can customize `_document.js` as well. We'll customize this app to use `styled-components` and have a custom Layout.

You can find examples for `styled-components`, as well as many other popular tools, in the [NextJS GitHub repo](https://github.com/vercel/next.js/tree/canary/examples)

### Module aliasing

Fun tip: we can implement an alias for our 'components' directory:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"]
    }
  }
}
```

### \_app.js

Let's set up our styling, and add "NextJS Demo" to the document head while we're at it:

```
// create new file /pages/_app.js
// See more at https://nextjs.org/docs/advanced-features/custom-app
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, Layout, theme } from 'components'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>NextJS Demo</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
```

### Layout

Add the custom Layout that's been provided in `components`. This will add a Header, Footer, and styled body for all pages:

```
// Update _app.js
import { ..., Layout, ... } from 'components'
...
      <>
        ...
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
```

### \_document.js

Only applicable for SSR, but helps prevent FOUC. This is copied directly from the example in the NextJS repo

```
// create new file: /pages/_document.js
import React from 'react'
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
}
```
