import { ApolloClients, provideApolloClient } from '@vue/apollo-composable'
import { serializeStates } from '@vue/apollo-ssr'

export default defineNuxtPlugin((nuxt) => {
  const apolloClient = createApolloClient(nuxt)

  nuxt.vueApp.provide(ApolloClients, { default: apolloClient })
  provideApolloClient(apolloClient)

  nuxt.hook('app:rendered', () => {
    nuxt.payload.apolloState = serializeStates({ default: apolloClient })
  })

  return {
    provide: {
      apollo: { default: apolloClient }
    }
  }
})
