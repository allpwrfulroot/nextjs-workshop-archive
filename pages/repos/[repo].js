import React from 'react'
import PropTypes from 'prop-types'

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

export default RepoDetails
