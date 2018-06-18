<template>
  <v-container fluid class="stat-bar mx-0" grid-list-xs text-xs-center>
    <v-layout row nowrap>
      <v-flex v-for="location in locations.slice(arrayBegin, arrayEnd)" justify-center>
        <v-card height="150px">
          <v-card-text class="ma-1 pa-0 title text-xs-center">
            {{location.name}}
          </v-card-text>
          <v-card-text class="ma-1 pa-0 headline text-xs-center">
            {{numOfRunnersInLocation(location)}}
          </v-card-text>
          <v-card-text v-if="location.cutoff != null" class="pa-1 ma-1 text-xs-center">
            {{location.timeLeft}}
          </v-card-text>
        </v-card>
      </v-flex>
    å</v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'StatBar',
  props: ['arrayBegin', 'arrayEnd'],
  created() {
    this.$store.dispatch('timeLeft')
  },
  methods: {
    numOfRunnersInLocation(location) {
      return this.$store.getters.numOfRunnersInLocation(location.code)
    },
  },
  computed: {
    ...mapState(['locations']),
  },
}
</script>
<style scoped>
.statCard {
  min-height: 120px;
}
</style>