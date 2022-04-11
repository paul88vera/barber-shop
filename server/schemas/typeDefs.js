const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type me {
        _id: ID
        username: String
        email: String
        haircuts: [Haircut]
    }
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
        haricuts(username: String!): [Haircut]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addHaircut(haircutText: String!): Haircut
    }
`;

module.exports = typeDefs;