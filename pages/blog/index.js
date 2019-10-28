import React from 'react'
import Link from 'next/link'

function Blog() {
  return (
    <>
      <h3>Blog posts placeholder</h3>
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

export default Blog
