// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores']
  },
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
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'ja', file: 'ja.json' },
    ],
    lazy: true,
    defaultLocale: 'ja',
    langDir: 'locales/',
    vueI18n: {
      locale: 'ja',
      fallbackLocale: 'en',
    },
  },
  // @ts-ignore
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    }
  },
  app: {
    head: {
      title: process.env.SITE_NAME,
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { hid: 'description', name: 'description', content: process.env.SITE_DESCRIPTION },
        { name: 'robots', content: 'noarchive' }
      ]
    }
  }
})
