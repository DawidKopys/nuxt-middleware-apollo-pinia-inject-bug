export default defineNuxtPlugin((nuxtApp) => {
  console.log('provideFoo plugin')
  nuxtApp.vueApp.provide('foo', 'foo')
})
