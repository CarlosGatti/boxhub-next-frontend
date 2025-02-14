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

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
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

export type Community = {
  __typename?: 'Community';
  _count: CommunityCount;
  banner?: Maybe<Scalars['String']>;
  communityPlanId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  events?: Maybe<Array<Event>>;
  facets?: Maybe<Array<Facet>>;
  groups?: Maybe<Array<Community>>;
  id: Scalars['ID'];
  inviteEnabledRole: CommunityPrivacy;
  members?: Maybe<Array<CommunityMember>>;
  name: Scalars['String'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['Int']>;
  parentCommunity?: Maybe<Community>;
  parentCommunityId?: Maybe<Scalars['Int']>;
  plan?: Maybe<CommunityPlan>;
  postEnabledRole: CommunityPrivacy;
  profilePicture?: Maybe<Scalars['String']>;
  publications?: Maybe<Array<Publication>>;
  published?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
  visibility: Visibility;
};

export type CommunityCount = {
  __typename?: 'CommunityCount';
  events: Scalars['Int'];
  facets: Scalars['Int'];
  groups: Scalars['Int'];
  members: Scalars['Int'];
  publications: Scalars['Int'];
};

export type CommunityCreateManyOwnerInput = {
  banner?: InputMaybe<Scalars['String']>;
  communityPlanId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  name: Scalars['String'];
  parentCommunityId?: InputMaybe<Scalars['Int']>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateManyOwnerInputEnvelope = {
  data: Array<CommunityCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityCreateManyParentCommunityInput = {
  banner?: InputMaybe<Scalars['String']>;
  communityPlanId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  name: Scalars['String'];
  ownerId?: InputMaybe<Scalars['Int']>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateManyParentCommunityInputEnvelope = {
  data: Array<CommunityCreateManyParentCommunityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<CommunityCreateManyOwnerInputEnvelope>;
};

export type CommunityCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<CommunityCreateManyParentCommunityInputEnvelope>;
};

export type CommunityCreateNestedOneWithoutEventsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<CommunityCreateWithoutEventsInput>;
};

export type CommunityCreateNestedOneWithoutGroupsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutGroupsInput>;
  create?: InputMaybe<CommunityCreateWithoutGroupsInput>;
};

export type CommunityCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<CommunityCreateWithoutMembersInput>;
};

export type CommunityCreateNestedOneWithoutPlanInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPlanInput>;
  create?: InputMaybe<CommunityCreateWithoutPlanInput>;
};

export type CommunityCreateNestedOneWithoutPublicationsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPublicationsInput>;
  create?: InputMaybe<CommunityCreateWithoutPublicationsInput>;
};

export type CommunityCreateOrConnectWithoutEventsInput = {
  create: CommunityCreateWithoutEventsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutGroupsInput = {
  create: CommunityCreateWithoutGroupsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutMembersInput = {
  create: CommunityCreateWithoutMembersInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutOwnerInput = {
  create: CommunityCreateWithoutOwnerInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutParentCommunityInput = {
  create: CommunityCreateWithoutParentCommunityInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutPlanInput = {
  create: CommunityCreateWithoutPlanInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutPublicationsInput = {
  create: CommunityCreateWithoutPublicationsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateWithoutEventsInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  groups?: InputMaybe<CommunityCreateNestedManyWithoutParentCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  members?: InputMaybe<CommunityMemberCreateNestedManyWithoutCommunityInput>;
  name: Scalars['String'];
  owner?: InputMaybe<UserCreateNestedOneWithoutAdminCommunitiesInput>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutGroupsInput>;
  plan?: InputMaybe<CommunityPlanCreateNestedOneWithoutCommunityInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutCommunityInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateWithoutGroupsInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutCommunityInput>;
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  members?: InputMaybe<CommunityMemberCreateNestedManyWithoutCommunityInput>;
  name: Scalars['String'];
  owner?: InputMaybe<UserCreateNestedOneWithoutAdminCommunitiesInput>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutGroupsInput>;
  plan?: InputMaybe<CommunityPlanCreateNestedOneWithoutCommunityInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutCommunityInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateWithoutMembersInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutCommunityInput>;
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  groups?: InputMaybe<CommunityCreateNestedManyWithoutParentCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  name: Scalars['String'];
  owner?: InputMaybe<UserCreateNestedOneWithoutAdminCommunitiesInput>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutGroupsInput>;
  plan?: InputMaybe<CommunityPlanCreateNestedOneWithoutCommunityInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutCommunityInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateWithoutOwnerInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutCommunityInput>;
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  groups?: InputMaybe<CommunityCreateNestedManyWithoutParentCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  members?: InputMaybe<CommunityMemberCreateNestedManyWithoutCommunityInput>;
  name: Scalars['String'];
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutGroupsInput>;
  plan?: InputMaybe<CommunityPlanCreateNestedOneWithoutCommunityInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutCommunityInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateWithoutParentCommunityInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutCommunityInput>;
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  groups?: InputMaybe<CommunityCreateNestedManyWithoutParentCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  members?: InputMaybe<CommunityMemberCreateNestedManyWithoutCommunityInput>;
  name: Scalars['String'];
  owner?: InputMaybe<UserCreateNestedOneWithoutAdminCommunitiesInput>;
  plan?: InputMaybe<CommunityPlanCreateNestedOneWithoutCommunityInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutCommunityInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateWithoutPlanInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutCommunityInput>;
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  groups?: InputMaybe<CommunityCreateNestedManyWithoutParentCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  members?: InputMaybe<CommunityMemberCreateNestedManyWithoutCommunityInput>;
  name: Scalars['String'];
  owner?: InputMaybe<UserCreateNestedOneWithoutAdminCommunitiesInput>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutGroupsInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutCommunityInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityCreateWithoutPublicationsInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutCommunityInput>;
  facets?: InputMaybe<FacetCreateNestedManyWithoutCommunityInput>;
  groups?: InputMaybe<CommunityCreateNestedManyWithoutParentCommunityInput>;
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  members?: InputMaybe<CommunityMemberCreateNestedManyWithoutCommunityInput>;
  name: Scalars['String'];
  owner?: InputMaybe<UserCreateNestedOneWithoutAdminCommunitiesInput>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutGroupsInput>;
  plan?: InputMaybe<CommunityPlanCreateNestedOneWithoutCommunityInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CommunityDto = {
  __typename?: 'CommunityDto';
  _count: CommunityCount;
  banner?: Maybe<Scalars['String']>;
  communityPlanId?: Maybe<Scalars['Int']>;
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  events?: Maybe<Array<Event>>;
  facets?: Maybe<Array<Facet>>;
  groups?: Maybe<Array<Community>>;
  id: Scalars['ID'];
  inviteEnabledRole: CommunityPrivacy;
  isMember: Scalars['Boolean'];
  members?: Maybe<Array<CommunityMember>>;
  name: Scalars['String'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['Int']>;
  parentCommunity?: Maybe<Community>;
  parentCommunityId?: Maybe<Scalars['Int']>;
  plan?: Maybe<CommunityPlan>;
  postEnabledRole: CommunityPrivacy;
  profilePicture?: Maybe<Scalars['String']>;
  publications?: Maybe<Array<Publication>>;
  published?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
  visibility: Visibility;
};

export type CommunityEventsProps = {
  __typename?: 'CommunityEventsProps';
  events: Array<Event>;
};

export type CommunityListRelationFilter = {
  every?: InputMaybe<CommunityWhereInput>;
  none?: InputMaybe<CommunityWhereInput>;
  some?: InputMaybe<CommunityWhereInput>;
};

export type CommunityMember = {
  __typename?: 'CommunityMember';
  community: Community;
  communityId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  joinedAt?: Maybe<Scalars['DateTime']>;
  leftAt?: Maybe<Scalars['DateTime']>;
  role: CommunityMemberRole;
  status: MembershipStatus;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommunityMemberCreateManyCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<CommunityMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type CommunityMemberCreateManyCommunityInputEnvelope = {
  data: Array<CommunityMemberCreateManyCommunityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityMemberCreateManyUserInput = {
  communityId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<CommunityMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommunityMemberCreateManyUserInputEnvelope = {
  data: Array<CommunityMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityMemberCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<CommunityMemberCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<CommunityMemberCreateManyCommunityInputEnvelope>;
};

export type CommunityMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommunityMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommunityMemberCreateManyUserInputEnvelope>;
};

export type CommunityMemberCreateOrConnectWithoutCommunityInput = {
  create: CommunityMemberCreateWithoutCommunityInput;
  where: CommunityMemberWhereUniqueInput;
};

export type CommunityMemberCreateOrConnectWithoutUserInput = {
  create: CommunityMemberCreateWithoutUserInput;
  where: CommunityMemberWhereUniqueInput;
};

export type CommunityMemberCreateWithoutCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<CommunityMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMemberCommunitiesInput>;
};

export type CommunityMemberCreateWithoutUserInput = {
  community: CommunityCreateNestedOneWithoutMembersInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<CommunityMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommunityMemberListRelationFilter = {
  every?: InputMaybe<CommunityMemberWhereInput>;
  none?: InputMaybe<CommunityMemberWhereInput>;
  some?: InputMaybe<CommunityMemberWhereInput>;
};

export enum CommunityMemberRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type CommunityMemberScalarWhereInput = {
  AND?: InputMaybe<Array<CommunityMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommunityMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<CommunityMemberScalarWhereInput>>;
  communityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  leftAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<EnumCommunityMemberRoleFilter>;
  status?: InputMaybe<EnumMembershipStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type CommunityMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  joinedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  leftAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumCommunityMemberRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMembershipStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommunityMemberUpdateManyWithWhereWithoutCommunityInput = {
  data: CommunityMemberUpdateManyMutationInput;
  where: CommunityMemberScalarWhereInput;
};

export type CommunityMemberUpdateManyWithWhereWithoutUserInput = {
  data: CommunityMemberUpdateManyMutationInput;
  where: CommunityMemberScalarWhereInput;
};

export type CommunityMemberUpdateManyWithoutCommunityNestedInput = {
  connect?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<CommunityMemberCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<CommunityMemberCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<CommunityMemberUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type CommunityMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommunityMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommunityMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommunityMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommunityMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput = {
  data: CommunityMemberUpdateWithoutCommunityInput;
  where: CommunityMemberWhereUniqueInput;
};

export type CommunityMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: CommunityMemberUpdateWithoutUserInput;
  where: CommunityMemberWhereUniqueInput;
};

export type CommunityMemberUpdateWithoutCommunityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  joinedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  leftAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumCommunityMemberRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMembershipStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMemberCommunitiesNestedInput>;
};

export type CommunityMemberUpdateWithoutUserInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutMembersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  joinedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  leftAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumCommunityMemberRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMembershipStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput = {
  create: CommunityMemberCreateWithoutCommunityInput;
  update: CommunityMemberUpdateWithoutCommunityInput;
  where: CommunityMemberWhereUniqueInput;
};

export type CommunityMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: CommunityMemberCreateWithoutUserInput;
  update: CommunityMemberUpdateWithoutUserInput;
  where: CommunityMemberWhereUniqueInput;
};

export type CommunityMemberWhereInput = {
  AND?: InputMaybe<Array<CommunityMemberWhereInput>>;
  NOT?: InputMaybe<Array<CommunityMemberWhereInput>>;
  OR?: InputMaybe<Array<CommunityMemberWhereInput>>;
  community?: InputMaybe<CommunityRelationFilter>;
  communityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  leftAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<EnumCommunityMemberRoleFilter>;
  status?: InputMaybe<EnumMembershipStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type CommunityMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<CommunityMemberWhereInput>>;
  NOT?: InputMaybe<Array<CommunityMemberWhereInput>>;
  OR?: InputMaybe<Array<CommunityMemberWhereInput>>;
  community?: InputMaybe<CommunityRelationFilter>;
  communityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  leftAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<EnumCommunityMemberRoleFilter>;
  status?: InputMaybe<EnumMembershipStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type CommunityNullableRelationFilter = {
  is?: InputMaybe<CommunityWhereInput>;
  isNot?: InputMaybe<CommunityWhereInput>;
};

export type CommunityPlan = {
  __typename?: 'CommunityPlan';
  community?: Maybe<Community>;
  communityId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type CommunityPlanCreateInput = {
  community?: InputMaybe<CommunityCreateNestedOneWithoutPlanInput>;
  communityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommunityPlanCreateNestedOneWithoutCommunityInput = {
  connect?: InputMaybe<CommunityPlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityPlanCreateOrConnectWithoutCommunityInput>;
  create?: InputMaybe<CommunityPlanCreateWithoutCommunityInput>;
};

export type CommunityPlanCreateOrConnectWithoutCommunityInput = {
  create: CommunityPlanCreateWithoutCommunityInput;
  where: CommunityPlanWhereUniqueInput;
};

export type CommunityPlanCreateWithoutCommunityInput = {
  communityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommunityPlanNullableRelationFilter = {
  is?: InputMaybe<CommunityPlanWhereInput>;
  isNot?: InputMaybe<CommunityPlanWhereInput>;
};

export type CommunityPlanUpdateOneWithoutCommunityNestedInput = {
  connect?: InputMaybe<CommunityPlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityPlanCreateOrConnectWithoutCommunityInput>;
  create?: InputMaybe<CommunityPlanCreateWithoutCommunityInput>;
  delete?: InputMaybe<CommunityPlanWhereInput>;
  disconnect?: InputMaybe<CommunityPlanWhereInput>;
  update?: InputMaybe<CommunityPlanUpdateToOneWithWhereWithoutCommunityInput>;
  upsert?: InputMaybe<CommunityPlanUpsertWithoutCommunityInput>;
};

export type CommunityPlanUpdateToOneWithWhereWithoutCommunityInput = {
  data: CommunityPlanUpdateWithoutCommunityInput;
  where?: InputMaybe<CommunityPlanWhereInput>;
};

export type CommunityPlanUpdateWithoutCommunityInput = {
  communityId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommunityPlanUpsertWithoutCommunityInput = {
  create: CommunityPlanCreateWithoutCommunityInput;
  update: CommunityPlanUpdateWithoutCommunityInput;
  where?: InputMaybe<CommunityPlanWhereInput>;
};

export type CommunityPlanWhereInput = {
  AND?: InputMaybe<Array<CommunityPlanWhereInput>>;
  NOT?: InputMaybe<Array<CommunityPlanWhereInput>>;
  OR?: InputMaybe<Array<CommunityPlanWhereInput>>;
  community?: InputMaybe<CommunityNullableRelationFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommunityPlanWhereUniqueInput = {
  AND?: InputMaybe<Array<CommunityPlanWhereInput>>;
  NOT?: InputMaybe<Array<CommunityPlanWhereInput>>;
  OR?: InputMaybe<Array<CommunityPlanWhereInput>>;
  community?: InputMaybe<CommunityNullableRelationFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum CommunityPrivacy {
  Admin = 'ADMIN',
  All = 'ALL',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type CommunityRelationFilter = {
  is?: InputMaybe<CommunityWhereInput>;
  isNot?: InputMaybe<CommunityWhereInput>;
};

export type CommunityScalarWhereInput = {
  AND?: InputMaybe<Array<CommunityScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommunityScalarWhereInput>>;
  OR?: InputMaybe<Array<CommunityScalarWhereInput>>;
  banner?: InputMaybe<StringNullableFilter>;
  communityPlanId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  parentCommunityId?: InputMaybe<IntNullableFilter>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  published?: InputMaybe<BoolNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type CommunityTimelineDto = {
  __typename?: 'CommunityTimelineDto';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CommunityUpdateManyMutationInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpdateManyWithWhereWithoutOwnerInput = {
  data: CommunityUpdateManyMutationInput;
  where: CommunityScalarWhereInput;
};

export type CommunityUpdateManyWithWhereWithoutParentCommunityInput = {
  data: CommunityUpdateManyMutationInput;
  where: CommunityScalarWhereInput;
};

export type CommunityUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<CommunityCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<CommunityUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<CommunityUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type CommunityUpdateManyWithoutParentCommunityNestedInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<CommunityCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<CommunityUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<CommunityUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type CommunityUpdateOneRequiredWithoutMembersNestedInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<CommunityCreateWithoutMembersInput>;
  update?: InputMaybe<CommunityUpdateToOneWithWhereWithoutMembersInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutMembersInput>;
};

export type CommunityUpdateOneWithoutEventsNestedInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<CommunityCreateWithoutEventsInput>;
  delete?: InputMaybe<CommunityWhereInput>;
  disconnect?: InputMaybe<CommunityWhereInput>;
  update?: InputMaybe<CommunityUpdateToOneWithWhereWithoutEventsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutEventsInput>;
};

export type CommunityUpdateOneWithoutGroupsNestedInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutGroupsInput>;
  create?: InputMaybe<CommunityCreateWithoutGroupsInput>;
  delete?: InputMaybe<CommunityWhereInput>;
  disconnect?: InputMaybe<CommunityWhereInput>;
  update?: InputMaybe<CommunityUpdateToOneWithWhereWithoutGroupsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutGroupsInput>;
};

export type CommunityUpdateOneWithoutPublicationsNestedInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPublicationsInput>;
  create?: InputMaybe<CommunityCreateWithoutPublicationsInput>;
  delete?: InputMaybe<CommunityWhereInput>;
  disconnect?: InputMaybe<CommunityWhereInput>;
  update?: InputMaybe<CommunityUpdateToOneWithWhereWithoutPublicationsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutPublicationsInput>;
};

export type CommunityUpdateToOneWithWhereWithoutEventsInput = {
  data: CommunityUpdateWithoutEventsInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpdateToOneWithWhereWithoutGroupsInput = {
  data: CommunityUpdateWithoutGroupsInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpdateToOneWithWhereWithoutMembersInput = {
  data: CommunityUpdateWithoutMembersInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpdateToOneWithWhereWithoutPublicationsInput = {
  data: CommunityUpdateWithoutPublicationsInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpdateWithWhereUniqueWithoutOwnerInput = {
  data: CommunityUpdateWithoutOwnerInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: CommunityUpdateWithoutParentCommunityInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateWithoutEventsInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  facets?: InputMaybe<FacetUpdateManyWithoutCommunityNestedInput>;
  groups?: InputMaybe<CommunityUpdateManyWithoutParentCommunityNestedInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  members?: InputMaybe<CommunityMemberUpdateManyWithoutCommunityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutAdminCommunitiesNestedInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutGroupsNestedInput>;
  plan?: InputMaybe<CommunityPlanUpdateOneWithoutCommunityNestedInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutCommunityNestedInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutGroupsInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutCommunityNestedInput>;
  facets?: InputMaybe<FacetUpdateManyWithoutCommunityNestedInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  members?: InputMaybe<CommunityMemberUpdateManyWithoutCommunityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutAdminCommunitiesNestedInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutGroupsNestedInput>;
  plan?: InputMaybe<CommunityPlanUpdateOneWithoutCommunityNestedInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutCommunityNestedInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutMembersInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutCommunityNestedInput>;
  facets?: InputMaybe<FacetUpdateManyWithoutCommunityNestedInput>;
  groups?: InputMaybe<CommunityUpdateManyWithoutParentCommunityNestedInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutAdminCommunitiesNestedInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutGroupsNestedInput>;
  plan?: InputMaybe<CommunityPlanUpdateOneWithoutCommunityNestedInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutCommunityNestedInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutOwnerInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutCommunityNestedInput>;
  facets?: InputMaybe<FacetUpdateManyWithoutCommunityNestedInput>;
  groups?: InputMaybe<CommunityUpdateManyWithoutParentCommunityNestedInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  members?: InputMaybe<CommunityMemberUpdateManyWithoutCommunityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutGroupsNestedInput>;
  plan?: InputMaybe<CommunityPlanUpdateOneWithoutCommunityNestedInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutCommunityNestedInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutParentCommunityInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutCommunityNestedInput>;
  facets?: InputMaybe<FacetUpdateManyWithoutCommunityNestedInput>;
  groups?: InputMaybe<CommunityUpdateManyWithoutParentCommunityNestedInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  members?: InputMaybe<CommunityMemberUpdateManyWithoutCommunityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutAdminCommunitiesNestedInput>;
  plan?: InputMaybe<CommunityPlanUpdateOneWithoutCommunityNestedInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutCommunityNestedInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutPublicationsInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutCommunityNestedInput>;
  facets?: InputMaybe<FacetUpdateManyWithoutCommunityNestedInput>;
  groups?: InputMaybe<CommunityUpdateManyWithoutParentCommunityNestedInput>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  members?: InputMaybe<CommunityMemberUpdateManyWithoutCommunityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutAdminCommunitiesNestedInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutGroupsNestedInput>;
  plan?: InputMaybe<CommunityPlanUpdateOneWithoutCommunityNestedInput>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type CommunityUpsertWithWhereUniqueWithoutOwnerInput = {
  create: CommunityCreateWithoutOwnerInput;
  update: CommunityUpdateWithoutOwnerInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: CommunityCreateWithoutParentCommunityInput;
  update: CommunityUpdateWithoutParentCommunityInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpsertWithoutEventsInput = {
  create: CommunityCreateWithoutEventsInput;
  update: CommunityUpdateWithoutEventsInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpsertWithoutGroupsInput = {
  create: CommunityCreateWithoutGroupsInput;
  update: CommunityUpdateWithoutGroupsInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpsertWithoutMembersInput = {
  create: CommunityCreateWithoutMembersInput;
  update: CommunityUpdateWithoutMembersInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityUpsertWithoutPublicationsInput = {
  create: CommunityCreateWithoutPublicationsInput;
  update: CommunityUpdateWithoutPublicationsInput;
  where?: InputMaybe<CommunityWhereInput>;
};

export type CommunityWhereInput = {
  AND?: InputMaybe<Array<CommunityWhereInput>>;
  NOT?: InputMaybe<Array<CommunityWhereInput>>;
  OR?: InputMaybe<Array<CommunityWhereInput>>;
  banner?: InputMaybe<StringNullableFilter>;
  communityPlanId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  facets?: InputMaybe<FacetListRelationFilter>;
  groups?: InputMaybe<CommunityListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFilter>;
  members?: InputMaybe<CommunityMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserNullableRelationFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  parentCommunity?: InputMaybe<CommunityNullableRelationFilter>;
  parentCommunityId?: InputMaybe<IntNullableFilter>;
  plan?: InputMaybe<CommunityPlanNullableRelationFilter>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  publications?: InputMaybe<PublicationListRelationFilter>;
  published?: InputMaybe<BoolNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type CommunityWhereUniqueInput = {
  AND?: InputMaybe<Array<CommunityWhereInput>>;
  NOT?: InputMaybe<Array<CommunityWhereInput>>;
  OR?: InputMaybe<Array<CommunityWhereInput>>;
  banner?: InputMaybe<StringNullableFilter>;
  communityPlanId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  facets?: InputMaybe<FacetListRelationFilter>;
  groups?: InputMaybe<CommunityListRelationFilter>;
  id?: InputMaybe<Scalars['Int']>;
  inviteEnabledRole?: InputMaybe<EnumCommunityPrivacyFilter>;
  members?: InputMaybe<CommunityMemberListRelationFilter>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<UserNullableRelationFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  parentCommunity?: InputMaybe<CommunityNullableRelationFilter>;
  parentCommunityId?: InputMaybe<IntNullableFilter>;
  plan?: InputMaybe<CommunityPlanNullableRelationFilter>;
  postEnabledRole?: InputMaybe<EnumCommunityPrivacyFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  publications?: InputMaybe<PublicationListRelationFilter>;
  published?: InputMaybe<BoolNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type Container = {
  __typename?: 'Container';
  _count: ContainerCount;
  categories?: Maybe<Array<Category>>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  family: Family;
  familyId: Scalars['Int'];
  id: Scalars['ID'];
  items?: Maybe<Array<Item>>;
  name: Scalars['String'];
  qrCode: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ContainerCount = {
  __typename?: 'ContainerCount';
  categories: Scalars['Int'];
  items: Scalars['Int'];
};

export type ContainerCreateManyFamilyInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  qrCode: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContainerCreateManyFamilyInputEnvelope = {
  data: Array<ContainerCreateManyFamilyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ContainerCreateNestedManyWithoutFamilyInput = {
  connect?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContainerCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<ContainerCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<ContainerCreateManyFamilyInputEnvelope>;
};

export type ContainerCreateOrConnectWithoutFamilyInput = {
  create: ContainerCreateWithoutFamilyInput;
  where: ContainerWhereUniqueInput;
};

export type ContainerCreateWithoutFamilyInput = {
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
  familyId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  qrCode?: InputMaybe<StringFilter>;
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

export type ContainerUpdateManyWithWhereWithoutFamilyInput = {
  data: ContainerUpdateManyMutationInput;
  where: ContainerScalarWhereInput;
};

export type ContainerUpdateManyWithoutFamilyNestedInput = {
  connect?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ContainerCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<ContainerCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<ContainerCreateManyFamilyInputEnvelope>;
  delete?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContainerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  set?: InputMaybe<Array<ContainerWhereUniqueInput>>;
  update?: InputMaybe<Array<ContainerUpdateWithWhereUniqueWithoutFamilyInput>>;
  updateMany?: InputMaybe<Array<ContainerUpdateManyWithWhereWithoutFamilyInput>>;
  upsert?: InputMaybe<Array<ContainerUpsertWithWhereUniqueWithoutFamilyInput>>;
};

export type ContainerUpdateWithWhereUniqueWithoutFamilyInput = {
  data: ContainerUpdateWithoutFamilyInput;
  where: ContainerWhereUniqueInput;
};

export type ContainerUpdateWithoutFamilyInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutContainersNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemUpdateManyWithoutContainerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  qrCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContainerUpsertWithWhereUniqueWithoutFamilyInput = {
  create: ContainerCreateWithoutFamilyInput;
  update: ContainerUpdateWithoutFamilyInput;
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
  family?: InputMaybe<FamilyRelationFilter>;
  familyId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  items?: InputMaybe<ItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  qrCode?: InputMaybe<StringFilter>;
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
  family?: InputMaybe<FamilyRelationFilter>;
  familyId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']>;
  items?: InputMaybe<ItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  qrCode?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateCommunityInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  name: Scalars['String'];
  plan?: InputMaybe<CommunityPlanCreateInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type CreateEventInput = {
  Community?: InputMaybe<CommunityCreateNestedOneWithoutEventsInput>;
  address?: InputMaybe<EventAddressCreateWithoutEventInput>;
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  members?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailCreateWithoutEventInput>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutEventInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  tickets?: InputMaybe<EventTicketCreateNestedManyWithoutEventInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
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

export type EnumCommunityMemberRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<CommunityMemberRole>;
};

export type EnumCommunityMemberRoleFilter = {
  equals?: InputMaybe<CommunityMemberRole>;
  in?: InputMaybe<Array<CommunityMemberRole>>;
  not?: InputMaybe<NestedEnumCommunityMemberRoleFilter>;
  notIn?: InputMaybe<Array<CommunityMemberRole>>;
};

export type EnumCommunityPrivacyFieldUpdateOperationsInput = {
  set?: InputMaybe<CommunityPrivacy>;
};

export type EnumCommunityPrivacyFilter = {
  equals?: InputMaybe<CommunityPrivacy>;
  in?: InputMaybe<Array<CommunityPrivacy>>;
  not?: InputMaybe<NestedEnumCommunityPrivacyFilter>;
  notIn?: InputMaybe<Array<CommunityPrivacy>>;
};

export type EnumEventMemberRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<EventMemberRole>;
};

export type EnumEventMemberRoleFilter = {
  equals?: InputMaybe<EventMemberRole>;
  in?: InputMaybe<Array<EventMemberRole>>;
  not?: InputMaybe<NestedEnumEventMemberRoleFilter>;
  notIn?: InputMaybe<Array<EventMemberRole>>;
};

export type EnumMembershipStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<MembershipStatus>;
};

export type EnumMembershipStatusFilter = {
  equals?: InputMaybe<MembershipStatus>;
  in?: InputMaybe<Array<MembershipStatus>>;
  not?: InputMaybe<NestedEnumMembershipStatusFilter>;
  notIn?: InputMaybe<Array<MembershipStatus>>;
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

export type EnumVisibilityFieldUpdateOperationsInput = {
  set?: InputMaybe<Visibility>;
};

export type EnumVisibilityFilter = {
  equals?: InputMaybe<Visibility>;
  in?: InputMaybe<Array<Visibility>>;
  not?: InputMaybe<NestedEnumVisibilityFilter>;
  notIn?: InputMaybe<Array<Visibility>>;
};

export type Event = {
  __typename?: 'Event';
  Community?: Maybe<Community>;
  _count: EventCount;
  address?: Maybe<EventAddress>;
  banner?: Maybe<Scalars['String']>;
  communityId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  eventAddressId?: Maybe<Scalars['Int']>;
  eventOnlineDetailId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  members?: Maybe<Array<EventMember>>;
  onlineDetails?: Maybe<EventOnlineDetail>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['Int']>;
  publications?: Maybe<Array<Publication>>;
  published: Scalars['Boolean'];
  startDate: Scalars['DateTime'];
  tickets?: Maybe<Array<EventTicket>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  visibility: Visibility;
};

export type EventAddress = {
  __typename?: 'EventAddress';
  _count: EventAddressCount;
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  event?: Maybe<Array<Event>>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  zipCode: Scalars['String'];
};

export type EventAddressCount = {
  __typename?: 'EventAddressCount';
  event: Scalars['Int'];
};

export type EventAddressCreateNestedOneWithoutEventInput = {
  connect?: InputMaybe<EventAddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventAddressCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<EventAddressCreateWithoutEventInput>;
};

export type EventAddressCreateOrConnectWithoutEventInput = {
  create: EventAddressCreateWithoutEventInput;
  where: EventAddressWhereUniqueInput;
};

export type EventAddressCreateWithoutEventInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode: Scalars['String'];
};

export type EventAddressGql = {
  __typename?: 'EventAddressGQL';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type EventAddressNullableRelationFilter = {
  is?: InputMaybe<EventAddressWhereInput>;
  isNot?: InputMaybe<EventAddressWhereInput>;
};

export type EventAddressUpdateOneWithoutEventNestedInput = {
  connect?: InputMaybe<EventAddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventAddressCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<EventAddressCreateWithoutEventInput>;
  delete?: InputMaybe<EventAddressWhereInput>;
  disconnect?: InputMaybe<EventAddressWhereInput>;
  update?: InputMaybe<EventAddressUpdateToOneWithWhereWithoutEventInput>;
  upsert?: InputMaybe<EventAddressUpsertWithoutEventInput>;
};

export type EventAddressUpdateToOneWithWhereWithoutEventInput = {
  data: EventAddressUpdateWithoutEventInput;
  where?: InputMaybe<EventAddressWhereInput>;
};

export type EventAddressUpdateWithoutEventInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventAddressUpsertWithoutEventInput = {
  create: EventAddressCreateWithoutEventInput;
  update: EventAddressUpdateWithoutEventInput;
  where?: InputMaybe<EventAddressWhereInput>;
};

export type EventAddressWhereInput = {
  AND?: InputMaybe<Array<EventAddressWhereInput>>;
  NOT?: InputMaybe<Array<EventAddressWhereInput>>;
  OR?: InputMaybe<Array<EventAddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipCode?: InputMaybe<StringFilter>;
};

export type EventAddressWhereUniqueInput = {
  AND?: InputMaybe<Array<EventAddressWhereInput>>;
  NOT?: InputMaybe<Array<EventAddressWhereInput>>;
  OR?: InputMaybe<Array<EventAddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipCode?: InputMaybe<StringFilter>;
};

export type EventCount = {
  __typename?: 'EventCount';
  members: Scalars['Int'];
  publications: Scalars['Int'];
  tickets: Scalars['Int'];
};

export type EventCreateManyCommunityInput = {
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  eventAddressId?: InputMaybe<Scalars['Int']>;
  eventOnlineDetailId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  ownerId?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventCreateManyCommunityInputEnvelope = {
  data: Array<EventCreateManyCommunityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateManyOwnerInput = {
  banner?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  eventAddressId?: InputMaybe<Scalars['Int']>;
  eventOnlineDetailId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventCreateManyOwnerInputEnvelope = {
  data: Array<EventCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<EventCreateManyCommunityInputEnvelope>;
};

export type EventCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<EventCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<EventCreateManyOwnerInputEnvelope>;
};

export type EventCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<EventCreateWithoutMembersInput>;
};

export type EventCreateNestedOneWithoutPublicationsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutPublicationsInput>;
  create?: InputMaybe<EventCreateWithoutPublicationsInput>;
};

export type EventCreateNestedOneWithoutTicketsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutTicketsInput>;
  create?: InputMaybe<EventCreateWithoutTicketsInput>;
};

export type EventCreateOrConnectWithoutCommunityInput = {
  create: EventCreateWithoutCommunityInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutMembersInput = {
  create: EventCreateWithoutMembersInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutOwnerInput = {
  create: EventCreateWithoutOwnerInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutPublicationsInput = {
  create: EventCreateWithoutPublicationsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutTicketsInput = {
  create: EventCreateWithoutTicketsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutCommunityInput = {
  address?: InputMaybe<EventAddressCreateNestedOneWithoutEventInput>;
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  members?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailCreateNestedOneWithoutEventInput>;
  owner?: InputMaybe<UserCreateNestedOneWithoutEventsInput>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutEventInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  tickets?: InputMaybe<EventTicketCreateNestedManyWithoutEventInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventCreateWithoutMembersInput = {
  Community?: InputMaybe<CommunityCreateNestedOneWithoutEventsInput>;
  address?: InputMaybe<EventAddressCreateNestedOneWithoutEventInput>;
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  onlineDetails?: InputMaybe<EventOnlineDetailCreateNestedOneWithoutEventInput>;
  owner?: InputMaybe<UserCreateNestedOneWithoutEventsInput>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutEventInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  tickets?: InputMaybe<EventTicketCreateNestedManyWithoutEventInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventCreateWithoutOwnerInput = {
  Community?: InputMaybe<CommunityCreateNestedOneWithoutEventsInput>;
  address?: InputMaybe<EventAddressCreateNestedOneWithoutEventInput>;
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  members?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailCreateNestedOneWithoutEventInput>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutEventInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  tickets?: InputMaybe<EventTicketCreateNestedManyWithoutEventInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventCreateWithoutPublicationsInput = {
  Community?: InputMaybe<CommunityCreateNestedOneWithoutEventsInput>;
  address?: InputMaybe<EventAddressCreateNestedOneWithoutEventInput>;
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  members?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailCreateNestedOneWithoutEventInput>;
  owner?: InputMaybe<UserCreateNestedOneWithoutEventsInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  tickets?: InputMaybe<EventTicketCreateNestedManyWithoutEventInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventCreateWithoutTicketsInput = {
  Community?: InputMaybe<CommunityCreateNestedOneWithoutEventsInput>;
  address?: InputMaybe<EventAddressCreateNestedOneWithoutEventInput>;
  banner?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  members?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailCreateNestedOneWithoutEventInput>;
  owner?: InputMaybe<UserCreateNestedOneWithoutEventsInput>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutEventInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type EventDetails = {
  __typename?: 'EventDetails';
  address?: Maybe<EventAddressGql>;
  banner?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  iAmMember?: Maybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
  ticket?: Maybe<EventTicketQgl>;
  title: Scalars['String'];
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventMember = {
  __typename?: 'EventMember';
  createdAt: Scalars['DateTime'];
  event: Event;
  eventId: Scalars['Int'];
  id: Scalars['ID'];
  joinedAt?: Maybe<Scalars['DateTime']>;
  leftAt?: Maybe<Scalars['DateTime']>;
  role: EventMemberRole;
  status: MembershipStatus;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type EventMemberCreateManyEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<EventMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type EventMemberCreateManyEventInputEnvelope = {
  data: Array<EventMemberCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventMemberCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<EventMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventMemberCreateManyUserInputEnvelope = {
  data: Array<EventMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventMemberCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventMemberCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventMemberCreateManyEventInputEnvelope>;
};

export type EventMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EventMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventMemberCreateManyUserInputEnvelope>;
};

export type EventMemberCreateOrConnectWithoutEventInput = {
  create: EventMemberCreateWithoutEventInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberCreateOrConnectWithoutUserInput = {
  create: EventMemberCreateWithoutUserInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<EventMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutEventMemberInput>;
};

export type EventMemberCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutMembersInput;
  joinedAt?: InputMaybe<Scalars['DateTime']>;
  leftAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<EventMemberRole>;
  status?: InputMaybe<MembershipStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventMemberListRelationFilter = {
  every?: InputMaybe<EventMemberWhereInput>;
  none?: InputMaybe<EventMemberWhereInput>;
  some?: InputMaybe<EventMemberWhereInput>;
};

export enum EventMemberRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type EventMemberScalarWhereInput = {
  AND?: InputMaybe<Array<EventMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<EventMemberScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  leftAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<EnumEventMemberRoleFilter>;
  status?: InputMaybe<EnumMembershipStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type EventMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  joinedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  leftAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumEventMemberRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMembershipStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventMemberUpdateManyWithWhereWithoutEventInput = {
  data: EventMemberUpdateManyMutationInput;
  where: EventMemberScalarWhereInput;
};

export type EventMemberUpdateManyWithWhereWithoutUserInput = {
  data: EventMemberUpdateManyMutationInput;
  where: EventMemberScalarWhereInput;
};

export type EventMemberUpdateManyWithoutEventNestedInput = {
  connect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventMemberCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventMemberCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<EventMemberUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<EventMemberUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<EventMemberUpsertWithWhereUniqueWithoutEventInput>>;
};

export type EventMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EventMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<EventMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<EventMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<EventMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type EventMemberUpdateWithWhereUniqueWithoutEventInput = {
  data: EventMemberUpdateWithoutEventInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: EventMemberUpdateWithoutUserInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  joinedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  leftAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumEventMemberRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMembershipStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutEventMemberNestedInput>;
};

export type EventMemberUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutMembersNestedInput>;
  joinedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  leftAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumEventMemberRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMembershipStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventMemberUpsertWithWhereUniqueWithoutEventInput = {
  create: EventMemberCreateWithoutEventInput;
  update: EventMemberUpdateWithoutEventInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: EventMemberCreateWithoutUserInput;
  update: EventMemberUpdateWithoutUserInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberWhereInput = {
  AND?: InputMaybe<Array<EventMemberWhereInput>>;
  NOT?: InputMaybe<Array<EventMemberWhereInput>>;
  OR?: InputMaybe<Array<EventMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  leftAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<EnumEventMemberRoleFilter>;
  status?: InputMaybe<EnumMembershipStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type EventMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<EventMemberWhereInput>>;
  NOT?: InputMaybe<Array<EventMemberWhereInput>>;
  OR?: InputMaybe<Array<EventMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  leftAt?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<EnumEventMemberRoleFilter>;
  status?: InputMaybe<EnumMembershipStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type EventNullableRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export type EventOnlineDetail = {
  __typename?: 'EventOnlineDetail';
  _count: EventOnlineDetailCount;
  createdAt: Scalars['DateTime'];
  event?: Maybe<Array<Event>>;
  id: Scalars['ID'];
  joinCode?: Maybe<Scalars['String']>;
  joinDetails?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  platform: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type EventOnlineDetailCount = {
  __typename?: 'EventOnlineDetailCount';
  event: Scalars['Int'];
};

export type EventOnlineDetailCreateNestedOneWithoutEventInput = {
  connect?: InputMaybe<EventOnlineDetailWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventOnlineDetailCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<EventOnlineDetailCreateWithoutEventInput>;
};

export type EventOnlineDetailCreateOrConnectWithoutEventInput = {
  create: EventOnlineDetailCreateWithoutEventInput;
  where: EventOnlineDetailWhereUniqueInput;
};

export type EventOnlineDetailCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  joinCode?: InputMaybe<Scalars['String']>;
  joinDetails?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  platform: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventOnlineDetailNullableRelationFilter = {
  is?: InputMaybe<EventOnlineDetailWhereInput>;
  isNot?: InputMaybe<EventOnlineDetailWhereInput>;
};

export type EventOnlineDetailUpdateOneWithoutEventNestedInput = {
  connect?: InputMaybe<EventOnlineDetailWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventOnlineDetailCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<EventOnlineDetailCreateWithoutEventInput>;
  delete?: InputMaybe<EventOnlineDetailWhereInput>;
  disconnect?: InputMaybe<EventOnlineDetailWhereInput>;
  update?: InputMaybe<EventOnlineDetailUpdateToOneWithWhereWithoutEventInput>;
  upsert?: InputMaybe<EventOnlineDetailUpsertWithoutEventInput>;
};

export type EventOnlineDetailUpdateToOneWithWhereWithoutEventInput = {
  data: EventOnlineDetailUpdateWithoutEventInput;
  where?: InputMaybe<EventOnlineDetailWhereInput>;
};

export type EventOnlineDetailUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  joinCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  joinDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  platform?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventOnlineDetailUpsertWithoutEventInput = {
  create: EventOnlineDetailCreateWithoutEventInput;
  update: EventOnlineDetailUpdateWithoutEventInput;
  where?: InputMaybe<EventOnlineDetailWhereInput>;
};

export type EventOnlineDetailWhereInput = {
  AND?: InputMaybe<Array<EventOnlineDetailWhereInput>>;
  NOT?: InputMaybe<Array<EventOnlineDetailWhereInput>>;
  OR?: InputMaybe<Array<EventOnlineDetailWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  joinCode?: InputMaybe<StringNullableFilter>;
  joinDetails?: InputMaybe<StringNullableFilter>;
  link?: InputMaybe<StringFilter>;
  platform?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventOnlineDetailWhereUniqueInput = {
  AND?: InputMaybe<Array<EventOnlineDetailWhereInput>>;
  NOT?: InputMaybe<Array<EventOnlineDetailWhereInput>>;
  OR?: InputMaybe<Array<EventOnlineDetailWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<Scalars['Int']>;
  joinCode?: InputMaybe<StringNullableFilter>;
  joinDetails?: InputMaybe<StringNullableFilter>;
  link?: InputMaybe<StringFilter>;
  platform?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export type EventScalarWhereInput = {
  AND?: InputMaybe<Array<EventScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereInput>>;
  OR?: InputMaybe<Array<EventScalarWhereInput>>;
  banner?: InputMaybe<StringNullableFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  eventAddressId?: InputMaybe<IntNullableFilter>;
  eventOnlineDetailId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  published?: InputMaybe<BoolFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type EventTicket = {
  __typename?: 'EventTicket';
  beeped: Scalars['Boolean'];
  beepedTime?: Maybe<Scalars['DateTime']>;
  event: Event;
  eventId: Scalars['Int'];
  expire: Scalars['DateTime'];
  id: Scalars['ID'];
  user: User;
  userEmail: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type EventTicketCreateManyEventInput = {
  beeped: Scalars['Boolean'];
  beepedTime?: InputMaybe<Scalars['DateTime']>;
  expire: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  userEmail: Scalars['String'];
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type EventTicketCreateManyEventInputEnvelope = {
  data: Array<EventTicketCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventTicketCreateManyUserInput = {
  beeped: Scalars['Boolean'];
  beepedTime?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  expire: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type EventTicketCreateManyUserInputEnvelope = {
  data: Array<EventTicketCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventTicketCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventTicketCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventTicketCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventTicketCreateManyEventInputEnvelope>;
};

export type EventTicketCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventTicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EventTicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventTicketCreateManyUserInputEnvelope>;
};

export type EventTicketCreateOrConnectWithoutEventInput = {
  create: EventTicketCreateWithoutEventInput;
  where: EventTicketWhereUniqueInput;
};

export type EventTicketCreateOrConnectWithoutUserInput = {
  create: EventTicketCreateWithoutUserInput;
  where: EventTicketWhereUniqueInput;
};

export type EventTicketCreateWithoutEventInput = {
  beeped: Scalars['Boolean'];
  beepedTime?: InputMaybe<Scalars['DateTime']>;
  expire: Scalars['DateTime'];
  user: UserCreateNestedOneWithoutEventTicketInput;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type EventTicketCreateWithoutUserInput = {
  beeped: Scalars['Boolean'];
  beepedTime?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutTicketsInput;
  expire: Scalars['DateTime'];
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type EventTicketListRelationFilter = {
  every?: InputMaybe<EventTicketWhereInput>;
  none?: InputMaybe<EventTicketWhereInput>;
  some?: InputMaybe<EventTicketWhereInput>;
};

export type EventTicketQgl = {
  __typename?: 'EventTicketQGL';
  beeped?: Maybe<Scalars['Boolean']>;
  expire?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type EventTicketScalarWhereInput = {
  AND?: InputMaybe<Array<EventTicketScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventTicketScalarWhereInput>>;
  OR?: InputMaybe<Array<EventTicketScalarWhereInput>>;
  beeped?: InputMaybe<BoolFilter>;
  beepedTime?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<IntFilter>;
  expire?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  userEmail?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type EventTicketUpdateManyMutationInput = {
  beeped?: InputMaybe<BoolFieldUpdateOperationsInput>;
  beepedTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expire?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type EventTicketUpdateManyWithWhereWithoutEventInput = {
  data: EventTicketUpdateManyMutationInput;
  where: EventTicketScalarWhereInput;
};

export type EventTicketUpdateManyWithWhereWithoutUserInput = {
  data: EventTicketUpdateManyMutationInput;
  where: EventTicketScalarWhereInput;
};

export type EventTicketUpdateManyWithoutEventNestedInput = {
  connect?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventTicketCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventTicketCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventTicketCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventTicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  set?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  update?: InputMaybe<Array<EventTicketUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<EventTicketUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<EventTicketUpsertWithWhereUniqueWithoutEventInput>>;
};

export type EventTicketUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventTicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EventTicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventTicketCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventTicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  set?: InputMaybe<Array<EventTicketWhereUniqueInput>>;
  update?: InputMaybe<Array<EventTicketUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<EventTicketUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<EventTicketUpsertWithWhereUniqueWithoutUserInput>>;
};

export type EventTicketUpdateWithWhereUniqueWithoutEventInput = {
  data: EventTicketUpdateWithoutEventInput;
  where: EventTicketWhereUniqueInput;
};

export type EventTicketUpdateWithWhereUniqueWithoutUserInput = {
  data: EventTicketUpdateWithoutUserInput;
  where: EventTicketWhereUniqueInput;
};

export type EventTicketUpdateWithoutEventInput = {
  beeped?: InputMaybe<BoolFieldUpdateOperationsInput>;
  beepedTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expire?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEventTicketNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type EventTicketUpdateWithoutUserInput = {
  beeped?: InputMaybe<BoolFieldUpdateOperationsInput>;
  beepedTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutTicketsNestedInput>;
  expire?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type EventTicketUpsertWithWhereUniqueWithoutEventInput = {
  create: EventTicketCreateWithoutEventInput;
  update: EventTicketUpdateWithoutEventInput;
  where: EventTicketWhereUniqueInput;
};

export type EventTicketUpsertWithWhereUniqueWithoutUserInput = {
  create: EventTicketCreateWithoutUserInput;
  update: EventTicketUpdateWithoutUserInput;
  where: EventTicketWhereUniqueInput;
};

export type EventTicketWhereInput = {
  AND?: InputMaybe<Array<EventTicketWhereInput>>;
  NOT?: InputMaybe<Array<EventTicketWhereInput>>;
  OR?: InputMaybe<Array<EventTicketWhereInput>>;
  beeped?: InputMaybe<BoolFilter>;
  beepedTime?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  expire?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type EventTicketWhereUniqueInput = {
  AND?: InputMaybe<Array<EventTicketWhereInput>>;
  NOT?: InputMaybe<Array<EventTicketWhereInput>>;
  OR?: InputMaybe<Array<EventTicketWhereInput>>;
  beeped?: InputMaybe<BoolFilter>;
  beepedTime?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  expire?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type EventTimelineDto = {
  __typename?: 'EventTimelineDto';
  banner?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  location: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  user: UserTimelineDto;
};

export type EventUpdateManyMutationInput = {
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type EventUpdateManyWithWhereWithoutCommunityInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutOwnerInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithoutCommunityNestedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<EventCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type EventUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<EventCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<EventCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type EventUpdateOneRequiredWithoutMembersNestedInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<EventCreateWithoutMembersInput>;
  update?: InputMaybe<EventUpdateToOneWithWhereWithoutMembersInput>;
  upsert?: InputMaybe<EventUpsertWithoutMembersInput>;
};

export type EventUpdateOneRequiredWithoutTicketsNestedInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutTicketsInput>;
  create?: InputMaybe<EventCreateWithoutTicketsInput>;
  update?: InputMaybe<EventUpdateToOneWithWhereWithoutTicketsInput>;
  upsert?: InputMaybe<EventUpsertWithoutTicketsInput>;
};

export type EventUpdateOneWithoutPublicationsNestedInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutPublicationsInput>;
  create?: InputMaybe<EventCreateWithoutPublicationsInput>;
  delete?: InputMaybe<EventWhereInput>;
  disconnect?: InputMaybe<EventWhereInput>;
  update?: InputMaybe<EventUpdateToOneWithWhereWithoutPublicationsInput>;
  upsert?: InputMaybe<EventUpsertWithoutPublicationsInput>;
};

export type EventUpdateToOneWithWhereWithoutMembersInput = {
  data: EventUpdateWithoutMembersInput;
  where?: InputMaybe<EventWhereInput>;
};

export type EventUpdateToOneWithWhereWithoutPublicationsInput = {
  data: EventUpdateWithoutPublicationsInput;
  where?: InputMaybe<EventWhereInput>;
};

export type EventUpdateToOneWithWhereWithoutTicketsInput = {
  data: EventUpdateWithoutTicketsInput;
  where?: InputMaybe<EventWhereInput>;
};

export type EventUpdateWithWhereUniqueWithoutCommunityInput = {
  data: EventUpdateWithoutCommunityInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutOwnerInput = {
  data: EventUpdateWithoutOwnerInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithoutCommunityInput = {
  address?: InputMaybe<EventAddressUpdateOneWithoutEventNestedInput>;
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<EventMemberUpdateManyWithoutEventNestedInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailUpdateOneWithoutEventNestedInput>;
  owner?: InputMaybe<UserUpdateOneWithoutEventsNestedInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutEventNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tickets?: InputMaybe<EventTicketUpdateManyWithoutEventNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutMembersInput = {
  Community?: InputMaybe<CommunityUpdateOneWithoutEventsNestedInput>;
  address?: InputMaybe<EventAddressUpdateOneWithoutEventNestedInput>;
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailUpdateOneWithoutEventNestedInput>;
  owner?: InputMaybe<UserUpdateOneWithoutEventsNestedInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutEventNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tickets?: InputMaybe<EventTicketUpdateManyWithoutEventNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutOwnerInput = {
  Community?: InputMaybe<CommunityUpdateOneWithoutEventsNestedInput>;
  address?: InputMaybe<EventAddressUpdateOneWithoutEventNestedInput>;
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<EventMemberUpdateManyWithoutEventNestedInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailUpdateOneWithoutEventNestedInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutEventNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tickets?: InputMaybe<EventTicketUpdateManyWithoutEventNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutPublicationsInput = {
  Community?: InputMaybe<CommunityUpdateOneWithoutEventsNestedInput>;
  address?: InputMaybe<EventAddressUpdateOneWithoutEventNestedInput>;
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<EventMemberUpdateManyWithoutEventNestedInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailUpdateOneWithoutEventNestedInput>;
  owner?: InputMaybe<UserUpdateOneWithoutEventsNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tickets?: InputMaybe<EventTicketUpdateManyWithoutEventNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutTicketsInput = {
  Community?: InputMaybe<CommunityUpdateOneWithoutEventsNestedInput>;
  address?: InputMaybe<EventAddressUpdateOneWithoutEventNestedInput>;
  banner?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<EventMemberUpdateManyWithoutEventNestedInput>;
  onlineDetails?: InputMaybe<EventOnlineDetailUpdateOneWithoutEventNestedInput>;
  owner?: InputMaybe<UserUpdateOneWithoutEventsNestedInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutEventNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type EventUpsertWithWhereUniqueWithoutCommunityInput = {
  create: EventCreateWithoutCommunityInput;
  update: EventUpdateWithoutCommunityInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutOwnerInput = {
  create: EventCreateWithoutOwnerInput;
  update: EventUpdateWithoutOwnerInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithoutMembersInput = {
  create: EventCreateWithoutMembersInput;
  update: EventUpdateWithoutMembersInput;
  where?: InputMaybe<EventWhereInput>;
};

export type EventUpsertWithoutPublicationsInput = {
  create: EventCreateWithoutPublicationsInput;
  update: EventUpdateWithoutPublicationsInput;
  where?: InputMaybe<EventWhereInput>;
};

export type EventUpsertWithoutTicketsInput = {
  create: EventCreateWithoutTicketsInput;
  update: EventUpdateWithoutTicketsInput;
  where?: InputMaybe<EventWhereInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  Community?: InputMaybe<CommunityNullableRelationFilter>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  address?: InputMaybe<EventAddressNullableRelationFilter>;
  banner?: InputMaybe<StringNullableFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  eventAddressId?: InputMaybe<IntNullableFilter>;
  eventOnlineDetailId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  members?: InputMaybe<EventMemberListRelationFilter>;
  onlineDetails?: InputMaybe<EventOnlineDetailNullableRelationFilter>;
  owner?: InputMaybe<UserNullableRelationFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  publications?: InputMaybe<PublicationListRelationFilter>;
  published?: InputMaybe<BoolFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  tickets?: InputMaybe<EventTicketListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type EventWhereUniqueInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  Community?: InputMaybe<CommunityNullableRelationFilter>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  address?: InputMaybe<EventAddressNullableRelationFilter>;
  banner?: InputMaybe<StringNullableFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  eventAddressId?: InputMaybe<IntNullableFilter>;
  eventOnlineDetailId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  members?: InputMaybe<EventMemberListRelationFilter>;
  onlineDetails?: InputMaybe<EventOnlineDetailNullableRelationFilter>;
  owner?: InputMaybe<UserNullableRelationFilter>;
  ownerId?: InputMaybe<IntNullableFilter>;
  publications?: InputMaybe<PublicationListRelationFilter>;
  published?: InputMaybe<BoolFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  tickets?: InputMaybe<EventTicketListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type Facet = {
  __typename?: 'Facet';
  Community?: Maybe<Community>;
  _count: FacetCount;
  code: Scalars['String'];
  communityId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  values?: Maybe<Array<FacetValue>>;
};

export type FacetCount = {
  __typename?: 'FacetCount';
  values: Scalars['Int'];
};

export type FacetCreateManyCommunityInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FacetCreateManyCommunityInputEnvelope = {
  data: Array<FacetCreateManyCommunityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FacetCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<FacetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FacetCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<FacetCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<FacetCreateManyCommunityInputEnvelope>;
};

export type FacetCreateOrConnectWithoutCommunityInput = {
  create: FacetCreateWithoutCommunityInput;
  where: FacetWhereUniqueInput;
};

export type FacetCreateWithoutCommunityInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  values?: InputMaybe<FacetValueCreateNestedManyWithoutFacetInput>;
};

export type FacetListRelationFilter = {
  every?: InputMaybe<FacetWhereInput>;
  none?: InputMaybe<FacetWhereInput>;
  some?: InputMaybe<FacetWhereInput>;
};

export type FacetNullableRelationFilter = {
  is?: InputMaybe<FacetWhereInput>;
  isNot?: InputMaybe<FacetWhereInput>;
};

export type FacetScalarWhereInput = {
  AND?: InputMaybe<Array<FacetScalarWhereInput>>;
  NOT?: InputMaybe<Array<FacetScalarWhereInput>>;
  OR?: InputMaybe<Array<FacetScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FacetUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FacetUpdateManyWithWhereWithoutCommunityInput = {
  data: FacetUpdateManyMutationInput;
  where: FacetScalarWhereInput;
};

export type FacetUpdateManyWithoutCommunityNestedInput = {
  connect?: InputMaybe<Array<FacetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FacetCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<FacetCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<FacetCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<FacetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FacetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FacetWhereUniqueInput>>;
  set?: InputMaybe<Array<FacetWhereUniqueInput>>;
  update?: InputMaybe<Array<FacetUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<FacetUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<FacetUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type FacetUpdateWithWhereUniqueWithoutCommunityInput = {
  data: FacetUpdateWithoutCommunityInput;
  where: FacetWhereUniqueInput;
};

export type FacetUpdateWithoutCommunityInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  values?: InputMaybe<FacetValueUpdateManyWithoutFacetNestedInput>;
};

export type FacetUpsertWithWhereUniqueWithoutCommunityInput = {
  create: FacetCreateWithoutCommunityInput;
  update: FacetUpdateWithoutCommunityInput;
  where: FacetWhereUniqueInput;
};

export type FacetValue = {
  __typename?: 'FacetValue';
  Facet?: Maybe<Facet>;
  createdAt: Scalars['DateTime'];
  facetId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type FacetValueCreateManyFacetInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type FacetValueCreateManyFacetInputEnvelope = {
  data: Array<FacetValueCreateManyFacetInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FacetValueCreateNestedManyWithoutFacetInput = {
  connect?: InputMaybe<Array<FacetValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FacetValueCreateOrConnectWithoutFacetInput>>;
  create?: InputMaybe<Array<FacetValueCreateWithoutFacetInput>>;
  createMany?: InputMaybe<FacetValueCreateManyFacetInputEnvelope>;
};

export type FacetValueCreateOrConnectWithoutFacetInput = {
  create: FacetValueCreateWithoutFacetInput;
  where: FacetValueWhereUniqueInput;
};

export type FacetValueCreateWithoutFacetInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type FacetValueListRelationFilter = {
  every?: InputMaybe<FacetValueWhereInput>;
  none?: InputMaybe<FacetValueWhereInput>;
  some?: InputMaybe<FacetValueWhereInput>;
};

export type FacetValueScalarWhereInput = {
  AND?: InputMaybe<Array<FacetValueScalarWhereInput>>;
  NOT?: InputMaybe<Array<FacetValueScalarWhereInput>>;
  OR?: InputMaybe<Array<FacetValueScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  facetId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FacetValueUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FacetValueUpdateManyWithWhereWithoutFacetInput = {
  data: FacetValueUpdateManyMutationInput;
  where: FacetValueScalarWhereInput;
};

export type FacetValueUpdateManyWithoutFacetNestedInput = {
  connect?: InputMaybe<Array<FacetValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FacetValueCreateOrConnectWithoutFacetInput>>;
  create?: InputMaybe<Array<FacetValueCreateWithoutFacetInput>>;
  createMany?: InputMaybe<FacetValueCreateManyFacetInputEnvelope>;
  delete?: InputMaybe<Array<FacetValueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FacetValueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FacetValueWhereUniqueInput>>;
  set?: InputMaybe<Array<FacetValueWhereUniqueInput>>;
  update?: InputMaybe<Array<FacetValueUpdateWithWhereUniqueWithoutFacetInput>>;
  updateMany?: InputMaybe<Array<FacetValueUpdateManyWithWhereWithoutFacetInput>>;
  upsert?: InputMaybe<Array<FacetValueUpsertWithWhereUniqueWithoutFacetInput>>;
};

export type FacetValueUpdateWithWhereUniqueWithoutFacetInput = {
  data: FacetValueUpdateWithoutFacetInput;
  where: FacetValueWhereUniqueInput;
};

export type FacetValueUpdateWithoutFacetInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FacetValueUpsertWithWhereUniqueWithoutFacetInput = {
  create: FacetValueCreateWithoutFacetInput;
  update: FacetValueUpdateWithoutFacetInput;
  where: FacetValueWhereUniqueInput;
};

export type FacetValueWhereInput = {
  AND?: InputMaybe<Array<FacetValueWhereInput>>;
  Facet?: InputMaybe<FacetNullableRelationFilter>;
  NOT?: InputMaybe<Array<FacetValueWhereInput>>;
  OR?: InputMaybe<Array<FacetValueWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  facetId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FacetValueWhereUniqueInput = {
  AND?: InputMaybe<Array<FacetValueWhereInput>>;
  Facet?: InputMaybe<FacetNullableRelationFilter>;
  NOT?: InputMaybe<Array<FacetValueWhereInput>>;
  OR?: InputMaybe<Array<FacetValueWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  facetId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FacetWhereInput = {
  AND?: InputMaybe<Array<FacetWhereInput>>;
  Community?: InputMaybe<CommunityNullableRelationFilter>;
  NOT?: InputMaybe<Array<FacetWhereInput>>;
  OR?: InputMaybe<Array<FacetWhereInput>>;
  code?: InputMaybe<StringFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  values?: InputMaybe<FacetValueListRelationFilter>;
};

export type FacetWhereUniqueInput = {
  AND?: InputMaybe<Array<FacetWhereInput>>;
  Community?: InputMaybe<CommunityNullableRelationFilter>;
  NOT?: InputMaybe<Array<FacetWhereInput>>;
  OR?: InputMaybe<Array<FacetWhereInput>>;
  code?: InputMaybe<StringFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  values?: InputMaybe<FacetValueListRelationFilter>;
};

export type Family = {
  __typename?: 'Family';
  _count: FamilyCount;
  containers?: Maybe<Array<Container>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  members?: Maybe<Array<User>>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FamilyCount = {
  __typename?: 'FamilyCount';
  containers: Scalars['Int'];
  members: Scalars['Int'];
};

export type FamilyCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<FamilyCreateWithoutMembersInput>;
};

export type FamilyCreateOrConnectWithoutMembersInput = {
  create: FamilyCreateWithoutMembersInput;
  where: FamilyWhereUniqueInput;
};

export type FamilyCreateWithoutMembersInput = {
  containers?: InputMaybe<ContainerCreateNestedManyWithoutFamilyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FamilyNullableRelationFilter = {
  is?: InputMaybe<FamilyWhereInput>;
  isNot?: InputMaybe<FamilyWhereInput>;
};

export type FamilyRelationFilter = {
  is?: InputMaybe<FamilyWhereInput>;
  isNot?: InputMaybe<FamilyWhereInput>;
};

export type FamilyUpdateOneWithoutMembersNestedInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<FamilyCreateWithoutMembersInput>;
  delete?: InputMaybe<FamilyWhereInput>;
  disconnect?: InputMaybe<FamilyWhereInput>;
  update?: InputMaybe<FamilyUpdateToOneWithWhereWithoutMembersInput>;
  upsert?: InputMaybe<FamilyUpsertWithoutMembersInput>;
};

export type FamilyUpdateToOneWithWhereWithoutMembersInput = {
  data: FamilyUpdateWithoutMembersInput;
  where?: InputMaybe<FamilyWhereInput>;
};

export type FamilyUpdateWithoutMembersInput = {
  containers?: InputMaybe<ContainerUpdateManyWithoutFamilyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FamilyUpsertWithoutMembersInput = {
  create: FamilyCreateWithoutMembersInput;
  update: FamilyUpdateWithoutMembersInput;
  where?: InputMaybe<FamilyWhereInput>;
};

export type FamilyWhereInput = {
  AND?: InputMaybe<Array<FamilyWhereInput>>;
  NOT?: InputMaybe<Array<FamilyWhereInput>>;
  OR?: InputMaybe<Array<FamilyWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FamilyWhereUniqueInput = {
  AND?: InputMaybe<Array<FamilyWhereInput>>;
  NOT?: InputMaybe<Array<FamilyWhereInput>>;
  OR?: InputMaybe<Array<FamilyWhereInput>>;
  containers?: InputMaybe<ContainerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  members?: InputMaybe<UserListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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

export type Follows = {
  __typename?: 'Follows';
  createdAt: Scalars['DateTime'];
  follower: User;
  followerId: Scalars['Int'];
  following: User;
  followingId: Scalars['Int'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type FollowsCreateManyFollowerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  followingId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FollowsCreateManyFollowerInputEnvelope = {
  data: Array<FollowsCreateManyFollowerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FollowsCreateManyFollowingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  followerId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FollowsCreateManyFollowingInputEnvelope = {
  data: Array<FollowsCreateManyFollowingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FollowsCreateNestedManyWithoutFollowerInput = {
  connect?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FollowsCreateOrConnectWithoutFollowerInput>>;
  create?: InputMaybe<Array<FollowsCreateWithoutFollowerInput>>;
  createMany?: InputMaybe<FollowsCreateManyFollowerInputEnvelope>;
};

export type FollowsCreateNestedManyWithoutFollowingInput = {
  connect?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FollowsCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<FollowsCreateWithoutFollowingInput>>;
  createMany?: InputMaybe<FollowsCreateManyFollowingInputEnvelope>;
};

export type FollowsCreateOrConnectWithoutFollowerInput = {
  create: FollowsCreateWithoutFollowerInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsCreateOrConnectWithoutFollowingInput = {
  create: FollowsCreateWithoutFollowingInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsCreateWithoutFollowerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  following: UserCreateNestedOneWithoutFollowersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FollowsCreateWithoutFollowingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  follower: UserCreateNestedOneWithoutFollowingInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FollowsListRelationFilter = {
  every?: InputMaybe<FollowsWhereInput>;
  none?: InputMaybe<FollowsWhereInput>;
  some?: InputMaybe<FollowsWhereInput>;
};

export type FollowsScalarWhereInput = {
  AND?: InputMaybe<Array<FollowsScalarWhereInput>>;
  NOT?: InputMaybe<Array<FollowsScalarWhereInput>>;
  OR?: InputMaybe<Array<FollowsScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  followerId?: InputMaybe<IntFilter>;
  followingId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FollowsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FollowsUpdateManyWithWhereWithoutFollowerInput = {
  data: FollowsUpdateManyMutationInput;
  where: FollowsScalarWhereInput;
};

export type FollowsUpdateManyWithWhereWithoutFollowingInput = {
  data: FollowsUpdateManyMutationInput;
  where: FollowsScalarWhereInput;
};

export type FollowsUpdateManyWithoutFollowerNestedInput = {
  connect?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FollowsCreateOrConnectWithoutFollowerInput>>;
  create?: InputMaybe<Array<FollowsCreateWithoutFollowerInput>>;
  createMany?: InputMaybe<FollowsCreateManyFollowerInputEnvelope>;
  delete?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FollowsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  set?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  update?: InputMaybe<Array<FollowsUpdateWithWhereUniqueWithoutFollowerInput>>;
  updateMany?: InputMaybe<Array<FollowsUpdateManyWithWhereWithoutFollowerInput>>;
  upsert?: InputMaybe<Array<FollowsUpsertWithWhereUniqueWithoutFollowerInput>>;
};

export type FollowsUpdateManyWithoutFollowingNestedInput = {
  connect?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FollowsCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<FollowsCreateWithoutFollowingInput>>;
  createMany?: InputMaybe<FollowsCreateManyFollowingInputEnvelope>;
  delete?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FollowsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  set?: InputMaybe<Array<FollowsWhereUniqueInput>>;
  update?: InputMaybe<Array<FollowsUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: InputMaybe<Array<FollowsUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: InputMaybe<Array<FollowsUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type FollowsUpdateWithWhereUniqueWithoutFollowerInput = {
  data: FollowsUpdateWithoutFollowerInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsUpdateWithWhereUniqueWithoutFollowingInput = {
  data: FollowsUpdateWithoutFollowingInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsUpdateWithoutFollowerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  following?: InputMaybe<UserUpdateOneRequiredWithoutFollowersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FollowsUpdateWithoutFollowingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  follower?: InputMaybe<UserUpdateOneRequiredWithoutFollowingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FollowsUpsertWithWhereUniqueWithoutFollowerInput = {
  create: FollowsCreateWithoutFollowerInput;
  update: FollowsUpdateWithoutFollowerInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsUpsertWithWhereUniqueWithoutFollowingInput = {
  create: FollowsCreateWithoutFollowingInput;
  update: FollowsUpdateWithoutFollowingInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsWhereInput = {
  AND?: InputMaybe<Array<FollowsWhereInput>>;
  NOT?: InputMaybe<Array<FollowsWhereInput>>;
  OR?: InputMaybe<Array<FollowsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  follower?: InputMaybe<UserRelationFilter>;
  followerId?: InputMaybe<IntFilter>;
  following?: InputMaybe<UserRelationFilter>;
  followingId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FollowsWhereUniqueInput = {
  AND?: InputMaybe<Array<FollowsWhereInput>>;
  NOT?: InputMaybe<Array<FollowsWhereInput>>;
  OR?: InputMaybe<Array<FollowsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  follower?: InputMaybe<UserRelationFilter>;
  followerId?: InputMaybe<IntFilter>;
  following?: InputMaybe<UserRelationFilter>;
  followingId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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
  adminCommunities?: Maybe<Array<Community>>;
  allPublicationComments?: Maybe<Array<PublicationComment>>;
  allPublicationLikes?: Maybe<Array<PublicationLike>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  eventMember?: Maybe<Array<EventMember>>;
  eventTicket?: Maybe<Array<EventTicket>>;
  events?: Maybe<Array<Event>>;
  family?: Maybe<Family>;
  familyId?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  followers?: Maybe<Array<Follows>>;
  following?: Maybe<Array<Follows>>;
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  memberCommunities?: Maybe<Array<CommunityMember>>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  peopleFollowingMe: Array<User>;
  peopleImFollowing: Array<User>;
  posts?: Maybe<Array<Post>>;
  profilePicture?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  publications?: Maybe<Array<Publication>>;
  role: Role;
  twitterUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export enum MembershipStatus {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type Mutation = {
  __typename?: 'Mutation';
  addMemberToFamily: Family;
  approveCommunityMember: BaseResult;
  beepTicket: BaseResult;
  commentPublication: Scalars['Boolean'];
  communityEvents: CommunityEventsProps;
  createCommunity: Community;
  createContainer: BaseResult;
  createFamily: Family;
  createItem: BaseResult;
  createPublication: BaseResult;
  createTicket: BaseResult;
  createUser: User;
  createUserWithoutPassword: BaseResult;
  followUser: Scalars['Boolean'];
  joinCommunity: BaseResult;
  joinEvent: BaseResult;
  leaveCommunity: BaseResult;
  likePublication: Scalars['Boolean'];
  login: LoginResult;
  publish: Scalars['Boolean'];
  publishCommunity: BaseResult;
  refreshToken: Scalars['String'];
  registerUserEvent: BaseResult;
  removeFamily: Family;
  requestPasswordReset: BaseResult;
  resetPassword: BaseResult;
  uncommentPublication: Scalars['Boolean'];
  unfollowUser: Scalars['Boolean'];
  unlikePublication: Scalars['Boolean'];
  unpublish: Scalars['Boolean'];
  unpublishCommunity: BaseResult;
  updateCommunity: BaseResult;
  updatePublication: Publication;
  updateUser: User;
};


export type MutationAddMemberToFamilyArgs = {
  familyId: Scalars['Float'];
  userId: Scalars['Float'];
};


export type MutationApproveCommunityMemberArgs = {
  communityId: Scalars['Float'];
  userId: Scalars['Float'];
};


export type MutationBeepTicketArgs = {
  ticketId: Scalars['Float'];
};


export type MutationCommentPublicationArgs = {
  content: Scalars['String'];
  id: Scalars['Float'];
};


export type MutationCommunityEventsArgs = {
  communityId: Scalars['Float'];
};


export type MutationCreateCommunityArgs = {
  data: CreateCommunityInput;
};


export type MutationCreateContainerArgs = {
  code: Scalars['String'];
  description: Scalars['String'];
  familyId: Scalars['Float'];
  name: Scalars['String'];
  qrCode: Scalars['String'];
};


export type MutationCreateFamilyArgs = {
  name: Scalars['String'];
};


export type MutationCreateItemArgs = {
  category: Scalars['String'];
  containerId: Scalars['Float'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
};


export type MutationCreatePublicationArgs = {
  data: PublicationCreateArgs;
};


export type MutationCreateTicketArgs = {
  eventId: Scalars['Float'];
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserWithoutPasswordArgs = {
  data: CreateUserWithoutPassword;
};


export type MutationFollowUserArgs = {
  userId: Scalars['Float'];
};


export type MutationJoinCommunityArgs = {
  communityId: Scalars['Float'];
};


export type MutationJoinEventArgs = {
  eventId: Scalars['Float'];
};


export type MutationLeaveCommunityArgs = {
  communityId: Scalars['Float'];
};


export type MutationLikePublicationArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  user: LoginUserInput;
};


export type MutationPublishArgs = {
  id: Scalars['Float'];
};


export type MutationPublishCommunityArgs = {
  communityId: Scalars['Float'];
};


export type MutationRegisterUserEventArgs = {
  data: RegisterUserEvent;
};


export type MutationRemoveFamilyArgs = {
  id: Scalars['Float'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUncommentPublicationArgs = {
  commentId: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationUnfollowUserArgs = {
  userId: Scalars['Float'];
};


export type MutationUnlikePublicationArgs = {
  id: Scalars['Float'];
};


export type MutationUnpublishArgs = {
  id: Scalars['Float'];
};


export type MutationUnpublishCommunityArgs = {
  communityId: Scalars['Float'];
};


export type MutationUpdateCommunityArgs = {
  data: UpdateCommunityInput;
};


export type MutationUpdatePublicationArgs = {
  data: PublicationCreateArgs;
  id: Scalars['Float'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
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

export type NestedEnumCommunityMemberRoleFilter = {
  equals?: InputMaybe<CommunityMemberRole>;
  in?: InputMaybe<Array<CommunityMemberRole>>;
  not?: InputMaybe<NestedEnumCommunityMemberRoleFilter>;
  notIn?: InputMaybe<Array<CommunityMemberRole>>;
};

export type NestedEnumCommunityPrivacyFilter = {
  equals?: InputMaybe<CommunityPrivacy>;
  in?: InputMaybe<Array<CommunityPrivacy>>;
  not?: InputMaybe<NestedEnumCommunityPrivacyFilter>;
  notIn?: InputMaybe<Array<CommunityPrivacy>>;
};

export type NestedEnumEventMemberRoleFilter = {
  equals?: InputMaybe<EventMemberRole>;
  in?: InputMaybe<Array<EventMemberRole>>;
  not?: InputMaybe<NestedEnumEventMemberRoleFilter>;
  notIn?: InputMaybe<Array<EventMemberRole>>;
};

export type NestedEnumMembershipStatusFilter = {
  equals?: InputMaybe<MembershipStatus>;
  in?: InputMaybe<Array<MembershipStatus>>;
  not?: InputMaybe<NestedEnumMembershipStatusFilter>;
  notIn?: InputMaybe<Array<MembershipStatus>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumVisibilityFilter = {
  equals?: InputMaybe<Visibility>;
  in?: InputMaybe<Array<Visibility>>;
  not?: InputMaybe<NestedEnumVisibilityFilter>;
  notIn?: InputMaybe<Array<Visibility>>;
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

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type PaginationArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  _count: PostCount;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  publication?: Maybe<Array<Publication>>;
  publicationId?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  visibility: Visibility;
};

export type PostCount = {
  __typename?: 'PostCount';
  publication: Scalars['Int'];
};

export type PostCreateManyAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<PostCreateimagesInput>;
  publicationId?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedOneWithoutPublicationInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPublicationInput>;
  create?: InputMaybe<PostCreateWithoutPublicationInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPublicationInput = {
  create: PostCreateWithoutPublicationInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  images?: InputMaybe<PostCreateimagesInput>;
  publication?: InputMaybe<PublicationCreateNestedManyWithoutPostInput>;
  publicationId?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type PostCreateWithoutPublicationInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  images?: InputMaybe<PostCreateimagesInput>;
  publicationId?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type PostCreateimagesInput = {
  set: Array<Scalars['String']>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  authorId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  publicationId?: InputMaybe<IntNullableFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type PostTimelineDto = {
  __typename?: 'PostTimelineDto';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  images: Array<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  images?: InputMaybe<PostUpdateimagesInput>;
  publicationId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateOneRequiredWithoutPublicationNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPublicationInput>;
  create?: InputMaybe<PostCreateWithoutPublicationInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutPublicationInput>;
  upsert?: InputMaybe<PostUpsertWithoutPublicationInput>;
};

export type PostUpdateToOneWithWhereWithoutPublicationInput = {
  data: PostUpdateWithoutPublicationInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  images?: InputMaybe<PostUpdateimagesInput>;
  publication?: InputMaybe<PublicationUpdateManyWithoutPostNestedInput>;
  publicationId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutPublicationInput = {
  author?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  images?: InputMaybe<PostUpdateimagesInput>;
  publicationId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PostUpdateimagesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutPublicationInput = {
  create: PostCreateWithoutPublicationInput;
  update: PostUpdateWithoutPublicationInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserNullableRelationFilter>;
  authorId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  publication?: InputMaybe<PublicationListRelationFilter>;
  publicationId?: InputMaybe<IntNullableFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserNullableRelationFilter>;
  authorId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<StringNullableListFilter>;
  publication?: InputMaybe<PublicationListRelationFilter>;
  publicationId?: InputMaybe<IntNullableFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type Publication = {
  __typename?: 'Publication';
  _count: PublicationCount;
  comments?: Maybe<Array<PublicationComment>>;
  community?: Maybe<Community>;
  communityId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  likes?: Maybe<Array<PublicationLike>>;
  post: Post;
  postId: Scalars['Int'];
  published: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  visibility: Visibility;
};

export type PublicationComment = {
  __typename?: 'PublicationComment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  publication: Publication;
  publicationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type PublicationCommentCreateManyPublicationInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PublicationCommentCreateManyPublicationInputEnvelope = {
  data: Array<PublicationCommentCreateManyPublicationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationCommentCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publicationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PublicationCommentCreateManyUserInputEnvelope = {
  data: Array<PublicationCommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationCommentCreateNestedManyWithoutPublicationInput = {
  connect?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCommentCreateOrConnectWithoutPublicationInput>>;
  create?: InputMaybe<Array<PublicationCommentCreateWithoutPublicationInput>>;
  createMany?: InputMaybe<PublicationCommentCreateManyPublicationInputEnvelope>;
};

export type PublicationCommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PublicationCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<PublicationCommentCreateManyUserInputEnvelope>;
};

export type PublicationCommentCreateOrConnectWithoutPublicationInput = {
  create: PublicationCommentCreateWithoutPublicationInput;
  where: PublicationCommentWhereUniqueInput;
};

export type PublicationCommentCreateOrConnectWithoutUserInput = {
  create: PublicationCommentCreateWithoutUserInput;
  where: PublicationCommentWhereUniqueInput;
};

export type PublicationCommentCreateWithoutPublicationInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAllPublicationCommentsInput;
};

export type PublicationCommentCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  publication: PublicationCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PublicationCommentListRelationFilter = {
  every?: InputMaybe<PublicationCommentWhereInput>;
  none?: InputMaybe<PublicationCommentWhereInput>;
  some?: InputMaybe<PublicationCommentWhereInput>;
};

export type PublicationCommentScalarWhereInput = {
  AND?: InputMaybe<Array<PublicationCommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<PublicationCommentScalarWhereInput>>;
  OR?: InputMaybe<Array<PublicationCommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publicationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PublicationCommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PublicationCommentUpdateManyWithWhereWithoutPublicationInput = {
  data: PublicationCommentUpdateManyMutationInput;
  where: PublicationCommentScalarWhereInput;
};

export type PublicationCommentUpdateManyWithWhereWithoutUserInput = {
  data: PublicationCommentUpdateManyMutationInput;
  where: PublicationCommentScalarWhereInput;
};

export type PublicationCommentUpdateManyWithoutPublicationNestedInput = {
  connect?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCommentCreateOrConnectWithoutPublicationInput>>;
  create?: InputMaybe<Array<PublicationCommentCreateWithoutPublicationInput>>;
  createMany?: InputMaybe<PublicationCommentCreateManyPublicationInputEnvelope>;
  delete?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationCommentUpdateWithWhereUniqueWithoutPublicationInput>>;
  updateMany?: InputMaybe<Array<PublicationCommentUpdateManyWithWhereWithoutPublicationInput>>;
  upsert?: InputMaybe<Array<PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput>>;
};

export type PublicationCommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PublicationCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<PublicationCommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationCommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PublicationCommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PublicationCommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PublicationCommentUpdateWithWhereUniqueWithoutPublicationInput = {
  data: PublicationCommentUpdateWithoutPublicationInput;
  where: PublicationCommentWhereUniqueInput;
};

export type PublicationCommentUpdateWithWhereUniqueWithoutUserInput = {
  data: PublicationCommentUpdateWithoutUserInput;
  where: PublicationCommentWhereUniqueInput;
};

export type PublicationCommentUpdateWithoutPublicationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAllPublicationCommentsNestedInput>;
};

export type PublicationCommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publication?: InputMaybe<PublicationUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput = {
  create: PublicationCommentCreateWithoutPublicationInput;
  update: PublicationCommentUpdateWithoutPublicationInput;
  where: PublicationCommentWhereUniqueInput;
};

export type PublicationCommentUpsertWithWhereUniqueWithoutUserInput = {
  create: PublicationCommentCreateWithoutUserInput;
  update: PublicationCommentUpdateWithoutUserInput;
  where: PublicationCommentWhereUniqueInput;
};

export type PublicationCommentWhereInput = {
  AND?: InputMaybe<Array<PublicationCommentWhereInput>>;
  NOT?: InputMaybe<Array<PublicationCommentWhereInput>>;
  OR?: InputMaybe<Array<PublicationCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publication?: InputMaybe<PublicationRelationFilter>;
  publicationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PublicationCommentWhereUniqueInput = {
  AND?: InputMaybe<Array<PublicationCommentWhereInput>>;
  NOT?: InputMaybe<Array<PublicationCommentWhereInput>>;
  OR?: InputMaybe<Array<PublicationCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  publication?: InputMaybe<PublicationRelationFilter>;
  publicationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PublicationCommentsDto = {
  __typename?: 'PublicationCommentsDto';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
  user: UserTimelineDto;
};

export type PublicationCount = {
  __typename?: 'PublicationCount';
  comments: Scalars['Int'];
  likes: Scalars['Int'];
};

export type PublicationCreateArgs = {
  communityId?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  event?: InputMaybe<CreateEventInput>;
  eventId?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  published?: InputMaybe<Scalars['Boolean']>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateManyCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  postId: Scalars['Int'];
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateManyCommunityInputEnvelope = {
  data: Array<PublicationCreateManyCommunityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationCreateManyEventInput = {
  communityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  postId: Scalars['Int'];
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateManyEventInputEnvelope = {
  data: Array<PublicationCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationCreateManyPostInput = {
  communityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateManyPostInputEnvelope = {
  data: Array<PublicationCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationCreateManyUserInput = {
  communityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  postId: Scalars['Int'];
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateManyUserInputEnvelope = {
  data: Array<PublicationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<PublicationCreateManyCommunityInputEnvelope>;
};

export type PublicationCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutEventInput>>;
  createMany?: InputMaybe<PublicationCreateManyEventInputEnvelope>;
};

export type PublicationCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutPostInput>>;
  createMany?: InputMaybe<PublicationCreateManyPostInputEnvelope>;
};

export type PublicationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutUserInput>>;
  createMany?: InputMaybe<PublicationCreateManyUserInputEnvelope>;
};

export type PublicationCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PublicationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PublicationCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PublicationCreateWithoutCommentsInput>;
};

export type PublicationCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<PublicationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PublicationCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<PublicationCreateWithoutLikesInput>;
};

export type PublicationCreateOrConnectWithoutCommentsInput = {
  create: PublicationCreateWithoutCommentsInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationCreateOrConnectWithoutCommunityInput = {
  create: PublicationCreateWithoutCommunityInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationCreateOrConnectWithoutEventInput = {
  create: PublicationCreateWithoutEventInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationCreateOrConnectWithoutLikesInput = {
  create: PublicationCreateWithoutLikesInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationCreateOrConnectWithoutPostInput = {
  create: PublicationCreateWithoutPostInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationCreateOrConnectWithoutUserInput = {
  create: PublicationCreateWithoutUserInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationCreateWithoutCommentsInput = {
  community?: InputMaybe<CommunityCreateNestedOneWithoutPublicationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  event?: InputMaybe<EventCreateNestedOneWithoutPublicationsInput>;
  likes?: InputMaybe<PublicationLikeCreateNestedManyWithoutPublicationInput>;
  post: PostCreateNestedOneWithoutPublicationInput;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPublicationsInput>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateWithoutCommunityInput = {
  comments?: InputMaybe<PublicationCommentCreateNestedManyWithoutPublicationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  event?: InputMaybe<EventCreateNestedOneWithoutPublicationsInput>;
  likes?: InputMaybe<PublicationLikeCreateNestedManyWithoutPublicationInput>;
  post: PostCreateNestedOneWithoutPublicationInput;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPublicationsInput>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateWithoutEventInput = {
  comments?: InputMaybe<PublicationCommentCreateNestedManyWithoutPublicationInput>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutPublicationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  likes?: InputMaybe<PublicationLikeCreateNestedManyWithoutPublicationInput>;
  post: PostCreateNestedOneWithoutPublicationInput;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPublicationsInput>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateWithoutLikesInput = {
  comments?: InputMaybe<PublicationCommentCreateNestedManyWithoutPublicationInput>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutPublicationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  event?: InputMaybe<EventCreateNestedOneWithoutPublicationsInput>;
  post: PostCreateNestedOneWithoutPublicationInput;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPublicationsInput>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateWithoutPostInput = {
  comments?: InputMaybe<PublicationCommentCreateNestedManyWithoutPublicationInput>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutPublicationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  event?: InputMaybe<EventCreateNestedOneWithoutPublicationsInput>;
  likes?: InputMaybe<PublicationLikeCreateNestedManyWithoutPublicationInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutPublicationsInput>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationCreateWithoutUserInput = {
  comments?: InputMaybe<PublicationCommentCreateNestedManyWithoutPublicationInput>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutPublicationsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  event?: InputMaybe<EventCreateNestedOneWithoutPublicationsInput>;
  likes?: InputMaybe<PublicationLikeCreateNestedManyWithoutPublicationInput>;
  post: PostCreateNestedOneWithoutPublicationInput;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type PublicationLike = {
  __typename?: 'PublicationLike';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  publication: Publication;
  publicationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type PublicationLikeCreateManyPublicationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PublicationLikeCreateManyPublicationInputEnvelope = {
  data: Array<PublicationLikeCreateManyPublicationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publicationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PublicationLikeCreateManyUserInputEnvelope = {
  data: Array<PublicationLikeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PublicationLikeCreateNestedManyWithoutPublicationInput = {
  connect?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationLikeCreateOrConnectWithoutPublicationInput>>;
  create?: InputMaybe<Array<PublicationLikeCreateWithoutPublicationInput>>;
  createMany?: InputMaybe<PublicationLikeCreateManyPublicationInputEnvelope>;
};

export type PublicationLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationLikeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PublicationLikeCreateWithoutUserInput>>;
  createMany?: InputMaybe<PublicationLikeCreateManyUserInputEnvelope>;
};

export type PublicationLikeCreateOrConnectWithoutPublicationInput = {
  create: PublicationLikeCreateWithoutPublicationInput;
  where: PublicationLikeWhereUniqueInput;
};

export type PublicationLikeCreateOrConnectWithoutUserInput = {
  create: PublicationLikeCreateWithoutUserInput;
  where: PublicationLikeWhereUniqueInput;
};

export type PublicationLikeCreateWithoutPublicationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAllPublicationLikesInput;
};

export type PublicationLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  publication: PublicationCreateNestedOneWithoutLikesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PublicationLikeListRelationFilter = {
  every?: InputMaybe<PublicationLikeWhereInput>;
  none?: InputMaybe<PublicationLikeWhereInput>;
  some?: InputMaybe<PublicationLikeWhereInput>;
};

export type PublicationLikeScalarWhereInput = {
  AND?: InputMaybe<Array<PublicationLikeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PublicationLikeScalarWhereInput>>;
  OR?: InputMaybe<Array<PublicationLikeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publicationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PublicationLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PublicationLikeUpdateManyWithWhereWithoutPublicationInput = {
  data: PublicationLikeUpdateManyMutationInput;
  where: PublicationLikeScalarWhereInput;
};

export type PublicationLikeUpdateManyWithWhereWithoutUserInput = {
  data: PublicationLikeUpdateManyMutationInput;
  where: PublicationLikeScalarWhereInput;
};

export type PublicationLikeUpdateManyWithoutPublicationNestedInput = {
  connect?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationLikeCreateOrConnectWithoutPublicationInput>>;
  create?: InputMaybe<Array<PublicationLikeCreateWithoutPublicationInput>>;
  createMany?: InputMaybe<PublicationLikeCreateManyPublicationInputEnvelope>;
  delete?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationLikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput>>;
  updateMany?: InputMaybe<Array<PublicationLikeUpdateManyWithWhereWithoutPublicationInput>>;
  upsert?: InputMaybe<Array<PublicationLikeUpsertWithWhereUniqueWithoutPublicationInput>>;
};

export type PublicationLikeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationLikeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PublicationLikeCreateWithoutUserInput>>;
  createMany?: InputMaybe<PublicationLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationLikeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationLikeWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PublicationLikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PublicationLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput = {
  data: PublicationLikeUpdateWithoutPublicationInput;
  where: PublicationLikeWhereUniqueInput;
};

export type PublicationLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: PublicationLikeUpdateWithoutUserInput;
  where: PublicationLikeWhereUniqueInput;
};

export type PublicationLikeUpdateWithoutPublicationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAllPublicationLikesNestedInput>;
};

export type PublicationLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publication?: InputMaybe<PublicationUpdateOneRequiredWithoutLikesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PublicationLikeUpsertWithWhereUniqueWithoutPublicationInput = {
  create: PublicationLikeCreateWithoutPublicationInput;
  update: PublicationLikeUpdateWithoutPublicationInput;
  where: PublicationLikeWhereUniqueInput;
};

export type PublicationLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: PublicationLikeCreateWithoutUserInput;
  update: PublicationLikeUpdateWithoutUserInput;
  where: PublicationLikeWhereUniqueInput;
};

export type PublicationLikeWhereInput = {
  AND?: InputMaybe<Array<PublicationLikeWhereInput>>;
  NOT?: InputMaybe<Array<PublicationLikeWhereInput>>;
  OR?: InputMaybe<Array<PublicationLikeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publication?: InputMaybe<PublicationRelationFilter>;
  publicationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PublicationLikeWhereUniqueInput = {
  AND?: InputMaybe<Array<PublicationLikeWhereInput>>;
  NOT?: InputMaybe<Array<PublicationLikeWhereInput>>;
  OR?: InputMaybe<Array<PublicationLikeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  publication?: InputMaybe<PublicationRelationFilter>;
  publicationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PublicationListRelationFilter = {
  every?: InputMaybe<PublicationWhereInput>;
  none?: InputMaybe<PublicationWhereInput>;
  some?: InputMaybe<PublicationWhereInput>;
};

export type PublicationRelationFilter = {
  is?: InputMaybe<PublicationWhereInput>;
  isNot?: InputMaybe<PublicationWhereInput>;
};

export type PublicationResult = BaseResult | Publication;

export type PublicationScalarWhereInput = {
  AND?: InputMaybe<Array<PublicationScalarWhereInput>>;
  NOT?: InputMaybe<Array<PublicationScalarWhereInput>>;
  OR?: InputMaybe<Array<PublicationScalarWhereInput>>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  eventId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type PublicationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpdateManyWithWhereWithoutCommunityInput = {
  data: PublicationUpdateManyMutationInput;
  where: PublicationScalarWhereInput;
};

export type PublicationUpdateManyWithWhereWithoutEventInput = {
  data: PublicationUpdateManyMutationInput;
  where: PublicationScalarWhereInput;
};

export type PublicationUpdateManyWithWhereWithoutPostInput = {
  data: PublicationUpdateManyMutationInput;
  where: PublicationScalarWhereInput;
};

export type PublicationUpdateManyWithWhereWithoutUserInput = {
  data: PublicationUpdateManyMutationInput;
  where: PublicationScalarWhereInput;
};

export type PublicationUpdateManyWithoutCommunityNestedInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<PublicationCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<PublicationUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<PublicationUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type PublicationUpdateManyWithoutEventNestedInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutEventInput>>;
  createMany?: InputMaybe<PublicationCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<PublicationUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<PublicationUpsertWithWhereUniqueWithoutEventInput>>;
};

export type PublicationUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutPostInput>>;
  createMany?: InputMaybe<PublicationCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PublicationUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PublicationUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PublicationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PublicationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PublicationCreateWithoutUserInput>>;
  createMany?: InputMaybe<PublicationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PublicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  update?: InputMaybe<Array<PublicationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PublicationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PublicationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PublicationUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<PublicationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PublicationCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PublicationCreateWithoutCommentsInput>;
  update?: InputMaybe<PublicationUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<PublicationUpsertWithoutCommentsInput>;
};

export type PublicationUpdateOneRequiredWithoutLikesNestedInput = {
  connect?: InputMaybe<PublicationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PublicationCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<PublicationCreateWithoutLikesInput>;
  update?: InputMaybe<PublicationUpdateToOneWithWhereWithoutLikesInput>;
  upsert?: InputMaybe<PublicationUpsertWithoutLikesInput>;
};

export type PublicationUpdateToOneWithWhereWithoutCommentsInput = {
  data: PublicationUpdateWithoutCommentsInput;
  where?: InputMaybe<PublicationWhereInput>;
};

export type PublicationUpdateToOneWithWhereWithoutLikesInput = {
  data: PublicationUpdateWithoutLikesInput;
  where?: InputMaybe<PublicationWhereInput>;
};

export type PublicationUpdateWithWhereUniqueWithoutCommunityInput = {
  data: PublicationUpdateWithoutCommunityInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpdateWithWhereUniqueWithoutEventInput = {
  data: PublicationUpdateWithoutEventInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpdateWithWhereUniqueWithoutPostInput = {
  data: PublicationUpdateWithoutPostInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpdateWithWhereUniqueWithoutUserInput = {
  data: PublicationUpdateWithoutUserInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpdateWithoutCommentsInput = {
  community?: InputMaybe<CommunityUpdateOneWithoutPublicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutPublicationsNestedInput>;
  likes?: InputMaybe<PublicationLikeUpdateManyWithoutPublicationNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPublicationNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPublicationsNestedInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpdateWithoutCommunityInput = {
  comments?: InputMaybe<PublicationCommentUpdateManyWithoutPublicationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutPublicationsNestedInput>;
  likes?: InputMaybe<PublicationLikeUpdateManyWithoutPublicationNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPublicationNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPublicationsNestedInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpdateWithoutEventInput = {
  comments?: InputMaybe<PublicationCommentUpdateManyWithoutPublicationNestedInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutPublicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<PublicationLikeUpdateManyWithoutPublicationNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPublicationNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPublicationsNestedInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpdateWithoutLikesInput = {
  comments?: InputMaybe<PublicationCommentUpdateManyWithoutPublicationNestedInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutPublicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutPublicationsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPublicationNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPublicationsNestedInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpdateWithoutPostInput = {
  comments?: InputMaybe<PublicationCommentUpdateManyWithoutPublicationNestedInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutPublicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutPublicationsNestedInput>;
  likes?: InputMaybe<PublicationLikeUpdateManyWithoutPublicationNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutPublicationsNestedInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpdateWithoutUserInput = {
  comments?: InputMaybe<PublicationCommentUpdateManyWithoutPublicationNestedInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutPublicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutPublicationsNestedInput>;
  likes?: InputMaybe<PublicationLikeUpdateManyWithoutPublicationNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPublicationNestedInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visibility?: InputMaybe<EnumVisibilityFieldUpdateOperationsInput>;
};

export type PublicationUpsertWithWhereUniqueWithoutCommunityInput = {
  create: PublicationCreateWithoutCommunityInput;
  update: PublicationUpdateWithoutCommunityInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpsertWithWhereUniqueWithoutEventInput = {
  create: PublicationCreateWithoutEventInput;
  update: PublicationUpdateWithoutEventInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpsertWithWhereUniqueWithoutPostInput = {
  create: PublicationCreateWithoutPostInput;
  update: PublicationUpdateWithoutPostInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpsertWithWhereUniqueWithoutUserInput = {
  create: PublicationCreateWithoutUserInput;
  update: PublicationUpdateWithoutUserInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpsertWithoutCommentsInput = {
  create: PublicationCreateWithoutCommentsInput;
  update: PublicationUpdateWithoutCommentsInput;
  where?: InputMaybe<PublicationWhereInput>;
};

export type PublicationUpsertWithoutLikesInput = {
  create: PublicationCreateWithoutLikesInput;
  update: PublicationUpdateWithoutLikesInput;
  where?: InputMaybe<PublicationWhereInput>;
};

export type PublicationWhereInput = {
  AND?: InputMaybe<Array<PublicationWhereInput>>;
  NOT?: InputMaybe<Array<PublicationWhereInput>>;
  OR?: InputMaybe<Array<PublicationWhereInput>>;
  comments?: InputMaybe<PublicationCommentListRelationFilter>;
  community?: InputMaybe<CommunityNullableRelationFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventNullableRelationFilter>;
  eventId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<PublicationLikeListRelationFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type PublicationWhereUniqueInput = {
  AND?: InputMaybe<Array<PublicationWhereInput>>;
  NOT?: InputMaybe<Array<PublicationWhereInput>>;
  OR?: InputMaybe<Array<PublicationWhereInput>>;
  comments?: InputMaybe<PublicationCommentListRelationFilter>;
  community?: InputMaybe<CommunityNullableRelationFilter>;
  communityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventNullableRelationFilter>;
  eventId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  likes?: InputMaybe<PublicationLikeListRelationFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<IntNullableFilter>;
  visibility?: InputMaybe<EnumVisibilityFilter>;
};

export type Query = {
  __typename?: 'Query';
  communityById: Community;
  findCommentsByPublication: Array<PublicationComment>;
  findEvent: EventDetails;
  findEventsByCommunity: Array<Event>;
  findEventsByUser: Array<Event>;
  getAllContainers: Array<Container>;
  getAllFamilies: Array<Family>;
  getAllItems: Array<Item>;
  getContainerByCode: Container;
  getContainerById: Container;
  getDashboardData: DashboardData;
  getFamily: Family;
  getPendingCommunityMember: Array<User>;
  me: MeDto;
  publication: PublicationResult;
  search?: Maybe<SearchDto>;
  searchCommunities: Array<CommunityDto>;
  suggestedUsers: Array<User>;
  timeline: TimelineResult;
  users: User;
};


export type QueryCommunityByIdArgs = {
  id: Scalars['Float'];
};


export type QueryFindCommentsByPublicationArgs = {
  pagination?: InputMaybe<PaginationArgs>;
  publicationId: Scalars['Float'];
};


export type QueryFindEventArgs = {
  eventId: Scalars['Float'];
};


export type QueryFindEventsByCommunityArgs = {
  communityId: Scalars['Float'];
};


export type QueryGetContainerByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetContainerByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetFamilyArgs = {
  id: Scalars['Float'];
};


export type QueryGetPendingCommunityMemberArgs = {
  communityId: Scalars['Float'];
};


export type QueryPublicationArgs = {
  id: Scalars['Float'];
};


export type QuerySearchArgs = {
  pagination?: InputMaybe<PaginationArgs>;
  term?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Float']>;
};


export type QuerySearchCommunitiesArgs = {
  term: Scalars['String'];
};


export type QueryTimelineArgs = {
  filter?: InputMaybe<TimelineFilterInput>;
  forceUpdate?: InputMaybe<Scalars['Boolean']>;
  pagination?: InputMaybe<TimelineInputArgs>;
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

export type RegisterUserEvent = {
  communityId: Scalars['Float'];
  eventId: Scalars['Float'];
  user: CreateUserWithoutPassword;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SearchDto = {
  __typename?: 'SearchDto';
  count: Scalars['Int'];
  users?: Maybe<Array<SearchUserDto>>;
};

export type SearchUserDto = {
  __typename?: 'SearchUserDto';
  about?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowing?: Maybe<Scalars['Boolean']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  peopleFollowingMeCount?: Maybe<Scalars['Int']>;
  peopleImFollowingCount?: Maybe<Scalars['Int']>;
  profilePicture?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
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

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Timeline = {
  __typename?: 'Timeline';
  commentCount: Scalars['Int'];
  comments: Array<PublicationCommentsDto>;
  community: CommunityTimelineDto;
  event?: Maybe<EventTimelineDto>;
  id: Scalars['Int'];
  likeCount: Scalars['Int'];
  liked: Scalars['Boolean'];
  likes: Array<PublicationLike>;
  post: PostTimelineDto;
  user: UserTimelineDto;
};

export type TimelineDto = {
  __typename?: 'TimelineDto';
  count: Scalars['Int'];
  publications?: Maybe<Array<Timeline>>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};

export type TimelineFilterInput = {
  communityId?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type TimelineInputArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type TimelineResult = BaseResult | TimelineDto;

export type UpdateCommunityInput = {
  banner?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['Float'];
  inviteEnabledRole?: InputMaybe<CommunityPrivacy>;
  name?: InputMaybe<Scalars['String']>;
  plan?: InputMaybe<CommunityPlanCreateInput>;
  postEnabledRole?: InputMaybe<CommunityPrivacy>;
  profilePicture?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visibility?: InputMaybe<Visibility>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  about?: Maybe<Scalars['String']>;
  adminCommunities?: Maybe<Array<Community>>;
  allPublicationComments?: Maybe<Array<PublicationComment>>;
  allPublicationLikes?: Maybe<Array<PublicationLike>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  eventMember?: Maybe<Array<EventMember>>;
  eventTicket?: Maybe<Array<EventTicket>>;
  events?: Maybe<Array<Event>>;
  family?: Maybe<Family>;
  familyId?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  followers?: Maybe<Array<Follows>>;
  following?: Maybe<Array<Follows>>;
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  memberCommunities?: Maybe<Array<CommunityMember>>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  profilePicture?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  publications?: Maybe<Array<Publication>>;
  role: Role;
  twitterUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  adminCommunities: Scalars['Int'];
  allPublicationComments: Scalars['Int'];
  allPublicationLikes: Scalars['Int'];
  eventMember: Scalars['Int'];
  eventTicket: Scalars['Int'];
  events: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  memberCommunities: Scalars['Int'];
  posts: Scalars['Int'];
  publications: Scalars['Int'];
};

export type UserCreateInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutAdminCommunitiesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdminCommunitiesInput>;
  create?: InputMaybe<UserCreateWithoutAdminCommunitiesInput>;
};

export type UserCreateNestedOneWithoutAllPublicationCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAllPublicationCommentsInput>;
  create?: InputMaybe<UserCreateWithoutAllPublicationCommentsInput>;
};

export type UserCreateNestedOneWithoutAllPublicationLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAllPublicationLikesInput>;
  create?: InputMaybe<UserCreateWithoutAllPublicationLikesInput>;
};

export type UserCreateNestedOneWithoutEventMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventMemberInput>;
  create?: InputMaybe<UserCreateWithoutEventMemberInput>;
};

export type UserCreateNestedOneWithoutEventTicketInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventTicketInput>;
  create?: InputMaybe<UserCreateWithoutEventTicketInput>;
};

export type UserCreateNestedOneWithoutEventsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<UserCreateWithoutEventsInput>;
};

export type UserCreateNestedOneWithoutFollowersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<UserCreateWithoutFollowersInput>;
};

export type UserCreateNestedOneWithoutFollowingInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowingInput>;
  create?: InputMaybe<UserCreateWithoutFollowingInput>;
};

export type UserCreateNestedOneWithoutMemberCommunitiesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMemberCommunitiesInput>;
  create?: InputMaybe<UserCreateWithoutMemberCommunitiesInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
};

export type UserCreateNestedOneWithoutPublicationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPublicationsInput>;
  create?: InputMaybe<UserCreateWithoutPublicationsInput>;
};

export type UserCreateOrConnectWithoutAdminCommunitiesInput = {
  create: UserCreateWithoutAdminCommunitiesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAllPublicationCommentsInput = {
  create: UserCreateWithoutAllPublicationCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAllPublicationLikesInput = {
  create: UserCreateWithoutAllPublicationLikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventMemberInput = {
  create: UserCreateWithoutEventMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventTicketInput = {
  create: UserCreateWithoutEventTicketInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventsInput = {
  create: UserCreateWithoutEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMemberCommunitiesInput = {
  create: UserCreateWithoutMemberCommunitiesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPublicationsInput = {
  create: UserCreateWithoutPublicationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAdminCommunitiesInput = {
  about?: InputMaybe<Scalars['String']>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutAllPublicationCommentsInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutAllPublicationLikesInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutEventMemberInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutEventTicketInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutEventsInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutFollowersInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutFollowingInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutMemberCommunitiesInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPostsInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  publications?: InputMaybe<PublicationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPublicationsInput = {
  about?: InputMaybe<Scalars['String']>;
  adminCommunities?: InputMaybe<CommunityCreateNestedManyWithoutOwnerInput>;
  allPublicationComments?: InputMaybe<PublicationCommentCreateNestedManyWithoutUserInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutUserInput>;
  eventTicket?: InputMaybe<EventTicketCreateNestedManyWithoutUserInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutOwnerInput>;
  family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  firstName: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  githubUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  memberCommunities?: InputMaybe<CommunityMemberCreateNestedManyWithoutUserInput>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  profilePicture?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Role>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserTimelineDto = {
  __typename?: 'UserTimelineDto';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAllPublicationCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAllPublicationCommentsInput>;
  create?: InputMaybe<UserCreateWithoutAllPublicationCommentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAllPublicationCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAllPublicationCommentsInput>;
};

export type UserUpdateOneRequiredWithoutAllPublicationLikesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAllPublicationLikesInput>;
  create?: InputMaybe<UserCreateWithoutAllPublicationLikesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAllPublicationLikesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAllPublicationLikesInput>;
};

export type UserUpdateOneRequiredWithoutEventTicketNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventTicketInput>;
  create?: InputMaybe<UserCreateWithoutEventTicketInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutEventTicketInput>;
  upsert?: InputMaybe<UserUpsertWithoutEventTicketInput>;
};

export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<UserCreateWithoutFollowersInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFollowersInput>;
  upsert?: InputMaybe<UserUpsertWithoutFollowersInput>;
};

export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowingInput>;
  create?: InputMaybe<UserCreateWithoutFollowingInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFollowingInput>;
  upsert?: InputMaybe<UserUpsertWithoutFollowingInput>;
};

export type UserUpdateOneWithoutAdminCommunitiesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdminCommunitiesInput>;
  create?: InputMaybe<UserCreateWithoutAdminCommunitiesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAdminCommunitiesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAdminCommunitiesInput>;
};

export type UserUpdateOneWithoutEventMemberNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventMemberInput>;
  create?: InputMaybe<UserCreateWithoutEventMemberInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutEventMemberInput>;
  upsert?: InputMaybe<UserUpsertWithoutEventMemberInput>;
};

export type UserUpdateOneWithoutEventsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<UserCreateWithoutEventsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutEventsInput>;
  upsert?: InputMaybe<UserUpsertWithoutEventsInput>;
};

export type UserUpdateOneWithoutMemberCommunitiesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMemberCommunitiesInput>;
  create?: InputMaybe<UserCreateWithoutMemberCommunitiesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutMemberCommunitiesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMemberCommunitiesInput>;
};

export type UserUpdateOneWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateOneWithoutPublicationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPublicationsInput>;
  create?: InputMaybe<UserCreateWithoutPublicationsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutPublicationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPublicationsInput>;
};

export type UserUpdateToOneWithWhereWithoutAdminCommunitiesInput = {
  data: UserUpdateWithoutAdminCommunitiesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAllPublicationCommentsInput = {
  data: UserUpdateWithoutAllPublicationCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAllPublicationLikesInput = {
  data: UserUpdateWithoutAllPublicationLikesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutEventMemberInput = {
  data: UserUpdateWithoutEventMemberInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutEventTicketInput = {
  data: UserUpdateWithoutEventTicketInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutEventsInput = {
  data: UserUpdateWithoutEventsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFollowersInput = {
  data: UserUpdateWithoutFollowersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutMemberCommunitiesInput = {
  data: UserUpdateWithoutMemberCommunitiesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutPostsInput = {
  data: UserUpdateWithoutPostsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutPublicationsInput = {
  data: UserUpdateWithoutPublicationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAdminCommunitiesInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAllPublicationCommentsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAllPublicationLikesInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventMemberInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventTicketInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowersInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowingInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMemberCommunitiesInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  publications?: InputMaybe<PublicationUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPublicationsInput = {
  about?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  adminCommunities?: InputMaybe<CommunityUpdateManyWithoutOwnerNestedInput>;
  allPublicationComments?: InputMaybe<PublicationCommentUpdateManyWithoutUserNestedInput>;
  allPublicationLikes?: InputMaybe<PublicationLikeUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  eventMember?: InputMaybe<EventMemberUpdateManyWithoutUserNestedInput>;
  eventTicket?: InputMaybe<EventTicketUpdateManyWithoutUserNestedInput>;
  events?: InputMaybe<EventUpdateManyWithoutOwnerNestedInput>;
  family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowerNestedInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberCommunities?: InputMaybe<CommunityMemberUpdateManyWithoutUserNestedInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  public?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAdminCommunitiesInput = {
  create: UserCreateWithoutAdminCommunitiesInput;
  update: UserUpdateWithoutAdminCommunitiesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAllPublicationCommentsInput = {
  create: UserCreateWithoutAllPublicationCommentsInput;
  update: UserUpdateWithoutAllPublicationCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAllPublicationLikesInput = {
  create: UserCreateWithoutAllPublicationLikesInput;
  update: UserUpdateWithoutAllPublicationLikesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutEventMemberInput = {
  create: UserCreateWithoutEventMemberInput;
  update: UserUpdateWithoutEventMemberInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutEventTicketInput = {
  create: UserCreateWithoutEventTicketInput;
  update: UserUpdateWithoutEventTicketInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutEventsInput = {
  create: UserCreateWithoutEventsInput;
  update: UserUpdateWithoutEventsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutMemberCommunitiesInput = {
  create: UserCreateWithoutMemberCommunitiesInput;
  update: UserUpdateWithoutMemberCommunitiesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutPublicationsInput = {
  create: UserCreateWithoutPublicationsInput;
  update: UserUpdateWithoutPublicationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  adminCommunities?: InputMaybe<CommunityListRelationFilter>;
  allPublicationComments?: InputMaybe<PublicationCommentListRelationFilter>;
  allPublicationLikes?: InputMaybe<PublicationLikeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  eventMember?: InputMaybe<EventMemberListRelationFilter>;
  eventTicket?: InputMaybe<EventTicketListRelationFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  family?: InputMaybe<FamilyNullableRelationFilter>;
  familyId?: InputMaybe<IntNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  followers?: InputMaybe<FollowsListRelationFilter>;
  following?: InputMaybe<FollowsListRelationFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  memberCommunities?: InputMaybe<CommunityMemberListRelationFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  public?: InputMaybe<BoolFilter>;
  publications?: InputMaybe<PublicationListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  twitterUrl?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  adminCommunities?: InputMaybe<CommunityListRelationFilter>;
  allPublicationComments?: InputMaybe<PublicationCommentListRelationFilter>;
  allPublicationLikes?: InputMaybe<PublicationLikeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<BoolFilter>;
  eventMember?: InputMaybe<EventMemberListRelationFilter>;
  eventTicket?: InputMaybe<EventTicketListRelationFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  family?: InputMaybe<FamilyNullableRelationFilter>;
  familyId?: InputMaybe<IntNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  followers?: InputMaybe<FollowsListRelationFilter>;
  following?: InputMaybe<FollowsListRelationFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<StringFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  memberCommunities?: InputMaybe<CommunityMemberListRelationFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  public?: InputMaybe<BoolFilter>;
  publications?: InputMaybe<PublicationListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  twitterUrl?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum Visibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'LoginResult', token: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, profilePicture?: string | null } } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename: 'User', id: string } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: string };

export type CreateCommunityMutationVariables = Exact<{
  data: CreateCommunityInput;
}>;


export type CreateCommunityMutation = { __typename?: 'Mutation', createCommunity: { __typename?: 'Community', id: string, name: string } };

export type GetCommunityByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetCommunityByIdQuery = { __typename?: 'Query', communityById: { __typename?: 'Community', id: string, name: string, description: string, banner?: string | null, profilePicture?: string | null, visibility: Visibility, postEnabledRole: CommunityPrivacy, inviteEnabledRole: CommunityPrivacy, members?: Array<{ __typename?: 'CommunityMember', user?: { __typename?: 'User', id: string, nickname?: string | null, firstName: string, lastName: string, role: Role, profilePicture?: string | null } | null }> | null, owner?: { __typename?: 'User', id: string, nickname?: string | null, firstName: string, lastName: string, profilePicture?: string | null } | null } };

export type UpdateCommunityMutationVariables = Exact<{
  data: UpdateCommunityInput;
}>;


export type UpdateCommunityMutation = { __typename?: 'Mutation', updateCommunity: { __typename?: 'BaseResult', success: boolean } };

export type JoinCommunityMutationVariables = Exact<{
  communityId: Scalars['Float'];
}>;


export type JoinCommunityMutation = { __typename?: 'Mutation', joinCommunity: { __typename?: 'BaseResult', success: boolean, message: string } };

export type LeaveCommunityMutationVariables = Exact<{
  communityId: Scalars['Float'];
}>;


export type LeaveCommunityMutation = { __typename?: 'Mutation', leaveCommunity: { __typename?: 'BaseResult', success: boolean, message: string } };

export type GetPendingCommunityMembersQueryVariables = Exact<{
  communityId: Scalars['Float'];
}>;


export type GetPendingCommunityMembersQuery = { __typename?: 'Query', getPendingCommunityMember: Array<{ __typename?: 'User', id: string, nickname?: string | null }> };

export type ApproveCommunityMemberMutationVariables = Exact<{
  communityId: Scalars['Float'];
  userId: Scalars['Float'];
}>;


export type ApproveCommunityMemberMutation = { __typename?: 'Mutation', approveCommunityMember: { __typename?: 'BaseResult', success: boolean, message: string } };

export type UnplishCommunityMutationVariables = Exact<{
  communityId: Scalars['Float'];
}>;


export type UnplishCommunityMutation = { __typename?: 'Mutation', unpublishCommunity: { __typename?: 'BaseResult', success: boolean, message: string } };

export type PublishCommunityMutationVariables = Exact<{
  communityId: Scalars['Float'];
}>;


export type PublishCommunityMutation = { __typename?: 'Mutation', publishCommunity: { __typename?: 'BaseResult', success: boolean, message: string } };

export type PublicationByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type PublicationByIdQuery = { __typename?: 'Query', publication: { __typename?: 'BaseResult', success: boolean, message: string } | { __typename?: 'Publication', id: string, visibility: Visibility, post: { __typename?: 'Post', title?: string | null, content?: string | null }, event?: { __typename?: 'Event', title: string, content?: string | null, published: boolean, startDate: any, endDate: any, address?: { __typename?: 'EventAddress', zipCode: string } | null, onlineDetails?: { __typename?: 'EventOnlineDetail', link: string } | null } | null, user?: { __typename?: 'User', email: string } | null, likes?: Array<{ __typename?: 'PublicationLike', user: { __typename?: 'User', nickname?: string | null } }> | null, comments?: Array<{ __typename?: 'PublicationComment', id: string, content: string, user: { __typename?: 'User', nickname?: string | null } }> | null, _count: { __typename?: 'PublicationCount', likes: number, comments: number } } };

export type CreatePublicationMutationVariables = Exact<{
  data: PublicationCreateArgs;
}>;


export type CreatePublicationMutation = { __typename?: 'Mutation', createPublication: { __typename?: 'BaseResult', success: boolean, message: string } };

export type UnpublishMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UnpublishMutation = { __typename?: 'Mutation', unpublish: boolean };

export type LikePublicationMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type LikePublicationMutation = { __typename?: 'Mutation', likePublication: boolean };

export type UnlikePublicationMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UnlikePublicationMutation = { __typename?: 'Mutation', unlikePublication: boolean };

export type CommentPublicationMutationVariables = Exact<{
  publicationId: Scalars['Float'];
  content: Scalars['String'];
}>;


export type CommentPublicationMutation = { __typename?: 'Mutation', commentPublication: boolean };

export type UncommentPublicationMutationVariables = Exact<{
  id: Scalars['Float'];
  commentId: Scalars['Float'];
}>;


export type UncommentPublicationMutation = { __typename?: 'Mutation', uncommentPublication: boolean };

export type UpdatePublicationMutationVariables = Exact<{
  id: Scalars['Float'];
  data: PublicationCreateArgs;
}>;


export type UpdatePublicationMutation = { __typename?: 'Mutation', updatePublication: { __typename: 'Publication', id: string } };

export type GetAllFamiliesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFamiliesQuery = { __typename?: 'Query', getAllFamilies: Array<{ __typename?: 'Family', id: string, name: string }> };

export type CreateFamilyMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateFamilyMutation = { __typename?: 'Mutation', createFamily: { __typename?: 'Family', id: string, name: string } };

export type RemoveFamilyMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RemoveFamilyMutation = { __typename?: 'Mutation', removeFamily: { __typename?: 'Family', name: string } };

export type CreateContainerMutationVariables = Exact<{
  familyId: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  qrCode: Scalars['String'];
  code: Scalars['String'];
}>;


export type CreateContainerMutation = { __typename?: 'Mutation', createContainer: { __typename?: 'BaseResult', success: boolean, message: string } };

export type GetContainerByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetContainerByCodeQuery = { __typename?: 'Query', getContainerByCode: { __typename?: 'Container', id: string, name: string, description: string, qrCode: string, code: string, family: { __typename?: 'Family', id: string, name: string }, items?: Array<{ __typename?: 'Item', id: string, name: string, description: string, imageUrl: string, quantity: number, category: string }> | null } };

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


export type GetContainerByIdQuery = { __typename?: 'Query', getContainerById: { __typename?: 'Container', id: string, name: string, description: string, qrCode: string, code: string, family: { __typename?: 'Family', id: string, name: string }, items?: Array<{ __typename?: 'Item', id: string, name: string, description: string, imageUrl: string, quantity: number, category: string }> | null } };

export type GetAllContainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContainersQuery = { __typename?: 'Query', getAllContainers: Array<{ __typename?: 'Container', id: string, name: string, description: string, code: string, qrCode: string, createdAt: any, updatedAt: any, items?: Array<{ __typename?: 'Item', id: string, name: string, description: string, quantity: number, imageUrl: string, category: string }> | null }> };

export type GetAllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllItemsQuery = { __typename?: 'Query', getAllItems: Array<{ __typename?: 'Item', id: string, name: string, description: string, quantity: number, category: string, imageUrl: string, container: { __typename?: 'Container', id: string, name: string } }> };

export type GetDashboardDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardDataQuery = { __typename?: 'Query', getDashboardData: { __typename?: 'DashboardData', totalContainers: number, totalItems: number, recentContainers: Array<{ __typename?: 'RecentContainer', id: number, name: string }> } };

export type SearchQueryVariables = Exact<{
  term?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Float']>;
  pagination?: InputMaybe<PaginationArgs>;
}>;


export type SearchQuery = { __typename?: 'Query', search?: { __typename?: 'SearchDto', count: number, users?: Array<{ __typename?: 'SearchUserDto', id: number, name: string, nickname?: string | null, profilePicture?: string | null, linkedinUrl?: string | null, twitterUrl?: string | null, githubUrl?: string | null, about?: string | null, peopleImFollowingCount?: number | null, peopleFollowingMeCount?: number | null, isFollowing?: boolean | null }> | null } | null };

export type SearchCommunitiesQueryVariables = Exact<{
  term: Scalars['String'];
}>;


export type SearchCommunitiesQuery = { __typename?: 'Query', searchCommunities: Array<{ __typename?: 'CommunityDto', id: string, name: string, description: string, ownerId?: number | null, postEnabledRole: CommunityPrivacy, profilePicture?: string | null, banner?: string | null, isMember: boolean, members?: Array<{ __typename?: 'CommunityMember', user?: { __typename?: 'User', id: string, nickname?: string | null, firstName: string, lastName: string, role: Role, profilePicture?: string | null } | null }> | null }> };

export type TimelineQueryVariables = Exact<{
  pagination?: InputMaybe<TimelineInputArgs>;
  filter?: InputMaybe<TimelineFilterInput>;
}>;


export type TimelineQuery = { __typename?: 'Query', timeline: { __typename?: 'BaseResult' } | { __typename?: 'TimelineDto', publications?: Array<{ __typename?: 'Timeline', id: number, liked: boolean, likeCount: number, commentCount: number, user: { __typename?: 'UserTimelineDto', id?: number | null, name: string, profilePicture?: string | null }, post: { __typename?: 'PostTimelineDto', id: number, text?: string | null, createdAt?: any | null, images: Array<string> }, event?: { __typename?: 'EventTimelineDto', id?: number | null, description?: string | null, title: string, startDate?: any | null, endDate?: any | null, banner?: string | null } | null, comments: Array<{ __typename?: 'PublicationCommentsDto', id: number, text: string, createdAt?: any | null, user: { __typename?: 'UserTimelineDto', id?: number | null, name: string, profilePicture?: string | null } }> }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeDto', id: string, email: string, firstName: string, lastName: string, nickname?: string | null, familyId?: number | null, profilePicture?: string | null, about?: string | null, linkedinUrl?: string | null, twitterUrl?: string | null, githubUrl?: string | null, memberCommunities?: Array<{ __typename?: 'CommunityMember', id: string, status: MembershipStatus, community: { __typename?: 'Community', id: string, name: string, banner?: string | null, description: string, profilePicture?: string | null, members?: Array<{ __typename?: 'CommunityMember', user?: { __typename?: 'User', firstName: string, lastName: string, profilePicture?: string | null } | null }> | null } }> | null, adminCommunities?: Array<{ __typename?: 'Community', id: string, name: string, banner?: string | null, description: string, profilePicture?: string | null }> | null, peopleImFollowing: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, profilePicture?: string | null }>, peopleFollowingMe: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, profilePicture?: string | null }>, family?: { __typename?: 'Family', id: string, name: string } | null } };

export type FollowUserMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser: boolean };

export type UnfollowUserMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type UnfollowUserMutation = { __typename?: 'Mutation', unfollowUser: boolean };

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
export const CreateCommunityDocument = `
    mutation CreateCommunity($data: CreateCommunityInput!) {
  createCommunity(data: $data) {
    id
    name
  }
}
    `;
export const useCreateCommunityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommunityMutation, TError, CreateCommunityMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommunityMutation, TError, CreateCommunityMutationVariables, TContext>(
      ['CreateCommunity'],
      (variables?: CreateCommunityMutationVariables) => fetcher<CreateCommunityMutation, CreateCommunityMutationVariables>(client, CreateCommunityDocument, variables, headers)(),
      options
    );
export const GetCommunityByIdDocument = `
    query GetCommunityById($id: Float!) {
  communityById(id: $id) {
    id
    name
    description
    banner
    profilePicture
    visibility
    postEnabledRole
    inviteEnabledRole
    members {
      user {
        id
        nickname
        firstName
        lastName
        role
        profilePicture
      }
    }
    owner {
      id
      nickname
      firstName
      lastName
      profilePicture
    }
  }
}
    `;
export const useGetCommunityByIdQuery = <
      TData = GetCommunityByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommunityByIdQueryVariables,
      options?: UseQueryOptions<GetCommunityByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommunityByIdQuery, TError, TData>(
      ['GetCommunityById', variables],
      fetcher<GetCommunityByIdQuery, GetCommunityByIdQueryVariables>(client, GetCommunityByIdDocument, variables, headers),
      options
    );
export const UpdateCommunityDocument = `
    mutation UpdateCommunity($data: UpdateCommunityInput!) {
  updateCommunity(data: $data) {
    success
  }
}
    `;
export const useUpdateCommunityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateCommunityMutation, TError, UpdateCommunityMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateCommunityMutation, TError, UpdateCommunityMutationVariables, TContext>(
      ['UpdateCommunity'],
      (variables?: UpdateCommunityMutationVariables) => fetcher<UpdateCommunityMutation, UpdateCommunityMutationVariables>(client, UpdateCommunityDocument, variables, headers)(),
      options
    );
export const JoinCommunityDocument = `
    mutation JoinCommunity($communityId: Float!) {
  joinCommunity(communityId: $communityId) {
    success
    message
  }
}
    `;
export const useJoinCommunityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<JoinCommunityMutation, TError, JoinCommunityMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<JoinCommunityMutation, TError, JoinCommunityMutationVariables, TContext>(
      ['JoinCommunity'],
      (variables?: JoinCommunityMutationVariables) => fetcher<JoinCommunityMutation, JoinCommunityMutationVariables>(client, JoinCommunityDocument, variables, headers)(),
      options
    );
export const LeaveCommunityDocument = `
    mutation LeaveCommunity($communityId: Float!) {
  leaveCommunity(communityId: $communityId) {
    success
    message
  }
}
    `;
export const useLeaveCommunityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LeaveCommunityMutation, TError, LeaveCommunityMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LeaveCommunityMutation, TError, LeaveCommunityMutationVariables, TContext>(
      ['LeaveCommunity'],
      (variables?: LeaveCommunityMutationVariables) => fetcher<LeaveCommunityMutation, LeaveCommunityMutationVariables>(client, LeaveCommunityDocument, variables, headers)(),
      options
    );
export const GetPendingCommunityMembersDocument = `
    query GetPendingCommunityMembers($communityId: Float!) {
  getPendingCommunityMember(communityId: $communityId) {
    id
    nickname
  }
}
    `;
export const useGetPendingCommunityMembersQuery = <
      TData = GetPendingCommunityMembersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPendingCommunityMembersQueryVariables,
      options?: UseQueryOptions<GetPendingCommunityMembersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPendingCommunityMembersQuery, TError, TData>(
      ['GetPendingCommunityMembers', variables],
      fetcher<GetPendingCommunityMembersQuery, GetPendingCommunityMembersQueryVariables>(client, GetPendingCommunityMembersDocument, variables, headers),
      options
    );
export const ApproveCommunityMemberDocument = `
    mutation ApproveCommunityMember($communityId: Float!, $userId: Float!) {
  approveCommunityMember(communityId: $communityId, userId: $userId) {
    success
    message
  }
}
    `;
export const useApproveCommunityMemberMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ApproveCommunityMemberMutation, TError, ApproveCommunityMemberMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ApproveCommunityMemberMutation, TError, ApproveCommunityMemberMutationVariables, TContext>(
      ['ApproveCommunityMember'],
      (variables?: ApproveCommunityMemberMutationVariables) => fetcher<ApproveCommunityMemberMutation, ApproveCommunityMemberMutationVariables>(client, ApproveCommunityMemberDocument, variables, headers)(),
      options
    );
export const UnplishCommunityDocument = `
    mutation UnplishCommunity($communityId: Float!) {
  unpublishCommunity(communityId: $communityId) {
    success
    message
  }
}
    `;
export const useUnplishCommunityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UnplishCommunityMutation, TError, UnplishCommunityMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UnplishCommunityMutation, TError, UnplishCommunityMutationVariables, TContext>(
      ['UnplishCommunity'],
      (variables?: UnplishCommunityMutationVariables) => fetcher<UnplishCommunityMutation, UnplishCommunityMutationVariables>(client, UnplishCommunityDocument, variables, headers)(),
      options
    );
export const PublishCommunityDocument = `
    mutation PublishCommunity($communityId: Float!) {
  publishCommunity(communityId: $communityId) {
    success
    message
  }
}
    `;
export const usePublishCommunityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<PublishCommunityMutation, TError, PublishCommunityMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<PublishCommunityMutation, TError, PublishCommunityMutationVariables, TContext>(
      ['PublishCommunity'],
      (variables?: PublishCommunityMutationVariables) => fetcher<PublishCommunityMutation, PublishCommunityMutationVariables>(client, PublishCommunityDocument, variables, headers)(),
      options
    );
export const PublicationByIdDocument = `
    query PublicationById($id: Float!) {
  publication(id: $id) {
    ... on Publication {
      id
      post {
        title
        content
      }
      visibility
      event {
        title
        content
        published
        startDate
        endDate
        address {
          zipCode
        }
        onlineDetails {
          link
        }
      }
      user {
        email
      }
      likes {
        user {
          nickname
        }
      }
      comments {
        id
        content
        user {
          nickname
        }
      }
      _count {
        likes
        comments
      }
    }
    ... on BaseResult {
      success
      message
    }
  }
}
    `;
export const usePublicationByIdQuery = <
      TData = PublicationByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: PublicationByIdQueryVariables,
      options?: UseQueryOptions<PublicationByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PublicationByIdQuery, TError, TData>(
      ['PublicationById', variables],
      fetcher<PublicationByIdQuery, PublicationByIdQueryVariables>(client, PublicationByIdDocument, variables, headers),
      options
    );
export const CreatePublicationDocument = `
    mutation CreatePublication($data: PublicationCreateArgs!) {
  createPublication(data: $data) {
    success
    message
  }
}
    `;
export const useCreatePublicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePublicationMutation, TError, CreatePublicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePublicationMutation, TError, CreatePublicationMutationVariables, TContext>(
      ['CreatePublication'],
      (variables?: CreatePublicationMutationVariables) => fetcher<CreatePublicationMutation, CreatePublicationMutationVariables>(client, CreatePublicationDocument, variables, headers)(),
      options
    );
export const UnpublishDocument = `
    mutation Unpublish($id: Float!) {
  unpublish(id: $id)
}
    `;
export const useUnpublishMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UnpublishMutation, TError, UnpublishMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UnpublishMutation, TError, UnpublishMutationVariables, TContext>(
      ['Unpublish'],
      (variables?: UnpublishMutationVariables) => fetcher<UnpublishMutation, UnpublishMutationVariables>(client, UnpublishDocument, variables, headers)(),
      options
    );
export const LikePublicationDocument = `
    mutation LikePublication($id: Float!) {
  likePublication(id: $id)
}
    `;
export const useLikePublicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LikePublicationMutation, TError, LikePublicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LikePublicationMutation, TError, LikePublicationMutationVariables, TContext>(
      ['LikePublication'],
      (variables?: LikePublicationMutationVariables) => fetcher<LikePublicationMutation, LikePublicationMutationVariables>(client, LikePublicationDocument, variables, headers)(),
      options
    );
export const UnlikePublicationDocument = `
    mutation UnlikePublication($id: Float!) {
  unlikePublication(id: $id)
}
    `;
export const useUnlikePublicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UnlikePublicationMutation, TError, UnlikePublicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UnlikePublicationMutation, TError, UnlikePublicationMutationVariables, TContext>(
      ['UnlikePublication'],
      (variables?: UnlikePublicationMutationVariables) => fetcher<UnlikePublicationMutation, UnlikePublicationMutationVariables>(client, UnlikePublicationDocument, variables, headers)(),
      options
    );
export const CommentPublicationDocument = `
    mutation CommentPublication($publicationId: Float!, $content: String!) {
  commentPublication(id: $publicationId, content: $content)
}
    `;
export const useCommentPublicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CommentPublicationMutation, TError, CommentPublicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CommentPublicationMutation, TError, CommentPublicationMutationVariables, TContext>(
      ['CommentPublication'],
      (variables?: CommentPublicationMutationVariables) => fetcher<CommentPublicationMutation, CommentPublicationMutationVariables>(client, CommentPublicationDocument, variables, headers)(),
      options
    );
export const UncommentPublicationDocument = `
    mutation UncommentPublication($id: Float!, $commentId: Float!) {
  uncommentPublication(id: $id, commentId: $commentId)
}
    `;
export const useUncommentPublicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UncommentPublicationMutation, TError, UncommentPublicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UncommentPublicationMutation, TError, UncommentPublicationMutationVariables, TContext>(
      ['UncommentPublication'],
      (variables?: UncommentPublicationMutationVariables) => fetcher<UncommentPublicationMutation, UncommentPublicationMutationVariables>(client, UncommentPublicationDocument, variables, headers)(),
      options
    );
export const UpdatePublicationDocument = `
    mutation UpdatePublication($id: Float!, $data: PublicationCreateArgs!) {
  updatePublication(id: $id, data: $data) {
    __typename
    id
  }
}
    `;
export const useUpdatePublicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdatePublicationMutation, TError, UpdatePublicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdatePublicationMutation, TError, UpdatePublicationMutationVariables, TContext>(
      ['UpdatePublication'],
      (variables?: UpdatePublicationMutationVariables) => fetcher<UpdatePublicationMutation, UpdatePublicationMutationVariables>(client, UpdatePublicationDocument, variables, headers)(),
      options
    );
export const GetAllFamiliesDocument = `
    query GetAllFamilies {
  getAllFamilies {
    id
    name
  }
}
    `;
export const useGetAllFamiliesQuery = <
      TData = GetAllFamiliesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllFamiliesQueryVariables,
      options?: UseQueryOptions<GetAllFamiliesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllFamiliesQuery, TError, TData>(
      variables === undefined ? ['GetAllFamilies'] : ['GetAllFamilies', variables],
      fetcher<GetAllFamiliesQuery, GetAllFamiliesQueryVariables>(client, GetAllFamiliesDocument, variables, headers),
      options
    );
export const CreateFamilyDocument = `
    mutation CreateFamily($name: String!) {
  createFamily(name: $name) {
    id
    name
  }
}
    `;
export const useCreateFamilyMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateFamilyMutation, TError, CreateFamilyMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateFamilyMutation, TError, CreateFamilyMutationVariables, TContext>(
      ['CreateFamily'],
      (variables?: CreateFamilyMutationVariables) => fetcher<CreateFamilyMutation, CreateFamilyMutationVariables>(client, CreateFamilyDocument, variables, headers)(),
      options
    );
export const RemoveFamilyDocument = `
    mutation RemoveFamily($id: Float!) {
  removeFamily(id: $id) {
    name
  }
}
    `;
export const useRemoveFamilyMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveFamilyMutation, TError, RemoveFamilyMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveFamilyMutation, TError, RemoveFamilyMutationVariables, TContext>(
      ['RemoveFamily'],
      (variables?: RemoveFamilyMutationVariables) => fetcher<RemoveFamilyMutation, RemoveFamilyMutationVariables>(client, RemoveFamilyDocument, variables, headers)(),
      options
    );
export const CreateContainerDocument = `
    mutation CreateContainer($familyId: Float!, $name: String!, $description: String!, $qrCode: String!, $code: String!) {
  createContainer(
    familyId: $familyId
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
    family {
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
    family {
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
export const SearchDocument = `
    query Search($term: String, $userId: Float, $pagination: PaginationArgs) {
  search(term: $term, userId: $userId, pagination: $pagination) {
    users {
      id
      name
      nickname
      profilePicture
      linkedinUrl
      twitterUrl
      githubUrl
      about
      peopleImFollowingCount
      peopleFollowingMeCount
      isFollowing
    }
    count
  }
}
    `;
export const useSearchQuery = <
      TData = SearchQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: SearchQueryVariables,
      options?: UseQueryOptions<SearchQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SearchQuery, TError, TData>(
      variables === undefined ? ['Search'] : ['Search', variables],
      fetcher<SearchQuery, SearchQueryVariables>(client, SearchDocument, variables, headers),
      options
    );
export const SearchCommunitiesDocument = `
    query SearchCommunities($term: String!) {
  searchCommunities(term: $term) {
    id
    name
    description
    ownerId
    postEnabledRole
    profilePicture
    banner
    isMember
    members {
      user {
        id
        nickname
        firstName
        lastName
        role
        profilePicture
      }
    }
  }
}
    `;
export const useSearchCommunitiesQuery = <
      TData = SearchCommunitiesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: SearchCommunitiesQueryVariables,
      options?: UseQueryOptions<SearchCommunitiesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SearchCommunitiesQuery, TError, TData>(
      ['SearchCommunities', variables],
      fetcher<SearchCommunitiesQuery, SearchCommunitiesQueryVariables>(client, SearchCommunitiesDocument, variables, headers),
      options
    );
export const TimelineDocument = `
    query Timeline($pagination: TimelineInputArgs, $filter: TimelineFilterInput) {
  timeline(pagination: $pagination, filter: $filter) {
    ... on TimelineDto {
      publications {
        id
        user {
          id
          name
          profilePicture
        }
        post {
          id
          text
          createdAt
          images
        }
        event {
          id
          description
          title
          startDate
          endDate
          banner
        }
        comments {
          id
          text
          createdAt
          user {
            id
            name
            profilePicture
          }
        }
        liked
        likeCount
        commentCount
      }
    }
  }
}
    `;
export const useTimelineQuery = <
      TData = TimelineQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: TimelineQueryVariables,
      options?: UseQueryOptions<TimelineQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<TimelineQuery, TError, TData>(
      variables === undefined ? ['Timeline'] : ['Timeline', variables],
      fetcher<TimelineQuery, TimelineQueryVariables>(client, TimelineDocument, variables, headers),
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
    familyId
    memberCommunities {
      id
      status
      community {
        id
        name
        banner
        description
        members {
          user {
            firstName
            lastName
            profilePicture
          }
        }
      }
    }
    adminCommunities {
      id
      name
      banner
      description
    }
    profilePicture
    about
    linkedinUrl
    twitterUrl
    githubUrl
    peopleImFollowing {
      id
      firstName
      lastName
      profilePicture
    }
    peopleFollowingMe {
      id
      firstName
      lastName
      profilePicture
    }
    adminCommunities {
      id
      name
      profilePicture
    }
    memberCommunities {
      community {
        id
        name
        profilePicture
      }
    }
    family {
      id
      name
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
export const FollowUserDocument = `
    mutation FollowUser($userId: Float!) {
  followUser(userId: $userId)
}
    `;
export const useFollowUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<FollowUserMutation, TError, FollowUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<FollowUserMutation, TError, FollowUserMutationVariables, TContext>(
      ['FollowUser'],
      (variables?: FollowUserMutationVariables) => fetcher<FollowUserMutation, FollowUserMutationVariables>(client, FollowUserDocument, variables, headers)(),
      options
    );
export const UnfollowUserDocument = `
    mutation UnfollowUser($userId: Float!) {
  unfollowUser(userId: $userId)
}
    `;
export const useUnfollowUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UnfollowUserMutation, TError, UnfollowUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UnfollowUserMutation, TError, UnfollowUserMutationVariables, TContext>(
      ['UnfollowUser'],
      (variables?: UnfollowUserMutationVariables) => fetcher<UnfollowUserMutation, UnfollowUserMutationVariables>(client, UnfollowUserDocument, variables, headers)(),
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