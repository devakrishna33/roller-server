import * as jwt from "jsonwebtoken";
import { Prisma } from "./prisma/generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request: any;
}

export const getAuthenticatedUser = async (request: any, client: Prisma) => {
  const header: string = !!request.request
    ? request.request.headers.authorization
    : request.connection?.context.Authorization;
  if (!!header) {
    const token: string = header.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
    let user = await client.user({ id: decoded.id });
    return user;
  }
};

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}
