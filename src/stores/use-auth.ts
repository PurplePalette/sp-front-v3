import { defineStore } from 'pinia'

const authStore = defineStore('auth', () => {
  const isLoggedIn = ref<boolean>(false)

  const login = () => (isLoggedIn.value = true)
  const logout = () => (isLoggedIn.value = false)

  return {
    isLoggedIn,
    login,
    logout,
  }
})

export default authStore