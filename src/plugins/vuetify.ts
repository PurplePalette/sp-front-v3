import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
   const vuetify = createVuetify({
      components,
      directives,
      icons: {
         defaultSet: 'mdi',
         aliases,
         sets: {
           mdi,
         },
      },
      theme: {
         defaultTheme: 'custom',
         themes: {
            custom: {
               colors: {
                  primary: '#5E35B1',
                  secondary: '#7E57C2',
                  info: '#CE93D8',
               }
            }
         }
      }
   })
   nuxtApp.vueApp.use(vuetify)
})