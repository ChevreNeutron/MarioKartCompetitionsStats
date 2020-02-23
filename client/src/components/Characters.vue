<template>
    <v-layout column>
        <v-flex>
            <panel title="Characters">
                <div v-for="character in characters"
                :key="character.id">
                    {{character.name}}
                    {{character.characterImageUrl}}
                </div>
            </panel>
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
