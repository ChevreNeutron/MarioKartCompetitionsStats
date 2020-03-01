

<template>
  <v-layout>
    <v-row>
    <v-flex xs6 offset-xs3>
        <panel title="Leaderboard">
        </panel>
    </v-flex>
    </v-row>


    <v-row>
    <v-flex xs6 offset-xs3>
        <panel title="Games added" >
          <div v-for="game in games" :key="game.gamenumber">
            {{game.firstplace}}
            {{game.secondplace}}
            {{game.thirdplace}}
            {{game.fourthplace}}
            {{game.firstchar}}
            {{game.secondchar}}
            {{game.thirdchar}}
            {{game.fourthchar}}
          </div>
        </panel>
    </v-flex>
    </v-row>




    <v-row>
    <v-flex title="Characters" xs6 offset-xs3>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          class="red darken-2"
          text
          dark>
          <router-link to="Addgame">
          Add game
          </router-link>
          </v-btn> 
          <v-row align="center" justify="center">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/fr/9/92/Mario_Kart_8_Deluxe_Logo.png"
          contain
          aspect-ratio="1"
          max-width="500"
          max-height="300"
        ></v-img>
      </v-row> 
    </v-flex>
    </v-row>
  </v-layout>
</template>

<script>
import GamesService from '@/services/GamesService'
import Panel from'@/components/Panel'
export default {
  components: {
    Panel
  },
  data(){
    return{
      games:null
    }
  },
  async mounted(){
    this.games = await GamesService.index()
  }
}
</script>
<style scoped>
</style>
