import { client } from "../../prisma";

export default {
  async allProjects(_paernt, { page, rowsPerPage }, { authId }) {
    if (!authId) {
      return null;
    }
    return client.projects({
      skip: page * rowsPerPage,
      first: rowsPerPage
    });
  },
  async createProject(
    _parent,
    {
      data: {
        location: { lat, lng },
        ...rest
      }
    }: any,
    { authId }
  ) {
    return await client.createProject({
      ...rest,
      author: {
        connect: {
          id: authId
        }
      },
      location: {
        create: {
          lat,
          lng
        }
      }
    });
  }
};
