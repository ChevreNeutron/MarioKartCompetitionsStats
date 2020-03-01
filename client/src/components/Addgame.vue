<template>
  <v-layout>
    <v-flex xs8>
      <panel title="Players names">
        <v-text-field
          label="First place :"
          v-model="firstplace"
        ></v-text-field>
        <v-text-field
          label="Second place :"
          v-model="secondplace"
        ></v-text-field>
        <v-text-field
          label="Third place :"
          v-model="thirdplace"
        ></v-text-field>
        <v-text-field
          label="Fourth place :"
          v-model="fourthplace"
        ></v-text-field>  
      </panel>
    </v-flex> 
    
      <v-flex xs8>
        <panel title="Characters played">
        <v-text-field
          label="First place :"
          v-model="firstplace"
        ></v-text-field>
        <v-text-field
          label="Second place :"
          v-model="secondplace"
        ></v-text-field>
        <v-text-field
          label="Third place :"
          v-model="thirdplace"
        ></v-text-field>
        <v-text-field
          label="Fourth place :"
          v-model="fourthplace"
        ></v-text-field>    
        </panel>    
    </v-flex>
    
    <v-btn
          class="red darken-2"
          text
          dark
          @click="create">
          Add game
          </v-btn>
  </v-layout>
</template>


<script>

import Panel from'@/components/Panel'
import GamesService from '@/services/GamesService'
export default {
  components: {
      Panel
  },
  data(){
    return{
      game:{
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
        await GamesService.post(this.game)
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
