<template>
  <div id="app">
    <v-app>
      <main>
        <page-header />
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>

import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: 150px;
  margin-left: 150px;
}

.v-btn__content {
  color: white;
}
</style>
