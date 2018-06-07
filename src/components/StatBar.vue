<template>
    <v-container>
    <v-layout wrap align-center align-content-center justify-center>
      <v-flex v-for="aidStation in aidStation" grid-list-xs>
        <v-card>
          <v-card-text class="ma-1 pa-0 title text-xs-center">{{aidStation.name}}</v-card-text>
          <v-card-text class="pa-1 ma-1 text-xs-center">
              <div class="headline mb-2">{{aidStation.numberOfRunners}}</div>
              <div>{{ aidStation.timeLeft }}</div>
          </v-card-text>
          <v-card-actions class="ma-1 pa-0">
            <v-btn class="ma-0 pa-0" flat color="orange">View</v-btn>
          </v-card-actions>
        </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
name: 'StatBar',
data () {
return {
aidStation: [{ name: 'Zone 1',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Rasberry One',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 2',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Antero',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 3',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'St Elmo One',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 4',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'St Elmo 2',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 5',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Hancock',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 6',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Lost Wonder',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
}]
}
}
}
</script>