<template>
  <v-container>
    <ListBox :jump="true" :tab-index="5">
      <v-window-item :value="5">
        fff
      </v-window-item>
    </ListBox>
  </v-container>
</template>

<script setup lang="ts">
useTitle("エンジン一覧")
</script>