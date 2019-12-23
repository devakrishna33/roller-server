import { GraphQLServer } from "graphql-yoga";
import { client } from "./src/prisma";
import resolvers from "./src/resolvers";
import { getAuthenticatedUser } from "./src/utils";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: async request => {
    let user = await getAuthenticatedUser(request, client);
    return { authId: user?.id ? user.id : "" };
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
