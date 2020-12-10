const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  analyticsId: process.env.ANALYTICS_ID,
})

module.exports = withBundleAnalyzer({})
