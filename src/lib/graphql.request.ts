// lib/graphql.request.ts
import { GraphQLClient } from 'graphql-request'
import { parseCookies } from 'nookies'

const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/graphql'
    : process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'https://www.discart.me/graphql'

export const getGraphQLClient = () => {
  const { '@token': token } = parseCookies()
  return new GraphQLClient(endpoint, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })
}

export const graphqlRequestClient = getGraphQLClient()
