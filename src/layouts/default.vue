<template>
  <v-app :theme="theme.theme">
    <Header :title="config.SITE_NAME" />
    <Drawer />
    <v-main>
      <nuxt-page></nuxt-page>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const theme = useThemeChange()
</script>