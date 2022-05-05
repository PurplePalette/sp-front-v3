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
        <v-card class="px-2">
          <v-row justify="center">
            <v-col v-for="i in 10" cols="12" sm="6" md="6" lg="6" xl="4">
              <SearchResultLevel />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
useTitle("譜面一覧")
</script>