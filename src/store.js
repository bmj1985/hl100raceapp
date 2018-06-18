import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const BASE_URL = 'https://hl100-runnertracking.herokuapp.com/api/beta/runners'

export default new Vuex.Store({
  state: {
    runners: [],
    locations: [
      {
        name: 'Zone 1',
        code: 'z1',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ra1',
        name: 'Rasberry',
        cutoff: '2018-08-03 08:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 2',
        code: 'z2',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ant',
        name: 'Antero',
        cutoff: '2018-08-03 13:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 3',
        code: 'z3',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ste1',
        name: 'St. Elmo One',
        cutoff: '2018-08-03 15:30',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 4',
        code: 'z4',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'cot',
        name: 'Cottonwood',
        cutoff: '2018-08-03 18:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 5',
        code: 'z5',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ste2',
        name: 'St. Elmo Two',
        cutoff: '2018-08-03 20:30',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 6',
        code: 'z6',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'han',
        name: 'Hancock',
        cutoff: '2018-08-04 01:30',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 7',
        code: 'z7',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'los',
        name: 'Lost Wonder',
        cutoff: '2018-08-04 04:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 8',
        code: 'z8',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'pur',
        name: 'Purgatory',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 9',
        code: 'z9',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'mon',
        name: 'Monarch',
        cutoff: '2018-08-04 09:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 10',
        code: 'z10',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'foo',
        name: 'Fooses',
        cutoff: '2018-08-04 11:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 11',
        code: 'z11',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'bla',
        name: 'Blanks',
        cutoff: '2018-08-04 14:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 12',
        code: 'z12',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ra2',
        name: 'Rasberry Two',
        cutoff: '2018-08-04 16:45',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 13',
        code: 'z13',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'fin',
        name: 'Finish',
        cutoff: '2018-08-04 18:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
    ],
  },
  mutations: {
    listRunners(state, payload) {
      state.runners = payload
    },
    timeLeft(state) {
      return state.locations.forEach(location => {
        const now = moment()
        const end = moment(location.cutoff)
        const duration = moment.duration(end.diff(now))
        let hours = duration.asHours() - (duration.asHours() % 1)
        let minutes = duration.asMinutes() % 60
        let seconds = duration.asSeconds() % 60
        location.timeLeft = `${hours}:${Math.round(minutes)
          .toString()
          .padStart(2, '0')}:${Math.round(seconds)
          .toString()
          .padStart(2, '0')}`
      })
    },
  },
  actions: {
    listRunners(store) {
      fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(runners => {
          store.commit('listRunners', runners)
        })
      setInterval(() => {
        fetch(`${BASE_URL}`)
          .then(response => response.json())
          .then(runners => {
            store.commit('listRunners', runners)
          })
      }, 20000)
    },
    timeLeft(store) {
      setInterval(() => {
        store.commit('timeLeft')
      }, 1000)
    },
  },
  getters: {
    aidStations(state) {
      return state.locations.filter(location => location.type === 'aidStation')
    },
    aidStationByCode: state => code => {
      return state.locations
        .filter(location => location.type === 'aidStation')
        .find(aidStation => aidStation.code === code)
    },
    runnerByBibNum: state => bibNum => {
      if (!state.runners) return null
      return state.runners.find(runner => runner.bibNumber === bibNum)
    },
    numOfRunnersInLocation: state => locationCode => {
      let num = 0
      const location = state.locations.find(l => l.code === locationCode)

      const index = state.locations.indexOf(location)

      state.runners.forEach(runner => {
        if (location.type === 'aidStation') {
          const aidStationName = location.name
            .replace(/ /g, '')
            .replace(/\./g, '')

          if (
            runner[`${aidStationName}In`] != null &&
            runner[`${aidStationName}Out` === null]
          ) {
            num++
          }
        } else {
          let zoneStart =
            index === 0 ? 'Started' : `${state.locations[index - 1].name}Out`
          let zoneEnd =
            index === state.locations.length - 1
              ? 'Finish'
              : `${state.locations[index + 1].name}In`
          zoneStart = zoneStart.replace(/ /g, '').replace(/\./g, '')
          zoneEnd = zoneEnd.replace(/ /g, '').replace(/\./g, '')

          if (runner[zoneStart] != null && runner[zoneEnd] === null) {
            num++
          }
        }
      })
      return num
    },
  },
})
