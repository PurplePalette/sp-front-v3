<template>
    <v-container>
      <v-row justify="center" class="mb-3">
        <v-col cols="12" sm="12" md="10" lg="10">
          <v-card color="secondary" class="py-1">
            <p class="text-center text-h5 mt-2">ファイル投稿フォーム</p>
            <p class="text-center text-subtitle mt-1 mb-2">投稿ガイドライン をお読みの上ご登録ください!</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="10" lg="10">
          <v-card class="text-center">
            <v-row justify="center">
              <v-col cols="12" md="10">
                <v-select
                  v-model="formType"
                  :items="formTypes"
                  label="投稿種別"
                  hint="投稿したいものを選んでください"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="text-center" justify="center">
                <v-col cols="4" md="3">
                  <FileSelectButton accept="image/jpeg" :button-icon="mdiImage" button-title="ジャケットファイルを選択"/>
                </v-col>
                <v-col cols="4" md="3">
                  <FileSelectButton accept="audio/mpeg" :button-icon="mdiMusicNote" button-title="音源ファイルを選択"/>
                </v-col>
                <v-col cols="4" md="3">
                  <FileSelectButton accept="text/plain" :button-icon="mdiBookMusic" button-title="SUSファイルを選択"/>
                </v-col>
            </v-row>
            <v-row class="mt-6" justify="center">
              <v-col class="mb-n6" cols="12" md="10">
                <v-text-field
                  v-model="title"
                  :counter="20"
                  label="タイトル"
                  hint="検索結果に表示されるタイトルです、曲名などを入れてください"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="mb-n3" justify="center">
              <v-col class="mb-n6" cols="12" md="10">
                <v-textarea
                  v-model="description"
                  clearable
                  clear-icon="mdi-close-circle"
                  label="説明文"
                  hint="譜面の特徴やこだわりなどを記入してください"
                  required
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="mb-n6" cols="12" md="5">
                <v-text-field
                  v-model="artist"
                  :counter="20"
                  label="アーティスト名"
                  hint="音楽名義・ユニット名などを入れて下さい"
                  required
                />
              </v-col>
              <v-col class="mb-n6" cols="12" md="5">
                <v-text-field
                  v-model="author"
                  :counter="20"
                  label="譜面作成者名"
                  hint="譜面ファイルを作成した人の名義を入れてください"
                  required
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="5">
                <v-select
                  v-model="genre"
                  :items="items"
                  label="ジャンル名"
                  hint="ガイドラインに従って指定してください"
                  required
                />
              </v-col>
              <v-col cols="12" md="5">
                <div class="text-caption text-left">難易度</div>
                <v-slider
                  v-model="difficulty"
                  :max="50"
                  :min="1"
                  step="1"
                  :color="difficultyColor"
                  single-line
                  density="compact"
                  type="number"
                  thumb-label
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="difficulty"
                      type="number"
                      :max="50"
                      :min="1"
                      density="compact"
                      hide-details
                      variant="outlined"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="5">
                <p>※作品を直接全体公開することはできません</p>
                <p>投稿後 動作テストした後 マイページ上で 投稿作品を編集して公開してください</p>
              </v-col>
              <v-col cols="12" md="5">
                <v-btn class="mb-4" color="info" size="large">テストサーバーに投稿する</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { mdiImage, mdiMusicNote, mdiBookMusic } from "@mdi/js"

useTitle("Upload")

const title = ref<string>('')
const description = ref<string>('')
const artist = ref<string>('')
const author = ref<string>('')
const genre = ref<string>('ORIGINAL')
const formType = ref<string>('レベル')
const difficulty = ref<number>(1)

const difficultyColor = computed(() => {
  if (difficulty.value <= 9) {
    return 'success'
  } else if (difficulty.value <= 15) {
    return 'info'
  } else if (difficulty.value <= 20) {
    return 'warning'
  } else if (difficulty.value <= 28) {
    return 'red'
  } else if (difficulty.value <= 37){
    return 'primary'
  } else {
    return 'black'
  }
})

const items = [
  "J-POP",
  "GENERAL",
  "VOCAROID",
  "ORIGINAL",
  "OTHER",
]

const formTypes = [
  "レベル",
  "スキン",
  "背景",
  "SE",
  "パーティクル",
]
</script>