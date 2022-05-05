<template>
  <v-card>
    <v-tabs
      v-model="tabIndex"
      background-color="secondary"
      center-active
      fixed-tabs
    >
      <v-tab v-for="(info, index) in infoTabs" :key="index" :value="index">
        <v-icon>{{ info.icon }} </v-icon>
        {{ $t(info.text) }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tabIndex">
        <slot :tabindex="tabIndex"/>
      </v-window>
    </v-card-text>
  </v-card>
</template>


<script setup lang="ts">
import {
  mdiVolumeHigh,
  mdiCog,
  mdiPalette,
  mdiMusicNote,
  mdiImage,
  mdiFlash,
} from '@mdi/js'

const infoTabs = [
  // Level
  { text: 'Sonolus.Server.Home.Levels.Header', icon: mdiMusicNote, to: "/explorer/levels"},
  // Skin
  { text: 'Sonolus.Server.Home.Skins.Header', icon: mdiPalette, to: "/explorer/skins" },
  // Background
  { text: 'Sonolus.Server.Home.Backgrounds.Header', icon: mdiImage, to: "/explorer/backgrounds"},
  // Effect
  { text: 'Sonolus.Server.Home.Effects.Header', icon: mdiVolumeHigh, to: "/explorer/effects" },
  // Particle
  { text: 'Sonolus.Server.Home.Particles.Header', icon: mdiFlash, to: "/explorer/particles" },
  // Engine
  { text: 'Sonolus.Server.Home.Engines.Header', icon: mdiCog, to: "/explorer/engines" },
]

interface Props {
  tabIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  tabIndex: 0,
})
</script>