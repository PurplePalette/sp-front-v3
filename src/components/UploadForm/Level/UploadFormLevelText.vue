<template>
    <v-row class="mt-n8" justify="center">
        <v-col class="mb-n6" cols="12" md="10">
          <v-text-field
              v-model="title"
              @update:modelValue="$emit('update:title', title)"
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
            @update:modelValue="$emit('update:description', description)"
            clearable
            clear-icon="mdi-close-circle"
            label="説明文"
            hint="譜面の特徴やこだわりなどを記入してください"
            required
        />
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col class="mb-n6" cols="12" sm="6" md="5">
          <v-text-field
              v-model="artist"
              @update:modelValue="$emit('update:artist', artist)"
              :counter="20"
              label="アーティスト名"
              hint="音楽名義・ユニット名などを入れて下さい"
              required
          />
        </v-col>
        <v-col class="mb-n6" cols="12" sm="6" md="5">
          <v-text-field
              v-model="author"
              @update:modelValue="$emit('update:author', author)"
              :counter="20"
              label="譜面作成者名"
              hint="譜面ファイルを作成した人の名義を入れてください"
              required
          />
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="12" sm="6" md="5">
          <v-select
              v-model="genre"
              :items="items"
              @update:modelValue="$emit('update:genre', genre)"
              label="ジャンル名"
              hint="ガイドラインに従って指定してください"
              required
          />
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-select
              v-model="engine"
              @update:modelValue="$emit('update:engine', engine)"
              :items="engines"
              label="対象エンジン名"
              hint="ガイドラインに従って指定してください"
              required
          />
        </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="mb-n4" cols="12" md="10">
        <div class="text-caption text-left">難易度</div>
        <v-slider
            v-model="difficulty"
            @update:modelValue="$emit('update:difficulty', difficulty)"
            step="1"
            :max="50"
            :min="1"
            :messages="difficultyHint"
            :color="difficultyColor"
            single-line
            density="compact"
            type="number"
            thumb-label
        >
            <template v-slot:append>
            <v-text-field
                v-model="difficulty"
                @update:modelValue="$emit('update:difficulty', difficulty)"
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
</template>

<script setup lang="ts">
interface Emits {
  (e: "update:filled"): void;
  (e: "update:unfilled"): void;
  (e: "update:title", value: string ): void;
  (e: "update:description", value: string ): void;
  (e: "update:artist", value: string ): void;
  (e: "update:author", value: string ): void;
  (e: "update:genre", value: string ): void;
  (e: "update:engine", value: string ): void;
  (e: "update:difficulty", value: number ): void;
}
const emits = defineEmits<Emits>()

const title = ref<string>('')
const description = ref<string>('')
const artist = ref<string>('')
const author = ref<string>('')
const genre = ref<string>('ORIGINAL')
const engine = ref<string>('SEKAI')
const difficulty = ref<number>(1)
const items = [
  "J-POP",
  "GENERAL",
  "VOCAROID",
  "ORIGINAL",
  "OTHER",
]
const engines = [
  "SEKAI"
]

const difficultyHint = computed(() => {
  if (difficulty.value <= 9) {
    return '目安: EASY'
  } else if (difficulty.value <= 15) {
    return '目安: NORMAL'
  } else if (difficulty.value <= 20) {
    return '目安: HARD'
  } else if (difficulty.value <= 28) {
    return '目安: EXPERT'
  } else if (difficulty.value <= 37){
    return '目安: MASTER'
  } else {
    return '目安: NIGHTMARE'
  }
})

const difficultyColor = computed(() => {
  if (difficulty.value <= 9) {
    return 'success'
  } else if (difficulty.value <= 15) {
    return 'blue'
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

const isFilled = computed(() => {
  return (
    title.value.length > 0
    && description.value.length > 0
    && artist.value.length > 0
    && author.value.length > 0
  )
})

watch(isFilled, () => {
  if (isFilled.value === true) {
    emits("update:filled")
  } else {
    emits("update:unfilled")
  }
})
</script>