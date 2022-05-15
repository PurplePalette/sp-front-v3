<template>
    <v-row class="mt-1" justify="center" align="center">
        <!-- キーワード検索 -->
        <v-text-field
            v-model="keyword"
            :prepend-inner-icon="mdiMagnify"
            density="comfortable"
            label="検索するキーワードを入力..."
        />
    </v-row>
    <v-row justify="center" align="center">
        <!-- ジャンル -->
        <v-select
            v-model="genre"
            :items="genres"
            :prepend-inner-icon="mdiShape"
            density="comfortable"
            label="Genre"
        />
    </v-row>
    <v-row justify="center" align="center">
        <!-- 難易度 -->
        <v-select
            v-model="difficulty"
            :items="difficulties"
            :prepend-inner-icon="mdiFinance"
            density="comfortable"
            label="Difficulty"
        />
    </v-row>
    <v-row justify="center" align="center">
        <!-- 曲の長さ -->
        <v-select
            v-model="length"
            :items="lengths"
            :prepend-inner-icon="mdiAlignHorizontalLeft"
            density="comfortable"
            label="Length"
        />
    </v-row>
    <v-row justify="center" align="center">
        <!-- ソート -->
        <v-select
            v-model="sort"
            :items="sorts"
            :prepend-inner-icon="mdiSortVariant"
            label="Sort"
            density="comfortable"
        />
    </v-row>
    <v-row justify="center" align="center">
        <!-- シャッフル -->
        <v-checkbox
            v-model="shuffle"
            :prepend-inner-icon="mdiShuffle"
            label="ランダム"
            density="comfortable"
        />
    </v-row>
</template>

<script setup lang="ts">
import { mdiMagnify, mdiShape, mdiFinance, mdiAlignHorizontalLeft, mdiSortVariant, mdiShuffle } from "@mdi/js"

// Read/Write url params
// https://dev.to/codybontecou/using-url-query-params-in-nuxt-3-43kc
// https://zenn.dev/okoha/articles/6a6f99f2262730

interface Params {
    keyword?: string
    genre?: string
    difficulty?: string
    length?: string
    sort?: string
    shuffle?: string
}

const route = useRoute()
const router = useRouter()
const queries: Params = route.query

const isNumeric = (value: any) => {
    return /^\d+$/.test(value);
}

const readQueryAsIndex = (arr: string[], value: string | undefined) => {
    if (isNumeric(value)) {
        const num = parseInt(value as string)
        return arr[num] as string
    }
    return arr[0]
}

const writeQueryAsIndex = (arr: string[], value: string) => {
    return arr.indexOf(value) != -1 ? String(arr.indexOf(value)) : "0"
}

const keyword = ref<string>(route.query.keyword ? route.query.keyword as string: '')

const genres = [
    "全て",
    "a",
    "b",
    "c",
    "d",
]
const genre = ref<string>(readQueryAsIndex(genres, queries.genre))

const difficulties = [
    "全て",
    "Easy",
    "Normal",
    "Hard",
    "Expert",
    "プレイ不可",
]
const difficulty = ref<string>(readQueryAsIndex(difficulties, queries.difficulty))

const lengths = [
    "全て",
    "とても短い",
    "短い",
    "長い",
    "とても長い",
]
const length = ref<string>(readQueryAsIndex(lengths, queries.length))

const sorts = [
    "投稿日時が新しい順",
    "投稿日時が古い順",
]
const sort = ref<string>(readQueryAsIndex(sorts, queries.sort))

const shuffle = ref<boolean>(queries.shuffle ? true : false)


// Watch multiple variables
// https://qiita.com/EdyEric/items/9c0f322b5cd86c3c661b
// https://qiita.com/kubotak/items/94b1f809ee2511140cf3
watch([keyword, genre, difficulty, length, sort, shuffle], () => {
    const queries : Params = {}
    if (keyword.value != "") {
        queries.keyword = keyword.value
    }
    if (genre.value != genres[0]) {
        queries.genre = writeQueryAsIndex(genres, genre.value)
    }
    if (difficulty.value != difficulties[0]) {
        queries.difficulty = writeQueryAsIndex(difficulties, difficulty.value)
    }
    if (length.value != lengths[0]) {
        queries.length = writeQueryAsIndex(lengths, length.value)
    }
    if (sort.value != sorts[0]) {
        queries.sort = writeQueryAsIndex(sorts, sort.value)
    }
    if (shuffle.value) {
        queries.shuffle = String(Number(shuffle.value))
    }
    router.replace({
        path: '/explorer/levels',
        query: { ...queries  },
    })
})
</script>