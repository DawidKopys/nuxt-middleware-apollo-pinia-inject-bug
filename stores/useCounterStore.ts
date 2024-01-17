import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  return { count }
})

export { useCounterStore }
