import { client } from "../../prisma";

export default {
  async updateProfile(_parent, args, { authId }) {
    return authId
      ? await client.updateUser({
          where: {
            id: authId
          },
          data: {
            ...args
          }
        })
      : null;
  }
};
