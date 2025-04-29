import { GraphQLClient } from 'graphql-request';
import { parseCookies } from 'nookies';

const endpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/graphql'
  : process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'https://www.discart.me/graphql';

const graphqlRequestClient = new GraphQLClient(endpoint, {
  headers: () => {
    const { '@token': token } = parseCookies(); // Lê o token sempre atualizado
    return token ? { Authorization: `Bearer ${token}` } : undefined;
  },
});

export default graphqlRequestClient;
