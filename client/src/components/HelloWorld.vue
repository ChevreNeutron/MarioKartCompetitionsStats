<template>
  <v-layout>
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
  </v-layout>
</template>

<script>
</script>
<style scoped>
</style>
