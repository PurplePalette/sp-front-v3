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
import { mdiMenu } from '@mdi/js'

const nav = useNav()
const router = useRouter()
const menu = useSideMenu()
const props = defineProps({
  title: String
})
</script>