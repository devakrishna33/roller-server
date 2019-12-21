import { client } from "../../prisma";

export default {
  async createPost(_parent, { photo, content, summary, title }, { authId }) {
    if (!authId) return null;
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
