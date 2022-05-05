<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="10" lg="10">
          <p class="text-h2 text-center">ファイル投稿フォーム</p>
        </v-col>
        <v-col cols="12" sm="12" md="10" lg="10">
          <ListBox>
            <v-window-item :value="0">
              譜面フォーム
            </v-window-item>
            <v-window-item :value="1">
              スキンフォーム
            </v-window-item>
            <v-window-item :value="2">
              背景フォーム
            </v-window-item>
            <v-window-item :value="3">
              Effectフォーム
            </v-window-item>
            <v-window-item :value="4">
              Particleフォーム
            </v-window-item>
            <v-window-item :value="5">
              Engineフォーム
            </v-window-item>
          </ListBox>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
useTitle("Upload")
</script>