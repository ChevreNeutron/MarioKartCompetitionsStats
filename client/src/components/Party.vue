<template>
    <v-layout column>
        <panel title="Characters">
            <div
                v-for="(character, index) in characters"
                :key="index">
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

                <br><br>
                <button 
                    dark
                    class="red"
                    @click="removeItem(index)">
                    Remove
                </button>
            </div>
        </panel>
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
  },
  methods: {
    removeItem: function (index) {
      this.characters.splice(index, 1)
      console.log(index)
    }
  }
}

</script>

<!-- MODIFIER ROUTE -->

<style scoped>
</style>
