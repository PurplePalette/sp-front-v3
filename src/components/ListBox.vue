<template>
  <div>
    <!-- PC用 切り替えタブ -->
    <v-tabs
      class="hidden-md-and-down"
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
    <!-- スマホ用 切り替えタブ -->
    <v-card
      class="d-flex d-lg-none d-xl-none justify-center"
      flat
      tile
    >
      <v-btn-group
        color="secondary"
        rounded
        dense
      >
        <v-btn @click="goPrev()" :disabled="!isPrevActive(tabIndex)" icon>
          <v-icon>
            {{ mdiChevronLeft }}
          </v-icon>
        </v-btn>
        <v-btn text
        >
          <v-icon>{{ infoTabs[tabIndex].icon }} </v-icon>
          {{ $t(infoTabs[tabIndex].text) }}
        </v-btn>
        <v-btn @click="goNext()" :disabled="!isNextActive(tabIndex)" icon>
          <v-icon>
            {{ mdiChevronRight }}
          </v-icon>
        </v-btn>
      </v-btn-group>
    </v-card>
    <!-- 内容本体(共通) -->
    <v-card-text>
      <v-window v-model="tabIndex">
        <!-- 検索フォーム -->
        <v-window-item :value="formId">
          <!-- たためる絞り込みフォーム -->
          <v-row class="hidden-lg-and-up" justify="center">
            <v-col>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title color="secondary">絞り込み検索</v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <slot name="filter-form" />
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <!-- メインデータ置き場 -->
          <v-row class="mt-2" justify="center">
            <v-col>
              <v-card class="px-2">
                <v-row justify="center">
                  <slot name="elements" />
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<style>
.disable-events {
  pointer-events: none
}
</style>

<script setup lang="ts">
import {
  mdiVolumeHigh,
  mdiCog,
  mdiPalette,
  mdiMusicNote,
  mdiImage,
  mdiFlash,
  mdiChevronRight,
  mdiChevronLeft,
} from '@mdi/js'

// props
interface Props {
  tabIndex?: number,
  jump?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  tabIndex: 0,
  jump: false
})

const formId = props.tabIndex

// data
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
const tabIndex = ref<number>(0)
const router = useRouter()

// computed
const isPrevActive = (tabIndex: number) => {
  return tabIndex-1 >= 0
}

const isNextActive = (tabIndex: number) => {
  return tabIndex+1 <= infoTabs.length - 1
}

const goNext = () => {
  router.push(infoTabs[tabIndex.value + 1].to)
}

const goPrev = () => {
  router.push(infoTabs[tabIndex.value - 1].to)
}

// watch
if (props.jump) {
  watch(tabIndex, (value) => {
    router.push(infoTabs[value].to)
  })
}
</script>