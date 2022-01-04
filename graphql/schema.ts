import { buildSchema } from 'graphql'

const schema = buildSchema(`

    input Signup {
        lastname: String!
        firstname: String!
        email: String!
        password: String!
    }

    type Query {
        test: String
    }
    type Mutation {
        signup(user: Signup!): String
    }
`)

export = schema
