<template>
    <v-row class="text-center" justify="center">
        <v-col cols="12" md="4">
            <FileSelectButton
                @update:file="handleJacket"
                accept="image/jpeg"
                :button-title="jacketTitle"
                :button-icon="mdiImage"
            />
        </v-col>
        <v-col cols="12" md="4">
            <FileSelectButton
                @update:file="handleMusic"
                accept="audio/mpeg"
                :button-title="musicTitle"
                :button-icon="mdiMusicNote"
            />
        </v-col>
        <v-col cols="12" md="4">
            <FileSelectButton
                @update:file="handleLevel"
                accept="text/plain"
                :button-title="levelTitle"
                :button-icon="mdiBookMusic"
            />
        </v-col>
    </v-row>
    <v-row class="mt-6 text-center" justify="center">
        <p class="text-small">ドラッグ＆ドロップ対応</p>
    </v-row>
</template>

<script setup lang="ts">
import { mdiImage, mdiMusicNote, mdiBookMusic } from "@mdi/js"

interface Props {
    jacketTitle: string
    musicTitle: string
    levelTitle: string
}
withDefaults(defineProps<Props>(), {
    jacketTitle: "表紙(.jpg)を選択",
    musicTitle: "音源(.mp3)を選択",
    levelTitle: "譜面(.sus)を選択",
})

const jacket = ref<File | null>(null)
const music = ref<File | null>(null)
const level = ref<File | null>(null)

interface Emits {
  (e: "update:jacket", value: File): void
  (e: "update:music", value: File): void
  (e: "update:level", value: File): void
  (e: "update:filled"): void
}
const emits = defineEmits<Emits>()

const handleJacket = (value: File) => {
    jacket.value = value
    emits('update:jacket', value)
}

const handleMusic = (value: File) => {
    music.value = value
    emits('update:music', value)
}

const handleLevel = (value: File) => {
    level.value = value
    emits('update:level', value)
}

watchEffect(() => {
  if (jacket.value && music.value && level.value) {
    emits("update:filled")
  }
})

</script>