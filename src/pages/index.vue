<template>
  <div>
    <v-parallax
      height="300"
      src="/milad-fakurian-F93PQmh4krI-unsplash.jpg"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h4 class="text-h4 text-center font-weight-thin mb-4">
          {{ $t('SweetPotato.Index.Sentence.Title') }}
        </h4>
        <h4 class="subheading text-center">
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="10" md="8" lg="12">
                  {{ $t('SweetPotato.Index.Sentence.SubTitle1') }}
                </v-col>
              </v-row>
            </v-container>
        </h4>
        <h4 class="subheading text-center">
          {{ $t('SweetPotato.Index.Sentence.SubTitle2') }}
        </h4>
      </div>
    </v-parallax>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="8" lg="8">
          <RecentBox />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card>
            <v-card-header>
              <v-card-header-text>
                <v-card-title class="text-h5">{{ $t('SweetPotato.Index.ServerInfo') }}</v-card-title>
              </v-card-header-text>
            </v-card-header>
            <v-list-item height="32px" v-for="(info, index) in infoServer" :key="index">
              <v-list-item-avatar left>
                <v-icon :icon="info.icon" />
              </v-list-item-avatar>
              <v-list-item-subtitle>
                <h4>{{ $t(info.key) }}: {{ info.value }}</h4>
              </v-list-item-subtitle>
            </v-list-item>
            <v-spacer class="mb-2"/>
            <v-list-item height="32px" v-for="(info, index) in infoTabs" :key="index">
              <v-list-item-avatar left>
                <v-icon :icon="info.icon" />
              </v-list-item-avatar>
              <v-list-item-subtitle>
                <h4>{{ $t('SweetPotato.Index.Total') }}{{ $t(info.text) }}: {{ info.count }}</h4>
              </v-list-item-subtitle>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import {
  mdiInformation,
  mdiAccountMultiple,
  mdiVolumeHigh,
  mdiCog,
  mdiPalette,
  mdiMusicNote,
  mdiImage,
  mdiFlash,
} from '@mdi/js'

const infoServer = [
  { icon: mdiInformation, key: 'SweetPotato.Index.SupportVersion', value: "v0.5.13" },
  { icon: mdiAccountMultiple, key: 'SweetPotato.Index.TotalUsers', value: "0" },
]

const infoTabs = [
  // Level
  { text: 'Sonolus.Server.Home.Levels.Header', icon: mdiMusicNote, count: 0 },
  // Skin
  { text: 'Sonolus.Server.Home.Skins.Header', icon: mdiPalette, count: 0 },
  // Background
  { text: 'Sonolus.Server.Home.Backgrounds.Header', icon: mdiImage, count: 0 },
  // Effect
  { text: 'Sonolus.Server.Home.Effects.Header', icon: mdiVolumeHigh, count: 0 },
  // Particle
  { text: 'Sonolus.Server.Home.Particles.Header', icon: mdiFlash, count: 0 },
  // Engine
  { text: 'Sonolus.Server.Home.Engines.Header', icon: mdiCog, count: 0 },
]

let tabIndex = ref<number>(0)

</script>