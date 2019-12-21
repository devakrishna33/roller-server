import { client } from "../prisma";

export const Query = {
  me(parent, args, { authId }) {
    return authId ? client.user({ id: authId }) : null;
  },
  async projects(_paernt) {
    return await client.projects();
  },
  async trending(_parent, _args, { authId }) {
    return await client.posts({
      orderBy: "numberOfSerious_DESC",
      first: 10
    });
  },
  async getPosts(_parent, _args, { authId }) {
    return await client.posts();
  },
  async getLocations(_parent, _args, _ctx) {
    return await client.posts({
      orderBy: "numberOfSerious_DESC"
    });
  }
};
