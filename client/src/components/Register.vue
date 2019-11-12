<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <v-row align="center" justify="center">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/fr/9/92/Mario_Kart_8_Deluxe_Logo.png"
          contain
          aspect-ratio="1"
          max-width="500"
          max-height="300"
        ></v-img>
      </v-row>
      <form
        name="tab-tracker-form"
        autocomplete="off">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
      </form>
      <br>
      <div class="danger-alert" v-html="error"/>
      <br>
      <v-btn
        dark
        class="red"
        @click="register">
        Register
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- -->
<style scoped>
.error {
  color: red;
}

</style>
