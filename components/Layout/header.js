import React, { memo } from 'react'
import styled from 'styled-components'

import NavLink from './nav-link'

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.typography.accent};
`

const Nav = styled.nav`
  display: flex;
`

function Header() {
  return (
    <>
      <Logo>Hello, ReactDC</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </Nav>
    </>
  )
}

export default memo(Header)
