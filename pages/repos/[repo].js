import React from 'react'
import { useRouter } from 'next/router'

function RepoDetails() {
  const { query } = useRouter()

  return <p>name: {query.repo}</p>
}

export default RepoDetails
