# NextJS workshop, part IV: Builds, deployments, & analytics

### Builds

Run a local build manually to see the hybrid build architecture summarized in your terminal:

```
$ npx next build
```

### Deployments

There are several ways to deploy a NextJS app, but Vercel is built to handle all of the crazy hybrid deployment options out of the box:

1. Create a Vercel account
1. Install the Vercel CLI: `$ npm i -g vercel`
1. Log in to your new Vercel account: `$ vercel login`
1. The deploy-to-Vercel command is... `$ vercel` (from the project root)

There are also integrations with GitHub, Bitbucket, and GitLab for automated preview and production deployments.

#### Adding the env vars:

Let's avoid having our email scraped by bots by hiding it in an environment variable

- Create a new file at the project root, `.env.local`
- Add your email: `MY_EMAIL=demo@example.com`
- Replace `demo@example.com` with `process.env.MY_EMAIL` in `pages/api/my-email.js`

This should now provide your email locally. For preview/production via Vercel, add the environment variable to the project settings:

![Project settings environment variables](/docs/vercel-project-settings-env-vars.png)

You'll need to add the environment variable and then re-deploy for the updates to take effect.

### Analytics

There's a NextJS plugin for [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer). To set up, create the following (custom webpack config)[https://nextjs.org/docs/api-reference/next.config.js/introduction]:

```
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})
```
