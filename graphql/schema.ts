import { buildSchema } from 'graphql'

const schema = buildSchema(`
    scalar Upload

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
    
    type Post {
        uid: String
        user: Int
        content: String
        image_url: String
    }

    type Query {
        signin(user: ConnectInput!): ConnectInfo!
        verifyToken(token: String!): Boolean!
        getPosts: [Post]!
    }
    type Mutation {
        signup(user: SignupInput!): User!
        addPost(post: String!, file: Upload): String!
    }
`)

export = schema
