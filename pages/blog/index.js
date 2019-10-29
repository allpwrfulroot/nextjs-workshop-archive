import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

function Blog({ repos }) {
  return (
    <>
      <h3>NextJS repos on GitHub:</h3>
      <ul>
        {repos.map(item => (
          <li key={item.id}>
            <Link href="/blog/[post]" as={`/blog/${item.name}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

Blog.propTypes = {
  repos: PropTypes.array.isRequired,
}

Blog.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/orgs/zeit/repos')
  const json = await res.json()
  return { repos: json }
}

export default Blog
