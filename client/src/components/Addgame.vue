<template>
  <v-layout>
    
    <v-flex xs8>
      <form name="tab-tracker-form"
        autocomplete="off">    
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
      
    
        <v-text-field
          label="First place :"
          v-model="firstchar"
        ></v-text-field>
        <v-text-field
          label="Second place :"
          v-model="secondchar"
        ></v-text-field>
        <v-text-field
          label="Third place :"
          v-model="thirdchar"
        ></v-text-field>
        <v-text-field
          label="Fourth place :"
          v-model="fourthchar"
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
  data(){
    return{
      game:''
    }
  },
  methods:{
    async create() {
      try{
        const request=await GamesService.post(this.game).data
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
