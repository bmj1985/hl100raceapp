<template>
    <v-container fluid class="stat-bar mx-0" grid-list-xs text-xs-center>
        <v-layout row nowrap>
             <v-flex v-for="location in locations.slice(arrayBegin, arrayEnd)" justify-center>
                <v-card height="150px">
                <v-card-text class="ma-1 pa-0 title text-xs-center">{{location.name}}</v-card-text>
                <v-card-text v-if="location.cutoff != null" class="pa-1 ma-1 text-xs-center">
              {{location.timeLeft}}
          </v-card-text>
          <!-- <div v-if="location.timeLeft != null">{{ timeLeft(location.cutoff) }}</div> -->
        </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import moment from 'moment'
export default {
  name: 'StatBar',
  props: ['arrayBegin', 'arrayEnd'],
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
  }
}
</script>
<style scoped>
.statCard {
  min-height: 120px;
}
</style>