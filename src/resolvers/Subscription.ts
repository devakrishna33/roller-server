import { client } from "../prisma";

export const Subscription = {
  me: {
    subscribe: async (_parent, _args, { authId }) => {
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
  },
  getFeed: {
    subscribe: async (_parent, _args, { authId }) => {
      return authId
        ? client.$subscribe
            .post({
              node: {
                serious_some: {
                  id: authId
                }
              },
              mutation_in: ["UPDATED", "CREATED", "DELETED"]
            })
            .node()
        : null;
    }
  }
};
