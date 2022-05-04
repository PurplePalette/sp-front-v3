<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="10" lg="10">
        <v-card>
          <v-card-header>
            <v-card-header-text class="text-h4">
              SweetPotatoとは?
            </v-card-header-text>
          </v-card-header>

          <v-card-text>
            <p class="text-h5">
              本サービスは、ユーザーが作成した、譜面、スキン、背景等を投稿をSonolus上で簡単に利用できるよう配信を行うサービスです。端的に言うと、ファイル投稿サイトです。</p>
            <p class="text mt-4 text-h6">BMSのように、インディークリエイターが作成した音楽を、Sonolusで遊べる音楽ゲームの譜面として公開でき、様々な人に自分の創作物を届けられる場所を目指しています。</p>
            <p class="text mt-4 text-h6">このサービスは個人が運営しており、寄付のみを受け付けています。非営利目的であり、広告やマイニング等は一切存在しません。</p>
            <p class="text mt-4 text-h6">NOTE: SweetPotatoの運営者自身、開発の初心者であり、今後頻繁に仕様変更を行いより使いやすく進化させていきたいため、サポートに十分な時間を取れません。そのため、法令に基づく申立を除き、個別のお問い合わせや対応はできません。検索をする、Wikiを読む、またはコミュニティ内で他のユーザーに訊いてみるなど、自力またはユーザー間でのご解決をお願いします。</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
useTitle("Introduction")
const config = useRuntimeConfig()
let tabIndex = ref<number>(0)
</script>