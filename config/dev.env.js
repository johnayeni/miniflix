'use strict'
require('dotenv').load();
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_WEB_TASK_URL:`"${process.env.VUE_APP_WEB_TASK_URL}"`,
  VUE_APP_ID_TOKEN_KEY: `"${process.env.VUE_APP_ID_TOKEN_KEY}"`,
  VUE_APP_ACCESS_TOKEN_KEY: `"${process.env.VUE_APP_ACCESS_TOKEN_KEY}"`,
  VUE_APP_CLIENT_ID: `"${process.env.VUE_APP_CLIENT_ID}"`,
  VUE_APP_CLIENT_DOMAIN: `"${process.env.VUE_APP_CLIENT_DOMAIN}"`,
  VUE_APP_REDIRECT: `"${process.env.VUE_APP_REDIRECT}"`,
  VUE_APP_SCOPE: `"${process.env.VUE_APP_SCOPE}"`,
  VUE_APP_AUDIENCE: `"${process.env.VUE_APP_AUDIENCE}"`
})
