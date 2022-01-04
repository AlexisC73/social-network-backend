import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema'
import rootValue from './graphql/rootValue/rootValue'

const app = express()

const PORT = process.env.PORT || 5500

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
)

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT)
})
