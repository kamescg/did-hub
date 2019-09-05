import http from 'http'
import { bodyParserGraphQL } from 'body-parser-graphql'
import { graphiqlExpress } from 'graphql-server-express'

import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

// Serivces
import CoreSchema from './graphql/core/schema'
const graphqlHTTP = require('express-graphql')

const app = express(apiRoot, api)
const server = http.createServer(app)

mongoose.connect(mongo.uri)
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

app.use(
  '/api',
  bodyParserGraphQL(),
  graphqlHTTP(req => ({
    schema: CoreSchema
  }))
)

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/api' })
)

export default app
