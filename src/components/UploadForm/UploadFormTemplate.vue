<template>
    <v-container>
      <v-row justify="center" class="mb-3">
        <v-col cols="12" sm="12" md="10" lg="10">
          <UploadFormTitle />
        </v-col>
        <v-col class="text-center mt-n4" cols="12" sm="12" md="10" lg="10">
          <UploadFormStep :step-id="props.stepId" />
        </v-col>
        <v-col cols="12" sm="12" md="10" lg="10">
            <slot />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
useTitle("Upload")

interface Props {
  stepId: number,
}
const props = withDefaults(defineProps<Props>(), {
  stepId: 0
})
</script>