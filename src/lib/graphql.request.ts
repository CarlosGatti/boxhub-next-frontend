import { GraphQLClient } from 'graphql-request'
import { parseCookies } from 'nookies'

const requestMiddleware = async (request: any) => {
  const { '@token': token } = parseCookies()

  return {
    ...request,
    ...(token
      ? {
          headers: {
            ...request.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : {}),
  }
}

const graphqlRequestClient = new GraphQLClient(
  'https://discart.me/graphql',
  {
    mode: 'cors',
    requestMiddleware,
    headers() {
      const { '@token': token } = parseCookies()
      return {
        Authorization: `Bearer ${token}`,
      }
    },
  },
)

export default graphqlRequestClient
