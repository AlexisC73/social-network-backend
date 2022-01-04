import { buildSchema } from 'graphql'

const schema = buildSchema(`

    input SignupInput {
        lastname: String!
        firstname: String!
        email: String!
        password: String!
    }

    type ConnectInfo {
        email: String!
        lastname: String!
        firstname: String!
        uid: String!
        token: String!
    }

    input ConnectInput {
        email: String!
        password: String!
    }

    type User {
        uid: String
        lastname: String
        firstname: String
        password: String
        email: String
        avatar_url: String
        role: Int
    }

    type Query {
        signin(user: ConnectInput!): ConnectInfo!
    }
    type Mutation {
        signup(user: SignupInput!): User!
    }
`)

export = schema
