import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
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
]


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
    Query:{
        allUsers: () => users
    }
}


export default makeExecutableSchema({typeDefs, resolvers});