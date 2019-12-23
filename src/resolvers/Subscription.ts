import { client } from "../prisma";

export const Subscription = {
  me: {
    subscribe: async (_parent, _args, { authId }) => {
      console.log(authId);
      return authId
        ? client.$subscribe
            .user({
              node: {
                id: authId
              },
              mutation_in: ["UPDATED", "CREATED", "DELETED"]
            })
            .node()
        : null;
    },
    resolve: payload => {
      return payload;
    }
  }
};
