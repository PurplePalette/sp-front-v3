<template>
  <v-spacer />
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        :icon="mdiTranslate"
        v-bind="props"
        variant="text"
      />
    </template>
    <v-list
      style="position: absolute; left: -100px; z-index: 999; height:auto;"
    >
      <v-list-item
        v-for="item in items"
        :key="item.name"
        @click="$i18n.locale = item.name"
      >
        <v-list-item-title>
          <div role="button">
            {{ item.title }}
          </div>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
import { mdiTranslate } from '@mdi/js'
import { useI18n } from 'vue-i18n';


let i18n = useI18n()

const items = [
   {
      "name":"en",
      "title":"English"
   },
   {
      "name":"zh-hans",
      "title":"简体中文"
   },
   {
      "name":"zh-hant",
      "title":"繁體中文"
   },
   {
      "name":"ja",
      "title":"日本語"
   },
   {
      "name":"ko",
      "title":"한국어"
   },
   {
      "name":"es",
      "title":"Español"
   },
   {
      "name":"in",
      "title":"Bahasa Indonesia"
   }
]
</script>