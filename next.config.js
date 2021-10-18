const { redirect } = require("next/dist/server/api-utils");

module.exports = {
  path: '/_next/image',
  loader: 'default',

  async redirect
}
