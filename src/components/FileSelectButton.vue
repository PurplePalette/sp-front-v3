<template>
  <v-btn
      @dragover.prevent="isDragged = true"
      @dragleave.prevent="isDragged = false"
      @drop.prevent="onFileDropped"
      width="100%"
      height="100%"
      color="info"
      class="text-none"
      :variant="!isDragged ? 'contained' : 'outlined'"
      depressed
      @click="openFileSelect"
  >
      <v-progress-circular
          v-if="isSelecting"
          class="mx-12 my-6"
          indeterminate
          color="white"
      />
      <v-row v-if="!isSelecting" class="text-center" justify="center">
          <v-col class="mt-2 mb-n2" cols="10">
              <v-icon size="40">
                  {{ props.buttonIcon }}
              </v-icon>
          </v-col>
          <v-col class="text-truncate mb-2 mt-n2" cols="10">
              {{ displayText }}
          </v-col>
      </v-row>
  </v-btn>
  <input
      ref="uploader"
      class="d-none"
      type="file"
      :accept="props.accept"
      @change="onFileSelectChange"
  >
</template>

<script setup lang="ts">
import {
  mdiCloudUpload
} from '@mdi/js'

interface Props {
  buttonTitle?: string,
  buttonIcon?: string,
  accept?: string
}
const props = withDefaults(defineProps<Props>(), {
  buttonTitle: "ファイルを選択",
  buttonIcon: mdiCloudUpload,
  accept: "image/*"
})

interface Emits {
  (e: "update:file", value: File): void;
}
const emits = defineEmits<Emits>()

const isSelecting = ref<boolean>(false)
const isDragged = ref<boolean>(false)
const selectedFile = ref<File | null>(null)

const displayText = computed(() => {
  switch (true) {
    case isDragged.value:
      return "離すとアップロード"
    case selectedFile.value != null:
      return selectedFile.value!.name
    default:
      return props.buttonTitle
  }
})


// ボタンクリックでファイル選択を開く
const uploader = ref<HTMLInputElement>()
const openFileSelect= () => {
  isSelecting.value = true
  window.addEventListener('focus', () => {
    isSelecting.value = false
  }, { once: true })
  uploader.value?.click()
}

// ファイル選択確定時にEmit
const onFileSelectChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    const file = files![0]
    selectedFile.value = file
    emits("update:file", file)
}

// D&D時にEmit
const onFileDropped = (e: DragEvent) => {
    isDragged.value = false
    if (!e) {
      return
    }

    if (!e.dataTransfer) {
      return
    }

    if (e.dataTransfer.files.length === 0) {
      return
    }
    const file = e.dataTransfer.files[0]
    selectedFile.value = file
    emits("update:file", file)
}

</script>