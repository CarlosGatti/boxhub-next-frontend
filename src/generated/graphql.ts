import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type BaseResult = {
  __typename?: 'BaseResult';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  containers?: Maybe<Array<Container>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  containers: Scalars['Int'];
};

export type CategoryCreateNestedManyWithoutContainersInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutContainersInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutContainersInput>>;
};

export type CategoryCreateOrConnectWithoutContainersInput = {
  create: CategoryCreateWithoutContainersInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutContainersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutContainersInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutContainersNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutContainersInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutContainersInput>>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutContainersInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutContainersInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutContainersInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutContainersInput = {
  data: CategoryUpdateWithoutContainersInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutContainersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutContainersInput = {
  create: CategoryCreateWithoutContainersInput;
  update: CategoryUpdateWithoutContainersInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ConstructionLog = {
  __typename?: 'ConstructionLog';
  _count: ConstructionLogCount;
  comments?: Maybe<Array<LogComment>>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  images?: Maybe<Scalars['JSON']>;
  project: Project;
  projectId: Scalars['Int'];
  title: Scalars['String'];
  type: LogType;
  user: User;
  userId: Scalars['Int'];
};

export type ConstructionLogCount = {
  __typename?: 'ConstructionLogCount';
  comments: Scalars['Int'];
};

export type ConstructionLogCreateInput = {
  comments?: InputMaybe<LogCommentCreateNestedManyWithoutLogInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: InputMaybe<Scalars['JSON']>;
  project: ProjectCreateNestedOneWithoutLogsInput;
  title: Scalars['String'];
  type: LogType;
  user: UserCreateNestedOneWithoutConstructionLogsInput;
};

export type ConstructionLogCreateManyProjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Scalars['JSON']>;
  title: Scalars['String'];
  type: LogType;
  userId: Scalars['Int'];
};

export type ConstructionLogCreateManyProjectInputEnvelope = {
  data: Array<ConstructionLogCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ConstructionLogCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Scalars['JSON']>;
  projectId: Scalars['Int'];
  title: Scalars['String'];
  type: LogType;
};

export type ConstructionLogCreateManyUserInputEnvelope = {
  data: Array<ConstructionLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ConstructionLogCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConstructionLogCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ConstructionLogCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ConstructionLogCreateManyProjectInputEnvelope>;
};

export type ConstructionLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConstructionLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ConstructionLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<ConstructionLogCreateManyUserInputEnvelope>;
};

export type ConstructionLogCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ConstructionLogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConstructionLogCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ConstructionLogCreateWithoutCommentsInput>;
};

export type ConstructionLogCreateOrConnectWithoutCommentsInput = {
  create: ConstructionLogCreateWithoutCommentsInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogCreateOrConnectWithoutProjectInput = {
  create: ConstructionLogCreateWithoutProjectInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogCreateOrConnectWithoutUserInput = {
  create: ConstructionLogCreateWithoutUserInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: InputMaybe<Scalars['JSON']>;
  project: ProjectCreateNestedOneWithoutLogsInput;
  title: Scalars['String'];
  type: LogType;
  user: UserCreateNestedOneWithoutConstructionLogsInput;
};

export type ConstructionLogCreateWithoutProjectInput = {
  comments?: InputMaybe<LogCommentCreateNestedManyWithoutLogInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: InputMaybe<Scalars['JSON']>;
  title: Scalars['String'];
  type: LogType;
  user: UserCreateNestedOneWithoutConstructionLogsInput;
};

export type ConstructionLogCreateWithoutUserInput = {
  comments?: InputMaybe<LogCommentCreateNestedManyWithoutLogInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: InputMaybe<Scalars['JSON']>;
  project: ProjectCreateNestedOneWithoutLogsInput;
  title: Scalars['String'];
  type: LogType;
};

export type ConstructionLogListRelationFilter = {
  every?: InputMaybe<ConstructionLogWhereInput>;
  none?: InputMaybe<ConstructionLogWhereInput>;
  some?: InputMaybe<ConstructionLogWhereInput>;
};

export type ConstructionLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConstructionLogRelationFilter = {
  is?: InputMaybe<ConstructionLogWhereInput>;
  isNot?: InputMaybe<ConstructionLogWhereInput>;
};

export type ConstructionLogScalarWhereInput = {
  AND?: InputMaybe<Array<ConstructionLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConstructionLogScalarWhereInput>>;
  OR?: InputMaybe<Array<ConstructionLogScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<JsonNullableFilter>;
  projectId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLogTypeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ConstructionLogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumLogTypeFieldUpdateOperationsInput>;
};

export type ConstructionLogUpdateManyWithWhereWithoutProjectInput = {
  data: ConstructionLogUpdateManyMutationInput;
  where: ConstructionLogScalarWhereInput;
};

export type ConstructionLogUpdateManyWithWhereWithoutUserInput = {
  data: ConstructionLogUpdateManyMutationInput;
  where: ConstructionLogScalarWhereInput;
};

export type ConstructionLogUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConstructionLogCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ConstructionLogCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ConstructionLogCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConstructionLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  set?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  update?: InputMaybe<Array<ConstructionLogUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<ConstructionLogUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<ConstructionLogUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ConstructionLogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConstructionLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ConstructionLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<ConstructionLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConstructionLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  set?: InputMaybe<Array<ConstructionLogWhereUniqueInput>>;
  update?: InputMaybe<Array<ConstructionLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ConstructionLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ConstructionLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<ConstructionLogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConstructionLogCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ConstructionLogCreateWithoutCommentsInput>;
  update?: InputMaybe<ConstructionLogUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<ConstructionLogUpsertWithoutCommentsInput>;
};

export type ConstructionLogUpdateToOneWithWhereWithoutCommentsInput = {
  data: ConstructionLogUpdateWithoutCommentsInput;
  where?: InputMaybe<ConstructionLogWhereInput>;
};

export type ConstructionLogUpdateWithWhereUniqueWithoutProjectInput = {
  data: ConstructionLogUpdateWithoutProjectInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogUpdateWithWhereUniqueWithoutUserInput = {
  data: ConstructionLogUpdateWithoutUserInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Scalars['JSON']>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutLogsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumLogTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConstructionLogsNestedInput>;
};

export type ConstructionLogUpdateWithoutProjectInput = {
  comments?: InputMaybe<LogCommentUpdateManyWithoutLogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumLogTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConstructionLogsNestedInput>;
};

export type ConstructionLogUpdateWithoutUserInput = {
  comments?: InputMaybe<LogCommentUpdateManyWithoutLogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<Scalars['JSON']>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutLogsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumLogTypeFieldUpdateOperationsInput>;
};

export type ConstructionLogUpsertWithWhereUniqueWithoutProjectInput = {
  create: ConstructionLogCreateWithoutProjectInput;
  update: ConstructionLogUpdateWithoutProjectInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogUpsertWithWhereUniqueWithoutUserInput = {
  create: ConstructionLogCreateWithoutUserInput;
  update: ConstructionLogUpdateWithoutUserInput;
  where: ConstructionLogWhereUniqueInput;
};

export type ConstructionLogUpsertWithoutCommentsInput = {
  create: ConstructionLogCreateWithoutCommentsInput;
  update: ConstructionLogUpdateWithoutCommentsInput;
  where?: InputMaybe<ConstructionLogWhereInput>;
};

export type ConstructionLogWhereInput = {
  AND?: InputMaybe<Array<ConstructionLogWhereInput>>;
  NOT?: InputMaybe<Array<ConstructionLogWhereInput>>;
  OR?: InputMaybe<Array<ConstructionLogWhereInput>>;
  comments?: InputMaybe<LogCommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<JsonNullableFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLogTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ConstructionLogWhereUniqueInput = {
  AND?: InputMaybe<Array<ConstructionLogWhereInput>>;
  NOT?: InputMaybe<Array<ConstructionLogWhereInput>>;
  OR?: InputMaybe<Array<ConstructionLogWhereInput>>;
  comments?: InputMaybe<LogCommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<JsonNullableFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLogTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type Container = {
  __typename?: 'Container';
  _count: ContainerCount;
  categories?: Maybe<Array<Category>>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  items?: Maybe<Array<Item>>;
  name: Scalars['String'];
  qrCode: Scalars['String'];
  storage: Storage;
  storageId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ContainerCount = {
  __typename?: 'ContainerCount';
  categories: Scalars['Int'];
  items: Scalars['Int'];
};

export type ContainerCreateManyStorageInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  qrCode: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContainerCreateManyStorageInputEnvelope = {
  data: Array<ContainerCreateManyStorageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContainerCreateNestedManyWithoutStorageInput = {
  connect?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContainerCreateOrConnectWithoutStorageInput>>;
  create?: InputMaybe<Array<ContainerCreateWithoutStorageInput>>;
  createMany?: InputMaybe<ContainerCreateManyStorageInputEnvelope>;
};

export type ContainerCreateOrConnectWithoutStorageInput = {
  create: ContainerCreateWithoutStorageInput;
  where: ContainerWhereUniqueInput;
};

export type ContainerCreateWithoutStorageInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutContainersInput>;
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  items?: InputMaybe<ItemCreateNestedManyWithoutContainerInput>;
  name: Scalars['String'];
  qrCode: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContainerListRelationFilter = {
  every?: InputMaybe<ContainerWhereInput>;
  none?: InputMaybe<ContainerWhereInput>;
  some?: InputMaybe<ContainerWhereInput>;
};

export type ContainerRelationFilter = {
  is?: InputMaybe<ContainerWhereInput>;
  isNot?: InputMaybe<ContainerWhereInput>;
};

export type ContainerScalarWhereInput = {
  AND?: InputMaybe<Array<ContainerScalarWhereInput>>;
  NOT?: InputMaybe<Array<ContainerScalarWhereInput>>;
  OR?: InputMaybe<Array<ContainerScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  qrCode?: InputMaybe<StringFilter>;
  storageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ContainerUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  qrCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContainerUpdateManyWithWhereWithoutStorageInput = {
  data: ContainerUpdateManyMutationInput;
  where: ContainerScalarWhereInput;
};

export type ContainerUpdateManyWithoutStorageNestedInput = {
  connect?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContainerCreateOrConnectWithoutStorageInput>>;
  create?: InputMaybe<Array<ContainerCreateWithoutStorageInput>>;
  createMany?: InputMaybe<ContainerCreateManyStorageInputEnvelope>;
  delete?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContainerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  set?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  update?: InputMaybe<Array<ContainerUpdateWithWhereUniqueWithoutStorageInput>>;
  updateMany?: InputMaybe<Array<ContainerUpdateManyWithWhereWithoutStorageInput>>;
  upsert?: InputMaybe<Array<ContainerUpsertWithWhereUniqueWithoutStorageInput>>;
};

export type ContainerUpdateWithWhereUniqueWithoutStorageInput = {
  data: ContainerUpdateWithoutStorageInput;
  where: ContainerWhereUniqueInput;
};

export type ContainerUpdateWithoutStorageInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutContainersNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemUpdateManyWithoutContainerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  qrCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContainerUpsertWithWhereUniqueWithoutStorageInput = {
  create: ContainerCreateWithoutStorageInput;
  update: ContainerUpdateWithoutStorageInput;
  where: ContainerWhereUniqueInput;
};

export type ContainerWhereInput = {
  AND?: InputMaybe<Array<ContainerWhereInput>>;
  NOT?: InputMaybe<Array<ContainerWhereInput>>;
  OR?: InputMaybe<Array<ContainerWhereInput>>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  items?: InputMaybe<ItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  qrCode?: InputMaybe<StringFilter>;
  storage?: InputMaybe<StorageRelationFilter>;
  storageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ContainerWhereUniqueInput = {
  AND?: InputMaybe<Array<ContainerWhereInput>>;
  NOT?: InputMaybe<Array<ContainerWhereInput>>;
  OR?: InputMaybe<Array<ContainerWhereInput>>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  items?: InputMaybe<ItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  qrCode?: InputMaybe<StringFilter>;
  storage?: InputMaybe<StorageRelationFilter>;
  storageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateUserWithoutPassword = {
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type DashboardData = {
  __typename?: 'DashboardData';
  recentContainers: Array<RecentContainer>;
  totalContainers: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalStorages: Scalars['Int'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum DocumentType {
  Contract = 'CONTRACT',
  Invoice = 'INVOICE',
  Other = 'OTHER',
  Permit = 'PERMIT',
  Photo = 'PHOTO',
  Plan = 'PLAN'
}

export type EnumDocumentTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<DocumentType>;
};

export type EnumDocumentTypeFilter = {
  equals?: InputMaybe<DocumentType>;
  in?: InputMaybe<Array<DocumentType>>;
  not?: InputMaybe<NestedEnumDocumentTypeFilter>;
  notIn?: InputMaybe<Array<DocumentType>>;
};

export type EnumLogActionFieldUpdateOperationsInput = {
  set?: InputMaybe<LogAction>;
};

export type EnumLogActionFilter = {
  equals?: InputMaybe<LogAction>;
  in?: InputMaybe<Array<LogAction>>;
  not?: InputMaybe<NestedEnumLogActionFilter>;
  notIn?: InputMaybe<Array<LogAction>>;
};

export type EnumLogTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<LogType>;
};

export type EnumLogTypeFilter = {
  equals?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  not?: InputMaybe<NestedEnumLogTypeFilter>;
  notIn?: InputMaybe<Array<LogType>>;
};

export type EnumPermitKindFieldUpdateOperationsInput = {
  set?: InputMaybe<PermitKind>;
};

export type EnumPermitKindFilter = {
  equals?: InputMaybe<PermitKind>;
  in?: InputMaybe<Array<PermitKind>>;
  not?: InputMaybe<NestedEnumPermitKindFilter>;
  notIn?: InputMaybe<Array<PermitKind>>;
};

export type EnumPermitStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PermitStatus>;
};

export type EnumPermitStatusFilter = {
  equals?: InputMaybe<PermitStatus>;
  in?: InputMaybe<Array<PermitStatus>>;
  not?: InputMaybe<NestedEnumPermitStatusFilter>;
  notIn?: InputMaybe<Array<PermitStatus>>;
};

export type EnumPhotoCategoryFieldUpdateOperationsInput = {
  set?: InputMaybe<PhotoCategory>;
};

export type EnumPhotoCategoryFilter = {
  equals?: InputMaybe<PhotoCategory>;
  in?: InputMaybe<Array<PhotoCategory>>;
  not?: InputMaybe<NestedEnumPhotoCategoryFilter>;
  notIn?: InputMaybe<Array<PhotoCategory>>;
};

export type EnumProjectStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<ProjectStatus>;
};

export type EnumProjectStatusFilter = {
  equals?: InputMaybe<ProjectStatus>;
  in?: InputMaybe<Array<ProjectStatus>>;
  not?: InputMaybe<NestedEnumProjectStatusFilter>;
  notIn?: InputMaybe<Array<ProjectStatus>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumStorageRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<StorageRole>;
};

export type EnumStorageRoleFilter = {
  equals?: InputMaybe<StorageRole>;
  in?: InputMaybe<Array<StorageRole>>;
  not?: InputMaybe<NestedEnumStorageRoleFilter>;
  notIn?: InputMaybe<Array<StorageRole>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Insurance = {
  __typename?: 'Insurance';
  company: Scalars['String'];
  createdAt: Scalars['DateTime'];
  documentUrl: Scalars['String'];
  expiration: Scalars['DateTime'];
  id: Scalars['ID'];
  subcontractor: Subcontractor;
  subcontractorId: Scalars['Int'];
};

export type InsuranceCreateInput = {
  company: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documentUrl: Scalars['String'];
  expiration: Scalars['DateTime'];
  subcontractor: SubcontractorCreateNestedOneWithoutInsurancesInput;
};

export type InsuranceCreateManySubcontractorInput = {
  company: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documentUrl: Scalars['String'];
  expiration: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
};

export type InsuranceCreateManySubcontractorInputEnvelope = {
  data: Array<InsuranceCreateManySubcontractorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InsuranceCreateNestedManyWithoutSubcontractorInput = {
  connect?: InputMaybe<Array<InsuranceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InsuranceCreateOrConnectWithoutSubcontractorInput>>;
  create?: InputMaybe<Array<InsuranceCreateWithoutSubcontractorInput>>;
  createMany?: InputMaybe<InsuranceCreateManySubcontractorInputEnvelope>;
};

export type InsuranceCreateOrConnectWithoutSubcontractorInput = {
  create: InsuranceCreateWithoutSubcontractorInput;
  where: InsuranceWhereUniqueInput;
};

export type InsuranceCreateWithoutSubcontractorInput = {
  company: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documentUrl: Scalars['String'];
  expiration: Scalars['DateTime'];
};

export type InsuranceListRelationFilter = {
  every?: InputMaybe<InsuranceWhereInput>;
  none?: InputMaybe<InsuranceWhereInput>;
  some?: InputMaybe<InsuranceWhereInput>;
};

export type InsuranceWhereInput = {
  AND?: InputMaybe<Array<InsuranceWhereInput>>;
  NOT?: InputMaybe<Array<InsuranceWhereInput>>;
  OR?: InputMaybe<Array<InsuranceWhereInput>>;
  company?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documentUrl?: InputMaybe<StringFilter>;
  expiration?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  subcontractor?: InputMaybe<SubcontractorRelationFilter>;
  subcontractorId?: InputMaybe<IntFilter>;
};

export type InsuranceWhereUniqueInput = {
  AND?: InputMaybe<Array<InsuranceWhereInput>>;
  NOT?: InputMaybe<Array<InsuranceWhereInput>>;
  OR?: InputMaybe<Array<InsuranceWhereInput>>;
  company?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documentUrl?: InputMaybe<StringFilter>;
  expiration?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  subcontractor?: InputMaybe<SubcontractorRelationFilter>;
  subcontractorId?: InputMaybe<IntFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Item = {
  __typename?: 'Item';
  category: Scalars['String'];
  container: Container;
  containerId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ItemCreateManyContainerInput = {
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ItemCreateManyContainerInputEnvelope = {
  data: Array<ItemCreateManyContainerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ItemCreateNestedManyWithoutContainerInput = {
  connect?: InputMaybe<Array<ItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemCreateOrConnectWithoutContainerInput>>;
  create?: InputMaybe<Array<ItemCreateWithoutContainerInput>>;
  createMany?: InputMaybe<ItemCreateManyContainerInputEnvelope>;
};

export type ItemCreateOrConnectWithoutContainerInput = {
  create: ItemCreateWithoutContainerInput;
  where: ItemWhereUniqueInput;
};

export type ItemCreateWithoutContainerInput = {
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ItemListRelationFilter = {
  every?: InputMaybe<ItemWhereInput>;
  none?: InputMaybe<ItemWhereInput>;
  some?: InputMaybe<ItemWhereInput>;
};

export type ItemScalarWhereInput = {
  AND?: InputMaybe<Array<ItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<ItemScalarWhereInput>>;
  OR?: InputMaybe<Array<ItemScalarWhereInput>>;
  category?: InputMaybe<StringFilter>;
  containerId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ItemUpdateManyMutationInput = {
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemUpdateManyWithWhereWithoutContainerInput = {
  data: ItemUpdateManyMutationInput;
  where: ItemScalarWhereInput;
};

export type ItemUpdateManyWithoutContainerNestedInput = {
  connect?: InputMaybe<Array<ItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemCreateOrConnectWithoutContainerInput>>;
  create?: InputMaybe<Array<ItemCreateWithoutContainerInput>>;
  createMany?: InputMaybe<ItemCreateManyContainerInputEnvelope>;
  delete?: InputMaybe<Array<ItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemUpdateWithWhereUniqueWithoutContainerInput>>;
  updateMany?: InputMaybe<Array<ItemUpdateManyWithWhereWithoutContainerInput>>;
  upsert?: InputMaybe<Array<ItemUpsertWithWhereUniqueWithoutContainerInput>>;
};

export type ItemUpdateWithWhereUniqueWithoutContainerInput = {
  data: ItemUpdateWithoutContainerInput;
  where: ItemWhereUniqueInput;
};

export type ItemUpdateWithoutContainerInput = {
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemUpsertWithWhereUniqueWithoutContainerInput = {
  create: ItemCreateWithoutContainerInput;
  update: ItemUpdateWithoutContainerInput;
  where: ItemWhereUniqueInput;
};

export type ItemWhereInput = {
  AND?: InputMaybe<Array<ItemWhereInput>>;
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  OR?: InputMaybe<Array<ItemWhereInput>>;
  category?: InputMaybe<StringFilter>;
  container?: InputMaybe<ContainerRelationFilter>;
  containerId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ItemWhereUniqueInput = {
  AND?: InputMaybe<Array<ItemWhereInput>>;
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  OR?: InputMaybe<Array<ItemWhereInput>>;
  category?: InputMaybe<StringFilter>;
  container?: InputMaybe<ContainerRelationFilter>;
  containerId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type Log = {
  __typename?: 'Log';
  action: LogAction;
  createdAt: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipAddress?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  route?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export enum LogAction {
  ButtonClicked = 'BUTTON_CLICKED',
  ContainerCreated = 'CONTAINER_CREATED',
  ContainerDeleted = 'CONTAINER_DELETED',
  CustomAction = 'CUSTOM_ACTION',
  ItemCreated = 'ITEM_CREATED',
  ItemDeleted = 'ITEM_DELETED',
  ItemUpdated = 'ITEM_UPDATED',
  PageViewed = 'PAGE_VIEWED',
  PasswordReset = 'PASSWORD_RESET',
  RequestPasswordReset = 'REQUEST_PASSWORD_RESET',
  SearchUsed = 'SEARCH_USED',
  StorageCreated = 'STORAGE_CREATED',
  StorageDeleted = 'STORAGE_DELETED',
  SubcontractorCreated = 'SUBCONTRACTOR_CREATED',
  SubcontractorDeleted = 'SUBCONTRACTOR_DELETED',
  SubcontractorUpdated = 'SUBCONTRACTOR_UPDATED',
  SubcontractorViewed = 'SUBCONTRACTOR_VIEWED',
  UserDeleted = 'USER_DELETED',
  UserLogin = 'USER_LOGIN',
  UserLogout = 'USER_LOGOUT',
  UserProfileUpdated = 'USER_PROFILE_UPDATED',
  UserRegistered = 'USER_REGISTERED'
}

export type LogComment = {
  __typename?: 'LogComment';
  _count: LogCommentCount;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  log: ConstructionLog;
  logId: Scalars['Int'];
  replies?: Maybe<Array<LogCommentReply>>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type LogCommentCount = {
  __typename?: 'LogCommentCount';
  replies: Scalars['Int'];
};

export type LogCommentCreateManyLogInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type LogCommentCreateManyLogInputEnvelope = {
  data: Array<LogCommentCreateManyLogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LogCommentCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  logId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LogCommentCreateManyUserInputEnvelope = {
  data: Array<LogCommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LogCommentCreateNestedManyWithoutLogInput = {
  connect?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentCreateOrConnectWithoutLogInput>>;
  create?: InputMaybe<Array<LogCommentCreateWithoutLogInput>>;
  createMany?: InputMaybe<LogCommentCreateManyLogInputEnvelope>;
};

export type LogCommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LogCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<LogCommentCreateManyUserInputEnvelope>;
};

export type LogCommentCreateNestedOneWithoutRepliesInput = {
  connect?: InputMaybe<LogCommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LogCommentCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<LogCommentCreateWithoutRepliesInput>;
};

export type LogCommentCreateOrConnectWithoutLogInput = {
  create: LogCommentCreateWithoutLogInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentCreateOrConnectWithoutRepliesInput = {
  create: LogCommentCreateWithoutRepliesInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentCreateOrConnectWithoutUserInput = {
  create: LogCommentCreateWithoutUserInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentCreateWithoutLogInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  replies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutCommentInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLogCommentsInput;
};

export type LogCommentCreateWithoutRepliesInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  log: ConstructionLogCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLogCommentsInput;
};

export type LogCommentCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  log: ConstructionLogCreateNestedOneWithoutCommentsInput;
  replies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutCommentInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LogCommentListRelationFilter = {
  every?: InputMaybe<LogCommentWhereInput>;
  none?: InputMaybe<LogCommentWhereInput>;
  some?: InputMaybe<LogCommentWhereInput>;
};

export type LogCommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LogCommentRelationFilter = {
  is?: InputMaybe<LogCommentWhereInput>;
  isNot?: InputMaybe<LogCommentWhereInput>;
};

export type LogCommentReply = {
  __typename?: 'LogCommentReply';
  comment: LogComment;
  commentId: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type LogCommentReplyCreateManyCommentInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type LogCommentReplyCreateManyCommentInputEnvelope = {
  data: Array<LogCommentReplyCreateManyCommentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LogCommentReplyCreateManyUserInput = {
  commentId: Scalars['Int'];
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LogCommentReplyCreateManyUserInputEnvelope = {
  data: Array<LogCommentReplyCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LogCommentReplyCreateNestedManyWithoutCommentInput = {
  connect?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentReplyCreateOrConnectWithoutCommentInput>>;
  create?: InputMaybe<Array<LogCommentReplyCreateWithoutCommentInput>>;
  createMany?: InputMaybe<LogCommentReplyCreateManyCommentInputEnvelope>;
};

export type LogCommentReplyCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentReplyCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LogCommentReplyCreateWithoutUserInput>>;
  createMany?: InputMaybe<LogCommentReplyCreateManyUserInputEnvelope>;
};

export type LogCommentReplyCreateOrConnectWithoutCommentInput = {
  create: LogCommentReplyCreateWithoutCommentInput;
  where: LogCommentReplyWhereUniqueInput;
};

export type LogCommentReplyCreateOrConnectWithoutUserInput = {
  create: LogCommentReplyCreateWithoutUserInput;
  where: LogCommentReplyWhereUniqueInput;
};

export type LogCommentReplyCreateWithoutCommentInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLogCommentRepliesInput;
};

export type LogCommentReplyCreateWithoutUserInput = {
  comment: LogCommentCreateNestedOneWithoutRepliesInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LogCommentReplyListRelationFilter = {
  every?: InputMaybe<LogCommentReplyWhereInput>;
  none?: InputMaybe<LogCommentReplyWhereInput>;
  some?: InputMaybe<LogCommentReplyWhereInput>;
};

export type LogCommentReplyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LogCommentReplyScalarWhereInput = {
  AND?: InputMaybe<Array<LogCommentReplyScalarWhereInput>>;
  NOT?: InputMaybe<Array<LogCommentReplyScalarWhereInput>>;
  OR?: InputMaybe<Array<LogCommentReplyScalarWhereInput>>;
  commentId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LogCommentReplyUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogCommentReplyUpdateManyWithWhereWithoutCommentInput = {
  data: LogCommentReplyUpdateManyMutationInput;
  where: LogCommentReplyScalarWhereInput;
};

export type LogCommentReplyUpdateManyWithWhereWithoutUserInput = {
  data: LogCommentReplyUpdateManyMutationInput;
  where: LogCommentReplyScalarWhereInput;
};

export type LogCommentReplyUpdateManyWithoutCommentNestedInput = {
  connect?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentReplyCreateOrConnectWithoutCommentInput>>;
  create?: InputMaybe<Array<LogCommentReplyCreateWithoutCommentInput>>;
  createMany?: InputMaybe<LogCommentReplyCreateManyCommentInputEnvelope>;
  delete?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LogCommentReplyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  set?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  update?: InputMaybe<Array<LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: InputMaybe<Array<LogCommentReplyUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: InputMaybe<Array<LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type LogCommentReplyUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentReplyCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LogCommentReplyCreateWithoutUserInput>>;
  createMany?: InputMaybe<LogCommentReplyCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LogCommentReplyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  set?: InputMaybe<Array<LogCommentReplyWhereUniqueInput>>;
  update?: InputMaybe<Array<LogCommentReplyUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LogCommentReplyUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LogCommentReplyUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput = {
  data: LogCommentReplyUpdateWithoutCommentInput;
  where: LogCommentReplyWhereUniqueInput;
};

export type LogCommentReplyUpdateWithWhereUniqueWithoutUserInput = {
  data: LogCommentReplyUpdateWithoutUserInput;
  where: LogCommentReplyWhereUniqueInput;
};

export type LogCommentReplyUpdateWithoutCommentInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput>;
};

export type LogCommentReplyUpdateWithoutUserInput = {
  comment?: InputMaybe<LogCommentUpdateOneRequiredWithoutRepliesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput = {
  create: LogCommentReplyCreateWithoutCommentInput;
  update: LogCommentReplyUpdateWithoutCommentInput;
  where: LogCommentReplyWhereUniqueInput;
};

export type LogCommentReplyUpsertWithWhereUniqueWithoutUserInput = {
  create: LogCommentReplyCreateWithoutUserInput;
  update: LogCommentReplyUpdateWithoutUserInput;
  where: LogCommentReplyWhereUniqueInput;
};

export type LogCommentReplyWhereInput = {
  AND?: InputMaybe<Array<LogCommentReplyWhereInput>>;
  NOT?: InputMaybe<Array<LogCommentReplyWhereInput>>;
  OR?: InputMaybe<Array<LogCommentReplyWhereInput>>;
  comment?: InputMaybe<LogCommentRelationFilter>;
  commentId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LogCommentReplyWhereUniqueInput = {
  AND?: InputMaybe<Array<LogCommentReplyWhereInput>>;
  NOT?: InputMaybe<Array<LogCommentReplyWhereInput>>;
  OR?: InputMaybe<Array<LogCommentReplyWhereInput>>;
  comment?: InputMaybe<LogCommentRelationFilter>;
  commentId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LogCommentScalarWhereInput = {
  AND?: InputMaybe<Array<LogCommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<LogCommentScalarWhereInput>>;
  OR?: InputMaybe<Array<LogCommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  logId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LogCommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogCommentUpdateManyWithWhereWithoutLogInput = {
  data: LogCommentUpdateManyMutationInput;
  where: LogCommentScalarWhereInput;
};

export type LogCommentUpdateManyWithWhereWithoutUserInput = {
  data: LogCommentUpdateManyMutationInput;
  where: LogCommentScalarWhereInput;
};

export type LogCommentUpdateManyWithoutLogNestedInput = {
  connect?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentCreateOrConnectWithoutLogInput>>;
  create?: InputMaybe<Array<LogCommentCreateWithoutLogInput>>;
  createMany?: InputMaybe<LogCommentCreateManyLogInputEnvelope>;
  delete?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LogCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<LogCommentUpdateWithWhereUniqueWithoutLogInput>>;
  updateMany?: InputMaybe<Array<LogCommentUpdateManyWithWhereWithoutLogInput>>;
  upsert?: InputMaybe<Array<LogCommentUpsertWithWhereUniqueWithoutLogInput>>;
};

export type LogCommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LogCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<LogCommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LogCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<LogCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<LogCommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LogCommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LogCommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LogCommentUpdateOneRequiredWithoutRepliesNestedInput = {
  connect?: InputMaybe<LogCommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LogCommentCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<LogCommentCreateWithoutRepliesInput>;
  update?: InputMaybe<LogCommentUpdateToOneWithWhereWithoutRepliesInput>;
  upsert?: InputMaybe<LogCommentUpsertWithoutRepliesInput>;
};

export type LogCommentUpdateToOneWithWhereWithoutRepliesInput = {
  data: LogCommentUpdateWithoutRepliesInput;
  where?: InputMaybe<LogCommentWhereInput>;
};

export type LogCommentUpdateWithWhereUniqueWithoutLogInput = {
  data: LogCommentUpdateWithoutLogInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentUpdateWithWhereUniqueWithoutUserInput = {
  data: LogCommentUpdateWithoutUserInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentUpdateWithoutLogInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  replies?: InputMaybe<LogCommentReplyUpdateManyWithoutCommentNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLogCommentsNestedInput>;
};

export type LogCommentUpdateWithoutRepliesInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  log?: InputMaybe<ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLogCommentsNestedInput>;
};

export type LogCommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  log?: InputMaybe<ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput>;
  replies?: InputMaybe<LogCommentReplyUpdateManyWithoutCommentNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogCommentUpsertWithWhereUniqueWithoutLogInput = {
  create: LogCommentCreateWithoutLogInput;
  update: LogCommentUpdateWithoutLogInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentUpsertWithWhereUniqueWithoutUserInput = {
  create: LogCommentCreateWithoutUserInput;
  update: LogCommentUpdateWithoutUserInput;
  where: LogCommentWhereUniqueInput;
};

export type LogCommentUpsertWithoutRepliesInput = {
  create: LogCommentCreateWithoutRepliesInput;
  update: LogCommentUpdateWithoutRepliesInput;
  where?: InputMaybe<LogCommentWhereInput>;
};

export type LogCommentWhereInput = {
  AND?: InputMaybe<Array<LogCommentWhereInput>>;
  NOT?: InputMaybe<Array<LogCommentWhereInput>>;
  OR?: InputMaybe<Array<LogCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  log?: InputMaybe<ConstructionLogRelationFilter>;
  logId?: InputMaybe<IntFilter>;
  replies?: InputMaybe<LogCommentReplyListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LogCommentWhereUniqueInput = {
  AND?: InputMaybe<Array<LogCommentWhereInput>>;
  NOT?: InputMaybe<Array<LogCommentWhereInput>>;
  OR?: InputMaybe<Array<LogCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  log?: InputMaybe<ConstructionLogRelationFilter>;
  logId?: InputMaybe<IntFilter>;
  replies?: InputMaybe<LogCommentReplyListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type LogCreateManyUserInput = {
  action: LogAction;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  route?: InputMaybe<Scalars['String']>;
};

export type LogCreateManyUserInputEnvelope = {
  data: Array<LogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LogCreateManyUserInputEnvelope>;
};

export type LogCreateOrConnectWithoutUserInput = {
  create: LogCreateWithoutUserInput;
  where: LogWhereUniqueInput;
};

export type LogCreateWithoutUserInput = {
  action: LogAction;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  route?: InputMaybe<Scalars['String']>;
};

export type LogListRelationFilter = {
  every?: InputMaybe<LogWhereInput>;
  none?: InputMaybe<LogWhereInput>;
  some?: InputMaybe<LogWhereInput>;
};

export type LogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LogScalarWhereInput = {
  AND?: InputMaybe<Array<LogScalarWhereInput>>;
  NOT?: InputMaybe<Array<LogScalarWhereInput>>;
  OR?: InputMaybe<Array<LogScalarWhereInput>>;
  action?: InputMaybe<EnumLogActionFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  route?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export enum LogType {
  DailyCheckin = 'DAILY_CHECKIN',
  GoodPractice = 'GOOD_PRACTICE',
  Issue = 'ISSUE',
  MaterialReceipt = 'MATERIAL_RECEIPT',
  Observation = 'OBSERVATION',
  Other = 'OTHER'
}

export type LogUpdateManyMutationInput = {
  action?: InputMaybe<EnumLogActionFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ipAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  route?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LogUpdateManyWithWhereWithoutUserInput = {
  data: LogUpdateManyMutationInput;
  where: LogScalarWhereInput;
};

export type LogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LogWhereUniqueInput>>;
  set?: InputMaybe<Array<LogWhereUniqueInput>>;
  update?: InputMaybe<Array<LogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LogUpdateWithWhereUniqueWithoutUserInput = {
  data: LogUpdateWithoutUserInput;
  where: LogWhereUniqueInput;
};

export type LogUpdateWithoutUserInput = {
  action?: InputMaybe<EnumLogActionFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ipAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  route?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LogUpsertWithWhereUniqueWithoutUserInput = {
  create: LogCreateWithoutUserInput;
  update: LogUpdateWithoutUserInput;
  where: LogWhereUniqueInput;
};

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  action?: InputMaybe<EnumLogActionFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  route?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type LogWhereUniqueInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  action?: InputMaybe<EnumLogActionFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  route?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MaterialEntry = {
  __typename?: 'MaterialEntry';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrls?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  project: Project;
  projectId: Scalars['Int'];
  quantity: Scalars['Float'];
  receivedAt: Scalars['DateTime'];
  receivedBy?: Maybe<User>;
  receivedById?: Maybe<Scalars['Int']>;
  supplier: Scalars['String'];
};

export type MaterialEntryCreateManyProjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
  receivedAt: Scalars['DateTime'];
  receivedById?: InputMaybe<Scalars['Int']>;
  supplier: Scalars['String'];
};

export type MaterialEntryCreateManyProjectInputEnvelope = {
  data: Array<MaterialEntryCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MaterialEntryCreateManyReceivedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  projectId: Scalars['Int'];
  quantity: Scalars['Float'];
  receivedAt: Scalars['DateTime'];
  supplier: Scalars['String'];
};

export type MaterialEntryCreateManyReceivedByInputEnvelope = {
  data: Array<MaterialEntryCreateManyReceivedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MaterialEntryCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaterialEntryCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<MaterialEntryCreateWithoutProjectInput>>;
  createMany?: InputMaybe<MaterialEntryCreateManyProjectInputEnvelope>;
};

export type MaterialEntryCreateNestedManyWithoutReceivedByInput = {
  connect?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaterialEntryCreateOrConnectWithoutReceivedByInput>>;
  create?: InputMaybe<Array<MaterialEntryCreateWithoutReceivedByInput>>;
  createMany?: InputMaybe<MaterialEntryCreateManyReceivedByInputEnvelope>;
};

export type MaterialEntryCreateOrConnectWithoutProjectInput = {
  create: MaterialEntryCreateWithoutProjectInput;
  where: MaterialEntryWhereUniqueInput;
};

export type MaterialEntryCreateOrConnectWithoutReceivedByInput = {
  create: MaterialEntryCreateWithoutReceivedByInput;
  where: MaterialEntryWhereUniqueInput;
};

export type MaterialEntryCreateWithoutProjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
  receivedAt: Scalars['DateTime'];
  receivedBy?: InputMaybe<UserCreateNestedOneWithoutReceivedMaterialsInput>;
  supplier: Scalars['String'];
};

export type MaterialEntryCreateWithoutReceivedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMaterialsInput;
  quantity: Scalars['Float'];
  receivedAt: Scalars['DateTime'];
  supplier: Scalars['String'];
};

export type MaterialEntryListRelationFilter = {
  every?: InputMaybe<MaterialEntryWhereInput>;
  none?: InputMaybe<MaterialEntryWhereInput>;
  some?: InputMaybe<MaterialEntryWhereInput>;
};

export type MaterialEntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MaterialEntryScalarWhereInput = {
  AND?: InputMaybe<Array<MaterialEntryScalarWhereInput>>;
  NOT?: InputMaybe<Array<MaterialEntryScalarWhereInput>>;
  OR?: InputMaybe<Array<MaterialEntryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrls?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  projectId?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  receivedAt?: InputMaybe<DateTimeFilter>;
  receivedById?: InputMaybe<IntNullableFilter>;
  supplier?: InputMaybe<StringFilter>;
};

export type MaterialEntryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  receivedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  supplier?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MaterialEntryUpdateManyWithWhereWithoutProjectInput = {
  data: MaterialEntryUpdateManyMutationInput;
  where: MaterialEntryScalarWhereInput;
};

export type MaterialEntryUpdateManyWithWhereWithoutReceivedByInput = {
  data: MaterialEntryUpdateManyMutationInput;
  where: MaterialEntryScalarWhereInput;
};

export type MaterialEntryUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaterialEntryCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<MaterialEntryCreateWithoutProjectInput>>;
  createMany?: InputMaybe<MaterialEntryCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaterialEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<MaterialEntryUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<MaterialEntryUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<MaterialEntryUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type MaterialEntryUpdateManyWithoutReceivedByNestedInput = {
  connect?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaterialEntryCreateOrConnectWithoutReceivedByInput>>;
  create?: InputMaybe<Array<MaterialEntryCreateWithoutReceivedByInput>>;
  createMany?: InputMaybe<MaterialEntryCreateManyReceivedByInputEnvelope>;
  delete?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaterialEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<MaterialEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput>>;
  updateMany?: InputMaybe<Array<MaterialEntryUpdateManyWithWhereWithoutReceivedByInput>>;
  upsert?: InputMaybe<Array<MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput>>;
};

export type MaterialEntryUpdateWithWhereUniqueWithoutProjectInput = {
  data: MaterialEntryUpdateWithoutProjectInput;
  where: MaterialEntryWhereUniqueInput;
};

export type MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput = {
  data: MaterialEntryUpdateWithoutReceivedByInput;
  where: MaterialEntryWhereUniqueInput;
};

export type MaterialEntryUpdateWithoutProjectInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  receivedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  receivedBy?: InputMaybe<UserUpdateOneWithoutReceivedMaterialsNestedInput>;
  supplier?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MaterialEntryUpdateWithoutReceivedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrls?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutMaterialsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  receivedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  supplier?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MaterialEntryUpsertWithWhereUniqueWithoutProjectInput = {
  create: MaterialEntryCreateWithoutProjectInput;
  update: MaterialEntryUpdateWithoutProjectInput;
  where: MaterialEntryWhereUniqueInput;
};

export type MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput = {
  create: MaterialEntryCreateWithoutReceivedByInput;
  update: MaterialEntryUpdateWithoutReceivedByInput;
  where: MaterialEntryWhereUniqueInput;
};

export type MaterialEntryWhereInput = {
  AND?: InputMaybe<Array<MaterialEntryWhereInput>>;
  NOT?: InputMaybe<Array<MaterialEntryWhereInput>>;
  OR?: InputMaybe<Array<MaterialEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrls?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  receivedAt?: InputMaybe<DateTimeFilter>;
  receivedBy?: InputMaybe<UserNullableRelationFilter>;
  receivedById?: InputMaybe<IntNullableFilter>;
  supplier?: InputMaybe<StringFilter>;
};

export type MaterialEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<MaterialEntryWhereInput>>;
  NOT?: InputMaybe<Array<MaterialEntryWhereInput>>;
  OR?: InputMaybe<Array<MaterialEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrls?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  receivedAt?: InputMaybe<DateTimeFilter>;
  receivedBy?: InputMaybe<UserNullableRelationFilter>;
  receivedById?: InputMaybe<IntNullableFilter>;
  supplier?: InputMaybe<StringFilter>;
};

export type MeDto = {
  __typename?: 'MeDto';
  _count: UserCount;
  about?: Maybe<Scalars['String']>;
  constructionLogs?: Maybe<Array<ConstructionLog>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isPremium: Scalars['Boolean'];
  lastName: Scalars['String'];
  logCommentReplies?: Maybe<Array<LogCommentReply>>;
  logComments?: Maybe<Array<LogComment>>;
  logs?: Maybe<Array<Log>>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  peopleFollowingMe: Array<User>;
  peopleImFollowing: Array<User>;
  profilePicture?: Maybe<Scalars['String']>;
  projectResponsible?: Maybe<Array<Project>>;
  public: Scalars['Boolean'];
  receivedMaterials?: Maybe<Array<MaterialEntry>>;
  responsibleInspections?: Maybe<Array<PermitInspection>>;
  role: Role;
  storageMemberships?: Maybe<Array<StorageMember>>;
  subscriptionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  willExpireAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addConstructionLog: ConstructionLog;
  addConstructionLogWithFile: ConstructionLog;
  addLogComment: LogComment;
  addLogCommentReply: LogCommentReply;
  addMemberToStorage: Storage;
  addPermitInspection: PermitInspection;
  addProjectDocument: ProjectDocument;
  createContainer: BaseResult;
  createInsurance: Subcontractor;
  createItem: BaseResult;
  createProject: Project;
  createStorage: Storage;
  createSubcontractor: Subcontractor;
  createUser: User;
  createUserWithoutPassword: BaseResult;
  deleteConstructionLog: ConstructionLog;
  editItem: BaseResult;
  login: LoginResult;
  refreshToken: Scalars['String'];
  removeProjectDocument: ProjectDocument;
  removeStorage: Storage;
  requestPasswordReset: BaseResult;
  resetPassword: BaseResult;
  sendEmail: BaseResult;
  updateUser: User;
  uploadInsurance: Insurance;
};


export type MutationAddConstructionLogArgs = {
  data: ConstructionLogCreateInput;
  projectId: Scalars['Int'];
};


export type MutationAddConstructionLogWithFileArgs = {
  description: Scalars['String'];
  projectId: Scalars['Int'];
  title: Scalars['String'];
  type: LogType;
};


export type MutationAddLogCommentArgs = {
  content: Scalars['String'];
  logId: Scalars['Int'];
};


export type MutationAddLogCommentReplyArgs = {
  commentId: Scalars['Int'];
  content: Scalars['String'];
};


export type MutationAddMemberToStorageArgs = {
  storageId: Scalars['Float'];
  userId: Scalars['Float'];
};


export type MutationAddPermitInspectionArgs = {
  fileUrl: Scalars['String'];
  kind: PermitKind;
  number: Scalars['String'];
  projectId: Scalars['Int'];
  status: PermitStatus;
};


export type MutationAddProjectDocumentArgs = {
  fileUrl: Scalars['String'];
  name: Scalars['String'];
  projectId: Scalars['Int'];
  type: DocumentType;
};


export type MutationCreateContainerArgs = {
  code: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  qrCode: Scalars['String'];
  storageId: Scalars['Float'];
};


export type MutationCreateInsuranceArgs = {
  data: InsuranceCreateInput;
  subcontractorId: Scalars['Int'];
};


export type MutationCreateItemArgs = {
  category: Scalars['String'];
  containerId: Scalars['Float'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateStorageArgs = {
  name: Scalars['String'];
};


export type MutationCreateSubcontractorArgs = {
  data: SubcontractorCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserWithoutPasswordArgs = {
  data: CreateUserWithoutPassword;
};


export type MutationDeleteConstructionLogArgs = {
  logId: Scalars['Int'];
};


export type MutationEditItemArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Float'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
};


export type MutationLoginArgs = {
  user: LoginUserInput;
};


export type MutationRemoveProjectDocumentArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveStorageArgs = {
  id: Scalars['Float'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendEmailArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['String'];
  to: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};


export type MutationUploadInsuranceArgs = {
  company: Scalars['String'];
  expiration: Scalars['String'];
  subcontractorId: Scalars['Int'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumDocumentTypeFilter = {
  equals?: InputMaybe<DocumentType>;
  in?: InputMaybe<Array<DocumentType>>;
  not?: InputMaybe<NestedEnumDocumentTypeFilter>;
  notIn?: InputMaybe<Array<DocumentType>>;
};

export type NestedEnumLogActionFilter = {
  equals?: InputMaybe<LogAction>;
  in?: InputMaybe<Array<LogAction>>;
  not?: InputMaybe<NestedEnumLogActionFilter>;
  notIn?: InputMaybe<Array<LogAction>>;
};

export type NestedEnumLogTypeFilter = {
  equals?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  not?: InputMaybe<NestedEnumLogTypeFilter>;
  notIn?: InputMaybe<Array<LogType>>;
};

export type NestedEnumPermitKindFilter = {
  equals?: InputMaybe<PermitKind>;
  in?: InputMaybe<Array<PermitKind>>;
  not?: InputMaybe<NestedEnumPermitKindFilter>;
  notIn?: InputMaybe<Array<PermitKind>>;
};

export type NestedEnumPermitStatusFilter = {
  equals?: InputMaybe<PermitStatus>;
  in?: InputMaybe<Array<PermitStatus>>;
  not?: InputMaybe<NestedEnumPermitStatusFilter>;
  notIn?: InputMaybe<Array<PermitStatus>>;
};

export type NestedEnumPhotoCategoryFilter = {
  equals?: InputMaybe<PhotoCategory>;
  in?: InputMaybe<Array<PhotoCategory>>;
  not?: InputMaybe<NestedEnumPhotoCategoryFilter>;
  notIn?: InputMaybe<Array<PhotoCategory>>;
};

export type NestedEnumProjectStatusFilter = {
  equals?: InputMaybe<ProjectStatus>;
  in?: InputMaybe<Array<ProjectStatus>>;
  not?: InputMaybe<NestedEnumProjectStatusFilter>;
  notIn?: InputMaybe<Array<ProjectStatus>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumStorageRoleFilter = {
  equals?: InputMaybe<StorageRole>;
  in?: InputMaybe<Array<StorageRole>>;
  not?: InputMaybe<NestedEnumStorageRoleFilter>;
  notIn?: InputMaybe<Array<StorageRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type PermitInspection = {
  __typename?: 'PermitInspection';
  approvedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  kind: PermitKind;
  number: Scalars['String'];
  project: Project;
  projectId: Scalars['Int'];
  requestedAt?: Maybe<Scalars['DateTime']>;
  responsible?: Maybe<User>;
  responsibleId?: Maybe<Scalars['Int']>;
  status: PermitStatus;
  updatedAt: Scalars['DateTime'];
};

export type PermitInspectionCreateManyProjectInput = {
  approvedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  kind: PermitKind;
  number: Scalars['String'];
  requestedAt?: InputMaybe<Scalars['DateTime']>;
  responsibleId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<PermitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermitInspectionCreateManyProjectInputEnvelope = {
  data: Array<PermitInspectionCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PermitInspectionCreateManyResponsibleInput = {
  approvedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  kind: PermitKind;
  number: Scalars['String'];
  projectId: Scalars['Int'];
  requestedAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<PermitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermitInspectionCreateManyResponsibleInputEnvelope = {
  data: Array<PermitInspectionCreateManyResponsibleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PermitInspectionCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermitInspectionCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<PermitInspectionCreateWithoutProjectInput>>;
  createMany?: InputMaybe<PermitInspectionCreateManyProjectInputEnvelope>;
};

export type PermitInspectionCreateNestedManyWithoutResponsibleInput = {
  connect?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermitInspectionCreateOrConnectWithoutResponsibleInput>>;
  create?: InputMaybe<Array<PermitInspectionCreateWithoutResponsibleInput>>;
  createMany?: InputMaybe<PermitInspectionCreateManyResponsibleInputEnvelope>;
};

export type PermitInspectionCreateOrConnectWithoutProjectInput = {
  create: PermitInspectionCreateWithoutProjectInput;
  where: PermitInspectionWhereUniqueInput;
};

export type PermitInspectionCreateOrConnectWithoutResponsibleInput = {
  create: PermitInspectionCreateWithoutResponsibleInput;
  where: PermitInspectionWhereUniqueInput;
};

export type PermitInspectionCreateWithoutProjectInput = {
  approvedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  kind: PermitKind;
  number: Scalars['String'];
  requestedAt?: InputMaybe<Scalars['DateTime']>;
  responsible?: InputMaybe<UserCreateNestedOneWithoutResponsibleInspectionsInput>;
  status?: InputMaybe<PermitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermitInspectionCreateWithoutResponsibleInput = {
  approvedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  kind: PermitKind;
  number: Scalars['String'];
  project: ProjectCreateNestedOneWithoutPermitsInput;
  requestedAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<PermitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermitInspectionListRelationFilter = {
  every?: InputMaybe<PermitInspectionWhereInput>;
  none?: InputMaybe<PermitInspectionWhereInput>;
  some?: InputMaybe<PermitInspectionWhereInput>;
};

export type PermitInspectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PermitInspectionScalarWhereInput = {
  AND?: InputMaybe<Array<PermitInspectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<PermitInspectionScalarWhereInput>>;
  OR?: InputMaybe<Array<PermitInspectionScalarWhereInput>>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  kind?: InputMaybe<EnumPermitKindFilter>;
  number?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<IntFilter>;
  requestedAt?: InputMaybe<DateTimeNullableFilter>;
  responsibleId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumPermitStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PermitInspectionUpdateManyMutationInput = {
  approvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  kind?: InputMaybe<EnumPermitKindFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPermitStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermitInspectionUpdateManyWithWhereWithoutProjectInput = {
  data: PermitInspectionUpdateManyMutationInput;
  where: PermitInspectionScalarWhereInput;
};

export type PermitInspectionUpdateManyWithWhereWithoutResponsibleInput = {
  data: PermitInspectionUpdateManyMutationInput;
  where: PermitInspectionScalarWhereInput;
};

export type PermitInspectionUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermitInspectionCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<PermitInspectionCreateWithoutProjectInput>>;
  createMany?: InputMaybe<PermitInspectionCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermitInspectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermitInspectionUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<PermitInspectionUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<PermitInspectionUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type PermitInspectionUpdateManyWithoutResponsibleNestedInput = {
  connect?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermitInspectionCreateOrConnectWithoutResponsibleInput>>;
  create?: InputMaybe<Array<PermitInspectionCreateWithoutResponsibleInput>>;
  createMany?: InputMaybe<PermitInspectionCreateManyResponsibleInputEnvelope>;
  delete?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermitInspectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermitInspectionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput>>;
  updateMany?: InputMaybe<Array<PermitInspectionUpdateManyWithWhereWithoutResponsibleInput>>;
  upsert?: InputMaybe<Array<PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput>>;
};

export type PermitInspectionUpdateWithWhereUniqueWithoutProjectInput = {
  data: PermitInspectionUpdateWithoutProjectInput;
  where: PermitInspectionWhereUniqueInput;
};

export type PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput = {
  data: PermitInspectionUpdateWithoutResponsibleInput;
  where: PermitInspectionWhereUniqueInput;
};

export type PermitInspectionUpdateWithoutProjectInput = {
  approvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  kind?: InputMaybe<EnumPermitKindFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  responsible?: InputMaybe<UserUpdateOneWithoutResponsibleInspectionsNestedInput>;
  status?: InputMaybe<EnumPermitStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermitInspectionUpdateWithoutResponsibleInput = {
  approvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  kind?: InputMaybe<EnumPermitKindFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutPermitsNestedInput>;
  requestedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPermitStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermitInspectionUpsertWithWhereUniqueWithoutProjectInput = {
  create: PermitInspectionCreateWithoutProjectInput;
  update: PermitInspectionUpdateWithoutProjectInput;
  where: PermitInspectionWhereUniqueInput;
};

export type PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput = {
  create: PermitInspectionCreateWithoutResponsibleInput;
  update: PermitInspectionUpdateWithoutResponsibleInput;
  where: PermitInspectionWhereUniqueInput;
};

export type PermitInspectionWhereInput = {
  AND?: InputMaybe<Array<PermitInspectionWhereInput>>;
  NOT?: InputMaybe<Array<PermitInspectionWhereInput>>;
  OR?: InputMaybe<Array<PermitInspectionWhereInput>>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  kind?: InputMaybe<EnumPermitKindFilter>;
  number?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  requestedAt?: InputMaybe<DateTimeNullableFilter>;
  responsible?: InputMaybe<UserNullableRelationFilter>;
  responsibleId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumPermitStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PermitInspectionWhereUniqueInput = {
  AND?: InputMaybe<Array<PermitInspectionWhereInput>>;
  NOT?: InputMaybe<Array<PermitInspectionWhereInput>>;
  OR?: InputMaybe<Array<PermitInspectionWhereInput>>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  kind?: InputMaybe<EnumPermitKindFilter>;
  number?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  requestedAt?: InputMaybe<DateTimeNullableFilter>;
  responsible?: InputMaybe<UserNullableRelationFilter>;
  responsibleId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumPermitStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum PermitKind {
  BuildingPermit = 'BUILDING_PERMIT',
  Concrete = 'CONCRETE',
  Electrical = 'ELECTRICAL',
  Flooring = 'FLOORING',
  Framing = 'FRAMING',
  Hvac = 'HVAC',
  InspectionReport = 'INSPECTION_REPORT',
  Other = 'OTHER',
  Plumbing = 'PLUMBING',
  Roofing = 'ROOFING'
}

export enum PermitStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Required = 'REQUIRED',
  Sent = 'SENT'
}

export enum PhotoCategory {
  After = 'AFTER',
  Before = 'BEFORE',
  During = 'DURING',
  Inspection = 'INSPECTION',
  Issue = 'ISSUE'
}

export type Project = {
  __typename?: 'Project';
  _count: ProjectCount;
  client: Scalars['String'];
  createdAt: Scalars['DateTime'];
  documents?: Maybe<Array<ProjectDocument>>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  location: Scalars['String'];
  logs?: Maybe<Array<ConstructionLog>>;
  materials?: Maybe<Array<MaterialEntry>>;
  name: Scalars['String'];
  permits?: Maybe<Array<PermitInspection>>;
  photos?: Maybe<Array<ProjectPhoto>>;
  responsible: User;
  responsibleId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  status: ProjectStatus;
  updatedAt: Scalars['DateTime'];
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  documents: Scalars['Int'];
  logs: Scalars['Int'];
  materials: Scalars['Int'];
  permits: Scalars['Int'];
  photos: Scalars['Int'];
};

export type ProjectCreateInput = {
  client: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documents?: InputMaybe<ProjectDocumentCreateNestedManyWithoutProjectInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  location: Scalars['String'];
  logs?: InputMaybe<ConstructionLogCreateNestedManyWithoutProjectInput>;
  materials?: InputMaybe<MaterialEntryCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  permits?: InputMaybe<PermitInspectionCreateNestedManyWithoutProjectInput>;
  photos?: InputMaybe<ProjectPhotoCreateNestedManyWithoutProjectInput>;
  responsible: UserCreateNestedOneWithoutProjectResponsibleInput;
  startDate: Scalars['DateTime'];
  status?: InputMaybe<ProjectStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyResponsibleInput = {
  client: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  location: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  status?: InputMaybe<ProjectStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyResponsibleInputEnvelope = {
  data: Array<ProjectCreateManyResponsibleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutResponsibleInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutResponsibleInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutResponsibleInput>>;
  createMany?: InputMaybe<ProjectCreateManyResponsibleInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutLogsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<ProjectCreateWithoutLogsInput>;
};

export type ProjectCreateNestedOneWithoutMaterialsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutMaterialsInput>;
  create?: InputMaybe<ProjectCreateWithoutMaterialsInput>;
};

export type ProjectCreateNestedOneWithoutPermitsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutPermitsInput>;
  create?: InputMaybe<ProjectCreateWithoutPermitsInput>;
};

export type ProjectCreateOrConnectWithoutLogsInput = {
  create: ProjectCreateWithoutLogsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutMaterialsInput = {
  create: ProjectCreateWithoutMaterialsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutPermitsInput = {
  create: ProjectCreateWithoutPermitsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutResponsibleInput = {
  create: ProjectCreateWithoutResponsibleInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutLogsInput = {
  client: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documents?: InputMaybe<ProjectDocumentCreateNestedManyWithoutProjectInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  location: Scalars['String'];
  materials?: InputMaybe<MaterialEntryCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  permits?: InputMaybe<PermitInspectionCreateNestedManyWithoutProjectInput>;
  photos?: InputMaybe<ProjectPhotoCreateNestedManyWithoutProjectInput>;
  responsible: UserCreateNestedOneWithoutProjectResponsibleInput;
  startDate: Scalars['DateTime'];
  status?: InputMaybe<ProjectStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutMaterialsInput = {
  client: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documents?: InputMaybe<ProjectDocumentCreateNestedManyWithoutProjectInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  location: Scalars['String'];
  logs?: InputMaybe<ConstructionLogCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  permits?: InputMaybe<PermitInspectionCreateNestedManyWithoutProjectInput>;
  photos?: InputMaybe<ProjectPhotoCreateNestedManyWithoutProjectInput>;
  responsible: UserCreateNestedOneWithoutProjectResponsibleInput;
  startDate: Scalars['DateTime'];
  status?: InputMaybe<ProjectStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutPermitsInput = {
  client: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documents?: InputMaybe<ProjectDocumentCreateNestedManyWithoutProjectInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  location: Scalars['String'];
  logs?: InputMaybe<ConstructionLogCreateNestedManyWithoutProjectInput>;
  materials?: InputMaybe<MaterialEntryCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  photos?: InputMaybe<ProjectPhotoCreateNestedManyWithoutProjectInput>;
  responsible: UserCreateNestedOneWithoutProjectResponsibleInput;
  startDate: Scalars['DateTime'];
  status?: InputMaybe<ProjectStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutResponsibleInput = {
  client: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  documents?: InputMaybe<ProjectDocumentCreateNestedManyWithoutProjectInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  location: Scalars['String'];
  logs?: InputMaybe<ConstructionLogCreateNestedManyWithoutProjectInput>;
  materials?: InputMaybe<MaterialEntryCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  permits?: InputMaybe<PermitInspectionCreateNestedManyWithoutProjectInput>;
  photos?: InputMaybe<ProjectPhotoCreateNestedManyWithoutProjectInput>;
  startDate: Scalars['DateTime'];
  status?: InputMaybe<ProjectStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectDocument = {
  __typename?: 'ProjectDocument';
  createdAt: Scalars['DateTime'];
  fileUrl: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  projectId: Scalars['Int'];
  type: DocumentType;
};

export type ProjectDocumentCreateManyProjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileUrl: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  type: DocumentType;
};

export type ProjectDocumentCreateManyProjectInputEnvelope = {
  data: Array<ProjectDocumentCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectDocumentCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ProjectDocumentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectDocumentCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectDocumentCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectDocumentCreateManyProjectInputEnvelope>;
};

export type ProjectDocumentCreateOrConnectWithoutProjectInput = {
  create: ProjectDocumentCreateWithoutProjectInput;
  where: ProjectDocumentWhereUniqueInput;
};

export type ProjectDocumentCreateWithoutProjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileUrl: Scalars['String'];
  name: Scalars['String'];
  type: DocumentType;
};

export type ProjectDocumentListRelationFilter = {
  every?: InputMaybe<ProjectDocumentWhereInput>;
  none?: InputMaybe<ProjectDocumentWhereInput>;
  some?: InputMaybe<ProjectDocumentWhereInput>;
};

export type ProjectDocumentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectDocumentScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectDocumentScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectDocumentScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectDocumentScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumDocumentTypeFilter>;
};

export type ProjectDocumentUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumDocumentTypeFieldUpdateOperationsInput>;
};

export type ProjectDocumentUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectDocumentUpdateManyMutationInput;
  where: ProjectDocumentScalarWhereInput;
};

export type ProjectDocumentUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<ProjectDocumentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectDocumentCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectDocumentCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectDocumentCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<ProjectDocumentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectDocumentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectDocumentWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectDocumentWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<ProjectDocumentUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectDocumentUpdateWithoutProjectInput;
  where: ProjectDocumentWhereUniqueInput;
};

export type ProjectDocumentUpdateWithoutProjectInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumDocumentTypeFieldUpdateOperationsInput>;
};

export type ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = {
  create: ProjectDocumentCreateWithoutProjectInput;
  update: ProjectDocumentUpdateWithoutProjectInput;
  where: ProjectDocumentWhereUniqueInput;
};

export type ProjectDocumentWhereInput = {
  AND?: InputMaybe<Array<ProjectDocumentWhereInput>>;
  NOT?: InputMaybe<Array<ProjectDocumentWhereInput>>;
  OR?: InputMaybe<Array<ProjectDocumentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumDocumentTypeFilter>;
};

export type ProjectDocumentWhereUniqueInput = {
  AND?: InputMaybe<Array<ProjectDocumentWhereInput>>;
  NOT?: InputMaybe<Array<ProjectDocumentWhereInput>>;
  OR?: InputMaybe<Array<ProjectDocumentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumDocumentTypeFilter>;
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  client?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  documents?: InputMaybe<ProjectDocumentOrderByRelationAggregateInput>;
  endDate?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  logs?: InputMaybe<ConstructionLogOrderByRelationAggregateInput>;
  materials?: InputMaybe<MaterialEntryOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  permits?: InputMaybe<PermitInspectionOrderByRelationAggregateInput>;
  photos?: InputMaybe<ProjectPhotoOrderByRelationAggregateInput>;
  responsible?: InputMaybe<UserOrderByWithRelationInput>;
  responsibleId?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectPhoto = {
  __typename?: 'ProjectPhoto';
  caption?: Maybe<Scalars['String']>;
  category: PhotoCategory;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  project: Project;
  projectId: Scalars['Int'];
  stage?: Maybe<Scalars['String']>;
};

export type ProjectPhotoCreateManyProjectInput = {
  caption?: InputMaybe<Scalars['String']>;
  category: PhotoCategory;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl: Scalars['String'];
  stage?: InputMaybe<Scalars['String']>;
};

export type ProjectPhotoCreateManyProjectInputEnvelope = {
  data: Array<ProjectPhotoCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectPhotoCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ProjectPhotoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectPhotoCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectPhotoCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectPhotoCreateManyProjectInputEnvelope>;
};

export type ProjectPhotoCreateOrConnectWithoutProjectInput = {
  create: ProjectPhotoCreateWithoutProjectInput;
  where: ProjectPhotoWhereUniqueInput;
};

export type ProjectPhotoCreateWithoutProjectInput = {
  caption?: InputMaybe<Scalars['String']>;
  category: PhotoCategory;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  imageUrl: Scalars['String'];
  stage?: InputMaybe<Scalars['String']>;
};

export type ProjectPhotoListRelationFilter = {
  every?: InputMaybe<ProjectPhotoWhereInput>;
  none?: InputMaybe<ProjectPhotoWhereInput>;
  some?: InputMaybe<ProjectPhotoWhereInput>;
};

export type ProjectPhotoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectPhotoScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectPhotoScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectPhotoScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectPhotoScalarWhereInput>>;
  caption?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<EnumPhotoCategoryFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<IntFilter>;
  stage?: InputMaybe<StringNullableFilter>;
};

export type ProjectPhotoUpdateManyMutationInput = {
  caption?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  category?: InputMaybe<EnumPhotoCategoryFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProjectPhotoUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectPhotoUpdateManyMutationInput;
  where: ProjectPhotoScalarWhereInput;
};

export type ProjectPhotoUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<ProjectPhotoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectPhotoCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectPhotoCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectPhotoCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<ProjectPhotoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectPhotoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectPhotoWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectPhotoWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<ProjectPhotoUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectPhotoUpdateWithoutProjectInput;
  where: ProjectPhotoWhereUniqueInput;
};

export type ProjectPhotoUpdateWithoutProjectInput = {
  caption?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  category?: InputMaybe<EnumPhotoCategoryFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput = {
  create: ProjectPhotoCreateWithoutProjectInput;
  update: ProjectPhotoUpdateWithoutProjectInput;
  where: ProjectPhotoWhereUniqueInput;
};

export type ProjectPhotoWhereInput = {
  AND?: InputMaybe<Array<ProjectPhotoWhereInput>>;
  NOT?: InputMaybe<Array<ProjectPhotoWhereInput>>;
  OR?: InputMaybe<Array<ProjectPhotoWhereInput>>;
  caption?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<EnumPhotoCategoryFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  stage?: InputMaybe<StringNullableFilter>;
};

export type ProjectPhotoWhereUniqueInput = {
  AND?: InputMaybe<Array<ProjectPhotoWhereInput>>;
  NOT?: InputMaybe<Array<ProjectPhotoWhereInput>>;
  OR?: InputMaybe<Array<ProjectPhotoWhereInput>>;
  caption?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<EnumPhotoCategoryFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  stage?: InputMaybe<StringNullableFilter>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  Client = 'client',
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  Location = 'location',
  Name = 'name',
  ResponsibleId = 'responsibleId',
  StartDate = 'startDate',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereInput>>;
  client?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  responsibleId?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumProjectStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum ProjectStatus {
  Canceled = 'CANCELED',
  Executing = 'EXECUTING',
  Finished = 'FINISHED',
  OnHold = 'ON_HOLD',
  Planning = 'PLANNING'
}

export type ProjectUpdateManyMutationInput = {
  client?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumProjectStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutResponsibleInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutResponsibleNestedInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutResponsibleInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutResponsibleInput>>;
  createMany?: InputMaybe<ProjectCreateManyResponsibleInputEnvelope>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutResponsibleInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutResponsibleInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutResponsibleInput>>;
};

export type ProjectUpdateOneRequiredWithoutLogsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<ProjectCreateWithoutLogsInput>;
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutLogsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutLogsInput>;
};

export type ProjectUpdateOneRequiredWithoutMaterialsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutMaterialsInput>;
  create?: InputMaybe<ProjectCreateWithoutMaterialsInput>;
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutMaterialsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutMaterialsInput>;
};

export type ProjectUpdateOneRequiredWithoutPermitsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutPermitsInput>;
  create?: InputMaybe<ProjectCreateWithoutPermitsInput>;
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutPermitsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutPermitsInput>;
};

export type ProjectUpdateToOneWithWhereWithoutLogsInput = {
  data: ProjectUpdateWithoutLogsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpdateToOneWithWhereWithoutMaterialsInput = {
  data: ProjectUpdateWithoutMaterialsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpdateToOneWithWhereWithoutPermitsInput = {
  data: ProjectUpdateWithoutPermitsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutResponsibleInput = {
  data: ProjectUpdateWithoutResponsibleInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutLogsInput = {
  client?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  documents?: InputMaybe<ProjectDocumentUpdateManyWithoutProjectNestedInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  materials?: InputMaybe<MaterialEntryUpdateManyWithoutProjectNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permits?: InputMaybe<PermitInspectionUpdateManyWithoutProjectNestedInput>;
  photos?: InputMaybe<ProjectPhotoUpdateManyWithoutProjectNestedInput>;
  responsible?: InputMaybe<UserUpdateOneRequiredWithoutProjectResponsibleNestedInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumProjectStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutMaterialsInput = {
  client?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  documents?: InputMaybe<ProjectDocumentUpdateManyWithoutProjectNestedInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  logs?: InputMaybe<ConstructionLogUpdateManyWithoutProjectNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permits?: InputMaybe<PermitInspectionUpdateManyWithoutProjectNestedInput>;
  photos?: InputMaybe<ProjectPhotoUpdateManyWithoutProjectNestedInput>;
  responsible?: InputMaybe<UserUpdateOneRequiredWithoutProjectResponsibleNestedInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumProjectStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutPermitsInput = {
  client?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  documents?: InputMaybe<ProjectDocumentUpdateManyWithoutProjectNestedInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  logs?: InputMaybe<ConstructionLogUpdateManyWithoutProjectNestedInput>;
  materials?: InputMaybe<MaterialEntryUpdateManyWithoutProjectNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<ProjectPhotoUpdateManyWithoutProjectNestedInput>;
  responsible?: InputMaybe<UserUpdateOneRequiredWithoutProjectResponsibleNestedInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumProjectStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutResponsibleInput = {
  client?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  documents?: InputMaybe<ProjectDocumentUpdateManyWithoutProjectNestedInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  logs?: InputMaybe<ConstructionLogUpdateManyWithoutProjectNestedInput>;
  materials?: InputMaybe<MaterialEntryUpdateManyWithoutProjectNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permits?: InputMaybe<PermitInspectionUpdateManyWithoutProjectNestedInput>;
  photos?: InputMaybe<ProjectPhotoUpdateManyWithoutProjectNestedInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumProjectStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutResponsibleInput = {
  create: ProjectCreateWithoutResponsibleInput;
  update: ProjectUpdateWithoutResponsibleInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutLogsInput = {
  create: ProjectCreateWithoutLogsInput;
  update: ProjectUpdateWithoutLogsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpsertWithoutMaterialsInput = {
  create: ProjectCreateWithoutMaterialsInput;
  update: ProjectUpdateWithoutMaterialsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpsertWithoutPermitsInput = {
  create: ProjectCreateWithoutPermitsInput;
  update: ProjectUpdateWithoutPermitsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  client?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documents?: InputMaybe<ProjectDocumentListRelationFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringFilter>;
  logs?: InputMaybe<ConstructionLogListRelationFilter>;
  materials?: InputMaybe<MaterialEntryListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  permits?: InputMaybe<PermitInspectionListRelationFilter>;
  photos?: InputMaybe<ProjectPhotoListRelationFilter>;
  responsible?: InputMaybe<UserRelationFilter>;
  responsibleId?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumProjectStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  client?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documents?: InputMaybe<ProjectDocumentListRelationFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<StringFilter>;
  logs?: InputMaybe<ConstructionLogListRelationFilter>;
  materials?: InputMaybe<MaterialEntryListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  permits?: InputMaybe<PermitInspectionListRelationFilter>;
  photos?: InputMaybe<ProjectPhotoListRelationFilter>;
  responsible?: InputMaybe<UserRelationFilter>;
  responsibleId?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumProjectStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  emailAvailable: Scalars['Boolean'];
  getAllContainers: Array<Container>;
  getAllItems: Array<Item>;
  getAllProjects: Array<Project>;
  getAllStorages: Array<Storage>;
  getAllSubcontractors: Array<Subcontractor>;
  getCommentsByLog: Array<LogComment>;
  getContainerByCode: Container;
  getContainerById: Container;
  getDashboardData: DashboardData;
  getDocumentsByProject: Array<ProjectDocument>;
  getItemById: Item;
  getLogByLogId?: Maybe<ConstructionLog>;
  getLogsByProject: Array<ConstructionLog>;
  getMyStorages: Array<Storage>;
  getPermitsByProject: Array<PermitInspection>;
  getProjectById?: Maybe<Project>;
  getStorage: Storage;
  getSubcontractorById?: Maybe<Subcontractor>;
  me: MeDto;
  users: User;
};


export type QueryEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryGetAllProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryGetCommentsByLogArgs = {
  logId: Scalars['Int'];
};


export type QueryGetContainerByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetContainerByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetDocumentsByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryGetItemByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetLogByLogIdArgs = {
  logId: Scalars['Int'];
};


export type QueryGetLogsByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryGetPermitsByProjectArgs = {
  projectId: Scalars['Int'];
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetStorageArgs = {
  id: Scalars['Float'];
};


export type QueryGetSubcontractorByIdArgs = {
  id: Scalars['Int'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RecentContainer = {
  __typename?: 'RecentContainer';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Storage = {
  __typename?: 'Storage';
  _count: StorageCount;
  containers?: Maybe<Array<Container>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  members?: Maybe<Array<StorageMember>>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StorageCount = {
  __typename?: 'StorageCount';
  containers: Scalars['Int'];
  members: Scalars['Int'];
};

export type StorageCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<StorageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StorageCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<StorageCreateWithoutMembersInput>;
};

export type StorageCreateOrConnectWithoutMembersInput = {
  create: StorageCreateWithoutMembersInput;
  where: StorageWhereUniqueInput;
};

export type StorageCreateWithoutMembersInput = {
  containers?: InputMaybe<ContainerCreateNestedManyWithoutStorageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StorageMember = {
  __typename?: 'StorageMember';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: StorageRole;
  storage: Storage;
  storageId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type StorageMemberCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<StorageRole>;
  storageId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StorageMemberCreateManyUserInputEnvelope = {
  data: Array<StorageMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type StorageMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<StorageMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StorageMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<StorageMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<StorageMemberCreateManyUserInputEnvelope>;
};

export type StorageMemberCreateOrConnectWithoutUserInput = {
  create: StorageMemberCreateWithoutUserInput;
  where: StorageMemberWhereUniqueInput;
};

export type StorageMemberCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<StorageRole>;
  storage: StorageCreateNestedOneWithoutMembersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StorageMemberListRelationFilter = {
  every?: InputMaybe<StorageMemberWhereInput>;
  none?: InputMaybe<StorageMemberWhereInput>;
  some?: InputMaybe<StorageMemberWhereInput>;
};

export type StorageMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StorageMemberScalarWhereInput = {
  AND?: InputMaybe<Array<StorageMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<StorageMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<StorageMemberScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumStorageRoleFilter>;
  storageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type StorageMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumStorageRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StorageMemberUpdateManyWithWhereWithoutUserInput = {
  data: StorageMemberUpdateManyMutationInput;
  where: StorageMemberScalarWhereInput;
};

export type StorageMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<StorageMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StorageMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<StorageMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<StorageMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<StorageMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StorageMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StorageMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<StorageMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<StorageMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<StorageMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<StorageMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type StorageMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: StorageMemberUpdateWithoutUserInput;
  where: StorageMemberWhereUniqueInput;
};

export type StorageMemberUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumStorageRoleFieldUpdateOperationsInput>;
  storage?: InputMaybe<StorageUpdateOneRequiredWithoutMembersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StorageMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: StorageMemberCreateWithoutUserInput;
  update: StorageMemberUpdateWithoutUserInput;
  where: StorageMemberWhereUniqueInput;
};

export type StorageMemberUserIdStorageIdCompoundUniqueInput = {
  storageId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type StorageMemberWhereInput = {
  AND?: InputMaybe<Array<StorageMemberWhereInput>>;
  NOT?: InputMaybe<Array<StorageMemberWhereInput>>;
  OR?: InputMaybe<Array<StorageMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumStorageRoleFilter>;
  storage?: InputMaybe<StorageRelationFilter>;
  storageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type StorageMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<StorageMemberWhereInput>>;
  NOT?: InputMaybe<Array<StorageMemberWhereInput>>;
  OR?: InputMaybe<Array<StorageMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<EnumStorageRoleFilter>;
  storage?: InputMaybe<StorageRelationFilter>;
  storageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  userId_storageId?: InputMaybe<StorageMemberUserIdStorageIdCompoundUniqueInput>;
};

export type StorageRelationFilter = {
  is?: InputMaybe<StorageWhereInput>;
  isNot?: InputMaybe<StorageWhereInput>;
};

export enum StorageRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type StorageUpdateOneRequiredWithoutMembersNestedInput = {
  connect?: InputMaybe<StorageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StorageCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<StorageCreateWithoutMembersInput>;
  update?: InputMaybe<StorageUpdateToOneWithWhereWithoutMembersInput>;
  upsert?: InputMaybe<StorageUpsertWithoutMembersInput>;
};

export type StorageUpdateToOneWithWhereWithoutMembersInput = {
  data: StorageUpdateWithoutMembersInput;
  where?: InputMaybe<StorageWhereInput>;
};

export type StorageUpdateWithoutMembersInput = {
  containers?: InputMaybe<ContainerUpdateManyWithoutStorageNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StorageUpsertWithoutMembersInput = {
  create: StorageCreateWithoutMembersInput;
  update: StorageUpdateWithoutMembersInput;
  where?: InputMaybe<StorageWhereInput>;
};

export type StorageWhereInput = {
  AND?: InputMaybe<Array<StorageWhereInput>>;
  NOT?: InputMaybe<Array<StorageWhereInput>>;
  OR?: InputMaybe<Array<StorageWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  members?: InputMaybe<StorageMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StorageWhereUniqueInput = {
  AND?: InputMaybe<Array<StorageWhereInput>>;
  NOT?: InputMaybe<Array<StorageWhereInput>>;
  OR?: InputMaybe<Array<StorageWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  members?: InputMaybe<StorageMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subcontractor = {
  __typename?: 'Subcontractor';
  _count: SubcontractorCount;
  bankAccount: Scalars['String'];
  companyName: Scalars['String'];
  contactName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdViaPublicForm: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['ID'];
  insurances?: Maybe<Array<Insurance>>;
  notes?: Maybe<Scalars['String']>;
  paymentPreference: Scalars['String'];
  phone: Scalars['String'];
  priority: Scalars['Boolean'];
  trade: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubcontractorCount = {
  __typename?: 'SubcontractorCount';
  insurances: Scalars['Int'];
};

export type SubcontractorCreateInput = {
  bankAccount: Scalars['String'];
  companyName: Scalars['String'];
  contactName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdViaPublicForm?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  insurances?: InputMaybe<InsuranceCreateNestedManyWithoutSubcontractorInput>;
  notes?: InputMaybe<Scalars['String']>;
  paymentPreference: Scalars['String'];
  phone: Scalars['String'];
  priority?: InputMaybe<Scalars['Boolean']>;
  trade: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubcontractorCreateNestedOneWithoutInsurancesInput = {
  connect?: InputMaybe<SubcontractorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubcontractorCreateOrConnectWithoutInsurancesInput>;
  create?: InputMaybe<SubcontractorCreateWithoutInsurancesInput>;
};

export type SubcontractorCreateOrConnectWithoutInsurancesInput = {
  create: SubcontractorCreateWithoutInsurancesInput;
  where: SubcontractorWhereUniqueInput;
};

export type SubcontractorCreateWithoutInsurancesInput = {
  bankAccount: Scalars['String'];
  companyName: Scalars['String'];
  contactName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdViaPublicForm?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  paymentPreference: Scalars['String'];
  phone: Scalars['String'];
  priority?: InputMaybe<Scalars['Boolean']>;
  trade: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubcontractorRelationFilter = {
  is?: InputMaybe<SubcontractorWhereInput>;
  isNot?: InputMaybe<SubcontractorWhereInput>;
};

export type SubcontractorWhereInput = {
  AND?: InputMaybe<Array<SubcontractorWhereInput>>;
  NOT?: InputMaybe<Array<SubcontractorWhereInput>>;
  OR?: InputMaybe<Array<SubcontractorWhereInput>>;
  bankAccount?: InputMaybe<StringFilter>;
  companyName?: InputMaybe<StringFilter>;
  contactName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdViaPublicForm?: InputMaybe<BoolFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  insurances?: InputMaybe<InsuranceListRelationFilter>;
  notes?: InputMaybe<StringNullableFilter>;
  paymentPreference?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  priority?: InputMaybe<BoolFilter>;
  trade?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubcontractorWhereUniqueInput = {
  AND?: InputMaybe<Array<SubcontractorWhereInput>>;
  NOT?: InputMaybe<Array<SubcontractorWhereInput>>;
  OR?: InputMaybe<Array<SubcontractorWhereInput>>;
  bankAccount?: InputMaybe<StringFilter>;
  companyName?: InputMaybe<StringFilter>;
  contactName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdViaPublicForm?: InputMaybe<BoolFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  insurances?: InputMaybe<InsuranceListRelationFilter>;
  notes?: InputMaybe<StringNullableFilter>;
  paymentPreference?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  priority?: InputMaybe<BoolFilter>;
  trade?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  about?: Maybe<Scalars['String']>;
  constructionLogs?: Maybe<Array<ConstructionLog>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isPremium: Scalars['Boolean'];
  lastName: Scalars['String'];
  logCommentReplies?: Maybe<Array<LogCommentReply>>;
  logComments?: Maybe<Array<LogComment>>;
  logs?: Maybe<Array<Log>>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  projectResponsible?: Maybe<Array<Project>>;
  public: Scalars['Boolean'];
  receivedMaterials?: Maybe<Array<MaterialEntry>>;
  responsibleInspections?: Maybe<Array<PermitInspection>>;
  role: Role;
  storageMemberships?: Maybe<Array<StorageMember>>;
  subscriptionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  willExpireAt?: Maybe<Scalars['DateTime']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  constructionLogs: Scalars['Int'];
  logCommentReplies: Scalars['Int'];
  logComments: Scalars['Int'];
  logs: Scalars['Int'];
  projectResponsible: Scalars['Int'];
  receivedMaterials: Scalars['Int'];
  responsibleInspections: Scalars['Int'];
  storageMemberships: Scalars['Int'];
};

export type UserCreateInput = {
  about?: InputMaybe<Scalars['String']>;
  constructionLogs?: InputMaybe<ConstructionLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logCommentReplies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutUserInput>;
  logComments?: InputMaybe<LogCommentCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  projectResponsible?: InputMaybe<ProjectCreateNestedManyWithoutResponsibleInput>;
  public?: InputMaybe<Scalars['Boolean']>;
  receivedMaterials?: InputMaybe<MaterialEntryCreateNestedManyWithoutReceivedByInput>;
  responsibleInspections?: InputMaybe<PermitInspectionCreateNestedManyWithoutResponsibleInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutConstructionLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConstructionLogsInput>;
  create?: InputMaybe<UserCreateWithoutConstructionLogsInput>;
};

export type UserCreateNestedOneWithoutLogCommentRepliesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLogCommentRepliesInput>;
  create?: InputMaybe<UserCreateWithoutLogCommentRepliesInput>;
};

export type UserCreateNestedOneWithoutLogCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLogCommentsInput>;
  create?: InputMaybe<UserCreateWithoutLogCommentsInput>;
};

export type UserCreateNestedOneWithoutProjectResponsibleInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectResponsibleInput>;
  create?: InputMaybe<UserCreateWithoutProjectResponsibleInput>;
};

export type UserCreateNestedOneWithoutReceivedMaterialsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReceivedMaterialsInput>;
  create?: InputMaybe<UserCreateWithoutReceivedMaterialsInput>;
};

export type UserCreateNestedOneWithoutResponsibleInspectionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResponsibleInspectionsInput>;
  create?: InputMaybe<UserCreateWithoutResponsibleInspectionsInput>;
};

export type UserCreateOrConnectWithoutConstructionLogsInput = {
  create: UserCreateWithoutConstructionLogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLogCommentRepliesInput = {
  create: UserCreateWithoutLogCommentRepliesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLogCommentsInput = {
  create: UserCreateWithoutLogCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProjectResponsibleInput = {
  create: UserCreateWithoutProjectResponsibleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReceivedMaterialsInput = {
  create: UserCreateWithoutReceivedMaterialsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutResponsibleInspectionsInput = {
  create: UserCreateWithoutResponsibleInspectionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutConstructionLogsInput = {
  about?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logCommentReplies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutUserInput>;
  logComments?: InputMaybe<LogCommentCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  projectResponsible?: InputMaybe<ProjectCreateNestedManyWithoutResponsibleInput>;
  public?: InputMaybe<Scalars['Boolean']>;
  receivedMaterials?: InputMaybe<MaterialEntryCreateNestedManyWithoutReceivedByInput>;
  responsibleInspections?: InputMaybe<PermitInspectionCreateNestedManyWithoutResponsibleInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutLogCommentRepliesInput = {
  about?: InputMaybe<Scalars['String']>;
  constructionLogs?: InputMaybe<ConstructionLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logComments?: InputMaybe<LogCommentCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  projectResponsible?: InputMaybe<ProjectCreateNestedManyWithoutResponsibleInput>;
  public?: InputMaybe<Scalars['Boolean']>;
  receivedMaterials?: InputMaybe<MaterialEntryCreateNestedManyWithoutReceivedByInput>;
  responsibleInspections?: InputMaybe<PermitInspectionCreateNestedManyWithoutResponsibleInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutLogCommentsInput = {
  about?: InputMaybe<Scalars['String']>;
  constructionLogs?: InputMaybe<ConstructionLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logCommentReplies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  projectResponsible?: InputMaybe<ProjectCreateNestedManyWithoutResponsibleInput>;
  public?: InputMaybe<Scalars['Boolean']>;
  receivedMaterials?: InputMaybe<MaterialEntryCreateNestedManyWithoutReceivedByInput>;
  responsibleInspections?: InputMaybe<PermitInspectionCreateNestedManyWithoutResponsibleInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProjectResponsibleInput = {
  about?: InputMaybe<Scalars['String']>;
  constructionLogs?: InputMaybe<ConstructionLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logCommentReplies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutUserInput>;
  logComments?: InputMaybe<LogCommentCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  receivedMaterials?: InputMaybe<MaterialEntryCreateNestedManyWithoutReceivedByInput>;
  responsibleInspections?: InputMaybe<PermitInspectionCreateNestedManyWithoutResponsibleInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutReceivedMaterialsInput = {
  about?: InputMaybe<Scalars['String']>;
  constructionLogs?: InputMaybe<ConstructionLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logCommentReplies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutUserInput>;
  logComments?: InputMaybe<LogCommentCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  projectResponsible?: InputMaybe<ProjectCreateNestedManyWithoutResponsibleInput>;
  public?: InputMaybe<Scalars['Boolean']>;
  responsibleInspections?: InputMaybe<PermitInspectionCreateNestedManyWithoutResponsibleInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutResponsibleInspectionsInput = {
  about?: InputMaybe<Scalars['String']>;
  constructionLogs?: InputMaybe<ConstructionLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  logCommentReplies?: InputMaybe<LogCommentReplyCreateNestedManyWithoutUserInput>;
  logComments?: InputMaybe<LogCommentCreateNestedManyWithoutUserInput>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  projectResponsible?: InputMaybe<ProjectCreateNestedManyWithoutResponsibleInput>;
  public?: InputMaybe<Scalars['Boolean']>;
  receivedMaterials?: InputMaybe<MaterialEntryCreateNestedManyWithoutReceivedByInput>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithRelationInput = {
  about?: InputMaybe<SortOrderInput>;
  constructionLogs?: InputMaybe<ConstructionLogOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrderInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPremium?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  logCommentReplies?: InputMaybe<LogCommentReplyOrderByRelationAggregateInput>;
  logComments?: InputMaybe<LogCommentOrderByRelationAggregateInput>;
  logs?: InputMaybe<LogOrderByRelationAggregateInput>;
  nickname?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  profilePicture?: InputMaybe<SortOrderInput>;
  projectResponsible?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  public?: InputMaybe<SortOrder>;
  receivedMaterials?: InputMaybe<MaterialEntryOrderByRelationAggregateInput>;
  responsibleInspections?: InputMaybe<PermitInspectionOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  storageMemberships?: InputMaybe<StorageMemberOrderByRelationAggregateInput>;
  subscriptionId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  willExpireAt?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  constructionLogs?: InputMaybe<ConstructionLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logCommentReplies?: InputMaybe<LogCommentReplyUpdateManyWithoutUserNestedInput>;
  logComments?: InputMaybe<LogCommentUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectResponsible?: InputMaybe<ProjectUpdateManyWithoutResponsibleNestedInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  receivedMaterials?: InputMaybe<MaterialEntryUpdateManyWithoutReceivedByNestedInput>;
  responsibleInspections?: InputMaybe<PermitInspectionUpdateManyWithoutResponsibleNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutConstructionLogsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConstructionLogsInput>;
  create?: InputMaybe<UserCreateWithoutConstructionLogsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConstructionLogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutConstructionLogsInput>;
};

export type UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLogCommentRepliesInput>;
  create?: InputMaybe<UserCreateWithoutLogCommentRepliesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLogCommentRepliesInput>;
  upsert?: InputMaybe<UserUpsertWithoutLogCommentRepliesInput>;
};

export type UserUpdateOneRequiredWithoutLogCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLogCommentsInput>;
  create?: InputMaybe<UserCreateWithoutLogCommentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLogCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutLogCommentsInput>;
};

export type UserUpdateOneRequiredWithoutProjectResponsibleNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectResponsibleInput>;
  create?: InputMaybe<UserCreateWithoutProjectResponsibleInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProjectResponsibleInput>;
  upsert?: InputMaybe<UserUpsertWithoutProjectResponsibleInput>;
};

export type UserUpdateOneWithoutReceivedMaterialsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReceivedMaterialsInput>;
  create?: InputMaybe<UserCreateWithoutReceivedMaterialsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReceivedMaterialsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReceivedMaterialsInput>;
};

export type UserUpdateOneWithoutResponsibleInspectionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResponsibleInspectionsInput>;
  create?: InputMaybe<UserCreateWithoutResponsibleInspectionsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutResponsibleInspectionsInput>;
};

export type UserUpdateToOneWithWhereWithoutConstructionLogsInput = {
  data: UserUpdateWithoutConstructionLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutLogCommentRepliesInput = {
  data: UserUpdateWithoutLogCommentRepliesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutLogCommentsInput = {
  data: UserUpdateWithoutLogCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutProjectResponsibleInput = {
  data: UserUpdateWithoutProjectResponsibleInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReceivedMaterialsInput = {
  data: UserUpdateWithoutReceivedMaterialsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput = {
  data: UserUpdateWithoutResponsibleInspectionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutConstructionLogsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logCommentReplies?: InputMaybe<LogCommentReplyUpdateManyWithoutUserNestedInput>;
  logComments?: InputMaybe<LogCommentUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectResponsible?: InputMaybe<ProjectUpdateManyWithoutResponsibleNestedInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  receivedMaterials?: InputMaybe<MaterialEntryUpdateManyWithoutReceivedByNestedInput>;
  responsibleInspections?: InputMaybe<PermitInspectionUpdateManyWithoutResponsibleNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLogCommentRepliesInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  constructionLogs?: InputMaybe<ConstructionLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logComments?: InputMaybe<LogCommentUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectResponsible?: InputMaybe<ProjectUpdateManyWithoutResponsibleNestedInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  receivedMaterials?: InputMaybe<MaterialEntryUpdateManyWithoutReceivedByNestedInput>;
  responsibleInspections?: InputMaybe<PermitInspectionUpdateManyWithoutResponsibleNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLogCommentsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  constructionLogs?: InputMaybe<ConstructionLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logCommentReplies?: InputMaybe<LogCommentReplyUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectResponsible?: InputMaybe<ProjectUpdateManyWithoutResponsibleNestedInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  receivedMaterials?: InputMaybe<MaterialEntryUpdateManyWithoutReceivedByNestedInput>;
  responsibleInspections?: InputMaybe<PermitInspectionUpdateManyWithoutResponsibleNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProjectResponsibleInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  constructionLogs?: InputMaybe<ConstructionLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logCommentReplies?: InputMaybe<LogCommentReplyUpdateManyWithoutUserNestedInput>;
  logComments?: InputMaybe<LogCommentUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  receivedMaterials?: InputMaybe<MaterialEntryUpdateManyWithoutReceivedByNestedInput>;
  responsibleInspections?: InputMaybe<PermitInspectionUpdateManyWithoutResponsibleNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReceivedMaterialsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  constructionLogs?: InputMaybe<ConstructionLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logCommentReplies?: InputMaybe<LogCommentReplyUpdateManyWithoutUserNestedInput>;
  logComments?: InputMaybe<LogCommentUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectResponsible?: InputMaybe<ProjectUpdateManyWithoutResponsibleNestedInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  responsibleInspections?: InputMaybe<PermitInspectionUpdateManyWithoutResponsibleNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutResponsibleInspectionsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  constructionLogs?: InputMaybe<ConstructionLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  logCommentReplies?: InputMaybe<LogCommentReplyUpdateManyWithoutUserNestedInput>;
  logComments?: InputMaybe<LogCommentUpdateManyWithoutUserNestedInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectResponsible?: InputMaybe<ProjectUpdateManyWithoutResponsibleNestedInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  receivedMaterials?: InputMaybe<MaterialEntryUpdateManyWithoutReceivedByNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutConstructionLogsInput = {
  create: UserCreateWithoutConstructionLogsInput;
  update: UserUpdateWithoutConstructionLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutLogCommentRepliesInput = {
  create: UserCreateWithoutLogCommentRepliesInput;
  update: UserUpdateWithoutLogCommentRepliesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutLogCommentsInput = {
  create: UserCreateWithoutLogCommentsInput;
  update: UserUpdateWithoutLogCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutProjectResponsibleInput = {
  create: UserCreateWithoutProjectResponsibleInput;
  update: UserUpdateWithoutProjectResponsibleInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReceivedMaterialsInput = {
  create: UserCreateWithoutReceivedMaterialsInput;
  update: UserUpdateWithoutReceivedMaterialsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutResponsibleInspectionsInput = {
  create: UserCreateWithoutResponsibleInspectionsInput;
  update: UserUpdateWithoutResponsibleInspectionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  constructionLogs?: InputMaybe<ConstructionLogListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isPremium?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  logCommentReplies?: InputMaybe<LogCommentReplyListRelationFilter>;
  logComments?: InputMaybe<LogCommentListRelationFilter>;
  logs?: InputMaybe<LogListRelationFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  projectResponsible?: InputMaybe<ProjectListRelationFilter>;
  public?: InputMaybe<BoolFilter>;
  receivedMaterials?: InputMaybe<MaterialEntryListRelationFilter>;
  responsibleInspections?: InputMaybe<PermitInspectionListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  storageMemberships?: InputMaybe<StorageMemberListRelationFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  willExpireAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  constructionLogs?: InputMaybe<ConstructionLogListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<BoolFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  isPremium?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  logCommentReplies?: InputMaybe<LogCommentReplyListRelationFilter>;
  logComments?: InputMaybe<LogCommentListRelationFilter>;
  logs?: InputMaybe<LogListRelationFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  projectResponsible?: InputMaybe<ProjectListRelationFilter>;
  public?: InputMaybe<BoolFilter>;
  receivedMaterials?: InputMaybe<MaterialEntryListRelationFilter>;
  responsibleInspections?: InputMaybe<PermitInspectionListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  storageMemberships?: InputMaybe<StorageMemberListRelationFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  willExpireAt?: InputMaybe<DateTimeNullableFilter>;
};

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'LoginResult', token: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, profilePicture?: string | null } } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename: 'User', id: string } };

export type EmailAvailableQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type EmailAvailableQuery = { __typename?: 'Query', emailAvailable: boolean };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: string };

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestPasswordResetMutation = { __typename?: 'Mutation', requestPasswordReset: { __typename?: 'BaseResult', success: boolean, message: string } };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'BaseResult', success: boolean, message: string } };

export type GetCommentsByLogQueryVariables = Exact<{
  logId: Scalars['Int'];
}>;


export type GetCommentsByLogQuery = { __typename?: 'Query', getCommentsByLog: Array<{ __typename?: 'LogComment', id: string, content: string, createdAt: any, logId: number, user: { __typename?: 'User', id: string, firstName: string, lastName: string, profilePicture?: string | null }, replies?: Array<{ __typename?: 'LogCommentReply', id: string, content: string, createdAt: any, user: { __typename?: 'User', id: string, firstName: string, lastName: string, profilePicture?: string | null } }> | null }> };

export type AddLogCommentMutationVariables = Exact<{
  logId: Scalars['Int'];
  content: Scalars['String'];
}>;


export type AddLogCommentMutation = { __typename?: 'Mutation', addLogComment: { __typename?: 'LogComment', id: string } };

export type AddLogCommentReplyMutationVariables = Exact<{
  commentId: Scalars['Int'];
  content: Scalars['String'];
}>;


export type AddLogCommentReplyMutation = { __typename?: 'Mutation', addLogCommentReply: { __typename?: 'LogCommentReply', id: string } };

export type SendEmailMutationVariables = Exact<{
  to: Scalars['String'];
  subject: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendEmailMutation = { __typename?: 'Mutation', sendEmail: { __typename?: 'BaseResult', success: boolean, message: string } };

export type AddProjectDocumentMutationVariables = Exact<{
  projectId: Scalars['Int'];
  name: Scalars['String'];
  fileUrl: Scalars['String'];
  type: DocumentType;
}>;


export type AddProjectDocumentMutation = { __typename?: 'Mutation', addProjectDocument: { __typename?: 'ProjectDocument', id: string, name: string, fileUrl: string, type: DocumentType, createdAt: any } };

export type GetDocumentsByProjectQueryVariables = Exact<{
  projectId: Scalars['Int'];
}>;


export type GetDocumentsByProjectQuery = { __typename?: 'Query', getDocumentsByProject: Array<{ __typename?: 'ProjectDocument', id: string, name: string, fileUrl: string, type: DocumentType, createdAt: any }> };

export type RemoveProjectDocumentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveProjectDocumentMutation = { __typename?: 'Mutation', removeProjectDocument: { __typename?: 'ProjectDocument', id: string, name: string } };

export type AddPermitMutationVariables = Exact<{
  projectId: Scalars['Int'];
  number: Scalars['String'];
  kind: PermitKind;
  status: PermitStatus;
  file: Scalars['String'];
}>;


export type AddPermitMutation = { __typename?: 'Mutation', addPermitInspection: { __typename?: 'PermitInspection', id: string, number: string, status: PermitStatus, fileUrl?: string | null } };

export type GetPermitsQueryVariables = Exact<{
  projectId: Scalars['Int'];
}>;


export type GetPermitsQuery = { __typename?: 'Query', getPermitsByProject: Array<{ __typename?: 'PermitInspection', id: string, number: string, kind: PermitKind, status: PermitStatus, fileUrl?: string | null, createdAt: any }> };

export type CreateProjectMutationVariables = Exact<{
  data: ProjectCreateInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, name: string, client: string, location: string, status: ProjectStatus, startDate: any, endDate?: any | null, createdAt: any, updatedAt: any } };

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectsQuery = { __typename?: 'Query', getAllProjects: Array<{ __typename?: 'Project', id: string, name: string, client: string, location: string, status: ProjectStatus, startDate: any, endDate?: any | null, createdAt: any, updatedAt: any }> };

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProjectByIdQuery = { __typename?: 'Query', getProjectById?: { __typename?: 'Project', id: string, name: string, client: string, location: string, status: ProjectStatus, startDate: any, endDate?: any | null, createdAt: any, updatedAt: any } | null };

export type AddConstructionLogMutationVariables = Exact<{
  projectId: Scalars['Int'];
  data: ConstructionLogCreateInput;
}>;


export type AddConstructionLogMutation = { __typename?: 'Mutation', addConstructionLog: { __typename?: 'ConstructionLog', id: string, title: string, description: string, type: LogType, images?: any | null, createdAt: any, user: { __typename?: 'User', id: string, firstName: string } } };

export type DeleteConstructionLogMutationVariables = Exact<{
  logId: Scalars['Int'];
}>;


export type DeleteConstructionLogMutation = { __typename?: 'Mutation', deleteConstructionLog: { __typename?: 'ConstructionLog', id: string } };

export type GetLogsByProjectQueryVariables = Exact<{
  projectId: Scalars['Int'];
}>;


export type GetLogsByProjectQuery = { __typename?: 'Query', getLogsByProject: Array<{ __typename?: 'ConstructionLog', id: string, title: string, description: string, type: LogType, images?: any | null, createdAt: any, projectId: number }> };

export type GetLogByLogIdQueryVariables = Exact<{
  logId: Scalars['Int'];
}>;


export type GetLogByLogIdQuery = { __typename?: 'Query', getLogByLogId?: { __typename?: 'ConstructionLog', id: string, title: string, description: string, type: LogType, images?: any | null, createdAt: any, user: { __typename?: 'User', id: string, firstName: string, lastName: string, profilePicture?: string | null }, project: { __typename?: 'Project', id: string, name: string, client: string, location: string, status: ProjectStatus, startDate: any, endDate?: any | null } } | null };

export type GetAllStoragesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStoragesQuery = { __typename?: 'Query', getAllStorages: Array<{ __typename?: 'Storage', id: string, name: string }> };

export type CreateStorageMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateStorageMutation = { __typename?: 'Mutation', createStorage: { __typename?: 'Storage', id: string, name: string } };

export type RemoveStorageMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RemoveStorageMutation = { __typename?: 'Mutation', removeStorage: { __typename?: 'Storage', name: string } };

export type CreateContainerMutationVariables = Exact<{
  storageId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  qrCode: Scalars['String'];
  code: Scalars['String'];
}>;


export type CreateContainerMutation = { __typename?: 'Mutation', createContainer: { __typename?: 'BaseResult', success: boolean, message: string } };

export type GetContainerByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetContainerByCodeQuery = { __typename?: 'Query', getContainerByCode: { __typename?: 'Container', id: string, name: string, description: string, qrCode: string, code: string, storage: { __typename?: 'Storage', id: string, name: string }, items?: Array<{ __typename?: 'Item', id: string, name: string, description: string, imageUrl: string, quantity: number, category: string }> | null } };

export type GetMyStoragesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyStoragesQuery = { __typename?: 'Query', getMyStorages: Array<{ __typename?: 'Storage', id: string, name: string, members?: Array<{ __typename?: 'StorageMember', id: string, role: StorageRole, user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } }> | null, containers?: Array<{ __typename?: 'Container', id: string, name: string, description: string, code: string, qrCode: string, createdAt: any, updatedAt: any, items?: Array<{ __typename?: 'Item', id: string, name: string, quantity: number }> | null }> | null }> };

export type CreateItemMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  quantity: Scalars['Float'];
  category: Scalars['String'];
  containerId: Scalars['Float'];
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'BaseResult', success: boolean, message: string } };

export type GetContainerByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetContainerByIdQuery = { __typename?: 'Query', getContainerById: { __typename?: 'Container', id: string, name: string, description: string, qrCode: string, code: string, storage: { __typename?: 'Storage', id: string, name: string }, items?: Array<{ __typename?: 'Item', id: string, name: string, description: string, imageUrl: string, quantity: number, category: string }> | null } };

export type GetAllContainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContainersQuery = { __typename?: 'Query', getAllContainers: Array<{ __typename?: 'Container', id: string, name: string, description: string, code: string, qrCode: string, createdAt: any, updatedAt: any, items?: Array<{ __typename?: 'Item', id: string, name: string, description: string, quantity: number, imageUrl: string, category: string }> | null }> };

export type GetAllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllItemsQuery = { __typename?: 'Query', getAllItems: Array<{ __typename?: 'Item', id: string, name: string, description: string, quantity: number, category: string, imageUrl: string, container: { __typename?: 'Container', id: string, name: string } }> };

export type GetDashboardDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardDataQuery = { __typename?: 'Query', getDashboardData: { __typename?: 'DashboardData', totalStorages: number, totalContainers: number, totalItems: number, recentContainers: Array<{ __typename?: 'RecentContainer', id: number, name: string }> } };

export type EditItemMutationVariables = Exact<{
  id: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  quantity: Scalars['Float'];
  category: Scalars['String'];
}>;


export type EditItemMutation = { __typename?: 'Mutation', editItem: { __typename?: 'BaseResult', success: boolean, message: string } };

export type GetItemByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetItemByIdQuery = { __typename?: 'Query', getItemById: { __typename?: 'Item', id: string, name: string, description: string, imageUrl: string, quantity: number, category: string } };

export type CreateSubcontractorMutationVariables = Exact<{
  data: SubcontractorCreateInput;
}>;


export type CreateSubcontractorMutation = { __typename?: 'Mutation', createSubcontractor: { __typename?: 'Subcontractor', id: string, companyName: string, contactName: string, email: string, phone: string, trade: string } };

export type GetAllSubcontractorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSubcontractorsQuery = { __typename?: 'Query', getAllSubcontractors: Array<{ __typename?: 'Subcontractor', id: string, companyName: string, contactName: string, email: string, phone: string, trade: string }> };

export type GetSubcontractorByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSubcontractorByIdQuery = { __typename?: 'Query', getSubcontractorById?: { __typename?: 'Subcontractor', id: string, companyName: string, contactName: string, email: string, phone: string, trade: string, bankAccount: string, paymentPreference: string, notes?: string | null, priority: boolean, createdViaPublicForm: boolean, insurances?: Array<{ __typename?: 'Insurance', id: string, company: string, expiration: any, documentUrl: string }> | null } | null };

export type CreateInsuranceMutationVariables = Exact<{
  subcontractorId: Scalars['Int'];
  data: InsuranceCreateInput;
}>;


export type CreateInsuranceMutation = { __typename?: 'Mutation', createInsurance: { __typename?: 'Subcontractor', id: string, insurances?: Array<{ __typename?: 'Insurance', id: string, company: string, expiration: any, documentUrl: string }> | null } };

export type CreateSubcontractorInsuranceMutationVariables = Exact<{
  subcontractorId: Scalars['Int'];
  data: InsuranceCreateInput;
}>;


export type CreateSubcontractorInsuranceMutation = { __typename?: 'Mutation', createInsurance: { __typename?: 'Subcontractor', id: string, companyName: string, contactName: string, trade: string, email: string, phone: string, insurances?: Array<{ __typename?: 'Insurance', id: string, company: string, expiration: any, documentUrl: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeDto', id: string, email: string, firstName: string, lastName: string, nickname?: string | null, isPremium: boolean, subscriptionId?: string | null, expiresAt?: any | null, willExpireAt?: any | null, profilePicture?: string | null, about?: string | null, storageMemberships?: Array<{ __typename?: 'StorageMember', role: StorageRole, storage: { __typename?: 'Storage', id: string, name: string } }> | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename: 'User', id: string } };


export const LoginDocument = `
    mutation Login($data: LoginUserInput!) {
  login(user: $data) {
    __typename
    user {
      id
      email
      firstName
      lastName
      profilePicture
    }
    token
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    __typename
    id
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers)(),
      options
    );
export const EmailAvailableDocument = `
    query EmailAvailable($email: String!) {
  emailAvailable(email: $email)
}
    `;
export const useEmailAvailableQuery = <
      TData = EmailAvailableQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: EmailAvailableQueryVariables,
      options?: UseQueryOptions<EmailAvailableQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<EmailAvailableQuery, TError, TData>(
      ['EmailAvailable', variables],
      fetcher<EmailAvailableQuery, EmailAvailableQueryVariables>(client, EmailAvailableDocument, variables, headers),
      options
    );
export const RefreshTokenDocument = `
    mutation refreshToken {
  refreshToken
}
    `;
export const useRefreshTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RefreshTokenMutation, TError, RefreshTokenMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RefreshTokenMutation, TError, RefreshTokenMutationVariables, TContext>(
      ['refreshToken'],
      (variables?: RefreshTokenMutationVariables) => fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(client, RefreshTokenDocument, variables, headers)(),
      options
    );
export const RequestPasswordResetDocument = `
    mutation requestPasswordReset($email: String!) {
  requestPasswordReset(email: $email) {
    success
    message
  }
}
    `;
export const useRequestPasswordResetMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RequestPasswordResetMutation, TError, RequestPasswordResetMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RequestPasswordResetMutation, TError, RequestPasswordResetMutationVariables, TContext>(
      ['requestPasswordReset'],
      (variables?: RequestPasswordResetMutationVariables) => fetcher<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(client, RequestPasswordResetDocument, variables, headers)(),
      options
    );
export const ResetPasswordDocument = `
    mutation resetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
    success
    message
  }
}
    `;
export const useResetPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
      ['resetPassword'],
      (variables?: ResetPasswordMutationVariables) => fetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(client, ResetPasswordDocument, variables, headers)(),
      options
    );
export const GetCommentsByLogDocument = `
    query GetCommentsByLog($logId: Int!) {
  getCommentsByLog(logId: $logId) {
    id
    content
    createdAt
    logId
    user {
      id
      firstName
      lastName
    }
    user {
      profilePicture
      firstName
      lastName
      id
    }
    replies {
      id
      content
      createdAt
      user {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
}
    `;
export const useGetCommentsByLogQuery = <
      TData = GetCommentsByLogQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsByLogQueryVariables,
      options?: UseQueryOptions<GetCommentsByLogQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsByLogQuery, TError, TData>(
      ['GetCommentsByLog', variables],
      fetcher<GetCommentsByLogQuery, GetCommentsByLogQueryVariables>(client, GetCommentsByLogDocument, variables, headers),
      options
    );
export const AddLogCommentDocument = `
    mutation AddLogComment($logId: Int!, $content: String!) {
  addLogComment(logId: $logId, content: $content) {
    id
  }
}
    `;
export const useAddLogCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddLogCommentMutation, TError, AddLogCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddLogCommentMutation, TError, AddLogCommentMutationVariables, TContext>(
      ['AddLogComment'],
      (variables?: AddLogCommentMutationVariables) => fetcher<AddLogCommentMutation, AddLogCommentMutationVariables>(client, AddLogCommentDocument, variables, headers)(),
      options
    );
export const AddLogCommentReplyDocument = `
    mutation AddLogCommentReply($commentId: Int!, $content: String!) {
  addLogCommentReply(commentId: $commentId, content: $content) {
    id
  }
}
    `;
export const useAddLogCommentReplyMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddLogCommentReplyMutation, TError, AddLogCommentReplyMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddLogCommentReplyMutation, TError, AddLogCommentReplyMutationVariables, TContext>(
      ['AddLogCommentReply'],
      (variables?: AddLogCommentReplyMutationVariables) => fetcher<AddLogCommentReplyMutation, AddLogCommentReplyMutationVariables>(client, AddLogCommentReplyDocument, variables, headers)(),
      options
    );
export const SendEmailDocument = `
    mutation SendEmail($to: String!, $subject: String!, $name: String!, $email: String!, $message: String!) {
  sendEmail(
    to: $to
    subject: $subject
    name: $name
    email: $email
    message: $message
  ) {
    success
    message
  }
}
    `;
export const useSendEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SendEmailMutation, TError, SendEmailMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SendEmailMutation, TError, SendEmailMutationVariables, TContext>(
      ['SendEmail'],
      (variables?: SendEmailMutationVariables) => fetcher<SendEmailMutation, SendEmailMutationVariables>(client, SendEmailDocument, variables, headers)(),
      options
    );
export const AddProjectDocumentDocument = `
    mutation AddProjectDocument($projectId: Int!, $name: String!, $fileUrl: String!, $type: DocumentType!) {
  addProjectDocument(
    projectId: $projectId
    name: $name
    fileUrl: $fileUrl
    type: $type
  ) {
    id
    name
    fileUrl
    type
    createdAt
  }
}
    `;
export const useAddProjectDocumentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddProjectDocumentMutation, TError, AddProjectDocumentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddProjectDocumentMutation, TError, AddProjectDocumentMutationVariables, TContext>(
      ['AddProjectDocument'],
      (variables?: AddProjectDocumentMutationVariables) => fetcher<AddProjectDocumentMutation, AddProjectDocumentMutationVariables>(client, AddProjectDocumentDocument, variables, headers)(),
      options
    );
export const GetDocumentsByProjectDocument = `
    query GetDocumentsByProject($projectId: Int!) {
  getDocumentsByProject(projectId: $projectId) {
    id
    name
    fileUrl
    type
    createdAt
  }
}
    `;
export const useGetDocumentsByProjectQuery = <
      TData = GetDocumentsByProjectQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetDocumentsByProjectQueryVariables,
      options?: UseQueryOptions<GetDocumentsByProjectQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetDocumentsByProjectQuery, TError, TData>(
      ['GetDocumentsByProject', variables],
      fetcher<GetDocumentsByProjectQuery, GetDocumentsByProjectQueryVariables>(client, GetDocumentsByProjectDocument, variables, headers),
      options
    );
export const RemoveProjectDocumentDocument = `
    mutation RemoveProjectDocument($id: Int!) {
  removeProjectDocument(id: $id) {
    id
    name
  }
}
    `;
export const useRemoveProjectDocumentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveProjectDocumentMutation, TError, RemoveProjectDocumentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveProjectDocumentMutation, TError, RemoveProjectDocumentMutationVariables, TContext>(
      ['RemoveProjectDocument'],
      (variables?: RemoveProjectDocumentMutationVariables) => fetcher<RemoveProjectDocumentMutation, RemoveProjectDocumentMutationVariables>(client, RemoveProjectDocumentDocument, variables, headers)(),
      options
    );
export const AddPermitDocument = `
    mutation AddPermit($projectId: Int!, $number: String!, $kind: PermitKind!, $status: PermitStatus!, $file: String!) {
  addPermitInspection(
    projectId: $projectId
    number: $number
    kind: $kind
    status: $status
    fileUrl: $file
  ) {
    id
    number
    status
    fileUrl
  }
}
    `;
export const useAddPermitMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddPermitMutation, TError, AddPermitMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddPermitMutation, TError, AddPermitMutationVariables, TContext>(
      ['AddPermit'],
      (variables?: AddPermitMutationVariables) => fetcher<AddPermitMutation, AddPermitMutationVariables>(client, AddPermitDocument, variables, headers)(),
      options
    );
export const GetPermitsDocument = `
    query GetPermits($projectId: Int!) {
  getPermitsByProject(projectId: $projectId) {
    id
    number
    kind
    status
    fileUrl
    createdAt
  }
}
    `;
export const useGetPermitsQuery = <
      TData = GetPermitsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPermitsQueryVariables,
      options?: UseQueryOptions<GetPermitsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPermitsQuery, TError, TData>(
      ['GetPermits', variables],
      fetcher<GetPermitsQuery, GetPermitsQueryVariables>(client, GetPermitsDocument, variables, headers),
      options
    );
export const CreateProjectDocument = `
    mutation CreateProject($data: ProjectCreateInput!) {
  createProject(data: $data) {
    id
    name
    client
    location
    status
    startDate
    endDate
    createdAt
    updatedAt
  }
}
    `;
export const useCreateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
      ['CreateProject'],
      (variables?: CreateProjectMutationVariables) => fetcher<CreateProjectMutation, CreateProjectMutationVariables>(client, CreateProjectDocument, variables, headers)(),
      options
    );
export const GetAllProjectsDocument = `
    query GetAllProjects {
  getAllProjects {
    id
    name
    client
    location
    status
    startDate
    endDate
    createdAt
    updatedAt
  }
}
    `;
export const useGetAllProjectsQuery = <
      TData = GetAllProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllProjectsQueryVariables,
      options?: UseQueryOptions<GetAllProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllProjectsQuery, TError, TData>(
      variables === undefined ? ['GetAllProjects'] : ['GetAllProjects', variables],
      fetcher<GetAllProjectsQuery, GetAllProjectsQueryVariables>(client, GetAllProjectsDocument, variables, headers),
      options
    );
export const GetProjectByIdDocument = `
    query GetProjectById($id: Int!) {
  getProjectById(id: $id) {
    id
    name
    client
    location
    status
    startDate
    endDate
    createdAt
    updatedAt
  }
}
    `;
export const useGetProjectByIdQuery = <
      TData = GetProjectByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProjectByIdQueryVariables,
      options?: UseQueryOptions<GetProjectByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetProjectByIdQuery, TError, TData>(
      ['GetProjectById', variables],
      fetcher<GetProjectByIdQuery, GetProjectByIdQueryVariables>(client, GetProjectByIdDocument, variables, headers),
      options
    );
export const AddConstructionLogDocument = `
    mutation AddConstructionLog($projectId: Int!, $data: ConstructionLogCreateInput!) {
  addConstructionLog(projectId: $projectId, data: $data) {
    id
    title
    description
    type
    images
    createdAt
    user {
      id
      firstName
    }
  }
}
    `;
export const useAddConstructionLogMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddConstructionLogMutation, TError, AddConstructionLogMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddConstructionLogMutation, TError, AddConstructionLogMutationVariables, TContext>(
      ['AddConstructionLog'],
      (variables?: AddConstructionLogMutationVariables) => fetcher<AddConstructionLogMutation, AddConstructionLogMutationVariables>(client, AddConstructionLogDocument, variables, headers)(),
      options
    );
export const DeleteConstructionLogDocument = `
    mutation DeleteConstructionLog($logId: Int!) {
  deleteConstructionLog(logId: $logId) {
    id
  }
}
    `;
export const useDeleteConstructionLogMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteConstructionLogMutation, TError, DeleteConstructionLogMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteConstructionLogMutation, TError, DeleteConstructionLogMutationVariables, TContext>(
      ['DeleteConstructionLog'],
      (variables?: DeleteConstructionLogMutationVariables) => fetcher<DeleteConstructionLogMutation, DeleteConstructionLogMutationVariables>(client, DeleteConstructionLogDocument, variables, headers)(),
      options
    );
export const GetLogsByProjectDocument = `
    query GetLogsByProject($projectId: Int!) {
  getLogsByProject(projectId: $projectId) {
    id
    title
    description
    type
    images
    createdAt
    projectId
  }
}
    `;
export const useGetLogsByProjectQuery = <
      TData = GetLogsByProjectQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetLogsByProjectQueryVariables,
      options?: UseQueryOptions<GetLogsByProjectQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLogsByProjectQuery, TError, TData>(
      ['GetLogsByProject', variables],
      fetcher<GetLogsByProjectQuery, GetLogsByProjectQueryVariables>(client, GetLogsByProjectDocument, variables, headers),
      options
    );
export const GetLogByLogIdDocument = `
    query GetLogByLogId($logId: Int!) {
  getLogByLogId(logId: $logId) {
    id
    title
    description
    type
    images
    createdAt
    user {
      id
      firstName
      lastName
      profilePicture
    }
    project {
      id
      name
      client
      location
      status
      startDate
      endDate
    }
  }
}
    `;
export const useGetLogByLogIdQuery = <
      TData = GetLogByLogIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetLogByLogIdQueryVariables,
      options?: UseQueryOptions<GetLogByLogIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLogByLogIdQuery, TError, TData>(
      ['GetLogByLogId', variables],
      fetcher<GetLogByLogIdQuery, GetLogByLogIdQueryVariables>(client, GetLogByLogIdDocument, variables, headers),
      options
    );
export const GetAllStoragesDocument = `
    query GetAllStorages {
  getAllStorages {
    id
    name
  }
}
    `;
export const useGetAllStoragesQuery = <
      TData = GetAllStoragesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllStoragesQueryVariables,
      options?: UseQueryOptions<GetAllStoragesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllStoragesQuery, TError, TData>(
      variables === undefined ? ['GetAllStorages'] : ['GetAllStorages', variables],
      fetcher<GetAllStoragesQuery, GetAllStoragesQueryVariables>(client, GetAllStoragesDocument, variables, headers),
      options
    );
export const CreateStorageDocument = `
    mutation CreateStorage($name: String!) {
  createStorage(name: $name) {
    id
    name
  }
}
    `;
export const useCreateStorageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateStorageMutation, TError, CreateStorageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateStorageMutation, TError, CreateStorageMutationVariables, TContext>(
      ['CreateStorage'],
      (variables?: CreateStorageMutationVariables) => fetcher<CreateStorageMutation, CreateStorageMutationVariables>(client, CreateStorageDocument, variables, headers)(),
      options
    );
export const RemoveStorageDocument = `
    mutation RemoveStorage($id: Float!) {
  removeStorage(id: $id) {
    name
  }
}
    `;
export const useRemoveStorageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveStorageMutation, TError, RemoveStorageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveStorageMutation, TError, RemoveStorageMutationVariables, TContext>(
      ['RemoveStorage'],
      (variables?: RemoveStorageMutationVariables) => fetcher<RemoveStorageMutation, RemoveStorageMutationVariables>(client, RemoveStorageDocument, variables, headers)(),
      options
    );
export const CreateContainerDocument = `
    mutation CreateContainer($storageId: Float!, $name: String!, $description: String!, $qrCode: String!, $code: String!) {
  createContainer(
    storageId: $storageId
    name: $name
    description: $description
    qrCode: $qrCode
    code: $code
  ) {
    success
    message
  }
}
    `;
export const useCreateContainerMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateContainerMutation, TError, CreateContainerMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateContainerMutation, TError, CreateContainerMutationVariables, TContext>(
      ['CreateContainer'],
      (variables?: CreateContainerMutationVariables) => fetcher<CreateContainerMutation, CreateContainerMutationVariables>(client, CreateContainerDocument, variables, headers)(),
      options
    );
export const GetContainerByCodeDocument = `
    query GetContainerByCode($code: String!) {
  getContainerByCode(code: $code) {
    id
    name
    description
    qrCode
    code
    storage {
      id
      name
    }
    items {
      id
      name
      description
      imageUrl
      quantity
      category
    }
  }
}
    `;
export const useGetContainerByCodeQuery = <
      TData = GetContainerByCodeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetContainerByCodeQueryVariables,
      options?: UseQueryOptions<GetContainerByCodeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetContainerByCodeQuery, TError, TData>(
      ['GetContainerByCode', variables],
      fetcher<GetContainerByCodeQuery, GetContainerByCodeQueryVariables>(client, GetContainerByCodeDocument, variables, headers),
      options
    );
export const GetMyStoragesDocument = `
    query GetMyStorages {
  getMyStorages {
    id
    name
    members {
      id
      role
      user {
        id
        firstName
        lastName
        email
      }
    }
    containers {
      id
      name
      description
      code
      qrCode
      createdAt
      updatedAt
      items {
        id
        name
        quantity
      }
    }
  }
}
    `;
export const useGetMyStoragesQuery = <
      TData = GetMyStoragesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMyStoragesQueryVariables,
      options?: UseQueryOptions<GetMyStoragesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMyStoragesQuery, TError, TData>(
      variables === undefined ? ['GetMyStorages'] : ['GetMyStorages', variables],
      fetcher<GetMyStoragesQuery, GetMyStoragesQueryVariables>(client, GetMyStoragesDocument, variables, headers),
      options
    );
export const CreateItemDocument = `
    mutation CreateItem($name: String!, $description: String!, $imageUrl: String!, $quantity: Float!, $category: String!, $containerId: Float!) {
  createItem(
    name: $name
    description: $description
    imageUrl: $imageUrl
    quantity: $quantity
    category: $category
    containerId: $containerId
  ) {
    success
    message
  }
}
    `;
export const useCreateItemMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateItemMutation, TError, CreateItemMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateItemMutation, TError, CreateItemMutationVariables, TContext>(
      ['CreateItem'],
      (variables?: CreateItemMutationVariables) => fetcher<CreateItemMutation, CreateItemMutationVariables>(client, CreateItemDocument, variables, headers)(),
      options
    );
export const GetContainerByIdDocument = `
    query GetContainerById($id: Float!) {
  getContainerById(id: $id) {
    id
    name
    description
    qrCode
    code
    storage {
      id
      name
    }
    items {
      id
      name
      description
      imageUrl
      quantity
      category
    }
  }
}
    `;
export const useGetContainerByIdQuery = <
      TData = GetContainerByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetContainerByIdQueryVariables,
      options?: UseQueryOptions<GetContainerByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetContainerByIdQuery, TError, TData>(
      ['GetContainerById', variables],
      fetcher<GetContainerByIdQuery, GetContainerByIdQueryVariables>(client, GetContainerByIdDocument, variables, headers),
      options
    );
export const GetAllContainersDocument = `
    query GetAllContainers {
  getAllContainers {
    id
    name
    description
    code
    qrCode
    createdAt
    updatedAt
    items {
      id
      name
      description
      quantity
      imageUrl
      category
    }
  }
}
    `;
export const useGetAllContainersQuery = <
      TData = GetAllContainersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllContainersQueryVariables,
      options?: UseQueryOptions<GetAllContainersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllContainersQuery, TError, TData>(
      variables === undefined ? ['GetAllContainers'] : ['GetAllContainers', variables],
      fetcher<GetAllContainersQuery, GetAllContainersQueryVariables>(client, GetAllContainersDocument, variables, headers),
      options
    );
export const GetAllItemsDocument = `
    query GetAllItems {
  getAllItems {
    id
    name
    description
    quantity
    category
    imageUrl
    container {
      id
      name
    }
  }
}
    `;
export const useGetAllItemsQuery = <
      TData = GetAllItemsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllItemsQueryVariables,
      options?: UseQueryOptions<GetAllItemsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllItemsQuery, TError, TData>(
      variables === undefined ? ['GetAllItems'] : ['GetAllItems', variables],
      fetcher<GetAllItemsQuery, GetAllItemsQueryVariables>(client, GetAllItemsDocument, variables, headers),
      options
    );
export const GetDashboardDataDocument = `
    query GetDashboardData {
  getDashboardData {
    totalStorages
    totalContainers
    totalItems
    recentContainers {
      id
      name
    }
  }
}
    `;
export const useGetDashboardDataQuery = <
      TData = GetDashboardDataQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetDashboardDataQueryVariables,
      options?: UseQueryOptions<GetDashboardDataQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetDashboardDataQuery, TError, TData>(
      variables === undefined ? ['GetDashboardData'] : ['GetDashboardData', variables],
      fetcher<GetDashboardDataQuery, GetDashboardDataQueryVariables>(client, GetDashboardDataDocument, variables, headers),
      options
    );
export const EditItemDocument = `
    mutation EditItem($id: Float!, $name: String!, $description: String!, $imageUrl: String!, $quantity: Float!, $category: String!) {
  editItem(
    id: $id
    name: $name
    description: $description
    imageUrl: $imageUrl
    quantity: $quantity
    category: $category
  ) {
    success
    message
  }
}
    `;
export const useEditItemMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<EditItemMutation, TError, EditItemMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<EditItemMutation, TError, EditItemMutationVariables, TContext>(
      ['EditItem'],
      (variables?: EditItemMutationVariables) => fetcher<EditItemMutation, EditItemMutationVariables>(client, EditItemDocument, variables, headers)(),
      options
    );
export const GetItemByIdDocument = `
    query GetItemById($id: Float!) {
  getItemById(id: $id) {
    id
    name
    description
    imageUrl
    quantity
    category
  }
}
    `;
export const useGetItemByIdQuery = <
      TData = GetItemByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetItemByIdQueryVariables,
      options?: UseQueryOptions<GetItemByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetItemByIdQuery, TError, TData>(
      ['GetItemById', variables],
      fetcher<GetItemByIdQuery, GetItemByIdQueryVariables>(client, GetItemByIdDocument, variables, headers),
      options
    );
export const CreateSubcontractorDocument = `
    mutation CreateSubcontractor($data: SubcontractorCreateInput!) {
  createSubcontractor(data: $data) {
    id
    companyName
    contactName
    email
    phone
    trade
  }
}
    `;
export const useCreateSubcontractorMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateSubcontractorMutation, TError, CreateSubcontractorMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateSubcontractorMutation, TError, CreateSubcontractorMutationVariables, TContext>(
      ['CreateSubcontractor'],
      (variables?: CreateSubcontractorMutationVariables) => fetcher<CreateSubcontractorMutation, CreateSubcontractorMutationVariables>(client, CreateSubcontractorDocument, variables, headers)(),
      options
    );
export const GetAllSubcontractorsDocument = `
    query GetAllSubcontractors {
  getAllSubcontractors {
    id
    companyName
    contactName
    email
    phone
    trade
  }
}
    `;
export const useGetAllSubcontractorsQuery = <
      TData = GetAllSubcontractorsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllSubcontractorsQueryVariables,
      options?: UseQueryOptions<GetAllSubcontractorsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllSubcontractorsQuery, TError, TData>(
      variables === undefined ? ['GetAllSubcontractors'] : ['GetAllSubcontractors', variables],
      fetcher<GetAllSubcontractorsQuery, GetAllSubcontractorsQueryVariables>(client, GetAllSubcontractorsDocument, variables, headers),
      options
    );
export const GetSubcontractorByIdDocument = `
    query GetSubcontractorById($id: Int!) {
  getSubcontractorById(id: $id) {
    id
    companyName
    contactName
    email
    phone
    trade
    bankAccount
    paymentPreference
    notes
    priority
    createdViaPublicForm
    insurances {
      id
      company
      expiration
      documentUrl
    }
  }
}
    `;
export const useGetSubcontractorByIdQuery = <
      TData = GetSubcontractorByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetSubcontractorByIdQueryVariables,
      options?: UseQueryOptions<GetSubcontractorByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSubcontractorByIdQuery, TError, TData>(
      ['GetSubcontractorById', variables],
      fetcher<GetSubcontractorByIdQuery, GetSubcontractorByIdQueryVariables>(client, GetSubcontractorByIdDocument, variables, headers),
      options
    );
export const CreateInsuranceDocument = `
    mutation CreateInsurance($subcontractorId: Int!, $data: InsuranceCreateInput!) {
  createInsurance(subcontractorId: $subcontractorId, data: $data) {
    id
    insurances {
      id
      company
      expiration
      documentUrl
    }
  }
}
    `;
export const useCreateInsuranceMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateInsuranceMutation, TError, CreateInsuranceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateInsuranceMutation, TError, CreateInsuranceMutationVariables, TContext>(
      ['CreateInsurance'],
      (variables?: CreateInsuranceMutationVariables) => fetcher<CreateInsuranceMutation, CreateInsuranceMutationVariables>(client, CreateInsuranceDocument, variables, headers)(),
      options
    );
export const CreateSubcontractorInsuranceDocument = `
    mutation CreateSubcontractorInsurance($subcontractorId: Int!, $data: InsuranceCreateInput!) {
  createInsurance(subcontractorId: $subcontractorId, data: $data) {
    id
    companyName
    contactName
    trade
    email
    phone
    insurances {
      id
      company
      expiration
      documentUrl
    }
  }
}
    `;
export const useCreateSubcontractorInsuranceMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateSubcontractorInsuranceMutation, TError, CreateSubcontractorInsuranceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateSubcontractorInsuranceMutation, TError, CreateSubcontractorInsuranceMutationVariables, TContext>(
      ['CreateSubcontractorInsurance'],
      (variables?: CreateSubcontractorInsuranceMutationVariables) => fetcher<CreateSubcontractorInsuranceMutation, CreateSubcontractorInsuranceMutationVariables>(client, CreateSubcontractorInsuranceDocument, variables, headers)(),
      options
    );
export const MeDocument = `
    query Me {
  me {
    id
    email
    firstName
    lastName
    nickname
    isPremium
    subscriptionId
    expiresAt
    willExpireAt
    profilePicture
    about
    storageMemberships {
      role
      storage {
        id
        name
      }
    }
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    );
export const UpdateUserDocument = `
    mutation UpdateUser($data: UserUpdateInput!) {
  updateUser(data: $data) {
    __typename
    id
  }
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      ['UpdateUser'],
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(client, UpdateUserDocument, variables, headers)(),
      options
    );