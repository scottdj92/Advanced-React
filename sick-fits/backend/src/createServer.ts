import { GraphQLServer } from "graphql-yoga";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import db from "./db";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = importSchema("src/schema.graphql");
const resolvers = {
    Mutation,
    Query,
};

function createServer() {
    return new GraphQLServer({
        typeDefs,
        resolvers,
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        schema: makeExecutableSchema({ typeDefs, resolvers }),
        context: (req) => ({ ...req, db }),
    });
}

export default createServer;
