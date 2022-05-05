<template>
  <v-container>
    <ListBox :jump="true" :tab-index="4">
      <v-window-item :value="4">
        eee
      </v-window-item>
    </ListBox>
  </v-container>
</template>

<script setup lang="ts">
useTitle("パーティクル一覧")
</script>