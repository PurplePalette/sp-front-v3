<template>
  <v-container fluid>
    <v-row class="hidden-lg-and-up" justify="center">
      <v-col class="mx-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title color="secondary">絞り込み検索</v-expansion-panel-title>
            <v-expansion-panel-text>
              <SearchFormLevel class="mt-2" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row class="mx-2" justify="center">
      <v-col class="hidden-md-and-down" cols="12" sm="12" md="12" lg="2">
        <SearchFormLevel2 />
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="10">
        <ListBox :jump="true" :tab-index="0">
          <!-- 検索フォーム -->
          <v-window-item :value="0">
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
          </v-window-item>
        </ListBox>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
useTitle("譜面一覧")
</script>