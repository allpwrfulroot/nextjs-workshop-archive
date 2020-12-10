# NextJS workshop, part II: Routing in NextJS

NextJS has a unique system for navigation with file-based routes. There's also the capability for smooth client-side route transitions using Link.

### next/link

You'll notice clicking through the nav menu reloads each page entirely! Not a good experience, let's fix that by using the Link component for proper client-side transitions:

```
// update components/Layout/nav-link.js
import { useRouter } from 'next/router'
...
function NavLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  )
}
```

### next/router

Ideally, the nav links should have styling that reflects which one is active. We can get the pathname from the `useRouter` hook and write some logic for styling:

```
// update components/Layout/nav-link.js
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

What if we had 1000 eCommerce products, and each one needed a page? Would we need 1000 files in `/pages`?

Nope! Sometimes we'll want have have "template" pages that can accommodate different data based on the pathname or query.

Let's make a page that lists the repositories owned by Vercel, and then a dynamic route for a repo details page:

```
// create new file pages/repos/index.js
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
  repos: [
    { id: 0, name: 'apple'},
    { id: 1, name: 'banana'}
  ],
}

export default RepoList
```

```
// create new file pages/repos/[repo].js
import React from 'react'
import { useRouter } from 'next/router'

function RepoDetails() {
  const { query } = useRouter()

  return <p>name: {query.repo}</p>
}

export default RepoDetails
```

```
// update components/Layout/header.js
<NavLink href="/repos">Vercel</NavLink>
```

The brackets for [repo].js indicate a dynamic route. The path parameter will be provided to the page as a query parameter, which can be used for fetching data. Try it out!
