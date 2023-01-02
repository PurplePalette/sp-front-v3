<template>
  <v-app-bar
    fixed
    color="primary"
    app
  >
    <v-btn class="ml-2" to="/" variant="plain">
      {{ title }}
    </v-btn>
    <v-btn
      v-for="(btn, i) in nav"
      :key="i"
      :prepend-icon="btn.icon"
      :to="btn.to || undefined"
      :href="btn.href || undefined"
      class="hidden-sm-and-down"
      variant="text"
    >
      {{ $t(btn.text) }}
    </v-btn>
    <Language />
    <v-btn
      @click="changeTheme"
      class="mr-3"
      aria-label="Change theme button"
      aria-haspopup="true"
      aria-expanded="false"
      :icon="mdiThemeLightDark"
      role="img"
      aria-hidden="false"
      variant="text"
    />
    <v-btn
      @click="menu.toggle"
      class="hidden-lg-and-up"
      aria-label="My account button"
      aria-haspopup="true"
      aria-expanded="false"
      :icon="mdiMenu"
      variant="text"
    />
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