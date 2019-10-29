import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

<<<<<<< HEAD
function Blog({ repos }) {
  return (
    <>
      <h3>NextJS repos on GitHub:</h3>
=======
function Blog() {
  return (
    <>
      <h3>Blog posts placeholder</h3>
>>>>>>> master
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

<<<<<<< HEAD
Blog.propTypes = {
  repos: PropTypes.array.isRequired,
}

Blog.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/orgs/zeit/repos')
  const json = await res.json()
  return { repos: json }
}

=======
>>>>>>> master
export default Blog
