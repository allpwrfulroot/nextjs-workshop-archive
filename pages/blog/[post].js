import React from 'react'
import fetch from 'isomorphic-unfetch'

function Post({ name, stars }) {
  return (
    <>
      <h3>
        PSA: {name} now has {stars} on GitHub
      </h3>
    </>
  )
}

Post.getInitialProps = async ctx => {
  const { query } = ctx
  console.log('query found: ', ctx)
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count, name: json.name }
}

export default Post
