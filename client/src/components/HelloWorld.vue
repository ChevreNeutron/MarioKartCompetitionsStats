<template>
  <v-layout>
    <v-row>
      <v-flex xs6 offset-xs3>
          <panel title="Leaderboard">
            <v-col class="font-weight-bold"
                      outlined
                      tile
                      v-for="(game, index) in games"
                      :key="index">
                      <br>
              <div v-if="game.firstplace === 'TEST'" >
                TEST REUSSI
              </div>
            </v-col>
          </panel>
      </v-flex>
    </v-row>

    <v-row>
      <template title="games">
        <v-col class="font-weight-bold"
            outlined
            tile
            v-for="(game, index) in games"
            :key="index">
          <br>
          {{game.firstplace}}<br>
          {{game.firstchar}}<br>
          {{game.secondplace}}<br>
          {{game.secondchar}}<br>
          {{game.thirdplace}}<br>
          {{game.thirdchar}}<br>
          {{game.fourthplace}}<br>
          {{game.fourthchar}}<br>
        </v-col>
      </template>
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
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      games: null
    }
  },
  async mounted () {
    this.games = (await GamesService.index()).data
  }
}
</script>
<style scoped>
</style>
