import React from 'react'
import { useRouter } from 'next/router'

function Post() {
  const router = useRouter()
  return (
    <>
      <h3>Router query: {JSON.stringify(router.query)}</h3>
    </>
  )
}

export default Post
