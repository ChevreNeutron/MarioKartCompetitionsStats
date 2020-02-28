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
    </v-flex>
  </v-layout>
</template>

<script>
</script>
<style scoped>
</style>
