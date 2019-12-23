require("dotenv").config();

import { typeDefs } from "./generated/prisma-client/prisma-schema";
import { models, ClientConstructor, Prisma } from "./generated/prisma-client";
import { makePrismaClientClass } from "prisma-client-lib";

const PrismaClient = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SERVICE_SECRET
});

export const client = new PrismaClient();
