import { client } from "../prisma";

export const Project = {
  async author({ id }, _args, _ctx) {
    return await client.project({ id }).author();
  }
};
