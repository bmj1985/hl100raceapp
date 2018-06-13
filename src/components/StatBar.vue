<template>
<<<<<<< HEAD
    <v-container fluid class="stat-bar mx-0" grid-list-xs text-xs-center>
        <v-layout row nowrap>
             <v-flex v-for="location in locations.slice(arrayBegin, arrayEnd)" justify-center>
                <v-card height="150px">
                <v-card-text class="ma-1 pa-0 title text-xs-center">{{location.name}}</v-card-text>
                <v-card-text v-if="location.cutoff != null" class="pa-1 ma-1 text-xs-center">
              {{location.timeLeft}}
          </v-card-text>
          <!-- <div v-if="location.timeLeft != null">{{ timeLeft(location.cutoff) }}</div> -->
=======
  <v-container fluid class="stat-bar mx-0" grid-list-xs text-xs-center>
    <v-layout row nowrap>
      <v-flex v-for="location in locations.slice(arrayBegin, arrayEnd)" justify-center>
        <v-card height="150px">
          <v-card-text class="ma-1 pa-0 title text-xs-center">
            {{location.name}}
          </v-card-text>
          <v-card-text class="ma-1 pa-0 headline text-xs-center">
            {{location.numberOfRunners}}
          </v-card-text>
          <v-card-text v-if="location.cutoff != null" class="pa-1 ma-1 text-xs-center">
            {{location.timeLeft}}
          </v-card-text>
>>>>>>> c6ec08d10068ee23b106e3af790d53857b05ec65
        </v-card>
      </v-flex>
    å</v-layout>
  </v-container>
</template>
<script>
<<<<<<< HEAD
import { mapGetters, mapState, mapMutations } from 'vuex'
=======
import { mapGetters, mapState } from 'vuex'
>>>>>>> c6ec08d10068ee23b106e3af790d53857b05ec65
import moment from 'moment'
export default {
  name: 'StatBar',
  props: ['arrayBegin', 'arrayEnd'],
<<<<<<< HEAD
  created() {
    this.$store.dispatch('timeLeft')
  },
  computed: {
    ...mapGetters(['zoneOne']),
    ...mapState(['locations']),
    ...mapMutations(['timeLeft'])
  },
  methods: {
    timeLeft(time) {
      const now = moment()
      const end = moment(time)
      const duration = moment.duration(end.diff(now))
      let hours = duration.asHours() - duration.asHours() % 1
      let minutes = duration.asMinutes() % 60
      return `${hours}:${Math.round(minutes)
        .toString()
        .padStart(2, '0')}`
    }
=======
  created () {
    this.$store.dispatch('timeLeft'), this.$store.dispatch('numberOfRunners')
  },
  computed: {
    ...mapState(['locations'])
>>>>>>> c6ec08d10068ee23b106e3af790d53857b05ec65
  }
}
</script>
<style scoped>
.statCard {
  min-height: 120px;
}
</style>