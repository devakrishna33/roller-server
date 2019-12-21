import { client } from "../prisma";

export const Query = {
  me(parent, args, { authId }) {
    return authId ? client.user({ id: authId }) : null;
  },
  async projects(_paernt) {
    console.log("hi");
    return await client.projects();
  },
  async trending(_parent, _args, { authId }) {
    return await client.posts({
      orderBy: "numberOfSerious_DESC",
      first: 10
    });
  },
  async getPosts(_parent, _args) {
    return await client.post({
      id: "5dfe2964be07770007f6012c"
    });
  }
};
