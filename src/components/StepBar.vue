<template>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon :icon="props.divideIcon"></v-icon>
      </template>
    </v-breadcrumbs>
</template>

<script setup lang="ts">
import {
  mdiChevronRight
} from '@mdi/js'

interface Props {
  steps?: string[],
  stepId?: number,
  divideIcon?: string
}

const hoge = () => {
    console.log(hoge)
}

const props = withDefaults(defineProps<Props>(), {
  // https://stackoverflow.com/questions/70745148/how-to-initalize-give-default-value-to-array-in-defineprops-when-i-have-passed
  steps: () => ["STEP1", "STEP2", "STEP3"],
  stepId: 0,
  divideIcon: mdiChevronRight,
})

const items = computed(() => {
  const texts = props.steps
  if (texts == null) {
    return []
  }
  return texts.map((text, index) => ({ text, disabled: props.stepId != index, href: "#" }))
})
</script>
