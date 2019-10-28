import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

function Blog({ stars }) {
  return (
    <>
      <h3>PSA: NextJS now has {stars} on GitHub</h3>
      <ul>
        <li>
          <Link href="/blog/[post]" as="/blog/a-meditation-23948298">
            <a>A medidtation on the awesomeness of Typhlosion</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

Blog.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  console.log('json? ', json)
  return { stars: json.stargazers_count }
}

export default Blog
