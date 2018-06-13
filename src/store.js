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
        type: 'zone'
      },
      {
        code: 'ra1',
        name: 'Rasberry',
        cutoff: '2018-08-03 08:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 2',
        type: 'zone'
      },
      {
        code: 'ant',
        name: 'Antero',
        cutoff: '2018-08-03 13:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 3',
        type: 'zone'
      },
      {
        code: 'ste1',
        name: 'St. Elmo One',
        cutoff: '2018-08-03 15:30',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 4',
        type: 'zone'
      },
      {
        code: 'cot',
        name: 'Cottonwood',
        cutoff: '2018-08-03 18:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 5',
        type: 'zone'
      },
      {
        code: 'ste2',
        name: 'St. Elmo Two',
        cutoff: '2018-08-03 20:30',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 6',
        type: 'zone'
      },
      {
        code: 'han',
        name: 'Hancock',
        cutoff: '2018-08-04 01:30',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 7',
        type: 'zone'
      },
      {
        code: 'los',
        name: 'Lost Wonder',
        cutoff: '2018-08-04 04:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 8',
        type: 'zone'
      },
      {
        code: 'pur',
        name: 'Purgatory',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 9',
        type: 'zone'
      },
      {
        code: 'mon',
        name: 'Monarch',
        cutoff: '2018-08-04 09:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 10',
        type: 'zone'
      },
      {
        code: 'foo',
        name: 'Fooses',
        cutoff: '2018-08-04 11:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 11',
        type: 'zone'
      },
      {
        code: 'bla',
        name: 'Blanks',
        cutoff: '2018-08-04 14:00',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 12',
        type: 'zone'
      },
      {
        code: 'ra2',
        name: 'Rasberry Two',
        cutoff: '2018-08-04 16:45',
        type: 'aidStation',
        timeLeft: ''
      },
      {
        name: 'Zone 13',
        type: 'zone'
      },
      {
        code: 'fin',
        name: 'Finish',
        cutoff: '2018-08-04 18:00',
        type: 'aidStation',
        timeLeft: ''
      }
    ]
  },
  mutations: {
    listRunners (state, payload) {
      state.runners = payload
    },
    timeLeft (state) {
      return state.locations.map(location => {
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
    }
  },
  actions: {
    listRunners (store) {
      fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(runners => {
          store.commit('listRunners', runners)
        })
    },
    timeLeft (store) {
      setInterval(() => {
        store.commit('timeLeft')
      }, 1000)
    }
  },
  getters: {
    zoneOne: state => {
      return state.runners.filter(
        runner => runner.Started === null && runner.RasberryOneIn === null
      )
    }
  }
})
