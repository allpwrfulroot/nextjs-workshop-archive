# NextJS workshop, part II: Next Router and Link

NextJS has components for making client-side routing easy: `next/link` and `next/router`

### Link

Client-side transitions are assisted with a special [Link component](https://nextjs.org/docs/api-reference/next/link):

```
// Update NavLink on /components/Layout/nav-link.js
import Link from 'next/link'
...
function NavLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  )
}
```

### Router

NextJS also has its own [Router component](https://nextjs.org/docs/api-reference/next/router). Let's use the `useRouter` hook to highlight NavLink when we're on its page:

```
// Update NavLink on /components/Layout/nav-link.js
import { useRouter } from 'next/router'
...
function NavLink({ href, children }) {
  const { pathname } = useRouter()
  const path = pathname.split('/')[1]
  const isActive = path ? href.includes(path) : href === '/'
  return (
    <Link href={href} passHref>
      <StyledLink isActive={isActive}>{children}</StyledLink>
    </Link>
  )
}
```

### Dynamic routes

For a long list of blog posts or products, for example, you won't know the page data ahead of time even through all of the page "scaffolding" will be the same. We can handle that easy!

```
// create new file: /pages/repos/index.js
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

RepoList.defaultProps = {
  repos: [{
    id: 0, name: 'demo1'
    id: 1, name: 'demo2'
  }],
}

export default RepoList
```

```
// create new file: /pages/repos/[repo].js
import React from 'react'
import PropTypes from 'prop-types'

function RepoDetails({ name, stars = 3 }) {
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
```

Bonus question: Can you nest multiple dynamic routes?
