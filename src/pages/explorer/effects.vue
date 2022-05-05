<template>
  <v-container>
    <ListBox :jump="true" :tab-index="3">
      <v-window-item :value="3">
        ddd
      </v-window-item>
    </ListBox>
  </v-container>
</template>

<script setup lang="ts">
useTitle("効果音一覧")
</script>