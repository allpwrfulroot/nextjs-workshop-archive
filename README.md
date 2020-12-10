# NextJS workshop, part III: Data fetching options & API routes

### Data fetching options: SSR

Let's say we have a page that lists data that gets updated frequently (not realtime, but close), or perhaps the page doesn't get requested often enough to make good use of a cache.

For this, we'll use NextJS's server-side rendering capabilities. By adding a `getServerSideProps` function, NextJS will know that we want a

Note: You'll hardly ever use this, typically you'll use `getStaticProps` with a `revalidate` option for [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching), but for demo purposes we're going for it

```
// Add these to /pages/repos/index.js:
...
// just after import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
...
// just before default export RepoList
export async function getServerSideProps() {
  const reposList = await fetch('https://api.github.com/orgs/vercel/repos')
  const json = await reposList.json()
  return {
    props: { repos: json },
  }
}
```

### Data fetching options: SSG

Now we'll use NextJS build settings to statically generate pages, to ideally serve from a CDN.

```
// Add these to /pages/repos/[repo].js:
...
// just after import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
...

// just before default export RepoDetails
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
```

There's a lot going on here! Check out [the docs](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) for more info and options

### API routes

Who doesn't want instance microservices to support their app? This is especially great for adding functionality while protecting your processes and secrets/variables. In this case, let's make a little demo that will serve a contact email address!

```
// create new file: /pages/api/my-email.js
export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({ email: 'demo@example.com' }))
}
```

```
// Update /pages/contact.js
import React, { useState } from 'react'
import { Button } from 'components'

function Contact() {
  const [email, setEmail] = useState('unknown')

  const getEmail = async () => {
    try {
      const res = await fetch('/api/my-email')
      const json = await res.json()
      setEmail(json.email)
    } catch (err) {
      console.log('err: ', err)
    }
  }

  return (
    <>
      <p>Contact email: {email}</p>
      <Button label="Get the email!" onClick={getEmail} />
    </>
  )
}

export default Contact
```

You can, of course, do a lot with this! Common use cases include auth utilities and fetching protected data.
