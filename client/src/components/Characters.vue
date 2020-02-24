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
      characters: null
    }
  },
  async mounted () {
    this.characters = (await CharactersService.getAllCharacters()).data
  }
}
</script>

<!-- -->
<style scoped>
</style>
