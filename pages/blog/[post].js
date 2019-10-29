import React from 'react'
import fetch from 'isomorphic-unfetch'

function Post({ name, stars }) {
  return (
    <>
      <h3>
        PSA: {name} now has {stars} stars on GitHub
      </h3>
    </>
  )
}

Post.getInitialProps = async ctx => {
  const { query } = ctx
  const res = await fetch(`https://api.github.com/repos/zeit/${query.post}`)
  const json = await res.json()
  return { stars: json.stargazers_count, name: json.name }
}

export default Post
