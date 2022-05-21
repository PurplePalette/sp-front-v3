<template>
    <UploadFormTemplate :stepId="stepId - 1">
      <UploadFormLevelFile v-if="stepId == 2" />
      <UploadFormLevelText v-if="stepId == 3" />
      <UploadFormLevelConfirm v-if="stepId == 4" />
      <UploadFormFinish v-if="stepId == 5" />
      <UploadFormNextPrev
        :stepId="stepId"
        :disablePrev="stepId == 2"
        @update:next="stepId += 1"
        @update:prev="stepId -= 1"
      />
    </UploadFormTemplate>
</template>

<script setup lang="ts">
useTitle("Upload")

const stepId = ref<number>(2)
// Step2
const jacketFile = ref<File | null>(null)
const musicFile = ref<File|null>(null)
const levelFile = ref<File|null>(null)
const goStep3 = computed(() => {
  return (jacketFile != null && musicFile != null && levelFile != null)
})

// Step3
const title = ref<string>('')
const description = ref<string>('')
const artist = ref<string>('')
const author = ref<string>('')
const genre = ref<string>('')
const engine = ref<string>('')
const difficulty = ref<number>(1)
const goStep4 = computed(() => {
    return (
        title.value.length > 0
        && description.value.length > 0
        && artist.value.length > 0
        && author.value.length > 0
        && genre.value.length > 0
        && engine.value.length > 0
    )
})

// Step5
const upload = () => {
  console.log('アップロード処理')
}
</script>