import { client } from "../prisma";

export const User = {
  projects({ id }, _args, _ctx) {
    return client.user({ id }).projects();
  }
};
