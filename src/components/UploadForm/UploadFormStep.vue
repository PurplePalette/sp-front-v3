<template>
<StepBar :steps="steps" :step-id="props.stepId"/>
</template>

<script setup lang="ts">
interface Props {
  stepId?: number,
}
const props = withDefaults(defineProps<Props>(), {
  stepId: 0
})

const steps = [
    '1 投稿種別選択',
    '2 ファイル選択',
    '3 情報入力',
    '4 内容確認',
    '5 投稿完了'
]
</script>