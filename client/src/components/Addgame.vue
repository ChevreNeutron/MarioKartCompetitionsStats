<template>
  <v-layout>
    <v-flex xs8>
      <form name="test-tracker-form"
        autocomplete="off">
        <v-text-field
          label="First place :"
          v-model="game.firstplace"
        ></v-text-field>
        <v-text-field
          label="Second place :"
          v-model="game.secondplace"
        ></v-text-field>
        <v-text-field
          label="Third place :"
          v-model="game.thirdplace"
        ></v-text-field>
        <v-text-field
          label="Fourth place :"
          v-model="game.fourthplace"
        ></v-text-field>

        <v-text-field
          label="First place :"
          v-model="game.firstchar"
        ></v-text-field>
        <v-text-field
          label="Second place :"
          v-model="game.secondchar"
        ></v-text-field>
        <v-text-field
          label="Third place :"
          v-model="game.thirdchar"
        ></v-text-field>
        <v-text-field
          label="Fourth place :"
          v-model="game.fourthchar"
        ></v-text-field>    
      </form>
     <v-btn
          class="red darken-2"
          text
          dark
          @click="create">
          Add game
          </v-btn>
    </v-flex>
  </v-layout> 
</template>


<script>

import Panel from'@/components/Panel'
import GamesService from '@/services/GamesService'

export default {
  components: {
      Panel
  },
  data() {
    return{
      game: {
        gamenumber: null,
        firstplace: null,
        secondplace: null,
        thirdplace: null,
        fourthplace: null,
        firstchar: null,
        secondchar: null,
        thirdchar: null,
        fourthchar: null
      }
    }
  },
  methods:{
    async create() {
      try{
        const request = await GamesService.post(this.game)
         this.$router.push({
          name: 'games'
        })
        } 
        catch (err){
          console.log(err)
        }
    }
  }
}

</script>
<style scoped>
</style>
