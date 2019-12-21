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
  },
  async addSerious(_parent, { id }, { authId }) {
    return authId
      ? await client.updateUser({
          where: {
            id: authId
          },
          data: {
            serious: {
              connect: {
                id
              }
            }
          }
        })
      : null;
  },
  async addTrivial(_parent, { id }, { authId }) {
    return authId
      ? await client.updateUser({
          where: {
            id: authId
          },
          data: {
            serious: {
              connect: {
                id
              }
            }
          }
        })
      : null;
  }
};
