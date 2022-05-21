<template>
    <v-row justify="center">
        <v-col class="text-center" cols="12" sm="12" md="10" lg="10">
            <NextAndBackButton
                :text-next="stepId != 4 ? '次へ' : '投稿する'"
                @update:next="next()"
                @update:prev="prev()"
            />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
interface Props {
  stepId?: number,
  disablePrev?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  stepId: 0,
  disablePrev: false
})

const stepId = ref<number>(props.stepId)
const router = useRouter()

interface Emits {
  (e: "update:next"): void;
  (e: "update:prev"): void;
}
const emits = defineEmits<Emits>()

const next = () => {
  stepId.value += 1
  emits("update:next")
}

const prev = () => {
  if (stepId.value == 2) {
    router.push("/upload")
  } else {
    stepId.value -= 1
    emits("update:prev")
  }
}
</script>