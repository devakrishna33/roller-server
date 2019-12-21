import { client } from "../../prisma";

export default {
  async createPost(_parent, { photo, content, title, lat, lng }, { authId }) {
    if (!authId) return null;
    return await client.createPost({
      photo,
      content,
      title,
      author: {
        connect: {
          id: authId
        }
      },
      serious: {
        connect: {
          id: authId
        }
      },
      numberOfSerious: 1,
      location: {
        create: {
          lng,
          lat
        }
      }
    });
  },
  async deletePost(_parent, { id }, { authId }) {
    if (!authId) return null;
    const postExists = await client.$exists.post({
      id,
      author: authId
    });
    if (postExists) {
      return await client.deletePost({
        id
      });
    }
    return null;
  },
  async getPost(_parent, { id }) {
    return await client.post({
      id
    });
  }
};
