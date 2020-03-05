<template>
  <v-layout column>
    <v-row no-gutters>
      <template title="Characters">
          <v-col
          v-for="(character, index) in characters"
          :key="index"
          class="font-weight-bold">
          <br>
          {{character.name}}
          <br><br>

          <v-row align="center" justify="center">
            <v-img
              :src="character.characterImageUrl"
              contain
              aspect-ratio="1"
              max-width="500"
              max-height="300"/>
          </v-row>
          </v-col>
      </template>
    </v-row>
    <v-flex xs8>
      <br><br>
      <v-btn
        class="red darken-2"
        text
        dark
        @click="post">
        Refresh
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import CharactersService from '@/services/CharactersService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      character: {
        name: 'Mario',
        characterImageUrl: 'https://vignette.wikia.nocookie.net/mario/images/a/a1/NSMBUDX-Mario-1.png/revision/latest/scale-to-width-down/326?cb=20190130012618&path-prefix=fr'
      }
    }
  },
  async mounted () {
    this.characters = (await CharactersService.getAllCharacters()).data
  },
  methods: {
    async post () {
      try {
        const request = (await CharactersService.post(this.character)).data
        this.$router.push({
          name: 'characters'
        })
        console.log(request)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- -->
<style scoped>
</style>
