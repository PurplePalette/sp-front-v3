<template>
    <v-row class="text-center" justify="center">
        <v-col cols="12" md="4">
            <FileSelectButton
                @update:file="updateJacket"
                accept="image/jpeg"
                button-title="表紙(.jpg)を選択"
                :button-icon="mdiImage"
            />
        </v-col>
        <v-col cols="12" md="4">
            <FileSelectButton
                @update:file="updateMusic"
                accept="audio/mpeg"
                :button-icon="mdiMusicNote"
                button-title="音源(.mp3)を選択"
            />
        </v-col>
        <v-col cols="12" md="4">
            <FileSelectButton
                @update:file="updateLevel"
                accept="text/plain"
                :button-icon="mdiBookMusic"
                button-title="譜面(.sus)を選択"
            />
        </v-col>
    </v-row>
    <v-row class="mt-4 text-center" justify="center">
        <p class="text-small">ドラッグ＆ドロップ対応</p>
    </v-row>
</template>

<script setup lang="ts">
import { mdiImage, mdiMusicNote, mdiBookMusic } from "@mdi/js"

interface Emits {
  (e: "update:jacket", value: File): void
  (e: "update:music", value: File): void
  (e: "update:level", value: File): void
}
const emits = defineEmits<Emits>()

const updateJacket = (value: File) => {
    emits('update:jacket', value)
}
const updateMusic = (value: File) => {
    emits('update:music', value)
}
const updateLevel = (value: File) => {
    emits('update:level', value)
}
</script>