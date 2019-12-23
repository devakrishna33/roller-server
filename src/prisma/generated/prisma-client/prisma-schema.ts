// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateAnnotation {
  count: Int!
}

type AggregatePoint {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Annotation {
  id: ID!
  name: String!
  project: Project
  groups(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  parent: Annotation
  points(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Point!]
  isLeaf: Boolean!
}

type AnnotationConnection {
  pageInfo: PageInfo!
  edges: [AnnotationEdge]!
  aggregate: AggregateAnnotation!
}

input AnnotationCreateInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutAnnotationsInput
  groups: AnnotationCreateManyWithoutParentInput
  parent: AnnotationCreateOneWithoutGroupsInput
  points: PointCreateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationCreateManyWithoutParentInput {
  create: [AnnotationCreateWithoutParentInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateManyWithoutProjectInput {
  create: [AnnotationCreateWithoutProjectInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateOneWithoutGroupsInput {
  create: AnnotationCreateWithoutGroupsInput
  connect: AnnotationWhereUniqueInput
}

input AnnotationCreateOneWithoutPointsInput {
  create: AnnotationCreateWithoutPointsInput
  connect: AnnotationWhereUniqueInput
}

input AnnotationCreateWithoutGroupsInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutAnnotationsInput
  parent: AnnotationCreateOneWithoutGroupsInput
  points: PointCreateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationCreateWithoutParentInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutAnnotationsInput
  groups: AnnotationCreateManyWithoutParentInput
  points: PointCreateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationCreateWithoutPointsInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutAnnotationsInput
  groups: AnnotationCreateManyWithoutParentInput
  parent: AnnotationCreateOneWithoutGroupsInput
  isLeaf: Boolean
}

input AnnotationCreateWithoutProjectInput {
  id: ID
  name: String!
  groups: AnnotationCreateManyWithoutParentInput
  parent: AnnotationCreateOneWithoutGroupsInput
  points: PointCreateManyWithoutParentInput
  isLeaf: Boolean
}

type AnnotationEdge {
  node: Annotation!
  cursor: String!
}

enum AnnotationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  isLeaf_ASC
  isLeaf_DESC
}

type AnnotationPreviousValues {
  id: ID!
  name: String!
  isLeaf: Boolean!
}

input AnnotationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isLeaf: Boolean
  isLeaf_not: Boolean
  AND: [AnnotationScalarWhereInput!]
  OR: [AnnotationScalarWhereInput!]
  NOT: [AnnotationScalarWhereInput!]
}

type AnnotationSubscriptionPayload {
  mutation: MutationType!
  node: Annotation
  updatedFields: [String!]
  previousValues: AnnotationPreviousValues
}

input AnnotationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnnotationWhereInput
  AND: [AnnotationSubscriptionWhereInput!]
}

input AnnotationUpdateInput {
  name: String
  project: ProjectUpdateOneWithoutAnnotationsInput
  groups: AnnotationUpdateManyWithoutParentInput
  parent: AnnotationUpdateOneWithoutGroupsInput
  points: PointUpdateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationUpdateManyDataInput {
  name: String
  isLeaf: Boolean
}

input AnnotationUpdateManyMutationInput {
  name: String
  isLeaf: Boolean
}

input AnnotationUpdateManyWithoutParentInput {
  create: [AnnotationCreateWithoutParentInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  set: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutParentInput!]
  deleteMany: [AnnotationScalarWhereInput!]
  updateMany: [AnnotationUpdateManyWithWhereNestedInput!]
}

input AnnotationUpdateManyWithoutProjectInput {
  create: [AnnotationCreateWithoutProjectInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  set: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [AnnotationScalarWhereInput!]
  updateMany: [AnnotationUpdateManyWithWhereNestedInput!]
}

input AnnotationUpdateManyWithWhereNestedInput {
  where: AnnotationScalarWhereInput!
  data: AnnotationUpdateManyDataInput!
}

input AnnotationUpdateOneWithoutGroupsInput {
  create: AnnotationCreateWithoutGroupsInput
  update: AnnotationUpdateWithoutGroupsDataInput
  upsert: AnnotationUpsertWithoutGroupsInput
  delete: Boolean
  disconnect: Boolean
  connect: AnnotationWhereUniqueInput
}

input AnnotationUpdateOneWithoutPointsInput {
  create: AnnotationCreateWithoutPointsInput
  update: AnnotationUpdateWithoutPointsDataInput
  upsert: AnnotationUpsertWithoutPointsInput
  delete: Boolean
  disconnect: Boolean
  connect: AnnotationWhereUniqueInput
}

input AnnotationUpdateWithoutGroupsDataInput {
  name: String
  project: ProjectUpdateOneWithoutAnnotationsInput
  parent: AnnotationUpdateOneWithoutGroupsInput
  points: PointUpdateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationUpdateWithoutParentDataInput {
  name: String
  project: ProjectUpdateOneWithoutAnnotationsInput
  groups: AnnotationUpdateManyWithoutParentInput
  points: PointUpdateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationUpdateWithoutPointsDataInput {
  name: String
  project: ProjectUpdateOneWithoutAnnotationsInput
  groups: AnnotationUpdateManyWithoutParentInput
  parent: AnnotationUpdateOneWithoutGroupsInput
  isLeaf: Boolean
}

input AnnotationUpdateWithoutProjectDataInput {
  name: String
  groups: AnnotationUpdateManyWithoutParentInput
  parent: AnnotationUpdateOneWithoutGroupsInput
  points: PointUpdateManyWithoutParentInput
  isLeaf: Boolean
}

input AnnotationUpdateWithWhereUniqueWithoutParentInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutParentDataInput!
}

input AnnotationUpdateWithWhereUniqueWithoutProjectInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutProjectDataInput!
}

input AnnotationUpsertWithoutGroupsInput {
  update: AnnotationUpdateWithoutGroupsDataInput!
  create: AnnotationCreateWithoutGroupsInput!
}

input AnnotationUpsertWithoutPointsInput {
  update: AnnotationUpdateWithoutPointsDataInput!
  create: AnnotationCreateWithoutPointsInput!
}

input AnnotationUpsertWithWhereUniqueWithoutParentInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutParentDataInput!
  create: AnnotationCreateWithoutParentInput!
}

input AnnotationUpsertWithWhereUniqueWithoutProjectInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutProjectDataInput!
  create: AnnotationCreateWithoutProjectInput!
}

input AnnotationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  project: ProjectWhereInput
  groups_some: AnnotationWhereInput
  parent: AnnotationWhereInput
  points_some: PointWhereInput
  isLeaf: Boolean
  isLeaf_not: Boolean
  AND: [AnnotationWhereInput!]
}

input AnnotationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Coordinate {
  lng: Float!
  lat: Float!
}

input CoordinateCreateInput {
  lng: Float!
  lat: Float!
}

input CoordinateCreateOneInput {
  create: CoordinateCreateInput
}

input CoordinateUpdateDataInput {
  lng: Float
  lat: Float
}

input CoordinateUpdateOneRequiredInput {
  create: CoordinateCreateInput
  update: CoordinateUpdateDataInput
  upsert: CoordinateUpsertNestedInput
}

input CoordinateUpsertNestedInput {
  update: CoordinateUpdateDataInput!
  create: CoordinateCreateInput!
}

input CoordinateWhereInput {
  lng: Float
  lng_not: Float
  lng_in: [Float!]
  lng_not_in: [Float!]
  lng_lt: Float
  lng_lte: Float
  lng_gt: Float
  lng_gte: Float
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  AND: [CoordinateWhereInput!]
}

scalar DateTime

scalar Long

type Mutation {
  createAnnotation(data: AnnotationCreateInput!): Annotation!
  updateAnnotation(data: AnnotationUpdateInput!, where: AnnotationWhereUniqueInput!): Annotation
  updateManyAnnotations(data: AnnotationUpdateManyMutationInput!, where: AnnotationWhereInput): BatchPayload!
  upsertAnnotation(where: AnnotationWhereUniqueInput!, create: AnnotationCreateInput!, update: AnnotationUpdateInput!): Annotation!
  deleteAnnotation(where: AnnotationWhereUniqueInput!): Annotation
  deleteManyAnnotations(where: AnnotationWhereInput): BatchPayload!
  createPoint(data: PointCreateInput!): Point!
  updatePoint(data: PointUpdateInput!, where: PointWhereUniqueInput!): Point
  updateManyPoints(data: PointUpdateManyMutationInput!, where: PointWhereInput): BatchPayload!
  upsertPoint(where: PointWhereUniqueInput!, create: PointCreateInput!, update: PointUpdateInput!): Point!
  deletePoint(where: PointWhereUniqueInput!): Point
  deleteManyPoints(where: PointWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Point {
  id: ID!
  name: String!
  parent: Annotation
  project: Project
  coordinate: Coordinate!
  color: String!
  size: Int!
  description: String
}

type PointConnection {
  pageInfo: PageInfo!
  edges: [PointEdge]!
  aggregate: AggregatePoint!
}

input PointCreateInput {
  id: ID
  name: String
  parent: AnnotationCreateOneWithoutPointsInput
  project: ProjectCreateOneWithoutPointsInput
  coordinate: CoordinateCreateOneInput!
  color: String
  size: Int
  description: String
}

input PointCreateManyWithoutParentInput {
  create: [PointCreateWithoutParentInput!]
  connect: [PointWhereUniqueInput!]
}

input PointCreateManyWithoutProjectInput {
  create: [PointCreateWithoutProjectInput!]
  connect: [PointWhereUniqueInput!]
}

input PointCreateWithoutParentInput {
  id: ID
  name: String
  project: ProjectCreateOneWithoutPointsInput
  coordinate: CoordinateCreateOneInput!
  color: String
  size: Int
  description: String
}

input PointCreateWithoutProjectInput {
  id: ID
  name: String
  parent: AnnotationCreateOneWithoutPointsInput
  coordinate: CoordinateCreateOneInput!
  color: String
  size: Int
  description: String
}

type PointEdge {
  node: Point!
  cursor: String!
}

enum PointOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  size_ASC
  size_DESC
  description_ASC
  description_DESC
}

type PointPreviousValues {
  id: ID!
  name: String!
  color: String!
  size: Int!
  description: String
}

input PointScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PointScalarWhereInput!]
  OR: [PointScalarWhereInput!]
  NOT: [PointScalarWhereInput!]
}

type PointSubscriptionPayload {
  mutation: MutationType!
  node: Point
  updatedFields: [String!]
  previousValues: PointPreviousValues
}

input PointSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PointWhereInput
  AND: [PointSubscriptionWhereInput!]
}

input PointUpdateInput {
  name: String
  parent: AnnotationUpdateOneWithoutPointsInput
  project: ProjectUpdateOneWithoutPointsInput
  coordinate: CoordinateUpdateOneRequiredInput
  color: String
  size: Int
  description: String
}

input PointUpdateManyDataInput {
  name: String
  color: String
  size: Int
  description: String
}

input PointUpdateManyMutationInput {
  name: String
  color: String
  size: Int
  description: String
}

input PointUpdateManyWithoutParentInput {
  create: [PointCreateWithoutParentInput!]
  delete: [PointWhereUniqueInput!]
  connect: [PointWhereUniqueInput!]
  set: [PointWhereUniqueInput!]
  disconnect: [PointWhereUniqueInput!]
  update: [PointUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [PointUpsertWithWhereUniqueWithoutParentInput!]
  deleteMany: [PointScalarWhereInput!]
  updateMany: [PointUpdateManyWithWhereNestedInput!]
}

input PointUpdateManyWithoutProjectInput {
  create: [PointCreateWithoutProjectInput!]
  delete: [PointWhereUniqueInput!]
  connect: [PointWhereUniqueInput!]
  set: [PointWhereUniqueInput!]
  disconnect: [PointWhereUniqueInput!]
  update: [PointUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [PointUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [PointScalarWhereInput!]
  updateMany: [PointUpdateManyWithWhereNestedInput!]
}

input PointUpdateManyWithWhereNestedInput {
  where: PointScalarWhereInput!
  data: PointUpdateManyDataInput!
}

input PointUpdateWithoutParentDataInput {
  name: String
  project: ProjectUpdateOneWithoutPointsInput
  coordinate: CoordinateUpdateOneRequiredInput
  color: String
  size: Int
  description: String
}

input PointUpdateWithoutProjectDataInput {
  name: String
  parent: AnnotationUpdateOneWithoutPointsInput
  coordinate: CoordinateUpdateOneRequiredInput
  color: String
  size: Int
  description: String
}

input PointUpdateWithWhereUniqueWithoutParentInput {
  where: PointWhereUniqueInput!
  data: PointUpdateWithoutParentDataInput!
}

input PointUpdateWithWhereUniqueWithoutProjectInput {
  where: PointWhereUniqueInput!
  data: PointUpdateWithoutProjectDataInput!
}

input PointUpsertWithWhereUniqueWithoutParentInput {
  where: PointWhereUniqueInput!
  update: PointUpdateWithoutParentDataInput!
  create: PointCreateWithoutParentInput!
}

input PointUpsertWithWhereUniqueWithoutProjectInput {
  where: PointWhereUniqueInput!
  update: PointUpdateWithoutProjectDataInput!
  create: PointCreateWithoutProjectInput!
}

input PointWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  parent: AnnotationWhereInput
  project: ProjectWhereInput
  coordinate: CoordinateWhereInput
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PointWhereInput!]
}

input PointWhereUniqueInput {
  id: ID
}

type Project {
  id: ID!
  name: String!
  description: String
  author: User!
  thumbnail: String
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  updatedAt: DateTime!
  createdAt: DateTime!
  points(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Point!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  name: String!
  description: String
  author: UserCreateOneWithoutProjectsInput!
  thumbnail: String
  annotations: AnnotationCreateManyWithoutProjectInput
  points: PointCreateManyWithoutProjectInput
}

input ProjectCreateManyWithoutAuthorInput {
  create: [ProjectCreateWithoutAuthorInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutAnnotationsInput {
  create: ProjectCreateWithoutAnnotationsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutPointsInput {
  create: ProjectCreateWithoutPointsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutAnnotationsInput {
  id: ID
  name: String!
  description: String
  author: UserCreateOneWithoutProjectsInput!
  thumbnail: String
  points: PointCreateManyWithoutProjectInput
}

input ProjectCreateWithoutAuthorInput {
  id: ID
  name: String!
  description: String
  thumbnail: String
  annotations: AnnotationCreateManyWithoutProjectInput
  points: PointCreateManyWithoutProjectInput
}

input ProjectCreateWithoutPointsInput {
  id: ID
  name: String!
  description: String
  author: UserCreateOneWithoutProjectsInput!
  thumbnail: String
  annotations: AnnotationCreateManyWithoutProjectInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  thumbnail_ASC
  thumbnail_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  description: String
  thumbnail: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  description: String
  author: UserUpdateOneRequiredWithoutProjectsInput
  thumbnail: String
  annotations: AnnotationUpdateManyWithoutProjectInput
  points: PointUpdateManyWithoutProjectInput
}

input ProjectUpdateManyDataInput {
  name: String
  description: String
  thumbnail: String
}

input ProjectUpdateManyMutationInput {
  name: String
  description: String
  thumbnail: String
}

input ProjectUpdateManyWithoutAuthorInput {
  create: [ProjectCreateWithoutAuthorInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneWithoutAnnotationsInput {
  create: ProjectCreateWithoutAnnotationsInput
  update: ProjectUpdateWithoutAnnotationsDataInput
  upsert: ProjectUpsertWithoutAnnotationsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateOneWithoutPointsInput {
  create: ProjectCreateWithoutPointsInput
  update: ProjectUpdateWithoutPointsDataInput
  upsert: ProjectUpsertWithoutPointsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutAnnotationsDataInput {
  name: String
  description: String
  author: UserUpdateOneRequiredWithoutProjectsInput
  thumbnail: String
  points: PointUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutAuthorDataInput {
  name: String
  description: String
  thumbnail: String
  annotations: AnnotationUpdateManyWithoutProjectInput
  points: PointUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutPointsDataInput {
  name: String
  description: String
  author: UserUpdateOneRequiredWithoutProjectsInput
  thumbnail: String
  annotations: AnnotationUpdateManyWithoutProjectInput
}

input ProjectUpdateWithWhereUniqueWithoutAuthorInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutAuthorDataInput!
}

input ProjectUpsertWithoutAnnotationsInput {
  update: ProjectUpdateWithoutAnnotationsDataInput!
  create: ProjectCreateWithoutAnnotationsInput!
}

input ProjectUpsertWithoutPointsInput {
  update: ProjectUpdateWithoutPointsDataInput!
  create: ProjectCreateWithoutPointsInput!
}

input ProjectUpsertWithWhereUniqueWithoutAuthorInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutAuthorDataInput!
  create: ProjectCreateWithoutAuthorInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  author: UserWhereInput
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  annotations_some: AnnotationWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  points_some: PointWhereInput
  AND: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  annotation(where: AnnotationWhereUniqueInput!): Annotation
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation]!
  annotationsConnection(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationConnection!
  point(where: PointWhereUniqueInput!): Point
  points(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Point]!
  pointsConnection(where: PointWhereInput, orderBy: PointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PointConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  annotation(where: AnnotationSubscriptionWhereInput): AnnotationSubscriptionPayload
  point(where: PointSubscriptionWhereInput): PointSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  password: String!
  name: String!
  email: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  password: String!
  name: String!
  email: String!
  projects: ProjectCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  id: ID
  password: String!
  name: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
}

type UserPreviousValues {
  id: ID!
  password: String!
  name: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  password: String
  name: String
  email: String
  projects: ProjectUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  password: String
  name: String
  email: String
}

input UserUpdateOneRequiredWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProjectsDataInput {
  password: String
  name: String
  email: String
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  projects_some: ProjectWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`