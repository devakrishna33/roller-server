import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { client } from "../../prisma";

export default {
  async signUp(_parent, args, _ctx) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await client.createUser({ ...args, password });

    return {
      token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
      user
    };
  },

  async signIn(_parent, { email, password }, _ctx) {
    const user = await client.user({ email });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
      user
    };
  }
};
