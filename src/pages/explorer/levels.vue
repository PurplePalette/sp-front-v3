<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <ListBox :jump="true" :tab-index="0">
          <!-- 検索フォーム -->
          <v-window-item :value="0">
            <SearchFormLevel />
          </v-window-item>
        </ListBox>
      </v-col>
    </v-row>
    <v-row class="mt-2" justify="center">
      <v-col>
        <v-card>
          検索結果表示欄
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
useTitle("譜面一覧")
</script>