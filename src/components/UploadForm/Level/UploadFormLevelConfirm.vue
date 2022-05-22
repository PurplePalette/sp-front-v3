<template>
    <v-row justify="center">
        <v-col class="text-center" cols="12" md="10">
            <p>下記入力内容をご確認の上、お間違いなければ送信してください。</p>
        </v-col>
        <v-col class="mx-6" v-for="message in messages" cols="12" md="6">
            <p class="text-h6 font-weight-bold">
                <v-icon left>
                    {{ message.icon }}
                </v-icon>
                {{ message.title }}
            </p>
            <p class="text-subtitle">{{ message.body }}</p>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import {
    mdiFormatText,
    mdiCommentText,
    mdiAccountMusic,
    mdiAccount,
    mdiShape,
    mdiEngine,
    mdiFinance,
    mdiImage,
    mdiMusicNote,
    mdiBookMusic
} from '@mdi/js'

interface Emits {
  (e: "update:confirmed"): void;
}
defineEmits<Emits>()

interface Props {
  title?: string
  description?: string
  artist?: string
  author?: string
  genre?: string
  engine?: string
  difficulty?: number
  jacket?: File | null
  music?: File | null
  level?: File | null
}
const props = withDefaults(defineProps<Props>(), {
  title: "タイトル",
  description: "説明文",
  artist: "アーティスト名",
  author: "ファイル作者名",
  genre: "ORIGINAL",
  engine: "SEKAI",
  difficulty: 25,
  jacket: () => { return new File([], "jacket.png") },
  music: () => { return new File([], "music.mp3") },
  level: () => { return new File([], "level.sus") }
})

const messages = [
    {title: "タイトル", body: props.title, icon: mdiFormatText },
    {title: "説明文", body: props.description, icon: mdiCommentText},
    {title: "アーティスト名", body: props.artist, icon: mdiAccountMusic},
    {title: "作者名", body: props.author, icon: mdiAccount},
    {title: "ジャンル", body: props.genre, icon: mdiShape},
    {title: "エンジン", body: props.engine, icon: mdiEngine},
    {title: "難易度", body: props.difficulty, icon: mdiFinance},
    {title: "ジャケットファイル", body: props.jacket!.name, icon: mdiImage},
    {title: "音源ファイル", body: props.music!.name, icon: mdiMusicNote},
    {title: "譜面ファイル", body: props.level!.name, icon: mdiBookMusic},
]
</script>