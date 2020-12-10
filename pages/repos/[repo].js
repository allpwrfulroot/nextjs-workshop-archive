import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

function RepoDetails({ name, stars }) {
  if (!name || !stars) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h3>
        PSA: {name} now has {stars} stars on GitHub
      </h3>
    </>
  )
}

RepoDetails.propTypes = {
  name: PropTypes.string,
  stars: PropTypes.number,
}

export async function getStaticProps(context) {
  const { params } = context
  const repoInfo = await fetch(
    `https://api.github.com/repos/vercel/${params.repo}`
  )
  const json = await repoInfo.json()
  return {
    props: {
      stars: json.stargazers_count,
      name: json.name,
    },
  }
}

export async function getStaticPaths() {
  const reposList = await fetch('https://api.github.com/orgs/vercel/repos')
  const json = await reposList.json()
  const topTen = json.splice(0, 10)
  const topPaths = topTen.map((t) => ({ params: { repo: t.name } }))
  return {
    paths: topPaths, // prerendering the first 10 repos from list
    fallback: true, // true because some possible paths not prerendered
  }
}

export default RepoDetails
