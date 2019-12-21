import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { client } from "../../prisma";

export default {
  async signUp(
    _parent,
    { data: { password, ...details } }: { data: any },
    _ctx
  ) {
    const encryptedPassword = await bcrypt.hash(password, 10);
    console.log("hi");
    const user = await client.createUser({
      ...details,
      password: encryptedPassword
    });
    console.log(user);

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
    console.log("hi");

    return {
      token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
      user
    };
  }
};
