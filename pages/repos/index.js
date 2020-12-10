import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function RepoList({ repos }) {
  return (
    <>
      <h3>Vercel repos on GitHub:</h3>
      <ul>
        {repos.map((item) => (
          <li key={item.id}>
            <Link href={`/repos/${item.name}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array,
}

// We will fetch this data server-side in the next chapter
RepoList.defaultProps = {
  repos: [
    { id: 0, name: 'apple' },
    { id: 1, name: 'banana' },
  ],
}

export default RepoList
