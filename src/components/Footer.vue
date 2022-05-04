<template>
  <footer
    class="text-white background-secondary"
    style="background-color: #7E57C2"
  >
    <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        v-for="(link, i) in links"
        :key="i"
        class="text-center"
        cols="12" sm="12" md="6" lg="3"
      >
        <v-btn
          class="mb-2"
          variant="text"
        >
          <v-icon>{{ link.icon }}</v-icon>
          <a style="text-decoration: none;" class="text-white" :href="link.to">{{ $t(link.text) }}</a>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center" justify="center" align="center">
      <v-col cols="12" sm="12" md="4" lg="6">
        <small>
          <strong>{{ new Date().getFullYear() }} — <strong>{{ config.OWNER_NAME }}</strong></strong>
        </small>
      </v-col>
      <v-col class="my-1" cols="12" sm="12" md="8" lg="6">
        <small class="pt-0">
            <p>{{ $t("SweetPotato.Navigation.Footer.Notice") }}</p>
        </small>
      </v-col>
    </v-row>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
import { mdiInformation, mdiPen, mdiAccount, mdiNote } from '@mdi/js';

const config = useRuntimeConfig()

const links = [
  { text: "SweetPotato.Navigation.Footer.TermsOfUses", icon: mdiNote, to: "https://wiki.purplepalette.net/sweet-potato/terms-of-uses" },
  { text: "SweetPotato.Navigation.Footer.PrivacyPolicy", icon: mdiAccount, to: "https://wiki.purplepalette.net/sweet-potato/privacy" },
  { text: "SweetPotato.Navigation.Footer.Guideline", icon: mdiInformation, to: "https://wiki.purplepalette.net/sweet-potato/guideline" },
  { text: "SweetPotato.Navigation.Footer.Contact", icon: mdiPen, to: "#" },
]
</script>