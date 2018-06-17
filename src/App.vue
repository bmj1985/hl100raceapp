<template>
  <v-app class="app">
    <v-content >
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
  },
  created() {
    this.$store.dispatch('listRunners')
  },
}
</script>

<style>
div#app {
  background-color: #a97c54;
}
#content {
  height: 80vh;
  width: 100vw;
}
</style>
