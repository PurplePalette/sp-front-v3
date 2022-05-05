<template>
  <v-container>
    <ListBox :jump="true" :tab-index="2">
      <v-window-item :value="2">
        ccc
      </v-window-item>
    </ListBox>
  </v-container>
</template>

<script setup lang="ts">
useTitle("背景一覧")
</script>