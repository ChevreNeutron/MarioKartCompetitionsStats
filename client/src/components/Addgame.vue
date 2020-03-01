<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
        <panel title="Game results">
          <v-btn
          class="red darken-2"
          text
          dark>
          <router-link to="Learderboard">
          Add game
          </router-link>
          </v-btn> 
        </panel>
    </v-flex>
  </v-layout>
</template>


<script>

import Panel from'@/components/Panel'
export default {
components: {
    Panel
}
}
</script>
<style scoped>
</style>
