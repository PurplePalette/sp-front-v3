<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      :color="isHovering ? 'primary' : 'white'"
      :elevation="isHovering ? 15 : 5"
      :class="{ 'on-hover': isHovering }"
      v-bind="props"
    >
      <div class="d-flex justify-between">
        <v-img
          contain
          height="100px"
          src="http://placehold.jp/150x150.png"
          style="flex-basis: 100px"
          class="flex-grow-0"
        />
        <v-card-title class="flex-grow-1 flex-column align-start">
          <div class="text-subtitle-1 font-weight-bold">No title</div>
          <div class="text-subtitle-2 font-weight-thin">By Omado</div>
          <div class="mt-1 text-caption font-weight-thin">Author: Omado</div>
        </v-card-title>
        <v-card-title class="hidden-sm-and-down flex-grow-1 flex-column align-end">
          <div class="text-subtitle-2 font-weight-bold">J-POP</div>
          <v-spacer />
          <div class="d-flex justify-between">
            <v-btn
              v-for="(icon, index) in icons"
              :key="index"
              variant="text"
              v-if="isHovering"
              :icon="icon"
            ></v-btn>
          </div>
        </v-card-title>
      </div>
      <v-divider></v-divider>
    </v-card>
  </v-hover>
</template>

<script lang="ts" setup>
import { mdiChevronUp, mdiHeart, mdiHeartOutline, mdiBookmark, mdiBookmarkOutline } from '@mdi/js';

const transparent = 'rgba(255, 255, 255, 0)'

const icons = [
  mdiHeartOutline,
  mdiBookmarkOutline
]

const props = defineProps({
  rating: Number
})
</script>