// @ts-check
const pkg = require('./package.json');

/**
 * @type {import('next').NextConfig}
 **/

const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

module.exports = withConfig({
  env: {
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    APP_VERSION: pkg.version,
    APP_LICENSE: pkg.license,
    HOMEPAGE: pkg.homepage,
    BUG_TRACKER: pkg.bugs,
    REPOSITORY_URL: pkg.repository.url,
    COMMIT_HASH: process.env.COMMIT_HASH || 'unknown'
  }
});
