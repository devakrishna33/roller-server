import { client } from "../prisma";

export const Query = {
  me(parent, args, { authId }) {
    return authId ? client.user({ id: authId }) : null;
  }
};
