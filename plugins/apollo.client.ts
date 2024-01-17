import { ApolloClients, provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxt) => {
  const apolloClient = createApolloClient(nuxt)

  nuxt.vueApp.provide(ApolloClients, { default: apolloClient })
  provideApolloClient(apolloClient)

  return {
    provide: {
      apollo: { default: apolloClient }
    }
  }
})
