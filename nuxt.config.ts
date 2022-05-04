import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  runtimeConfig: {
    public: {
      SITE_NAME: process.env.SITE_NAME,
      OWNER_NAME: process.env.OWNER_NAME
    }
  },
  css: ['vuetify/lib/styles/main.sass'],
  components: [
    {
        path: '@/components/',
        pathPrefix: false
    },
  ],
  autoImports: {
    dirs: ['stores']
  },
  build: {
    transpile: ['vuetify']
  },
  buildModules: [
    // 別途 pinia本体も要インストール
    '@pinia/nuxt',
    // @nuxtjs/i18nはまだ Nuxt3をサポートしていない
    '@intlify/nuxt3'
  ],
  intlify: {
    // src/localesフォルダがデフォルトで参照される
    vueI18n: {
      locale: 'ja',
      fallbackLocale: 'en',
    }
  },
  // @ts-ignore
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    }
  },
  typescript: {
    strict: true
  },
  meta: {
    title: process.env.SITE_NAME,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { hid: 'description', name: 'description', content: process.env.SITE_DESCRIPTION },
      { name: 'robots', content: 'noarchive' }
    ]
  }
})
