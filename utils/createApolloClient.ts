import { InMemoryCache, HttpLink, ApolloClient } from '@apollo/client/core'

export function createApolloClient(nuxtApp: any) {
  const link = new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
  })

  const cache = new InMemoryCache()

  // Pass state from server side to client side
  if (!process.server) {
    const state = nuxtApp.payload.apolloState || {}
    if (state) {
      cache.restore(state.default)
    }
  }

  const apolloClient = new ApolloClient({
    cache,
    link,
    ...(process.server ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
    }),
  })

  return apolloClient
}
