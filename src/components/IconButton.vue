<template>
    <v-btn
        width="100%"
        height="100%"
        color="info"
        class="text-none"
        depressed
        :disabled="props.disabled"
        @click="emits('update:click')"
    >
        <v-row class="text-center" justify="center">
            <v-col class="mt-2 mb-n2" cols="10">
                <v-icon size="40">
                    {{ props.icon }}
                </v-icon>
            </v-col>
            <v-col class="text-truncate mb-2 mt-n2" cols="10">
                {{ props.title }}
            </v-col>
        </v-row>
    </v-btn>
</template>

<script setup lang="ts">
import {
  mdiInformation
} from '@mdi/js'

interface Props {
  title?: string,
  icon?: string,
  disabled?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  title: "ボタンタイトル",
  icon: mdiInformation,
  disabled: false
})

interface Emits {
  (e: "update:click"): void;
}
const emits = defineEmits<Emits>()
</script>