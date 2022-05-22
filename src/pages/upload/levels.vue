<template>
    <UploadFormTemplate :stepId="stepId - 1">
      <UploadFormLevelFile
        v-if="stepId == 2"
        v-model:jacketTitle="jacketTitle"
        v-model:musicTitle="musicTitle"
        v-model:levelTitle="levelTitle"
        @update:jacket="(file) => { jacket = file }"
        @update:music="(file) => { music = file }"
        @update:level="(file) => { level = file }"
        @update:filled="() => { disableNext = false }"
      />
      <UploadFormLevelText
        v-if="stepId == 3"
        v-model:title="title"
        v-model:description="description"
        v-model:artist="artist"
        v-model:author="author"
        v-model:genre="genre"
        v-model:engine="engine"
        v-model:difficulty="difficulty"
        @update:filled="() => { disableNext = false }"
        @update:unfilled="() => { disableNext = true }"
      />
      <UploadFormLevelConfirm
        v-if="stepId == 4"
        :title="title"
        :description="description"
        :artist="artist"
        :author="author"
        :genre="genre"
        :difficulty="difficulty"
        :jacket="jacket"
        :music="music"
        :level="level"
        @update:confirmed="upload"
      />
      <UploadFormFinish v-if="stepId == 5" />
      <UploadFormNextPrev
        v-if="stepId != 5"
        :stepId="stepId"
        :disableNext="disableNext"
        @update:next="stepId += 1; disableNext = stepId <= 3"
        @update:prev="stepId -= 1; disableNext = false;"
      />
    </UploadFormTemplate>
</template>

<script setup lang="ts">
useTitle("Upload")

const stepId = ref<number>(2)
const disableNext = ref<boolean>(true)

// Step2
const jacket = ref<File | null>(null)
const music = ref<File|null>(null)
const level = ref<File|null>(null)

const jacketTitle = computed(() => {
    return jacket.value ? jacket.value.name : "表紙(.jpg)を選択"
})
const musicTitle = computed(() => {
    return music.value ? music.value.name : "音源(.mp3)を選択"
})
const levelTitle = computed(() => {
    return level.value ? level.value.name : "譜面(.sus)を選択"
})


// Step3
const title = ref<string>('')
const description = ref<string>('')
const artist = ref<string>('')
const author = ref<string>('')
const genre = ref<string>('GENERAL')
const engine = ref<string>('SEKAI')
const difficulty = ref<number>(1)

// Step5
const upload = () => {
  console.log('アップロード処理')
}
</script>