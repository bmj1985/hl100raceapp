<template>
    <v-container fluid class="stat-bar mx-0" grid-list-xs text-xs-center>
    <v-layout row nowrap>
      <v-flex v-for="aidStation in aidStation.slice(arrayBegin, arrayEnd)" grid-list-xs>
        <v-card>
          <v-card-text class="ma-1 pa-0 title text-xs-center">{{aidStation.name}}</v-card-text>
          <v-card-text class="pa-1 ma-1 text-xs-center">
              <div class="headline mb-2">{{aidStation.numberOfRunners}}</div>
              <div>{{ aidStation.timeLeft }}</div>
          </v-card-text>
          <v-card-actions class="ma-1 pa-0">
            <v-btn left class="ma-0 pa-0" flat color="orange">Details</v-btn>
          </v-card-actions>
        </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
name: 'StatBar',
props: ['arrayBegin', 'arrayEnd'],
data () {
return {
aidStation: [{ name: 'Zone 1',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Rasberry 1',
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
{
    name: 'Cottonwood',
    numberOfRunners: 4,
    timeLeft: '02:04:45'
},
{ name: 'Zone 5',
    numberOfRunners: 3,
    timeLeft: '00:00:00'
},
{ name: 'St Elmo 2',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 6',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Hancock',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 7',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Lost Wonder',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 8',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Purgatory',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 9',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Monarch',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 10',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Fooses',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 11',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Blanks',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 12',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Rasberry 2',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Zone 13',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
},
{ name: 'Finish',
    numberOfRunners: 34,
    timeLeft: '00:00:00'
}]
}
}
}
</script>