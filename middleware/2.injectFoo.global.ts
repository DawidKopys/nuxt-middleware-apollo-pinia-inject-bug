export default defineNuxtRouteMiddleware((to, from) => {
  console.group('2.injectFoo middleware - app.runWithContext() -> inject()')
  const { vueApp } = useNuxtApp()
  
  vueApp.runWithContext(() => {})

  const foo = inject('foo')
  console.log('injected foo :', foo)
  console.groupEnd()
})
