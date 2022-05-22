<template>
    <v-btn
        v-if="props.showPrev"
        :disabled="props.disablePrev"
        class="mx-4"
        size="x-large"
        color="secondary"
        variant="outlined"
        @click="emits('update:prev')"
    >
        {{ props.textPrev }}
    </v-btn>
    <v-btn
        v-if="props.showNext"
        :disabled="props.disableNext"
        class="mx-4"
        size="x-large"
        color="primary"
        @click="emits('update:next')"
    >
        {{ props.textNext }}
    </v-btn>
</template>

<script setup lang="ts">
interface Props {
  showPrev?: boolean,
  showNext?: boolean,
  disablePrev?: boolean,
  disableNext?: boolean,
  textPrev?: string
  textNext?: string
}
const props = withDefaults(defineProps<Props>(), {
  showPrev: true,
  showNext: true,
  disablePrev: false,
  disableNext: false,
  textPrev: "戻る",
  textNext: "次へ",
})

interface Emits {
  (e: "update:next"): void;
  (e: "update:prev"): void;
}
const emits = defineEmits<Emits>()
</script>