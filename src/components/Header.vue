<template>
  <v-app-bar
    fixed
    color="primary"
    dark
    app
  >
    <v-app-bar-title @click="router.push('/')">{{ title }}</v-app-bar-title>
    <v-spacer class="hidden-sm-and-down" />
    <v-btn v-for="(btn, i) in desktopButtons" :key="i" :to="btn.to" class="hidden-sm-and-down" text>
      <v-icon role="img" aria-hidden="false">
        {{ btn.icon }}
      </v-icon>
      {{ $t(btn.text) }}
    </v-btn>
    <Language class="hidden-lg-and-up" />
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
import {
  mdiAccount,
  mdiDiscord,
  mdiFileSearch,
  mdiFileUpload,
  mdiInformation,
  mdiMenu
} from '@mdi/js'

const desktopButtons = [
  { icon: mdiInformation, text: "SweetPotato.Navigation.Header.Introduction", to: "/introduction" },
  { icon: mdiDiscord, text: "SweetPotato.Navigation.Header.Community", to: "#" },
  { icon: mdiFileSearch, text: "SweetPotato.Navigation.Header.Explorer", to: "#" },
  { icon: mdiFileUpload, text: "SweetPotato.Navigation.Header.Upload", to: "#" },
  { icon: mdiAccount, text: "SweetPotato.Navigation.Header.MyPage", to: "#" }
]

const router = useRouter()
const menu = useSideMenu()
const props = defineProps({
  title: String
})
</script>