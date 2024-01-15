export default defineNuxtRouteMiddleware((to, from) => {
  console.group('1.injectFoo middleware - regular')
  const foo = inject('foo')
  console.log('injected foo :', foo)
  console.groupEnd()
})
