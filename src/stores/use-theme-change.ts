import { defineStore } from 'pinia'

// 参考
// https://zenn.dev/kakkoyakakko/articles/00e387c98dd8ac

const themeStore = defineStore('themeStore', () => {
  const theme = ref<string>("custom")

  const setTheme = (new_theme: string) => (theme.value = new_theme)
  return {
    theme,
    setTheme
  }
})

export default themeStore