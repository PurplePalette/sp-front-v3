<template>
  <v-container>
    <ListBox :jump="true" :tab-index="1">
      <v-window-item :value="1">
        bbb
      </v-window-item>
    </ListBox>
  </v-container>
</template>

<script setup lang="ts">
useTitle("スキン一覧")
</script>