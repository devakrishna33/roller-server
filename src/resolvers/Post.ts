import { client } from "../prisma";

export const Post = {
  async location({ id }, _args, _ctx) {
    return await client.post({ id }).location();
  }
};
