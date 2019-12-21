import { client } from "../../prisma";

export default {
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
  },
  async editProject(_parent, { data, id }, { authId }) {
    return await client.updateProject({
      where: {
        id
      },
      data
    });
  },
  async markComplete(_parent, { id }, { authId }) {
    if (!authId) return null;
    return await client.updateProject({
      where: {
        id
      },
      data: {
        status: "COMPLETE"
      }
    });
  }
};
