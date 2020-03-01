<template>
<v-layout column>
        <v-row no-gutters>
            <template>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/a/a1/NSMBUDX-Mario-1.png/revision/latest/scale-to-width-down/326?cb=20190130012618&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="600"
                max-height="400"
              ></v-img>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/d/d1/NSMBUDX-Luigi.png/revision/latest/scale-to-width-down/290?cb=20190223013104&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/7/7e/Bowser_-_Mario_Party_10.png/revision/latest/scale-to-width-down/350?cb=20180403191653&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/a/a1/Peach_Mario_Party_10.png/revision/latest/scale-to-width-down/267?cb=20181011194218&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
              </template>
              </v-row>
              <v-row no-gutters>
                <template>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/6/6c/Artwork_Daisy_MP10.png/revision/latest/scale-to-width-down/267?cb=20171021130941&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/2/21/MP10-Yoshi.png/revision/latest/scale-to-width-down/321?cb=20190609104731&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/2/23/MP10Wario.png/revision/latest?cb=20170515174123&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
              <v-img
                src="https://vignette.wikia.nocookie.net/mario/images/4/4c/Waluigi_MP10.png/revision/latest?cb=20190609112644&path-prefix=fr"
                contain
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              ></v-img>
            </template>
        </v-row>
    </v-layout>
</template>

<script>


import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      characters: null
    }
  }
}
</script>

<!-- -->
<style scoped>
</style>
