import { defineStore } from 'pinia'

// 参考
// https://zenn.dev/kakkoyakakko/articles/00e387c98dd8ac

const menuStore = defineStore('sideMenu', () => {
  const isOpen = ref<boolean>(false)

  const toggle = () => (isOpen.value = !isOpen.value)
  const close = () => (isOpen.value = false)

  return {
    isOpen,
    toggle,
    close,
  }
})

export default menuStore