# Reproduction of an issue with useApolloClient from `@vue/apollo-composable`

To run this example
```bash
npm install
npm run dev
```

... and visit `http://localhost:3000/`.
You should see below logs in both browser console:
```
provideFoo plugin
1.injectFoo middleware - regular
  injected foo : foo
2.injectFoo middleware - app.runWithContext() -> inject()
  [Vue warn]: inject() can only be used inside setup() or functional components.
  injected foo : undefined
3.injectFoo middleware - useCounterStore() -> useQuery()
  [Vue warn]: inject() can only be used inside setup() or functional components.
  [Vue warn]: inject() can only be used inside setup() or functional components.
```
