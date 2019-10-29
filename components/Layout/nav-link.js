import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.accent};
  font-size: 100%;
  font-weight: 700;
  padding: 0.5em 1em;
  transition: all 300ms ease-in;
  cursor: pointer;
  ${({ isActive, theme }) =>
    isActive &&
    `background-color: ${theme.colors.primary}; cursor: default; opacity: 1`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ isActive }) =>
      !isActive && '1px 1px 3px 1px rgba(130, 130, 130, 0.3)'};
  }
`

function NavLink({ href, children }) {
  const { pathname } = useRouter()
  const path = pathname.split('/')[1]
  const isActive = path ? href.includes(path) : href === '/'
  return (
    <Link href={href}>
      <StyledLink isActive={isActive}>{children}</StyledLink>
    </Link>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

NavLink.displayName = 'NavLink'

export default NavLink
