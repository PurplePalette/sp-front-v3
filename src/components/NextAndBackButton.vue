<template>
    <v-btn
        v-if="showPrev"
        :disabled="disablePrev"
        class="mx-4"
        size="x-large"
        color="secondary"
        variant="outlined"
        @click="emits('update:Prev')"
    >
        {{ props.textPrev }}
    </v-btn>
    <v-btn
        v-if="showNext"
        :disabled="disableNext"
        class="mx-4"
        size="x-large"
        color="primary"
        @click="emits('update:Next')"
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
  (e: "update:Next"): void;
  (e: "update:Prev"): void;
}
const emits = defineEmits<Emits>()
</script>