# sweet-potato (sonolus-uploader-2)
Nuxt generation frontend for Sonolus server api, named [sonolus-uploader-fastapi](https://github.com/PurplePalette/sonolus-fastapi).

## Running Requirements
* Backend (requires [sonolus-uploader-fastapi](https://github.com/PurplePalette/sonolus-fastapi) to be running)
* Firebase Authorization
* MySQL or MariaDB Server
* Any S3 storage(Recommends [B2 Cloud Storage](https://www.backblaze.com/b2/cloud-storage.html) with [Cloudflare](https://cloudflare.com/))
* Any VPS(Recommends [Oracle Cloud Free Tier](https://www.oracle.com/jp/cloud/free/))

## License
AGPLv3+

## Setup

Make sure to install the dependencies:

```bash
# Before do everythings
yarn install
# To run development server
yarn run dev
# To build production server
yarn run build
# To run locally preview production build
yarn run preview
# Checkout the https://v3.nuxtjs.org/docs/deployment for more information.
```

## Related docs
- [API Spec / Stoplight](https://sonolus-core.stoplight.io/docs/servers/YXBpOjM2MTAxMzcx-sweet-potato-server-3-api)
- [Detailed spec, frontend mock / Whimsical](https://whimsical.com/sweet-potato-next-2EyH4Ts7UBT6t2cpwmKdR4)

## Dependencies
- [nuxt/framework : The Hybrid Vue(3) Framework.](https://github.com/nuxt/framework)
- [vuetifyjs/vuetify : 🐉 Material Component Framework for Vue](https://github.com/vuetifyjs/vuetify)
- [@intlify/nuxt3 : Nuxt3 module for vue-i18n-next](https://github.com/intlify/nuxt3)
- [vuejs/pinia : Intuitive, type safe and flexible Store for Vue](https://github.com/vuejs/pinia)

## References
- [Nuxt 3 documentation](https://v3.nuxtjs.org)
- [Vuetify 3 documentation](https://next.vuetifyjs.com/en/)
- [Nuxt3 + Vuetify3 + Volarの開発環境を構築する](https://zenn.dev/winteryukky/articles/87a40b60fddb96)
- [isystk/nuxt3-typescript-aws : Nuxt3 の学習用サンプルアプリケーション](https://github.com/isystk/nuxt3-typescript-aws)
- [PurplePalette/sonolus-uploader : Sonolus uploader frontend website](https://github.com/PurplePalette/sonolus-uploader)