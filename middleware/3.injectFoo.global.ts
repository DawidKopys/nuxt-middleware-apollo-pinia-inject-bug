import { useCounterStore } from '~/stores/useCounterStore'
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export default defineNuxtRouteMiddleware((to, from) => {
  console.group('3.injectFoo middleware - useCounterStore() -> useQuery()')

  useCounterStore()
  // alternatively, below line would result in the same warning
  // useNuxtApp().vueApp.runWithContext(() => {})

  useQuery(gql`
    query Query {
      allFilms {
        films {
          title
        }
      }
    }
  `)

  console.groupEnd()
})
