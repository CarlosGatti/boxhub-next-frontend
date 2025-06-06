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

export type EnumLogActionFieldUpdateOperationsInput = {
  set?: InputMaybe<LogAction>;
};

export type EnumLogActionFilter = {
  equals?: InputMaybe<LogAction>;
  in?: InputMaybe<Array<LogAction>>;
  not?: InputMaybe<NestedEnumLogActionFilter>;
  notIn?: InputMaybe<Array<LogAction>>;
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
  PageViewed = 'PAGE_VIEWED',
  SearchUsed = 'SEARCH_USED',
  UserLogin = 'USER_LOGIN',
  UserLogout = 'USER_LOGOUT'
}

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

export type MeDto = {
  __typename?: 'MeDto';
  _count: UserCount;
  about?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPremium: Scalars['Boolean'];
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  logs?: Maybe<Array<Log>>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  peopleFollowingMe: Array<User>;
  peopleImFollowing: Array<User>;
  profilePicture?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  role: Role;
  storageMemberships?: Maybe<Array<StorageMember>>;
  subscriptionId?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  willExpireAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMemberToStorage: Storage;
  createContainer: BaseResult;
  createItem: BaseResult;
  createStorage: Storage;
  createUser: User;
  createUserWithoutPassword: BaseResult;
  login: LoginResult;
  refreshToken: Scalars['String'];
  removeStorage: Storage;
  requestPasswordReset: BaseResult;
  resetPassword: BaseResult;
  sendEmail: BaseResult;
  updateUser: User;
};


export type MutationAddMemberToStorageArgs = {
  storageId: Scalars['Float'];
  userId: Scalars['Float'];
};


export type MutationCreateContainerArgs = {
  code: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  qrCode: Scalars['String'];
  storageId: Scalars['Float'];
};


export type MutationCreateItemArgs = {
  category: Scalars['String'];
  containerId: Scalars['Float'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
};


export type MutationCreateStorageArgs = {
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserWithoutPasswordArgs = {
  data: CreateUserWithoutPassword;
};


export type MutationLoginArgs = {
  user: LoginUserInput;
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

export type NestedEnumLogActionFilter = {
  equals?: InputMaybe<LogAction>;
  in?: InputMaybe<Array<LogAction>>;
  not?: InputMaybe<NestedEnumLogActionFilter>;
  notIn?: InputMaybe<Array<LogAction>>;
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

export type Query = {
  __typename?: 'Query';
  emailAvailable: Scalars['Boolean'];
  getAllContainers: Array<Container>;
  getAllItems: Array<Item>;
  getAllStorages: Array<Storage>;
  getContainerByCode: Container;
  getContainerById: Container;
  getDashboardData: DashboardData;
  getMyStorages: Array<Storage>;
  getStorage: Storage;
  me: MeDto;
  users: User;
};


export type QueryEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryGetContainerByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetContainerByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetStorageArgs = {
  id: Scalars['Float'];
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

export type User = {
  __typename?: 'User';
  _count: UserCount;
  about?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPremium: Scalars['Boolean'];
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  logs?: Maybe<Array<Log>>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  role: Role;
  storageMemberships?: Maybe<Array<StorageMember>>;
  subscriptionId?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  willExpireAt?: Maybe<Scalars['DateTime']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  logs: Scalars['Int'];
  storageMemberships: Scalars['Int'];
};

export type UserCreateInput = {
  about?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<LogCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Role>;
  storageMemberships?: InputMaybe<StorageMemberCreateNestedManyWithoutUserInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  willExpireAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isPremium?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logs?: InputMaybe<LogUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  storageMemberships?: InputMaybe<StorageMemberUpdateManyWithoutUserNestedInput>;
  subscriptionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  willExpireAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isPremium?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  logs?: InputMaybe<LogListRelationFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  public?: InputMaybe<BoolFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  storageMemberships?: InputMaybe<StorageMemberListRelationFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  twitterUrl?: InputMaybe<StringNullableFilter>;
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

export type SendEmailMutationVariables = Exact<{
  to: Scalars['String'];
  subject: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendEmailMutation = { __typename?: 'Mutation', sendEmail: { __typename?: 'BaseResult', success: boolean, message: string } };

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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeDto', id: string, email: string, firstName: string, lastName: string, nickname?: string | null, isPremium: boolean, subscriptionId?: string | null, expiresAt?: any | null, willExpireAt?: any | null, profilePicture?: string | null, about?: string | null, linkedinUrl?: string | null, twitterUrl?: string | null, githubUrl?: string | null, storageMemberships?: Array<{ __typename?: 'StorageMember', role: StorageRole, storage: { __typename?: 'Storage', id: string, name: string } }> | null } };

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
    linkedinUrl
    twitterUrl
    githubUrl
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