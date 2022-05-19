<template>
<div>
    <v-btn
        height="100%"
        color="primary"
        class="text-none"
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
                {{ selectedFile != null ? selectedFile.name : props.buttonTitle}}
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
</div>
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
  (e: "update:File", value: File): void;
}
const emits = defineEmits<Emits>()

const isSelecting = ref<boolean>(false)
const selectedFile = ref<File | null>(null)

const uploader = ref<HTMLInputElement>()

const openFileSelect= () => {
  isSelecting.value = true
  window.addEventListener('focus', () => {
    isSelecting.value = false
  }, { once: true })
  uploader.value?.click()
}

const onFileSelectChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const files = target.files as FileList
    const file = files[0]
    selectedFile.value = file
    console.log(file)
    emits("update:File", file)
}

</script>