<template>
    <v-app-bar
      class="red darken-2"
      fixed>
        <v-toolbar-title class="mr-4">
          <v-btn
          class="red darken-2"
          text
          dark>
          <router-link to="root">
          Accueil
          </router-link>
          </v-btn>  

          <v-btn
          class="red darken-2"
          text
          dark>
          <router-link to="characters">
          Characters
          </router-link>
          </v-btn>      

          <v-btn
          class="red darken-2"
          text
          dark>
          <router-link to="party">
          Party
          </router-link>
          </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="red darken-2"
          text
          dark>
          <router-link to="login">
          Login
          </router-link>
          </v-btn>

          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="red darken-2"
          text
          dark>
          <router-link to="register">
            Sign Up
          </router-link>
          </v-btn>

          <v-btn v-if="$store.state.isUserLoggedIn"
          class="red darken-2"
          flat
          dark
          @click="logout">
          Log Out
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- -->
<style scoped>
.v-toolbar__title {
  color: white;
}

.home {
  cursor: pointer;
  text-decoration: none;
}

.home:hover {
  color: black;
}
</style>
