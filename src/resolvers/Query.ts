import { client } from "../prisma";

export const Query = {
  me(parent, args, { authId }) {
    return authId ? client.user({ id: authId }) : null;
  },
  async projects(_paernt, { page, rowsPerPage }, { authId }) {
    if (!authId) {
      return null;
    }
    return client.projects({
      skip: page * rowsPerPage,
      first: rowsPerPage
    });
  }
};
