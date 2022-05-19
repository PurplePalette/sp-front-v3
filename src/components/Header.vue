<template>
  <v-app-bar
    fixed
    color="primary"
    app
  >
    <v-btn class="text-h6" to="/">{{ title }}</v-btn>
    <v-btn v-for="(btn, i) in nav" :key="i" :to="btn.to" class="hidden-sm-and-down" text>
      <v-icon role="img" aria-hidden="false">
        {{ btn.icon }}
      </v-icon>
      {{ $t(btn.text) }}
    </v-btn>
    <Language />
    <v-btn
      @click="changeTheme"
      aria-label="themeChangeButton"
      aria-haspopup="true"
      aria-expanded="false"
      icon
    >
      <v-icon aria-label="Change theme" role="img" aria-hidden="false">
        {{ mdiThemeLightDark }}
      </v-icon>
    </v-btn>
    <v-btn
      @click="menu.toggle"
      class="hidden-lg-and-up"
      aria-label="menuButton"
      aria-haspopup="true"
      aria-expanded="false"
      icon
    >
      <v-icon aria-label="My Account" role="img" aria-hidden="false">
        {{ mdiMenu }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { mdiThemeLightDark, mdiMenu } from '@mdi/js'

const changeTheme = () => {
  if (theme.theme == "custom") {
    theme.setTheme("dark")
  } else {
    theme.setTheme("custom")
  }
}

const nav = useNav()
const router = useRouter()
const menu = useSideMenu()
const theme = useThemeChange()
const props = defineProps({
  title: String
})
</script>