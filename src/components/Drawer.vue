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
        <v-list-item-content>
          <v-icon aria-label="My Account" role="img" aria-hidden="false">
            {{ mdiAccount }}
          </v-icon>
          <v-list-item-title>ユーザーページ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="!auth.isLoggedIn"
        @click="loginToAccount"
      >
        <v-list-item-icon>
          {{ mdiLogin }}
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>ログイン</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :href="item.href"
        class="no-hover"
      >
        <v-list-item-icon>
          {{ item.icon }}
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {
  mdiAccount,
  mdiLogin,
  mdiFormatListBulleted,
  mdiInformation,
  mdiPalette,
  mdiDiscord,
  mdiPen
} from '@mdi/js'

const menu = useSideMenu()
const auth = useAuth()
const config = useRuntimeConfig()

const loginToAccount = () => {
  console.log('ここにログイン処理')
}

const items = [
  {
    icon: mdiFormatListBulleted,
    title: '創作譜面一覧',
    to: '/fumen/list'
  },
  {
    icon: mdiInformation,
    title: '創作譜面の遊び方',
    to: '/help/play-sonolus-fumen'
  },
  {
    icon: mdiInformation,
    title: '創作譜面の作り方',
    to: '/help/create-sonolus-fumen'
  },
  {
    icon: mdiInformation,
    title: '投稿ガイドライン',
    to: '/help/publish-fumen-rules'
  },
  {
    icon: mdiPalette,
    title: 'PurplePaletteについて',
    to: '/help/about-purplepalette'
  },
  {
    icon: mdiDiscord,
    title: 'コミュニティに参加!',
    href: config.DISCORD_URL
  },
  {
    icon: mdiPen,
    title: 'DMCAリクエスト',
    href: config.DMCA_URL
  }
]
</script>