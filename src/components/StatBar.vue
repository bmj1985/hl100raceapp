<template>
    <v-container fluid class="stat-bar mx-0" grid-list-xs text-xs-center>
    <v-layout row nowrap>
      <v-flex v-for="aidStation in aidStation.slice(arrayBegin, arrayEnd)" grid-list-xs justify-center>
        <v-card height="150px">
          <v-card-text class="ma-1 pa-0 title text-xs-center">{{aidStation.name}}</v-card-text>
          <v-card-text class="pa-1 ma-1 text-xs-center">
              <div class="headline ma-0">{{aidStation.numberOfRunners}}</div>
          </v-card-text>
          <v-card-actions class="ma-0 pa-0">
            <v-btn left class="ma-0 pa-0" flat color="orange">Details</v-btn>
          </v-card-actions>
          <div v-if="aidStation.timeLeft != null">{{ aidStation.timeLeft }}</div>
        </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
name: 'StatBar',
props: ['arrayBegin', 'arrayEnd'],
data () {
return {
aidStation: [{ name: 'Zone 1',
    numberOfRunners: this.$store.getters.zoneOne.length,
},
{ name: 'Rasberry 1',
    numberOfRunners: 34,
     timeLeft: this.timeLeft('2018-08-03 08:00')
},
{ name: 'Zone 2',
    numberOfRunners: 34
},
{ name: 'Antero',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-03 13:00')
},
{ name: 'Zone 3',
    numberOfRunners: 34
},
{ name: 'St Elmo One',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-03 15:30')
},
{ name: 'Zone 4',
    numberOfRunners: 34
},
{
    name: 'Cottonwood',
    numberOfRunners: 4,
    timeLeft: this.timeLeft('2018-08-03 18:00')
},
{ name: 'Zone 5',
    numberOfRunners: 3
},
{ name: 'St Elmo 2',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-03 20:30')
},
{ name: 'Zone 6',
    numberOfRunners: 34
},
{ name: 'Hancock',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 01:30')
},
{ name: 'Zone 7',
    numberOfRunners: 34
},
{ name: 'Lost Wonder',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 04:00')
},
{ name: 'Zone 8',
    numberOfRunners: 34
},
{ name: 'Purgatory',
    numberOfRunners: 34
},
{ name: 'Zone 9',
    numberOfRunners: 34
},
{ name: 'Monarch',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 09:00')
},
{ name: 'Zone 10',
    numberOfRunners: 34,
},
{ name: 'Fooses',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 11:00')
},
{ name: 'Zone 11',
    numberOfRunners: 34
},
{ name: 'Blanks',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 14:00')
},
{ name: 'Zone 12',
    numberOfRunners: 34
},
{ name: 'Rasberry 2',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 16:45')
},
{ name: 'Zone 13',
    numberOfRunners: 34
},
{ name: 'Finish',
    numberOfRunners: 34,
    timeLeft: this.timeLeft('2018-08-04 18:00')
}]
}
},
created () {
    this.$store.dispatch('getAidStationCutoffs')
},
computed: {
    aidStationCuttoffs () {
    return this.$store.state.aidStationCuttoffs
    },
...mapGetters(['zoneOne'])    
},
methods: {
    timeLeft (time) {
        const now = moment()
        const end = moment(time)
        const duration = moment.duration(end.diff(now))
        let hours = duration.asHours() - (duration.asHours() % 1)
        let minutes = duration.asMinutes() % 60
        return `${hours}:${Math.round(minutes).toString().padStart(2,'0')}`
    }
}
}
</script>
<style scoped>
.statCard {
    min-height: 120px;
}
</style>