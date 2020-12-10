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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default MyApp
