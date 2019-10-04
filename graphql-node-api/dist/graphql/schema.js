"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'Jõao',
        email: 'joao@email.com'
    },
    {
        id: 2,
        name: 'Junior',
        email: 'junior@email.com'
    }
];
const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query{
        allUsers: [User]
    }
`;
const resolvers = {
    Query: {
        allUsers: () => users
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
