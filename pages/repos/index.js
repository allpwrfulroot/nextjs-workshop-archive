import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

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
  repos: PropTypes.array.isRequired,
}

export async function getServerSideProps() {
  const reposList = await fetch('https://api.github.com/orgs/vercel/repos')
  const json = await reposList.json()
  return {
    props: { repos: json }, // will be passed to the page component as props
  }
}

export default RepoList
