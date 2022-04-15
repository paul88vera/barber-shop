const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        haircuts: [Haircut]
    }

    type Haircut {
        _id: ID
        haircutText: String
        username: String
        instructions: String

    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        haircuts(username: String!): [Haircut]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addHaircut(haircutText: String!, instructions: String): Haircut
        deleteHaircut(_id: ID!): User
        deleteInstructions(_id: ID!): Haircut
    }
`;

module.exports = typeDefs;