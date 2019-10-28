import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

const Container = styled.div`
  max-width: 550px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1em;

  @media (min-width: 1020px) {
    max-width: 810px;
  }

  @media (min-width: 1420px) {
    max-width: 960px;
  }
`

const Page = styled.div`
  flex: 1;
  margin-top: 1em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.05);
`

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Page>{children}</Page>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
