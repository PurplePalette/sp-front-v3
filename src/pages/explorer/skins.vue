<template>
  <v-container fluid>
    <v-row justify="center">
      <!-- PC用左メニュー -->
      <v-col class="hidden-md-and-down" cols="12" sm="12" md="12" lg="2">
        <SearchFormLevelLaptop />
      </v-col>
      <!-- PC用右メニュー -->
      <v-col cols="12" sm="12" md="12" lg="10">
        <!-- タブ / タブの中身 -->
        <ListBox :jump="true" :tab-index="1">
          <template v-slot:filter-form>
            <SearchFormLevelSmart class="mt-2" />
          </template>
          <template v-slot:elements>
            <v-col v-for="i in 10" cols="12" sm="6" md="6" lg="6" xl="4">
              <SearchResultLevel title="スキン"/>
            </v-col>
          </template>
        </ListBox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
useTitle("スキン一覧")
</script>