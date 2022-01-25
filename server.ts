import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema'
import rootValue from './graphql/rootValue/rootValue'
import cors from 'cors'
import { graphqlUploadExpress, GraphQLUpload } from 'graphql-upload'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5500

app.use(
  '/graphql',
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP({
    schema,
    rootValue: { ...rootValue, Upload: GraphQLUpload },
    graphiql: true,
  })
)

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT)
})
