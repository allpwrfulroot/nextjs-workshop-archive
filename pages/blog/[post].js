import React from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
=======
import { useRouter } from 'next/router'
>>>>>>> master

function Post() {
  const router = useRouter()
  return (
    <>
<<<<<<< HEAD
      <h3>
        PSA: {name} now has {stars} stars on GitHub
      </h3>
=======
      <h3>Router query: {JSON.stringify(router.query)}</h3>
>>>>>>> master
    </>
  )
}

<<<<<<< HEAD
Post.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
}

Post.getInitialProps = async ctx => {
  const { query } = ctx
  const res = await fetch(`https://api.github.com/repos/zeit/${query.post}`)
  const json = await res.json()
  return { stars: json.stargazers_count, name: json.name }
}

=======
>>>>>>> master
export default Post
