<template>
    <UploadFormTemplate :stepId="0">
      <v-row justify="center">
        <v-col v-for="(item, index) in objs" cols="6">
            <IconButton
              :to="`/upload/${item.to}`"
              :title="$t(item.text)"
              :icon="item.icon"
              :disabled="index != 0"
            />
        </v-col>
      </v-row>
    </UploadFormTemplate>
</template>

<script setup lang="ts">
useTitle("Upload")

const objs = useSonolusObjects()
</script>