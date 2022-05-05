<template>
  <v-navigation-drawer
    v-model="menu.isOpen"
    position="right"
    fixed
    temporary
  >
    <v-list>
      <v-list-item
        v-if="auth.isLoggedIn"
        href="/profile/account"
      >
        <v-icon aria-label="My Account" role="img" aria-hidden="false">
          {{ mdiAccount }}
        </v-icon>
        <v-list-item-title>ユーザーページ</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="!auth.isLoggedIn"
        @click="loginToAccount"
      >
        <v-list-item-icon>
          {{ mdiLogin }}
        </v-list-item-icon>
        <v-list-item-title>ログイン</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="(item,i) in nav"
        :key="i"
        :to="item.to"
        class="no-hover"
      >
        <v-list-item-icon>
          {{ item.icon }}
        </v-list-item-icon>
        <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {
  mdiAccount,
  mdiLogin,
} from '@mdi/js'

const menu = useSideMenu()
const auth = useAuth()
const config = useRuntimeConfig()
const nav = useNav()

const loginToAccount = () => {
  console.log('ここにログイン処理')
}

</script>