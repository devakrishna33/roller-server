import { client } from "../../prisma";

export default {
  async createPost(
    _parent,
    { data: { photo, content, title, location } },
    { authId }
  ) {
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
          ...location
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
  }
};
